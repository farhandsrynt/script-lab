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

alter table public.student_work enable row level security;

drop policy if exists "public can read student work" on public.student_work;
drop policy if exists "public can insert student work" on public.student_work;
drop policy if exists "public can update student work" on public.student_work;
drop policy if exists "public can delete student work" on public.student_work;

create policy "public can read student work" on public.student_work for select to anon using (true);
create policy "public can insert student work" on public.student_work for insert to anon with check (true);
create policy "public can update student work" on public.student_work for update to anon using (true) with check (true);
create policy "public can delete student work" on public.student_work for delete to anon using (true);
