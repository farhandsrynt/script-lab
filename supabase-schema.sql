create table if not exists public.student_work (
  account_key text primary key,
  student_name text not null,
  absence_number integer not null,
  answers jsonb not null default '{}'::jsonb,
  completed jsonb not null default '{}'::jsonb,
  current_stage integer not null default 0,
  challenge jsonb,
  updated_at timestamptz not null default now()
);

alter table public.student_work
  add column if not exists ai_review_version integer not null default 0;

alter table public.student_work
  alter column absence_number drop not null,
  add column if not exists account_type text not null default 'student',
  add column if not exists group_members jsonb not null default '[]'::jsonb,
  add column if not exists practice jsonb not null default '{}'::jsonb;

update public.student_work
set account_type = 'student'
where account_type is null;

alter table public.student_work enable row level security;

drop policy if exists "public can read student work" on public.student_work;
drop policy if exists "public can insert student work" on public.student_work;
drop policy if exists "public can update student work" on public.student_work;
drop policy if exists "public can delete student work" on public.student_work;

create policy "public can read student work" on public.student_work for select to anon using (true);
create policy "public can insert student work" on public.student_work for insert to anon with check (true);
create policy "public can update student work" on public.student_work for update to anon using (true) with check (true);
create policy "public can delete student work" on public.student_work for delete to anon using (true);

create extension if not exists pgcrypto with schema extensions;

create table if not exists public.script_lab_group_accounts (
  account_key text primary key,
  group_name text not null,
  access_code_hash text not null,
  group_members jsonb not null default '[]'::jsonb,
  failed_attempts integer not null default 0,
  locked_until timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.script_lab_group_accounts
  add column if not exists failed_attempts integer not null default 0,
  add column if not exists locked_until timestamptz;

alter table public.script_lab_group_accounts enable row level security;
revoke all on public.script_lab_group_accounts from anon, authenticated;

create or replace function public.access_script_lab_group(
  p_account_key text,
  p_group_name text,
  p_access_code text,
  p_members jsonb
)
returns jsonb
language plpgsql
security definer
set search_path = pg_catalog, extensions
as $$
declare
  v_group public.script_lab_group_accounts%rowtype;
begin
  if p_account_key !~ '^kelompok-[a-z0-9][a-z0-9-]{1,49}$'
     or length(trim(p_group_name)) < 3
     or length(trim(p_group_name)) > 80
     or length(p_access_code) < 4
     or length(p_access_code) > 128
     or case
       when p_members is null then false
       when jsonb_typeof(p_members) <> 'array' then true
       when jsonb_array_length(p_members) < 2 or jsonb_array_length(p_members) > 12 then true
       else exists (
         select 1
         from jsonb_array_elements(p_members) as member(value)
         where jsonb_typeof(member.value) <> 'string'
            or length(trim(member.value #>> '{}')) = 0
            or length(trim(member.value #>> '{}')) > 100
       )
     end then
    raise exception 'Invalid group account details';
  end if;

  select * into v_group
  from public.script_lab_group_accounts
  where account_key = p_account_key
  for update;

  if not found and p_members is null then
    return jsonb_build_object('authenticated', false, 'reason', 'members_required');
  end if;

  insert into public.script_lab_group_accounts
    (account_key, group_name, access_code_hash, group_members)
  values
    (p_account_key, trim(p_group_name), crypt(p_access_code, gen_salt('bf')), coalesce(p_members, '[]'::jsonb))
  on conflict (account_key) do nothing;

  select * into v_group
  from public.script_lab_group_accounts
  where account_key = p_account_key
  for update;

  if not found then
    raise exception 'Group account could not be loaded';
  end if;

  if v_group.locked_until is not null and v_group.locked_until > now() then
    return jsonb_build_object('authenticated', false);
  end if;

  if crypt(p_access_code, v_group.access_code_hash) <> v_group.access_code_hash then
    update public.script_lab_group_accounts
    set failed_attempts = failed_attempts + 1,
        locked_until = case when failed_attempts + 1 >= 10 then now() + interval '15 minutes' else null end
    where account_key = p_account_key;
    return jsonb_build_object('authenticated', false);
  end if;

  update public.script_lab_group_accounts
  set group_name = trim(p_group_name),
      group_members = coalesce(p_members, group_members),
      failed_attempts = 0,
      locked_until = null,
      updated_at = now()
  where account_key = p_account_key
  returning * into v_group;

  return jsonb_build_object(
    'authenticated', true,
    'account_key', v_group.account_key,
    'group_name', v_group.group_name,
    'members', v_group.group_members
  );
end;
$$;

revoke all on function public.access_script_lab_group(text, text, text, jsonb) from public, authenticated;
grant execute on function public.access_script_lab_group(text, text, text, jsonb) to anon;

create table if not exists public.script_lab_ai_review_limits (
  ip_hash text primary key check (length(ip_hash) = 64),
  window_started_at timestamptz not null,
  request_count integer not null default 0
);

alter table public.script_lab_ai_review_limits enable row level security;
revoke all on public.script_lab_ai_review_limits from anon, authenticated;

create or replace function public.consume_script_lab_ai_review(p_ip_hash text)
returns boolean
language plpgsql
security definer
set search_path = pg_catalog, public
as $$
declare
  v_request_count integer;
begin
  if p_ip_hash !~ '^[0-9a-f]{64}$' then
    raise exception 'Invalid IP hash';
  end if;

  insert into public.script_lab_ai_review_limits as limits (ip_hash, window_started_at, request_count)
  values (p_ip_hash, now(), 1)
  on conflict (ip_hash) do update
    set window_started_at = case
      when limits.window_started_at <= now() - interval '1 minute' then now()
      else limits.window_started_at
    end,
    request_count = case
      when limits.window_started_at <= now() - interval '1 minute' then 1
      else limits.request_count + 1
    end
  returning request_count into v_request_count;

  delete from public.script_lab_ai_review_limits
  where window_started_at < now() - interval '1 day';

  return v_request_count <= 240;
end;
$$;

revoke all on function public.consume_script_lab_ai_review(text) from public, anon, authenticated;
grant execute on function public.consume_script_lab_ai_review(text) to service_role;
