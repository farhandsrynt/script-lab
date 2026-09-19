const stages = [
 {id:"ide", title:"Ide Cerita", desc:"Temukan gagasan inti sebelum masuk ke struktur cerita.", questions:[
  ["ide","Apa ide cerita yang ingin kamu angkat?","Tuliskan kejadian, gagasan, atau persoalan yang menarik bagimu.","textarea"],
  ["inspirasi","Apa yang membuat kamu tertarik pada ide tersebut?","Bisa berasal dari pengalaman, berita, lingkungan, atau imajinasi.","textarea"]
 ]},
 {id:"premis", title:"Premis", desc:"Padatkan cerita menjadi tokoh, tujuan, dan konflik.", questions:[
  ["tokoh","Siapa tokoh utama?","Sebutkan nama/peran dan karakter singkat.","text"],
  ["tujuan","Apa yang ingin dicapai tokoh?","Tujuan harus konkret dan dapat diperjuangkan.","textarea"],
  ["konflik","Apa yang menghalangi tokoh?","Jelaskan hambatan utama.","textarea"]
 ]},
 {id:"logline", title:"Logline", desc:"Buat satu kalimat yang membuat orang ingin mengetahui ceritanya.", questions:[
  ["logline","Tulis logline ceritamu","Gunakan pola: Tokoh + tujuan + konflik + taruhan/risiko.","textarea"]
 ]},
 {id:"sinopsis", title:"Sinopsis", desc:"Kembangkan logline menjadi gambaran cerita yang utuh.", questions:[
  ["sinopsis","Sinopsis 1–3 paragraf","Ceritakan awal, perkembangan konflik, dan arah penyelesaian.","textarea"]
 ]},
 {id:"karakter", title:"Karakter", desc:"Bangun tokoh yang memiliki tujuan, kebutuhan, dan perubahan.", questions:[
  ["karakter","Tokoh utama dan karakterisasinya","Jelaskan usia/peran, sifat, kelebihan, kelemahan, dan kebiasaan.","textarea"],
  ["perubahan","Perubahan apa yang dialami tokoh?","Bandingkan kondisi tokoh di awal dan akhir cerita.","textarea"]
 ]},
 {id:"alur", title:"Alur", desc:"Susun peristiwa agar konflik berkembang secara logis.", questions:[
  ["awal","Awal cerita","Bagaimana penonton mengenal tokoh dan situasinya?","textarea"],
  ["tengah","Perkembangan konflik","Apa titik masalah terbesar yang membuat cerita bergerak?","textarea"],
  ["akhir","Penyelesaian","Apa konsekuensi dari pilihan tokoh?","textarea"]
 ]},
 {id:"scene", title:"Scene", desc:"Ubah cerita menjadi adegan yang dapat divisualisasikan.", questions:[
  ["scene","Tuliskan 3–5 scene utama","Format sederhana: lokasi + waktu + aksi utama.","textarea"],
  ["visual","Apa yang penonton lihat?","Hindari menjelaskan perasaan hanya dengan kata abstrak; pikirkan visualnya.","textarea"]
 ]},
 {id:"dialog", title:"Dialog", desc:"Tulis dialog yang terdengar alami dan memiliki fungsi.", questions:[
  ["dialog","Tulis contoh dialog","Minimal 8 baris. Berikan tujuan atau konflik pada percakapan.","textarea"],
  ["subtext","Apa yang sebenarnya ingin dikatakan tokoh?","Jelaskan subteks di balik dialog tersebut.","textarea"]
 ]},
 {id:"screenplay", title:"Screenplay", desc:"Susun hasil pengembangan menjadi format naskah film.", questions:[
  ["screenplay","Draft naskah film","Gunakan INT./EXT., lokasi, waktu, action, nama tokoh, dan dialog.","textarea"],
  ["produksi","Catatan produksi","Tuliskan kebutuhan lokasi, properti, pemain, dan hal yang perlu diperhatikan.","textarea"]
 ]}
];

const formats = [
 ["01","Naskah Berita","Fakta, lead, tubuh berita, penutup."],
 ["02","Talk Show","Host, narasumber, pertanyaan, cue."],
 ["03","Dokumenter","Fakta, riset, narasi, visual."],
 ["04","Variety Show","Segmen, host, gimmick, cue."],
 ["05","Drama","Tokoh, konflik, adegan, dialog."],
 ["06","Naskah Media Sosial","Hook, visual, narasi, CTA."],
 ["07","Naskah Film","Ide → premis → logline → screenplay."]
];

const formatExamples = {
  "Naskah Berita": `LEAD:
Pemerintah Kota membuka program pelatihan digital di SMK untuk membantu siswa meningkatkan kemampuan teknologi informasi dan kesiapan kerja.

VISUAL:
Cuplikan siswa mengikuti kegiatan praktik komputer, narasumber menjelaskan manfaat program, serta tampilan data jumlah peserta yang mendaftar.

NASKAH:
"Kota membuka kesempatan baru bagi siswa melalui pelatihan digital. Program ini diharapkan dapat meningkatkan keterampilan teknologi, memperluas wawasan kerja, dan mempersiapkan generasi muda menghadapi tantangan industri masa depan."

NARATOR:
Dengan dukungan sekolah dan pemerintah, para siswa mendapatkan akses belajar yang lebih konkret. Mereka tidak hanya diajarkan teori, tetapi juga cara menerapkan teknologi dalam kehidupan sehari-hari dan dunia kerja.`,
  "Talk Show": `HOST:
Selamat datang di program hari ini, kita akan membahas pentingnya literasi digital di kalangan siswa.

HOST:
Di era informasi yang serba cepat, kemampuan memilah fakta dan hoaks menjadi sangat penting.

NARASUMBER:
Benar. Siswa harus mulai membiasakan mengecek sumber, membaca konteks, dan tidak langsung percaya pada informasi yang belum jelas kebenarannya.

HOST:
Bagus. Dan untuk mempraktikkannya, kita akan lihat bagaimana cara sederhana mengecek kebenaran berita di media sosial.

NARASUMBER:
Pertama, cek sumbernya. Kedua, lihat apakah ada bukti atau data yang valid. Ketiga, bandingkan dengan pemberitaan dari media lain.

HOST:
Terima kasih atas penjelasannya. Semoga pembahasan hari ini bisa membantu kita menjadi pengguna media yang lebih kritis.`,
  "Dokumenter": `NARASI:
Di balik setiap ruang kelas, ada perjuangan yang tak terlihat.

VISUAL:
Siswa fokus mendengarkan guru, mencatat materi, lalu berdiskusi di kelompok kecil.

NARASI:
Bukan hanya nilai yang mereka cari, tetapi juga pengalaman, kerja sama, dan semangat untuk terus belajar.

VISUAL:
Lampu ruang studio menyala, guru membimbing siswa menyiapkan proyek akhir mereka.

NARASI:
Di sini, proses belajar tidak berhenti pada buku. Ia menjadi ruang untuk mencoba, gagal, dan bangkit kembali.

PENUTUP:
Kesuksesan tidak datang dari satu momen, tetapi dari proses yang terus dibangun setiap hari.`,
  "Variety Show": `SEGMENT: OPENING
DURASI: 3 MENIT

MUSIK PEMBUKA — LIGHTING PANGGUNG MENYALA

HOST 1:
"Selamat malam, Surabaya!"

HOST 2:
"Selamat datang di panggung Semarak Pentas Siswa, malam penuh bakat dari siswa-siswi SMK Negeri 1 Surabaya!"

VT TEASER:
CUPLIKAN SELURUH SEGMEN (30 DETIK)

SEGMENT: PERSEMBAHAN
DURASI: 5 MENIT

HOST 1:
"Membuka malam ini, mari kita saksikan penampilan dari tim tari tradisional kita!"

CUE:
LAMPU PANGGUNG FOKUS KE TENGAH — PENAMPILAN TARI

HOST 2:
"Luar biasa! Mari kita beri tepuk tangan meriah!"

SEGMENT: GAMES
DURASI: 6 MENIT

HOST 1:
"Sekarang saatnya permainan seru bertajuk 'Tebak Adegan'! Dua tim perwakilan kelas akan berlomba memperagakan adegan film tanpa suara."

CUE:
TIM A DAN TIM B NAIK PANGGUNG — TIMER 60 DETIK PER RONDE

HOST 2:
"Waktunya habis! Mari kita hitung skor kedua tim."

SEGMENT: BINCANG BAKAT
DURASI: 4 MENIT

HOST 1:
"Yuk, kita ajak ngobrol salah satu peserta paling berbakat malam ini."

CUE:
PESERTA NAIK PANGGUNG, DUDUK DI KURSI TAMU

HOST 2:
"Ceritakan dong, apa yang membuatmu jatuh cinta pada dunia seni peran?"

NARASUMBER:
Menjawab santai dan spontan.

SEGMENT: CLOSING
DURASI: 2 MENIT

HOST 1:
"Malam yang penuh warna ini harus kita akhiri, tapi jangan khawatir..."

HOST 2:
"...karena Semarak Pentas Siswa akan kembali bulan depan dengan penampilan yang lebih seru!"

MUSIK PENUTUP:
SELURUH TALENT NAIK PANGGUNG — GRAFIS CREDIT TITLE`,
  "Drama": `INT. KELAS - PAGI

RINA duduk di kursi paling belakang, menatap papan tulis dengan cemas. Beberapa teman sudah mulai menyiapkan presentasi.

RINA
Saya belum siap. Kalau saya gagal, semua orang akan tahu saya tidak cukup bagus.

DINA
Kita bisa latihan bareng. Kamu tidak harus melakukannya sendirian.

RINA
Tapi saya takut salah.

DINA
Kalau kamu terus takut, kamu tidak pernah akan mulai.

RINA menatap teman-temannya, lalu mengangguk pelan. Ekspresi wajahnya mulai berubah dari cemas menjadi berani.

RINA
Oke. Kita latihan sekarang.

CUT TO:
Rina berdiri di depan kelas, membuka materi dengan wajah lebih tenang.`,
  "Naskah Media Sosial": `HOOK:
"Tidak semua orang gagal karena malas. Kadang mereka hanya takut memulai."

VISUAL:
Close-up tangan menulis ide di buku, lalu berganti ke video cepat dengan teks: "mulai dari satu langkah kecil."

NARASI:
Kamu tidak perlu sempurna untuk mulai. Cukup ambil satu langkah yang paling dekat dengan tujuanmu hari ini.

TEXT ON SCREEN:
Langkah kecil hari ini = perubahan besar esok hari.

CTA:
Tulis satu langkah kecilmu hari ini di kolom komentar!`,
  "Naskah Film": `1.
INT. RUANG TUNGGU STASIUN - SORE

Ruang tunggu ramai namun tenang. ANDIN (18), mengenakan jaket almamater SMK, duduk sendirian sambil menatap layar ponsel yang menampilkan formulir pendaftaran kuliah, belum terisi. Seorang PRIA (30-an), membawa tas kamera, duduk di kursi sebelahnya.

PRIA
Formulir kuliah, ya? Aku ingat betul rasanya.

Andin menoleh, sedikit kaget, lalu mengunci layar ponselnya.

ANDIN
(canggung)
Iya, Kak. Tapi saya belum yakin mau lanjut kuliah atau langsung kerja.

PRIA
Dulu aku juga begitu. Lulusan Broadcasting, lho. Sekarang jadi videografer lepas.

Andin duduk lebih tegak, mulai tertarik dengan percakapan ini.

ANDIN
Jadi... Kakak nggak nyesel nggak lanjut kuliah dulu?

PRIA
(tersenyum)
Yang penting bukan kuliah atau enggak. Yang penting kamu terus bikin karya. Jalan itu urusan belakangan.

Suara pengumuman kereta terdengar dari pengeras suara. Pria itu berdiri, mengangguk pamit.

PRIA
Semoga menemukan jawabanmu sendiri.

Pria berjalan pergi. Andin menatap kepergiannya sejenak, lalu membuka kembali formulir di ponselnya. Kali ini, ia mulai mengetik dengan mantap.

FADE OUT.`,
};

let selectedFormatIndex = 0;

const archiveStyles = `
.archive-modal{position:fixed;inset:0 0 0 auto;display:flex;justify-content:flex-end;align-items:stretch;z-index:40;transition:opacity .2s ease, visibility .2s ease}.archive-modal.hidden{opacity:0;visibility:hidden;pointer-events:none}.archive-backdrop{position:absolute;inset:0;background:transparent;pointer-events:none}.archive-panel{position:relative;width:min(860px,58vw);height:100vh;max-height:none;z-index:1;display:flex}.archive-doc{width:100%;height:100%;background:linear-gradient(180deg,#f2efe9,#f9f7f2 16%,#f4efed 100%);border:1px solid rgba(17,17,22,.12);border-left:1px solid rgba(17,17,22,.12);border-radius:0;box-shadow:-20px 0 40px rgba(17,17,22,.18);overflow:hidden;position:relative}.archive-doc::before{content:"";position:absolute;inset:0 auto 0 0;width:18px;background:linear-gradient(180deg,#e9d6ff,#cbb9ff,#ffc99a)}.archive-topbar{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 24px 16px 36px;border-bottom:1px solid rgba(17,17,22,.09);background:rgba(255,255,255,.18)}.archive-window-controls{display:flex;gap:8px}.archive-window-controls span{width:12px;height:12px;border-radius:50%;display:block}.archive-window-controls span:nth-child(1){background:#ff6d6d}.archive-window-controls span:nth-child(2){background:#f7c76b}.archive-window-controls span:nth-child(3){background:#4bd78d}.archive-meta{display:flex;align-items:center;gap:12px;flex-wrap:wrap}.archive-folder{display:inline-flex;align-items:center;padding:7px 10px;border-radius:999px;background:#2a2832;color:#f5f1ff;font-size:9px;font-weight:800;letter-spacing:.12em;text-transform:uppercase}.archive-meta strong{font-size:19px;letter-spacing:-.03em}.archive-content{display:grid;grid-template-columns:280px minmax(0,1fr);gap:18px;padding:22px 22px 22px 36px}.archive-intro{padding:18px 12px 18px 0;border-right:1px solid rgba(17,17,22,.08)}.archive-kicker{margin:0 0 12px;font-size:11px;font-weight:800;letter-spacing:.22em;text-transform:uppercase;color:var(--violet)}.archive-intro h3{font-size:42px;letter-spacing:-.06em;line-height:.95;margin-bottom:10px}.archive-intro p{margin:0;color:var(--muted);line-height:1.7}.archive-editor{width:100%;min-height:420px;border:0;background:#fffdf9;padding:22px 20px 28px;border-radius:18px;border:1px solid rgba(17,17,22,.08);resize:vertical;font:500 15px/1.9 var(--font);color:#1a1b20;outline:none;box-shadow:inset 0 0 0 1px rgba(109,94,245,.04)}.archive-editor::placeholder{color:rgba(26,27,32,.42)}.archive-close{position:absolute;right:18px;top:18px;width:36px;height:36px;border:0;border-radius:50%;background:rgba(17,17,22,.08);color:var(--ink);font-size:30px;line-height:1;cursor:pointer;z-index:5}.archive-close:hover{background:rgba(17,17,22,.14)}@media (max-width:900px){.archive-layout{grid-template-columns:1fr}.journey-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));}.journey-card{min-height:150px}.archive-content{grid-template-columns:1fr}.archive-intro{border-right:0;border-bottom:1px solid rgba(17,17,22,.08);padding-bottom:16px}}`;

const archiveStyleTag = document.createElement("style");
archiveStyleTag.textContent = archiveStyles;
document.head.appendChild(archiveStyleTag);


const challenges=[
 ["BUDGET","Rp500.000","Pemain maksimal 3 orang","Lokasi maksimal 2 tempat","Durasi 5–7 menit"],
 ["WAKTU","1 hari produksi","Pemain maksimal 4 orang","Tanpa lokasi berbayar","Durasi 3–5 menit"],
 ["LOKASI","Sekolah saja","Pemain maksimal 5 orang","Maksimal 3 properti utama","Durasi 5–8 menit"],
 ["VISUAL","Minim dialog","Gunakan aksi dan ekspresi","Maksimal 2 lokasi","Durasi 3–6 menit"]
];

const challengeIdeas={
 BUDGET:{idea:"Dompet Terakhir",concept:"Seorang siswa menemukan uang di ruang kelas dan harus memilih antara mengembalikannya atau memenuhi kebutuhan pentingnya.",tip:"Gunakan properti yang sudah ada, satu konflik utama, dan manfaatkan close-up untuk membuat benda sederhana terasa penting.",checklist:["Batasi cerita pada 2 lokasi yang mudah ditemukan","Gunakan maksimal 3 tokoh yang punya fungsi jelas","Pilih properti sekolah atau barang pribadi"]},
 WAKTU:{idea:"Pesan Sebelum Bel Pulang",concept:"Seorang siswa hanya punya satu hari untuk menyampaikan pesan penting sebelum seseorang pergi.",tip:"Mulai dari adegan dengan tenggat waktu yang jelas. Hindari subplot agar semua adegan mendorong tokoh mendekati tujuan.",checklist:["Tentukan tenggat waktu dalam cerita","Susun 3 adegan: tujuan, hambatan, keputusan","Siapkan daftar shot sebelum produksi"]},
 LOKASI:{idea:"Rahasia di Koridor",concept:"Dua siswa menemukan petunjuk yang mengubah cara mereka melihat sebuah kejadian di sekolah.",tip:"Jadikan perubahan lokasi sebagai bagian dari perkembangan konflik, bukan sekadar latar. Manfaatkan pintu, tangga, papan pengumuman, atau lapangan sebagai visual.",checklist:["Pilih lokasi yang sudah mendapat izin","Gunakan maksimal 3 properti penting","Pastikan suara dan cahaya tiap lokasi dapat dikendalikan"]},
 VISUAL:{idea:"Benda yang Berpindah",concept:"Sebuah benda berpindah tangan dari satu tokoh ke tokoh lain dan mengungkap konflik tanpa banyak dialog.",tip:"Tulis tindakan yang terlihat kamera: tatapan, gerak, jarak, dan perubahan posisi benda. Ganti penjelasan perasaan dengan ekspresi dan blocking.",checklist:["Tulis maksud setiap adegan dalam aksi visual","Batasi dialog pada informasi yang benar-benar perlu","Rencanakan close-up dan wide shot utama"]}
};

function renderChallenge(challenge){
 const idea=challengeIdeas[challenge[0]];
 document.getElementById("challengeResult").innerHTML=`<strong>${challenge[0]} CHALLENGE</strong><br>${challenge.slice(1).map(x=>"• "+x).join("<br>")}<div class="challenge-advice"><b>IDE CERITA: ${idea.idea}</b><p>${idea.concept}</p><p><strong>Arah pengembangan:</strong> ${idea.tip}</p><strong>CHECKLIST PRODUKSI</strong><ul>${idea.checklist.map(item=>`<li>${item}</li>`).join("")}</ul></div>`;
}

const defaultState=()=>({current:0,answers:{},completed:{},challenge:null});
const SUPABASE_URL="https://nlzneuqpnmtzmpmbxxnp.supabase.co";
const SUPABASE_KEY="sb_publishable_Yu2c4Zm4YFkbMy6BHPf9rw_D6RztvSg";
const supabaseHeaders={"apikey":SUPABASE_KEY,"Authorization":`Bearer ${SUPABASE_KEY}`,"Content-Type":"application/json"};
const users=JSON.parse(localStorage.getItem("scriptLabUsers")||"{}");
const session=localStorage.getItem("scriptLabSession");
if(!users.siswa1){users.siswa1={username:"siswa1",name:"Siswa 1",role:"student",state:JSON.parse(localStorage.getItem("scriptLabData")||"null")||defaultState()};localStorage.setItem("scriptLabUsers",JSON.stringify(users));}
let currentUser=session&&users[session]?users[session]:null;
let state=currentUser?.state||defaultState();

async function syncStudentWork(){
 if(!currentUser||currentUser.role!=="student") return;
 await fetch(`${SUPABASE_URL}/rest/v1/student_work`,{method:"POST",headers:{...supabaseHeaders,"Prefer":"resolution=merge-duplicates,return=minimal"},body:JSON.stringify({account_key:currentUser.username,student_name:currentUser.name,absence_number:Number(currentUser.absence),answers:state.answers,completed:state.completed,current_stage:state.current,challenge:state.challenge,updated_at:new Date().toISOString()})});
}
async function loadStudentWork(user){
 if(!user||user.role!=="student") return;
 try{
  const response=await fetch(`${SUPABASE_URL}/rest/v1/student_work?account_key=eq.${encodeURIComponent(user.username)}&select=*`,{headers:supabaseHeaders});
  const rows=await response.json();
  if(rows[0]){state={current:rows[0].current_stage||0,answers:rows[0].answers||{},completed:rows[0].completed||{},challenge:rows[0].challenge||null};user.state=state;localStorage.setItem("scriptLabUsers",JSON.stringify(users));}
 }catch(error){console.warn("Supabase tidak dapat diakses; memakai data lokal.",error);}
}
function save(){
 if(currentUser&&currentUser.role==="student"){currentUser.state=state;users[currentUser.username]=currentUser;localStorage.setItem("scriptLabUsers",JSON.stringify(users));}
 if(document.getElementById("saveStatus")) document.getElementById("saveStatus").textContent="● Tersimpan";
 if(currentUser?.role==="student") syncStudentWork().catch(error=>console.warn("Progress lokal tersimpan, sinkronisasi Supabase gagal.",error));
}
function esc(s){return String(s||"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));}

function renderFormatDetail(){
 const detail=document.getElementById("formatDetail");
 const current=formats[selectedFormatIndex] || formats[0];
 const example = formatExamples[current[1]] || getFormatPlaceholder(current[1]);
 const placeholder = getFormatPlaceholder(current[1]);

 detail.innerHTML=`<div class="detail-shell">
  <div class="detail-header">
   <div>
    <p class="eyebrow">Naskah</p>
    <h3>${current[1]}</h3>
   </div>
   <span class="detail-badge">Script Room</span>
  </div>
  <div class="sample-panel">
   <div class="sample-topbar"><span></span><span></span><span></span><em>${current[1]}</em></div>
  <textarea class="format-editor" spellcheck="false" placeholder="${escapeAttribute(placeholder)}" readonly aria-label="Contoh naskah hanya untuk dibaca">${esc(example)}</textarea>
  </div>
 </div>`;
}

function getFormatPlaceholder(name){
 const placeholders={
  "Naskah Berita":"[LEAD]\n\n[ISI BERITA]\n\n[SUMBER / DATA]\n\n[PENUTUP]",
  "Talk Show":"[OPENING]\n\n[HOST]\n\n[NARASUMBER]\n\n[PERTANYAAN]\n\n[CLOSING]",
  "Dokumenter":"[OPENING VISUAL]\n\n[NARASI]\n\n[CUKUPAN WAWANCARA]\n\n[KLIMAKS]\n\n[PENUTUP]",
  "Variety Show":"[SEGMENT 1]\n\n[HOST]\n\n[TANTANGAN / GAME]\n\n[REAKSI PENONTON]\n\n[CLOSING]",
  "Drama":"[INT./EXT. - LOKASI]\n\n[AKSI]\n\n[DIALOG TOKOH]\n\n[KONFLIK]\n\n[PENYELESAIAN]",
  "Naskah Media Sosial":"[HOOK]\n\n[VISUAL UTAMA]\n\n[NARASI / CAPTION]\n\n[CTA / AJAKAN]",
  "Naskah Film":"[INT./EXT. - LOKASI]\n\n[AKSI]\n\n[DIALOG]\n\n[TRANSISI]\n\n[KLIMAKS]"
 };
 return placeholders[name] || "Tulis naskah Anda di sini...";
}

function openArchiveModal(index){
 const targetIndex = Number.isInteger(index) ? index : selectedFormatIndex;
 selectedFormatIndex = targetIndex;
 renderJourney();
}

function closeArchiveModal(){
 const modal = document.getElementById("archiveModal");
 if(!modal) return;
 modal.classList.add("hidden");
 modal.setAttribute("aria-hidden","true");
}

function escapeAttribute(value){
 return String(value).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}

function renderJourney(){
 const grid=document.getElementById("journeyGrid");
 grid.innerHTML=formats.map((f,i)=>`<article class="journey-card ${i===selectedFormatIndex?"selected":""} ${i===formats.length-1&&state.completed.screenplay?"done":""}" data-index="${i}" tabindex="0" role="button" aria-label="Lihat contoh ${f[1]}">
 <span class="card-num">${f[0]}</span><div><h3>${f[1]}</h3><p>${f[2]}</p></div>
 <span class="card-status">${i===formats.length-1?"SCREENPLAY WORKSPACE":"LEARN FORMAT"} ${i===formats.length-1?"→":"•"}</span>
 </article>`).join("");

 grid.querySelectorAll(".journey-card").forEach(card=>{
  card.addEventListener("click",()=>{
   openArchiveModal(Number(card.dataset.index));
  });
  card.addEventListener("keydown",event=>{
   if(event.key==="Enter"||event.key===" "){
    event.preventDefault();
    card.click();
   }
  });
 });

 renderFormatDetail();
}

document.addEventListener("click", (event) => {
 const closeTarget = event.target.closest("[data-close='archive']");
 const closeBtn = event.target.closest(".archive-close");
 if(closeTarget || closeBtn) closeArchiveModal();
});

document.addEventListener("keydown", (event) => {
 if(event.key === "Escape") closeArchiveModal();
});

function renderStages(){
 document.getElementById("stageList").innerHTML=stages.map((s,i)=>{const done=Boolean(state.completed[s.id]);return `<button class="stage-item ${i===state.current?"active":""} ${done?"completed":""}" onclick="goStage(${i})"><b>${String(i+1).padStart(2,"0")}</b><span>${s.title}</span><small>${done?"Selesai":"Belum selesai"}</small></button>`;}).join("");
}

function renderForm(){
 const s=stages[state.current];
 document.getElementById("stageNumber").textContent=String(state.current+1).padStart(2,"0");
 document.getElementById("stageTitle").textContent=s.title;
 document.getElementById("stageDesc").textContent=s.desc;
 document.getElementById("formArea").innerHTML=s.questions.map(q=>{
  const val=state.answers[q[0]]||"";
  return `<div class="question"><label for="${q[0]}">${q[1]}</label><${q[3]} id="${q[0]}" ${q[3]==="textarea"?"rows='5'":""} placeholder="${q[2]}">${q[3]==="textarea"?esc(val):""}</${q[3]}>${q[3]!=="textarea"?`<small>${q[2]}</small>`:""}</div>`;
 }).join("");
 s.questions.forEach(q=>{document.getElementById(q[0]).value=state.answers[q[0]]||"";document.getElementById(q[0]).addEventListener("input",e=>{state.answers[q[0]]=e.target.value;save();updateStats();});});
 feedback();
 document.getElementById("prevBtn").disabled=state.current===0;
 document.getElementById("nextBtn").textContent=state.current===stages.length-1?"Selesaikan Naskah ✓":"Simpan & Lanjut →";
}

function feedback(){
 const s=stages[state.current], vals=s.questions.map(q=>state.answers[q[0]]||"");
 const filled=vals.filter(v=>v.trim().length>0).length;
 const box=document.getElementById("feedback");
 let msg=filled===0?"💡 <strong>Pemantik:</strong> Mulai dari satu jawaban sederhana. Tidak harus sempurna; revisi adalah bagian dari proses menulis.":filled<vals.length?"📝 <strong>Feedback:</strong> Beberapa bagian masih kosong. Lengkapi sebelum berpindah agar struktur ceritamu semakin kuat.":"✓ <strong>Good draft:</strong> Semua bagian tahap ini sudah terisi. Baca ulang dan tanyakan: apakah penonton bisa membayangkan ceritanya?";
 box.innerHTML=msg;
}
function goStage(i){state.current=i;save();renderStages();renderForm();document.getElementById("workspace").scrollIntoView({behavior:"smooth"});}
document.getElementById("prevBtn").onclick=()=>goStage(Math.max(0,state.current-1));
document.getElementById("nextBtn").onclick=()=>{
 const s=stages[state.current]; s.questions.forEach(q=>{const el=document.getElementById(q[0]);state.answers[q[0]]=el.value;});
 state.completed[s.id]=s.questions.every(q=>(state.answers[q[0]]||"").trim().length>0);
 if(state.current<stages.length-1) state.current++; save();renderStages();renderForm();updateStats();
 document.getElementById("workspace").scrollIntoView({behavior:"smooth"});
};
document.getElementById("challengeBtn").onclick=()=>{
 const c=challenges[Math.floor(Math.random()*challenges.length)];state.challenge=c;save();
 renderChallenge(c);
};

function updateStats(){
 const total=stages.length, done=Object.values(state.completed).filter(Boolean).length;
 const percent=Math.round(done/total*100);document.getElementById("heroPercent").textContent=percent+"%";
 document.getElementById("stats").innerHTML=[["Progress",percent+"%","Tahap screenplay"],["Tahap selesai",done,"dari "+total],["Jawaban",Object.keys(state.answers).filter(k=>state.answers[k].trim()).length,"isian tersimpan"],["Challenge",state.challenge?"1":"0","tantangan dibuat"]].map(x=>`<div class="stat"><strong>${x[1]}</strong><span>${x[0]} — ${x[2]}</span></div>`).join("");
 const studentProgress=document.getElementById("studentProgress");
 if(studentProgress) studentProgress.innerHTML=`<strong>${percent}%</strong><span>${done} dari ${total} tahap selesai</span><div class="student-progress-track"><i style="width:${percent}%"></i></div>`;
}

async function renderSubmissions(){
 if(currentUser?.role!=="teacher") return;
 const submissions=document.getElementById("studentSubmissions");
 if(!submissions) return;
 let students=Object.values(users).filter(user=>user.role==="student");
 try{
  const response=await fetch(`${SUPABASE_URL}/rest/v1/student_work?select=account_key,student_name,absence_number,answers,completed,state:current_stage,challenge,updated_at&order=updated_at.desc`,{headers:supabaseHeaders});
  if(response.ok){
   const rows=await response.json();
   students=rows.map(row=>({username:row.account_key,name:row.student_name,absence:row.absence_number,state:{answers:row.answers||{},completed:row.completed||{},current:row.state||0,challenge:row.challenge||null}}));
    students.forEach(student=>{users[student.username]=student;});
  }
 }catch(error){console.warn("Daftar online tidak tersedia; memakai data lokal.",error);}
 const studentSelect=document.getElementById("portfolioStudent");
 if(studentSelect) studentSelect.innerHTML=`<option value="">Pilih siswa untuk dibuatkan portfolio</option>`+students.map(user=>`<option value="${esc(user.username)}">${esc(user.name||user.username)} - No. absen ${esc(user.absence||"-")}</option>`).join("");
 submissions.innerHTML=students.length?students.map(user=>{
  const userState=user.state||defaultState(), done=Object.values(userState.completed||{}).filter(Boolean).length;
  const answers=Object.values(userState.answers||{}).filter(value=>String(value).trim()).length;
    return `<div class="submission"><div><strong>${esc(user.name||user.username)}</strong><small>No. absen ${esc(user.absence||"-")}</small></div><b>${Math.round(done/stages.length*100)}%</b><span>${answers} jawaban tersimpan</span></div>`;
 }).join(""):"<p class=\"empty-state\">Belum ada hasil siswa.</p>";
}

function portfolioText(){
 return `SCRIPT LAB — PORTFOLIO PENULISAN NASKAH\n\n`+stages.map((s,i)=>`[${String(i+1).padStart(2,"0")}] ${s.title.toUpperCase()}\n`+s.questions.map(q=>`${q[1]}:\n${state.answers[q[0]]||"(belum diisi)"}`).join("\n\n")).join("\n\n--------------------------------\n\n")+`\n\nPRODUCER CHALLENGE:\n${state.challenge?state.challenge.join(" | "):"Belum dibuat"}`;
}
function portfolioHtml(portfolioState=state,portfolioUser=currentUser){
 const done=Object.values(portfolioState.completed||{}).filter(Boolean).length, percent=Math.round(done/stages.length*100);
 const answerSections=stages.map((stage,index)=>`<section class="stage"><div class="stage-title"><span>${String(index+1).padStart(2,"0")}</span><h2>${esc(stage.title)}</h2></div>${stage.questions.map(question=>`<div class="answer"><h3>${esc(question[1])}</h3><p>${esc(portfolioState.answers?.[question[0]]||"Belum diisi").replace(/\n/g,"<br>")}</p></div>`).join("")}</section>`).join("");
 return `<!doctype html><html lang="id"><head><meta charset="UTF-8"><title>Portfolio - ${esc(portfolioUser?.name||"SCRIPT LAB")}</title><style>
 @page{size:A4;margin:18mm}*{box-sizing:border-box}body{margin:0;color:#17171d;background:#f5f1e9;font:15px Arial,sans-serif;line-height:1.65}.sheet{max-width:900px;margin:30px auto;background:#fffdf8;padding:55px 65px;box-shadow:0 15px 50px #17171d1c}.cover{min-height:520px;display:flex;flex-direction:column;justify-content:space-between;border-bottom:3px solid #735cff;padding-bottom:35px}.eyebrow{color:#735cff;font-size:11px;font-weight:bold;letter-spacing:3px}.cover h1{font:700 64px Arial,sans-serif;line-height:.95;margin:45px 0 20px}.cover h1 em{color:#735cff;font-style:normal}.meta{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.meta div{background:#f1efff;padding:14px;border-radius:7px}.meta b{display:block;font-size:11px;color:#777680;text-transform:uppercase;letter-spacing:1px}.meta span{font-weight:bold}.stage{break-inside:avoid;border-bottom:1px solid #d9d5cc;padding:30px 0}.stage-title{display:flex;align-items:center;gap:15px}.stage-title span{color:#735cff;font-weight:bold}.stage-title h2{font-size:26px;margin:0}.answer{margin:22px 0}.answer h3{font-size:14px;margin:0 0 5px;color:#735cff}.answer p{margin:0;white-space:normal}.challenge{margin-top:28px;padding:20px;background:#f08a5d;border-radius:8px}.challenge h2{margin:0 0 8px;font-size:20px}.print-actions{position:fixed;top:18px;right:18px;display:flex;gap:8px}.print-actions button{border:0;border-radius:6px;padding:11px 15px;background:#17171d;color:white;font-weight:bold;cursor:pointer}.print-actions button:first-child{background:#735cff}@media print{body{background:white}.sheet{margin:0;max-width:none;padding:0;box-shadow:none}.print-actions{display:none}.cover{min-height:245mm}}
 </style></head><body><div class="print-actions"><button onclick="window.print()">Simpan sebagai PDF / Cetak</button><button onclick="window.close()">Tutup</button></div><main class="sheet"><section class="cover"><div><p class="eyebrow">SCRIPT LAB / PORTFOLIO PENULISAN NASKAH</p><h1>${esc(portfolioUser?.name||"Siswa")}<br><em>Portfolio</em></h1><p>Dokumentasi proses pengembangan ide menjadi naskah yang siap diproduksi.</p></div><div class="meta"><div><b>Nomor absen</b><span>${esc(portfolioUser?.absence||"-")}</span></div><div><b>Progress</b><span>${percent}%</span></div><div><b>Tanggal</b><span>${new Date().toLocaleDateString("id-ID")}</span></div></div></section>${answerSections}<div class="challenge"><h2>Producer Challenge</h2><p>${esc(portfolioState.challenge?portfolioState.challenge.join(" • "):"Belum dibuat")}</p></div></main></body></html>`;
}
function openPortfolio(){
 const selectedKey=document.getElementById("portfolioStudent")?.value;
 const selectedUser=selectedKey?users[selectedKey]:currentUser;
 if(currentUser?.role==="teacher"&&!selectedUser){alert("Pilih siswa terlebih dahulu.");return;}
 const portfolioWindow=window.open("","_blank","width=1000,height=800");
 if(!portfolioWindow){alert("Izinkan pop-up browser untuk membuka portfolio.");return;}
 portfolioWindow.document.open();portfolioWindow.document.write(portfolioHtml(selectedUser.state||defaultState(),selectedUser));portfolioWindow.document.close();
}
async function deleteStudentData(username){
 if(!username) {alert("Pilih siswa terlebih dahulu.");return;}
 const student=users[username];
 if(!student){alert("Data siswa tidak ditemukan.");return;}
 const confirmed=confirm(`Hapus semua data dari ${student.name || username}? Tindakan ini tidak bisa dibatalkan.`);
 if(!confirmed) return;
 try{
  const response=await fetch(`${SUPABASE_URL}/rest/v1/student_work?account_key=eq.${encodeURIComponent(username)}`,{method:"DELETE",headers:{...supabaseHeaders,"Prefer":"return=representation"}});
  if(!response.ok){
   const detail=await response.text();
   throw new Error(`Supabase DELETE gagal (${response.status}): ${detail || "Tidak ada detail dari server."}`);
  }
  const deletedRows=await response.json();
  if(!Array.isArray(deletedRows)||deletedRows.length===0) throw new Error("Tidak ada baris yang terhapus. Policy DELETE Supabase mungkin belum aktif.");
 }catch(error){
  console.warn("Gagal menghapus data siswa di Supabase.",error);
  alert(`Data siswa belum terhapus dari database. Jalankan policy DELETE pada supabase-schema.sql di Supabase SQL Editor.\n\nDetail: ${error.message}`);
  return;
 }
 delete users[username];
 localStorage.setItem("scriptLabUsers",JSON.stringify(users));
 const studentSelect=document.getElementById("portfolioStudent");
 if(studentSelect) studentSelect.value="";
 renderSubmissions();
 document.getElementById("copyMessage").textContent=`✓ Data ${student.name || username} berhasil dihapus.`;
}
document.getElementById("exportBtn").onclick=openPortfolio;document.getElementById("exportTop").onclick=openPortfolio;document.getElementById("copyBtn").onclick=async()=>{await navigator.clipboard.writeText(portfolioText());document.getElementById("copyMessage").textContent="✓ Ringkasan berhasil disalin.";};document.getElementById("deleteStudentBtn").onclick=()=>{const selectedKey=document.getElementById("portfolioStudent")?.value;deleteStudentData(selectedKey);};
document.getElementById("resetBtn").onclick=()=>{if(confirm("Hapus semua progress SCRIPT LAB di perangkat ini?")){localStorage.removeItem("scriptLabData");localStorage.removeItem("scriptLabUsers");location.reload();}};
document.getElementById("logoutBtn").onclick=()=>{localStorage.removeItem("scriptLabSession");location.reload();};
function updateLoginFields(){
 const isStudent=document.getElementById("loginRole").value==="student";
 document.getElementById("absenceField").hidden=!isStudent;
 document.getElementById("passwordField").hidden=isStudent;
 document.getElementById("loginAbsence").required=isStudent;
 document.getElementById("loginPassword").required=!isStudent;
 document.getElementById("usernameLabel").textContent=isStudent?"Nama lengkap":"Nama guru";
 document.getElementById("loginUsername").placeholder=isStudent?"Masukkan nama lengkap siswa":"Farhan Desri Yanto";
 document.getElementById("loginHint").textContent=isStudent?"Siswa cukup memasukkan nama lengkap dan nomor absen.":"Masukkan kredensial guru untuk melanjutkan.";
}
document.getElementById("loginRole").onchange=updateLoginFields;
document.getElementById("loginForm").onsubmit=e=>{
 e.preventDefault();
 const role=document.getElementById("loginRole").value, name=document.getElementById("loginUsername").value.trim(), normalizedName=name.toLowerCase(), absence=document.getElementById("loginAbsence").value.trim(), password=document.getElementById("loginPassword").value;
 const username=role==="student"?`siswa-${absence}-${normalizedName.replace(/[^a-z0-9]+/g,"-")}`:normalizedName;
 const valid=(role==="teacher"&&normalizedName==="farhan desri yanto"&&password==="051202")||(role==="student"&&name.length>=2&&/^[0-9]+$/.test(absence)&&Number(absence)>0);
 if(!valid){document.getElementById("loginError").textContent=role==="student"?"Masukkan nama lengkap dan nomor absen yang benar.":"Nama guru atau password tidak sesuai.";return;}
 if(!users[username]) users[username]={username,name:role==="teacher"?"Farhan Desri Yanto":name,absence,role,state:defaultState()};
 currentUser=users[username];state=currentUser.state||defaultState();localStorage.setItem("scriptLabSession",username);loadStudentWork(currentUser).then(activateSession);
};
function activateSession(){
 document.body.classList.remove("locked");document.body.classList.toggle("teacher-mode",currentUser.role==="teacher");document.body.classList.toggle("student-mode",currentUser.role==="student");
 document.getElementById("authScreen").classList.add("hidden");document.getElementById("sessionLabel").textContent=`${currentUser.name||currentUser.username} · ${currentUser.role==="teacher"?"Guru":"Siswa"}`;
 document.querySelector('nav a[href="#teacher"]').hidden=currentUser.role!=="teacher";
 renderJourney();renderStages();renderForm();updateStats();
 if(currentUser.role==="teacher") renderSubmissions();
}
window.goStage=goStage;
updateLoginFields();
if(currentUser) activateSession();
if(state.challenge) renderChallenge(state.challenge);
