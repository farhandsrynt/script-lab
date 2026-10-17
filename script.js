const stages = [
 {id:"ide", title:"Ide Cerita", desc:"Temukan gagasan inti sebelum masuk ke struktur cerita.", questions:[
  ["ide","Apa ide cerita yang ingin kamu angkat?","Tuliskan kejadian, gagasan, atau persoalan yang menarik bagimu.","textarea"],
  ["tokohIde","Siapa tokoh yang mengalami cerita ini?","Sebutkan tokoh utama dan ciri yang paling menonjol.","textarea"],
  ["masalahIde","Masalah apa yang mengganggu kehidupan tokoh?","Tuliskan masalah yang dapat terlihat melalui tindakan atau kejadian.","textarea"],
  ["taruhanIde","Apa akibatnya jika masalah tidak terselesaikan?","Jelaskan dampaknya bagi tokoh atau orang di sekitarnya.","textarea"],
  ["inspirasi","Apa yang membuat kamu tertarik pada ide tersebut?","Bisa berasal dari pengalaman, berita, lingkungan, atau imajinasi.","textarea"]
 ]},
 {id:"premis", title:"Premis", desc:"Padatkan cerita menjadi tokoh, tujuan, dan konflik.", questions:[
  ["tokoh","Nama Tokoh Utama","Contoh: Rina, siswi kelas XI yang berani tetapi keras kepala.","text"],
  ["tujuan","Apa yang ingin dicapai tokoh?","Tujuan harus konkret dan dapat diperjuangkan.","textarea"],
  ["konflik","Apa yang menghalangi tokoh?","Jelaskan hambatan utama.","textarea"],
  ["taruhan","Apa yang dipertaruhkan?","Jelaskan konsekuensi jika tokoh gagal.","textarea"]
 ]},
 {id:"logline", title:"Logline", desc:"Buat satu kalimat yang membuat orang ingin mengetahui ceritanya.", questions:[
  ["judulCerita","Judul sementara","Pilih judul yang spesifik, menarik, dan selaras dengan cerita.","text"],
  ["logline","Tulis logline ceritamu","Satu kalimat: tokoh + tujuan + konflik + taruhan. Tampilkan paradoks/ironi dan gambaran yang bisa dibayangkan.","textarea"],
  ["targetPenonton","Siapa target penontonnya?","Sebutkan kelompok penonton yang spesifik, misalnya remaja 15–18 tahun penyuka drama sekolah.","text"]
 ]},
 {id:"sinopsis", title:"Sinopsis", desc:"Kembangkan logline menjadi gambaran cerita yang utuh.", questions:[
  ["sinopsis","Sinopsis 1–3 paragraf","Ceritakan awal, perkembangan konflik, dan arah penyelesaian.","textarea"]
 ]},
 {id:"karakter", title:"Karakter", desc:"Bangun tokoh yang memiliki tujuan, kebutuhan, dan perubahan.", questions:[
  ["karakter","Tokoh utama dan karakterisasinya","Jelaskan usia/peran, sifat, kelebihan, kelemahan, dan kebiasaan.","textarea"],
  ["keinginan","Apa keinginan luar tokoh?","Tuliskan tujuan nyata yang sedang dikejar tokoh.","textarea"],
  ["kebutuhan","Apa kebutuhan batin yang belum disadari tokoh?","Jelaskan pelajaran atau perubahan yang sebenarnya dibutuhkan.","textarea"],
  ["kelemahan","Apa kelemahan atau kontradiksi tokoh?","Pilih sifat yang dapat memperumit usahanya.","textarea"],
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

const reviewSources={
 ide:"Acuan konsep: John Truby, The Anatomy of Story. Indikator yang tampil adalah rubrik latihan SCRIPT LAB.",
 premis:"Acuan konsep: John Truby, The Anatomy of Story. Indikator yang tampil adalah rubrik latihan SCRIPT LAB.",
 logline:"Acuan konsep: Blake Snyder, Save the Cat!; empat unsur khusus logline di sini mengikuti rubrik pengajar. Pemeriksaan otomatis hanya indikator teks, bukan penilaian makna.",
 sinopsis:"Acuan struktur: Syd Field, Screenplay: The Foundations of Screenwriting. Indikator yang tampil adalah rubrik latihan SCRIPT LAB.",
 karakter:"Acuan konsep: John Truby, The Anatomy of Story. Indikator yang tampil adalah rubrik latihan SCRIPT LAB.",
 alur:"Acuan struktur: Syd Field, Screenplay: The Foundations of Screenwriting. Indikator yang tampil adalah rubrik latihan SCRIPT LAB.",
 scene:"Acuan penulisan skenario: Syd Field, Screenplay: The Foundations of Screenwriting. Indikator yang tampil adalah rubrik latihan SCRIPT LAB.",
 dialog:"Acuan dialog: Robert McKee, Dialogue: The Art of Verbal Action for Page, Stage, and Screen. Indikator yang tampil adalah rubrik latihan SCRIPT LAB.",
 screenplay:"Acuan format: David Trottier, The Screenwriter's Bible. Indikator yang tampil adalah rubrik latihan SCRIPT LAB."
};

const formats = [
 ["01","Naskah Berita","Menyampaikan fakta secara akurat, jelas, dan berimbang."],
 ["02","Talk Show","Memandu percakapan yang informatif dan menarik."],
 ["03","Dokumenter","Menceritakan realitas melalui riset, gambar, dan suara."],
 ["04","Variety Show","Merangkai hiburan dalam segmen yang beragam."],
 ["05","Drama","Membangun cerita melalui tokoh, konflik, dan adegan."],
 ["06","Naskah Media Sosial","Menyampaikan pesan singkat untuk penonton digital."],
 ["07","Naskah Film","Mengembangkan cerita menjadi adegan yang siap diproduksi."]
];

const formatModules = {
 "Naskah Berita":{
  purpose:"Panduan bagi reporter, presenter, dan kru untuk menyampaikan peristiwa faktual dengan cepat, akurat, dan mudah dipahami.",
  elements:[["Lead","Inti peristiwa yang menjawab informasi terpenting dan menarik perhatian sejak awal."],["Tubuh berita","Rincian yang menjelaskan apa, siapa, kapan, di mana, mengapa, dan bagaimana."],["Sumber dan data","Keterangan narasumber, dokumen, atau data yang dapat diperiksa."],["Penutup","Informasi akhir atau perkembangan berikutnya yang relevan."]],
  flow:["Pastikan fakta dan konteks sudah terverifikasi.","Tentukan sudut pandang berita yang paling penting bagi penonton.","Susun lead, rincian pendukung, kutipan, lalu penutup.","Cocokkan naskah dengan gambar, durasi, dan pelafalan presenter."],
  notes:["Pisahkan fakta dari opini.","Jangan mengubah kutipan atau angka hingga menyesatkan.","Tulis kalimat ringkas dan gunakan atribusi sumber dengan jelas."]
 },
 "Talk Show":{
  purpose:"Rancangan acara percakapan yang membantu host dan narasumber membahas satu topik dengan terarah, nyaman, dan menarik.",
  elements:[["Pembuka","Sapaan, pengenalan topik, dan alasan topik penting bagi penonton."],["Pengenalan narasumber","Nama serta keahlian yang relevan, disampaikan secara singkat."],["Pertanyaan","Urutan pertanyaan dari pengantar, pendalaman, hingga refleksi atau solusi."],["Cue dan transisi","Petunjuk untuk video, grafis, jeda, perpindahan segmen, atau respons host."],["Penutup","Rangkuman gagasan dan salam akhir."]],
  flow:["Tetapkan tujuan obrolan dan profil penonton.","Riset topik serta narasumber sebelum menulis pertanyaan.","Urutkan pertanyaan agar percakapan berkembang alami.","Siapkan pertanyaan lanjutan dan cue untuk situasi langsung."],
  notes:["Pertanyaan harus terbuka dan tidak menggiring jawaban.","Beri ruang untuk jawaban spontan; naskah bukan percakapan kaku.","Pastikan nama, gelar, data, dan pelafalan sudah benar."]
 },
 "Dokumenter":{
  purpose:"Rencana penceritaan nonfiksi yang menyusun fakta, kesaksian, dan gambar menjadi pengalaman yang bermakna tanpa menghilangkan konteks.",
  elements:[["Tema dan sudut pandang","Pokok persoalan serta cara film mengajak penonton memahaminya."],["Riset dan sumber","Fakta, dokumen, narasumber, dan bukti yang menjadi dasar cerita."],["Visual dan suara","Wawancara, observasi, arsip, suasana lokasi, serta kebutuhan audio."],["Narasi dan struktur","Penghubung informasi dan urutan yang membawa penonton dari pengenalan menuju pemahaman."],["Penutup","Temuan, refleksi, atau pertanyaan yang ditinggalkan kepada penonton."]],
  flow:["Rumuskan pertanyaan dokumenter dan lakukan riset awal.","Tentukan akses, narasumber, bukti, serta batas etika peliputan.","Susun urutan cerita berdasarkan bahan yang benar-benar tersedia.","Rencanakan wawancara dan gambar observasi; revisi struktur setelah pengambilan gambar."],
  notes:["Bedakan fakta, dugaan, dan pendapat narasumber.","Jangan menyunting gambar atau kutipan hingga mengubah makna.","Minta izin, lindungi subjek rentan, dan catat sumber bahan arsip."]
 },
 "Variety Show":{
  purpose:"Rundown dan naskah penghubung untuk acara hiburan yang terdiri atas beberapa segmen, penampil, permainan, atau interaksi.",
  elements:[["Opening","Pembuka yang mengenalkan suasana, host, dan arah acara."],["Segmen","Isi utama seperti penampilan, permainan, bincang-bincang, atau tantangan."],["Cue","Petunjuk audio, visual, lampu, kamera, properti, dan kesiapan talent."],["Transisi","Jembatan antarsekmen agar acara terasa menyatu."],["Closing","Penutup, apresiasi, informasi lanjutan, dan salam akhir."]],
  flow:["Tentukan tema, target penonton, dan durasi total.","Bagi durasi menjadi segmen dengan variasi tempo.","Susun rundown beserta cue dan penanggung jawabnya.","Siapkan opsi transisi jika segmen terlambat atau mengalami kendala."],
  notes:["Periksa total durasi dan waktu perpindahan panggung.","Gunakan cue yang singkat, jelas, dan dapat dieksekusi kru.","Pastikan materi hiburan sesuai usia dan aman bagi semua pihak."]
 },
 "Drama":{
  purpose:"Naskah fiksi yang menyampaikan perubahan atau konflik tokoh melalui tindakan, pilihan, dialog, dan konsekuensinya.",
  elements:[["Tokoh dan tujuan","Siapa yang menjadi pusat cerita dan apa yang sedang diperjuangkannya."],["Konflik","Hambatan yang membuat tujuan tokoh sulit dicapai."],["Adegan","Peristiwa di tempat dan waktu tertentu yang mengubah keadaan cerita."],["Aksi dan dialog","Perilaku yang terlihat serta percakapan yang memiliki tujuan."],["Perubahan","Dampak pilihan tokoh terhadap dirinya dan situasi di akhir cerita."]],
  flow:["Kenali tokoh, tujuan, dan masalah utamanya.","Susun peristiwa yang membuat konflik meningkat.","Bangun adegan melalui aksi yang dapat dimainkan dan divisualisasikan.","Periksa apakah pilihan tokoh menghasilkan konsekuensi yang masuk akal."],
  notes:["Hindari dialog yang hanya menjelaskan hal yang sudah terlihat.","Setiap adegan sebaiknya mengubah informasi, hubungan, atau keadaan.","Pastikan lokasi, pemain, dan properti sesuai kemampuan produksi."]
 },
 "Naskah Media Sosial":{
  purpose:"Panduan konten video atau unggahan digital yang menyampaikan satu pesan utama secara cepat, sesuai platform, dan mudah dipahami tanpa konteks tambahan.",
  elements:[["Hook","Pembuka singkat yang relevan dan membuat penonton ingin menyimak."],["Pesan utama","Satu informasi atau gagasan yang menjadi fokus konten."],["Visual dan teks layar","Gambar, demonstrasi, atau teks yang membantu pesan dipahami."],["Audio dan narasi","Dialog, voice-over, musik, atau suara lingkungan yang mendukung."],["Ajakan bertindak","Langkah lanjutan yang jelas dan sesuai tujuan konten."]],
  flow:["Pilih tujuan konten dan siapa penontonnya.","Rangkum pesan menjadi satu gagasan utama.","Rencanakan hook, urutan visual, teks, dan kebutuhan audio.","Tutup dengan ajakan yang relevan lalu periksa format platform."],
  notes:["Pastikan klaim dan informasi dapat dipertanggungjawabkan.","Utamakan teks layar yang singkat dan mudah dibaca.","Gunakan musik, gambar, dan cuplikan yang memiliki izin penggunaan."]
 },
 "Naskah Film":{
  purpose:"Dokumen kerja yang menerjemahkan cerita menjadi rangkaian adegan visual dan audio sebagai acuan sutradara, pemain, serta kru produksi.",
  elements:[["Scene heading","Penanda INT./EXT., lokasi, dan waktu adegan."],["Deskripsi aksi","Peristiwa yang dapat dilihat atau didengar; ditulis ringkas dalam waktu kini."],["Nama tokoh dan dialog","Identitas pembicara dan ucapan yang dimainkan."],["Petunjuk seperlunya","Arah penting bagi pembacaan atau suara tanpa menggantikan keputusan sutradara."],["Urutan dramatik","Rangkaian adegan yang mengembangkan tujuan, hambatan, dan perubahan cerita."]],
  flow:["Kembangkan ide melalui premis, logline, dan sinopsis.","Susun urutan adegan sebelum menulis halaman demi halaman.","Gunakan format heading, aksi, nama tokoh, dan dialog secara konsisten.","Baca ulang untuk memeriksa alur, visual, kesinambungan, dan kebutuhan produksi."],
  notes:["Tulis hal yang bisa dilihat atau didengar kamera.","Jaga deskripsi aksi tetap jelas, ringkas, dan mudah diproduksi.","Periksa konsistensi nama tokoh, lokasi, waktu, dan properti."]
 }
};

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

const practiceTasks=[
 {id:"logline",title:"Buat 3 Logline",label:"PRAKTIK 1",duration:"15 menit",objective:"Tulis tiga ide cerita dalam satu kalimat dengan tujuan, konflik, dan taruhan yang jelas.",steps:["Pilih satu tema yang paling kamu minati.","Buat 3 logline dengan pola tokoh + tujuan + konflik.","Pilih logline yang paling kuat lalu revisi ulang."],difficulty:"Pemula"},
 {id:"scene",title:"Kembangkan 3 Scene Utama",label:"PRAKTIK 2",duration:"20 menit",objective:"Ubah ide menjadi adegan yang bisa dilihat dan dipahami penonton.",steps:["Tuliskan 3 scene utama.","Tentukan lokasi dan waktu masing-masing scene.","Tambahkan aksi utama yang mendorong konflik."],difficulty:"Menengah"},
 {id:"dialog",title:"Tulis Dialog Singkat",label:"PRAKTIK 3",duration:"18 menit",objective:"Latih dialog yang natural, jelas, dan punya subteks.",steps:["Buat 2 tokoh dengan tujuan berlawanan.","Tulis 6–8 baris dialog.","Tambahkan subteks di balik percakapan."],difficulty:"Menengah"},
 {id:"storyboard",title:"Storyboard Sederhana",label:"PRAKTIK 4",duration:"25 menit",objective:"Visualisasikan cerita kamu dalam 4 panel utama agar mudah diproduksi.",steps:["Buat 4 panel.","Setiap panel harus berisi aksi, lokasi, dan emosi.","Cek alur dari awal sampai klimaks."],difficulty:"Lanjut"}
];

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

function renderPracticeBoard(){
 const panel=document.getElementById("practicePanel");
 if(!panel) return;
 const completedCount = practiceTasks.filter(task => Boolean(state.practice?.[task.id])).length;
 const percent = Math.round((completedCount / practiceTasks.length) * 100);
 const taskCards = practiceTasks.map(task => {
  const done = Boolean(state.practice?.[task.id]);
  return `<article class="practice-card ${done ? "done" : ""}">
    <div class="practice-card-head">
      <div>
        <span class="practice-chip">${task.label}</span>
        <h4>${task.title}</h4>
      </div>
      <span class="practice-chip">${task.duration}</span>
    </div>
    <p>${task.objective}</p>
    <ul>${task.steps.map(step => `<li>${step}</li>`).join("")}</ul>
    <button type="button" data-practice-id="${task.id}">${done ? "Selesai ✓" : "Mulai Praktik"}</button>
  </article>`;
 }).join("");

 panel.innerHTML = `
  <div class="practice-summary">
    <div class="practice-summary-header">
      <div>
        <p class="eyebrow">MISSION LAB</p>
        <h3>${percent}%</h3>
      </div>
      <span class="summary-badge">Daily loop</span>
    </div>
    <div class="practice-bar"><i style="width:${percent}%"></i></div>
    <div class="practice-meta">
      <div><strong>${completedCount}</strong><span>tugas selesai</span></div>
      <div><strong>${practiceTasks.length}</strong><span>total misi</span></div>
      <div><strong>${practiceTasks.filter(task => !state.practice?.[task.id]).length}</strong><span>tersisa</span></div>
    </div>
  </div>
  <div class="practice-list">${taskCards || '<p class="task-empty">Belum ada tugas.</p>'}</div>
 `;

 panel.querySelectorAll("[data-practice-id]").forEach(button => {
  button.addEventListener("click", () => {
   const id = button.getAttribute("data-practice-id");
   state.practice = { ...(state.practice || {}), [id]: true };
   save();
   renderPracticeBoard();
   updateStats();
  });
 });
}

const defaultState=()=>({current:0,answers:{},completed:{},challenge:null,practice:{}});
const SUPABASE_URL="https://nlzneuqpnmtzmpmbxxnp.supabase.co";
const SUPABASE_KEY="sb_publishable_Yu2c4Zm4YFkbMy6BHPf9rw_D6RztvSg";
const supabaseHeaders={"apikey":SUPABASE_KEY,"Authorization":`Bearer ${SUPABASE_KEY}`,"Content-Type":"application/json"};
const users=JSON.parse(localStorage.getItem("scriptLabUsers")||"{}");
const session=localStorage.getItem("scriptLabSession");
if(!users.siswa1){users.siswa1={username:"siswa1",name:"Siswa 1",role:"student",state:JSON.parse(localStorage.getItem("scriptLabData")||"null")||defaultState()};localStorage.setItem("scriptLabUsers",JSON.stringify(users));}
let currentUser=session&&users[session]?users[session]:null;
let state=currentUser?.state||defaultState();
const isLearner=(user=currentUser)=>user?.role==="student"||user?.role==="group";
let aiReviewSequence=0;
let aiReviewTimer=null;
let activeAiReviewController=null;
let activeAiReview=null;
let lastAiReviewAt=0;
let latestAiReview={stageId:null,fingerprint:null,status:"idle",review:null,error:null};
const aiReviewStages=["ide","premis","logline"];
const aiReviewMinimumInterval=10000;

async function syncStudentWork(){
 if(!isLearner()) return;
 const response=await fetch(`${SUPABASE_URL}/rest/v1/student_work`,{method:"POST",headers:{...supabaseHeaders,"Prefer":"resolution=merge-duplicates,return=minimal"},body:JSON.stringify({account_key:currentUser.username,student_name:currentUser.name,absence_number:currentUser.role==="student"?Number(currentUser.absence):null,account_type:currentUser.role,group_members:currentUser.role==="group"?currentUser.members:[],answers:state.answers,completed:state.completed,current_stage:state.current,challenge:state.challenge,practice:state.practice||{},ai_review_version:state.aiReviewVersion||0,updated_at:new Date().toISOString()})});
 if(!response.ok) throw new Error(`Supabase menyimpan progres gagal (${response.status}): ${await response.text()}`);
}
async function loadStudentWork(user){
 if(!isLearner(user)) return;
 try{
  const response=await fetch(`${SUPABASE_URL}/rest/v1/student_work?account_key=eq.${encodeURIComponent(user.username)}&select=*`,{headers:supabaseHeaders});
  if(!response.ok) throw new Error(`Supabase membaca progres gagal (${response.status}): ${await response.text()}`);
  const rows=await response.json();
  if(rows[0]){
   state={current:rows[0].current_stage||0,answers:rows[0].answers||{},completed:rows[0].completed||{},challenge:rows[0].challenge||null,practice:rows[0].practice||{},aiReviewVersion:rows[0].ai_review_version||0};
   user.state=state;users[user.username]=user;localStorage.setItem("scriptLabUsers",JSON.stringify(users));
  }else if(user.role==="group"){
   state=defaultState();user.state=state;users[user.username]=user;localStorage.setItem("scriptLabUsers",JSON.stringify(users));
  }
 }catch(error){
  console.warn("Supabase tidak dapat diakses saat memuat progres.",error);
  if(user.role==="group") throw new Error("Akun kelompok terverifikasi, tetapi progres bersama tidak dapat dimuat. Periksa koneksi dan jalankan pembaruan supabase-schema.sql.");
 }
}
function save(){
 if(isLearner()){currentUser.state=state;users[currentUser.username]=currentUser;localStorage.setItem("scriptLabUsers",JSON.stringify(users));}
 const saveStatus=document.getElementById("saveStatus");
 if(saveStatus) saveStatus.textContent=isLearner()?"● Tersimpan di perangkat":"● Tersimpan";
 if(isLearner()) syncStudentWork().then(()=>{
  if(saveStatus&&currentUser?.username===localStorage.getItem("scriptLabSession")) saveStatus.textContent="● Tersinkron";
 }).catch(error=>{
  console.warn("Progres lokal tersimpan, sinkronisasi Supabase gagal.",error);
  if(saveStatus&&currentUser?.username===localStorage.getItem("scriptLabSession")) saveStatus.textContent="● Gagal sinkron";
 });
}
function migrateAiReviewProgress(){
 if(!isLearner()||state.aiReviewVersion===1) return;
 state.completed=state.completed||{};
 aiReviewStages.forEach(stageId=>state.completed[stageId]=false);
 state.current=0;
 state.aiReviewVersion=1;
 save();
}
function esc(s){return String(s||"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));}

function renderFormatDetail(){
 const current=formats[selectedFormatIndex] || formats[0];
 const module=formatModules[current[1]];
 if(!module){
  return `<p class="empty-state">Materi untuk modul ini belum tersedia.</p>`;
 }
 return `<div class="module-lesson">
  <header class="module-lesson-header">
   <div class="module-lesson-topline"><span>BAHAN BELAJAR</span><span>MODUL ${current[0]} / ${String(formats.length).padStart(2,"0")}</span></div>
   <p class="module-lesson-eyebrow">BROADCASTING × PERFILMAN</p>
   <h2 id="moduleDialogTitle">${esc(current[1])}</h2>
   <p class="module-lesson-purpose">${esc(module.purpose)}</p>
   <div class="module-lesson-meta"><span>● Materi inti</span><span>◇ Baca dan diskusikan</span></div>
  </header>
  <div class="module-lesson-body">
   <section class="module-block" aria-labelledby="module-elements-title">
    <div class="module-section-heading"><span>01</span><h3 id="module-elements-title">Unsur penting</h3></div>
    <div class="module-elements">${module.elements.map((item,index)=>`<article class="module-element"><span>${String(index+1).padStart(2,"0")}</span><div><h4>${esc(item[0])}</h4><p>${esc(item[1])}</p></div></article>`).join("")}</div>
   </section>
   <div class="module-columns">
    <section class="module-block" aria-labelledby="module-flow-title">
     <div class="module-section-heading"><span>02</span><h3 id="module-flow-title">Alur penyusunan</h3></div>
     <ol class="module-flow">${module.flow.map(step=>`<li>${esc(step)}</li>`).join("")}</ol>
    </section>
    <section class="module-block module-notes" aria-labelledby="module-notes-title">
     <div class="module-section-heading"><span>03</span><h3 id="module-notes-title">Catatan penting</h3></div>
     <ul>${module.notes.map(note=>`<li>${esc(note)}</li>`).join("")}</ul>
    </section>
   </div>
  </div>
 </div>`;
}

function openModule(index){
 selectedFormatIndex = Number.isInteger(index) ? index : selectedFormatIndex;
 renderJourney();
 document.getElementById("moduleModalContent").innerHTML=renderFormatDetail();
 const modal=document.getElementById("moduleModal");
 modal.classList.remove("hidden");
 modal.setAttribute("aria-hidden","false");
 document.body.classList.add("module-open");
 updateModuleNavigation();
 document.querySelector(".module-close").focus();
}

function closeModule(){
 const modal = document.getElementById("moduleModal");
 if(!modal) return;
 modal.classList.add("hidden");
 modal.setAttribute("aria-hidden","true");
 document.body.classList.remove("module-open");
 const selectedCard=document.querySelector(`.journey-card[data-index="${selectedFormatIndex}"]`);
 if(selectedCard) selectedCard.focus();
}

function updateModuleNavigation(){
 const previous=document.getElementById("previousModule");
 const next=document.getElementById("nextModule");
 previous.disabled=selectedFormatIndex===0;
 next.textContent=selectedFormatIndex===formats.length-1?"Selesai ✓":"Modul selanjutnya →";
}

function changeModule(direction){
 const nextIndex=selectedFormatIndex+direction;
 if(nextIndex<0||nextIndex>=formats.length){
  closeModule();
  return;
 }
 openModule(nextIndex);
}

function renderJourney(){
 const grid=document.getElementById("journeyGrid");
 grid.innerHTML=formats.map((f,i)=>`<article class="journey-card" data-index="${i}" tabindex="0" role="button" aria-label="Buka materi modul ${f[1]}">
 <span class="card-num">MODUL ${f[0]}</span><div><h3>${f[1]}</h3><p>${f[2]}</p></div>
 <span class="card-status">BUKA MATERI <span aria-hidden="true">→</span></span>
 </article>`).join("");

 grid.querySelectorAll(".journey-card").forEach(card=>{
  card.addEventListener("click",()=>{
   openModule(Number(card.dataset.index));
  });
  card.addEventListener("keydown",event=>{
   if(event.key==="Enter"||event.key===" "){
    event.preventDefault();
    card.click();
   }
  });
 });

}

document.addEventListener("click", (event) => {
 const closeTarget = event.target.closest("[data-close='module']");
 if(closeTarget || event.target.closest(".module-close") || event.target.closest("#closeModule")) closeModule();
});

document.addEventListener("keydown", (event) => {
 const modal=document.getElementById("moduleModal");
 if(modal.classList.contains("hidden")) return;
 if(event.key==="Escape"){
  closeModule();
  return;
 }
 if(event.key==="Tab"){
  const focusable=[...modal.querySelectorAll("button:not([disabled]),[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex='-1'])")];
  const first=focusable[0],last=focusable[focusable.length-1];
  if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
  else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
 }
});

document.getElementById("previousModule").addEventListener("click",()=>changeModule(-1));
document.getElementById("nextModule").addEventListener("click",()=>changeModule(1));

function renderStages(){
 document.getElementById("stageList").innerHTML=stages.map((s,i)=>{const done=Boolean(state.completed[s.id]);return `<button class="stage-item ${i===state.current?"active":""} ${done?"completed":""}" onclick="goStage(${i})"><b>${String(i+1).padStart(2,"0")}</b><span>${s.title}</span><small>${done?"Isian lengkap":"Belum lengkap"}</small></button>`;}).join("");
}

function renderForm(){
 const s=stages[state.current];
 document.getElementById("stageNumber").textContent=String(state.current+1).padStart(2,"0");
 document.getElementById("stageTitle").textContent=s.title;
 document.getElementById("stageDesc").textContent=s.desc;
 document.getElementById("formArea").innerHTML=s.questions.map(q=>{
  const val=state.answers[q[0]]||"";
  const control=q[3]==="textarea"?`<textarea id="${q[0]}" rows="5" placeholder="${esc(q[2])}">${esc(val)}</textarea>`:`<input id="${q[0]}" type="${esc(q[3])}" value="${esc(val)}" placeholder="${esc(q[2])}">`;
  return `<div class="question" data-field="${esc(q[0])}"><label for="${q[0]}">${q[1]}</label>${control}${q[3]!=="textarea"?`<small>${esc(q[2])}</small>`:""}</div>`;
 }).join("");
 s.questions.forEach(q=>{document.getElementById(q[0]).value=state.answers[q[0]]||"";document.getElementById(q[0]).addEventListener("input",e=>{state.answers[q[0]]=e.target.value;if(aiReviewStages.includes(s.id))state.completed[s.id]=false;feedback();scheduleAiReview(s.id);save();renderStages();updateStats();});});
 feedback();
 if(aiReviewStages.includes(s.id)) scheduleAiReview(s.id);
 document.getElementById("prevBtn").disabled=state.current===0;
 document.getElementById("nextBtn").textContent=state.current===stages.length-1?"Selesaikan Naskah ✓":"Simpan & Lanjut →";
}

function getStageReview(stageId, answers){
 const text = key => String(answers[key] || "").trim();
 const matches = (key, pattern) => pattern.test(text(key));
 const has = (key, minimum = 8) => text(key).length >= minimum;
 const checks = [];
 const add = (label, passed, advice, field = null) => checks.push({label, passed, advice, field});
 const tokenize = value => value.toLowerCase().match(/[a-z]+/g) || [];
 const stopWords = new Set("dan yang di ke dari untuk dengan adalah itu ini pada seorang sebuah atau tetapi namun karena agar jika akan sedang telah bisa dapat tidak bukan ia dia mereka tokoh cerita tentang saya sangat sekali menarik hebat bagus keren baik unik biasa seru menyenangkan banyak hal sesuatu".split(" "));
 const meaningfulWords = value => tokenize(value).filter(word => word.length > 2 && !stopWords.has(word));
 const hasSubstance = (value, minimumWords, minimumUnique) => {
  const words = meaningfulWords(value);
  return words.length >= minimumWords && new Set(words).size >= minimumUnique &&
   words.length / Math.max(new Set(words).size, 1) <= 1.7;
 };
 const hasNarrativeAction = value => /\b(mencari|menemukan|menemui|menyelamatkan|membuktikan|mengungkap|menghadapi|kehilangan|terancam|terjebak|dikejar|ditolak|diusir|gagal|berusaha|berjuang|memilih|memutuskan|menyembunyikan|membuka|menutup|meninggal|sakit|hilang|kabur|melawan|mencegah|merebut|memenangkan|melindungi|merusak|menghancurkan|dituduh|terpaksa|bangkrut|kebakaran|kecelakaan|berubah|menghalangi|mengancam|dilarang|berbohong|mencuri|menculik|terpisah|terlambat|utang|rahasia|membongkar|melaporkan|mengeluarkan|dikeluarkan|menyimpan|menyelidiki|menuduh|mengambil|menggagalkan|membangun|mengusir)\b/i.test(value);
 const hasSpecificGoal = value => /\b(mencari|menemukan|menyelamatkan|membuktikan|mengungkap|melarikan diri|memenangkan|menghentikan|mencegah|merebut|mengembalikan|membangun|membongkar|melaporkan|melindungi|memperbaiki|mengalahkan|membebaskan|menuntut|menyelesaikan|mencapai|memecahkan|menolong|mendapatkan|memperoleh|mendapat|menjadi juara)\b/i.test(value);
 const hasConcreteConsequence = value => /\b(kehilangan|diusir|dikeluarkan|bangkrut|terpisah|meninggal|sakit|ditangkap|dipenjara|tidak bisa|tak bisa|terpaksa|hancur|rusak|rahasia terbongkar|kehilangan hak|kehilangan pekerjaan|kehilangan beasiswa)\b/i.test(value);
 const hasSpecificInspiration = value => /\b(pengalaman|berita|melihat|menyaksikan|kejadian|lingkungan|keluarga|teman|sekolah|masyarakat|membaca|mengalami|pernah|bertanya|isu|peristiwa|observasi|terjadi)\b/i.test(value);
 const isFiller = value => /^(tes|test|asdf|qwerty|abc|bla|ngarang|asal(?:-|\s)?asalan|tidak tahu|terserah|random)(?:\s+\1)*[.!?]*$/i.test(value.trim());

 if(stageId === "ide"){
  add("Gagasan spesifik", hasSubstance(text("ide"), 7, 6) && hasNarrativeAction(text("ide")) && !isFiller(text("ide")), "Jelaskan siapa yang mengalami kejadian, apa yang terjadi, dan masalah yang membuatnya menarik. Satu tema umum atau kata-kata berulang belum menjadi ide cerita.", "ide");
  add("Tokoh utama", hasSubstance(text("tokohIde"), 4, 4) && !isFiller(text("tokohIde")), "Jelaskan tokoh dengan beberapa detail yang membedakannya, misalnya nama/peran, sifat, kebiasaan, atau keinginan. Nama atau pujian umum seperti 'hebat dan menarik' saja belum cukup.", "tokohIde");
  add("Masalah yang dapat dimainkan", hasSubstance(text("masalahIde"), 5, 4) && hasNarrativeAction(text("masalahIde")) && !isFiller(text("masalahIde")), "Tuliskan hambatan sebagai kejadian atau tindakan spesifik yang dialami tokoh. Jawaban umum seperti 'punya masalah' atau pengulangan kata belum cukup.", "masalahIde");
  add("Taruhan atau akibat", hasSubstance(text("taruhanIde"), 5, 4) && /\b(jika|kalau|bila|akibat|sehingga|maka|akan)\b/i.test(text("taruhanIde")) && hasConcreteConsequence(text("taruhanIde")) && !isFiller(text("taruhanIde")), "Terangkan akibat spesifik jika masalah tidak selesai—apa yang akan hilang, rusak, atau berubah bagi tokoh. 'Banyak hal buruk terjadi' belum menjelaskan taruhannya.", "taruhanIde");
  add("Alasan personal / relevansi", hasSubstance(text("inspirasi"), 5, 4) && hasSpecificInspiration(text("inspirasi")) && !isFiller(text("inspirasi")), "Sebutkan sumber ketertarikan yang nyata—pengalaman, pengamatan, berita, atau pertanyaan tertentu—bukan sekadar 'karena menarik'.", "inspirasi");
 }else if(stageId === "premis"){
  add("Tokoh utama teridentifikasi", hasSubstance(text("tokoh"), 2, 2) && !isFiller(text("tokoh")), "Sebutkan nama dan/atau peran tokoh beserta ciri yang membuatnya spesifik, bukan jawaban umum.", "tokoh");
  add("Tujuan dapat diperjuangkan", hasSubstance(text("tujuan"), 4, 4) && hasSpecificGoal(text("tujuan")) && !isFiller(text("tujuan")), "Rumuskan tindakan spesifik yang ingin dilakukan tokoh, seperti mengungkap rahasia, memenangkan sesuatu, atau menyelamatkan seseorang. 'Ingin hal yang baik' belum menjadi tujuan cerita.", "tujuan");
  add("Hambatan utama", hasSubstance(text("konflik"), 4, 4) && hasNarrativeAction(text("konflik")) && !isFiller(text("konflik")), "Jelaskan hambatan spesifik dan bagaimana hambatan itu menghalangi tujuan tokoh; frasa umum seperti 'banyak masalah' belum cukup.", "konflik");
  add("Konsekuensi kegagalan", hasSubstance(text("taruhan"), 4, 4) && /\b(jika|kalau|bila|akibat|sehingga|maka|akan)\b/i.test(text("taruhan")) && hasConcreteConsequence(text("taruhan")) && !isFiller(text("taruhan")), "Nyatakan akibat konkret jika tokoh gagal, bukan sekadar mengulang bahwa tokoh akan gagal atau 'banyak hal buruk terjadi'.", "taruhan");
 }else if(stageId === "logline"){
  const line = text("logline");
  const title = text("judulCerita");
  const titleIsGeneric = /^(cerita saya|judul|film|kisah|tanpa judul)$/i.test(title);
  add("Judul kuat dan spesifik", title.length >= 3 && title.length <= 60 && !titleIsGeneric && hasSubstance(title, 2, 2) && !isFiller(title), "Pilih judul ringkas yang khas, bukan isian umum atau rangkaian kata acak, dan selaraskan dengan konflik cerita.", "judulCerita");
  add("Ironi / paradoks", matches("logline", /\b(justru|padahal|ironis(?:nya)?|berlawanan|kontras|sebaliknya|bertolak belakang|kontradiksi)\b/i) && hasSubstance(line, 9, 8), "Tampilkan pertentangan yang menarik dan bangun kalimat dengan detail cerita. Kata penanda ironi di dalam kalimat acak belum cukup.", "logline");
  add("Gambaran mental yang konkret", matches("logline", /\b(di|ke|dari|menyelinap|berlari|menyembunyikan|mengejar|membangun|membongkar|menghapus|menyelamatkan|merekam|menukar|terjebak|panggung|sekolah|rumah|stasiun|studio|desa|kota|hutan|kapal|kamera|surat|rekaman|pintu|jembatan)\b/i) && hasSubstance(line, 9, 8), "Masukkan aksi, tempat, atau benda yang spesifik dan benar-benar terkait dengan cerita.", "logline");
  add("Target penonton jelas", hasSubstance(text("targetPenonton"), 3, 3) && /\b(remaja|anak|dewasa|keluarga|penonton|usia|tahun|penggemar|penyuka|siswa|mahasiswa)\b/i.test(text("targetPenonton")) && !isFiller(text("targetPenonton")), "Sebutkan kelompok penonton dan cirinya, misalnya rentang usia serta minat genre.", "targetPenonton");
  add("Tokoh, tujuan, dan hambatan", hasSubstance(line, 9, 8) && hasSpecificGoal(line) && matches("logline", /\b(tetapi|namun|meski|walau|sebelum|sementara|ketika|agar|demi|melawan|terancam|kehilangan|gagal)\b/i) && !isFiller(line), "Pastikan kalimat yang sama menjelaskan tokoh spesifik, tujuan konkret, dan hambatan atau risiko yang berhubungan—bukan hanya memuat kata pemicu.", "logline");
 }else if(stageId === "sinopsis"){
  const synopsis = text("sinopsis");
  const words = synopsis.split(/\s+/).filter(Boolean).length;
  add("Ringkasan cukup berkembang", words >= 60, "Kembangkan sinopsis menjadi beberapa paragraf ringkas yang memuat sebab-akibat, bukan daftar kejadian.");
  add("Situasi awal dan pemicu", matches("sinopsis", /\b(awalnya|pada awal|suatu hari|ketika|saat|setelah)\b/i), "Tunjukkan keadaan tokoh sebelum kejadian yang mengganggu keseimbangannya.");
  add("Konflik meningkat", matches("sinopsis", /\b(namun|tetapi|masalah|konflik|rintangan|gagal|terpaksa|semakin|ancaman)\b/i), "Perlihatkan hambatan yang makin sulit dan pilihan yang harus diambil tokoh.");
  add("Klimaks / keputusan", matches("sinopsis", /\b(memutuskan|memilih|menghadapi|akhirnya|puncak|berhasil|gagal)\b/i), "Nyatakan keputusan atau tindakan puncak yang menentukan hasil cerita.");
  add("Akhir dan konsekuensi", matches("sinopsis", /\b(akhirnya|pada akhirnya|akibatnya|sejak itu|berubah|menyadari|kehilangan|menyelamatkan)\b/i), "Tutup dengan hasil pilihan tokoh dan perubahan yang terjadi.");
 }else if(stageId === "karakter"){
  add("Identitas dan ciri khas", has("karakter", 20), "Jelaskan peran, sifat dominan, kebiasaan, serta hal yang membuat tokoh berbeda.");
  add("Keinginan luar", has("keinginan", 8), "Tulis tujuan yang terlihat dan dapat diukur melalui tindakan.");
  add("Kebutuhan batin", has("kebutuhan", 8), "Tentukan perubahan atau pemahaman yang dibutuhkan tokoh, meski belum ia sadari.");
  add("Kelemahan / kontradiksi", has("kelemahan", 8), "Pilih kelemahan yang benar-benar menghambat keinginan tokoh.");
  add("Perubahan sepanjang cerita", has("perubahan", 12), "Bandingkan sikap atau pilihan tokoh di awal dan akhir cerita.");
 }else if(stageId === "alur"){
  add("Situasi awal dan tokoh", has("awal", 15), "Kenalkan keadaan tokoh sebelum konflik utama dimulai.");
  add("Pemicu dan tujuan", has("tengah", 20), "Sebutkan kejadian yang memaksa tokoh bertindak dan tujuan yang muncul karenanya.");
  add("Hambatan meningkat", matches("tengah", /\b(namun|tetapi|semakin|gagal|rintangan|terpaksa|ancaman|kehilangan|lebih sulit)\b/i), "Tambahkan hambatan yang meningkat, bukan mengulang masalah yang sama.");
  add("Klimaks berupa pilihan / tindakan", matches("akhir", /\b(memilih|memutuskan|menghadapi|melawan|mengorbankan|menolak|menerima|berhasil|gagal)\b/i), "Tunjukkan tindakan atau keputusan terbesar tokoh pada puncak konflik.");
  add("Konsekuensi dan resolusi", has("akhir", 15), "Jelaskan akibat keputusan itu dan keadaan cerita setelah konflik.");
 }else if(stageId === "scene"){
  const scene = text("scene");
  const sceneCount = scene.split(/\n+/).filter(line => line.trim().length > 8).length;
  add("Minimal tiga beat / adegan", sceneCount >= 3, "Pisahkan setidaknya tiga adegan atau beat pada baris terpisah agar urutan mudah diperiksa.");
  add("Lokasi dan waktu terbaca", matches("scene", /\b(int\.|ext\.|pagi|siang|sore|malam|kelas|rumah|halaman|koridor|studio|stasiun|kantin|lapangan)\b/i), "Cantumkan lokasi dan waktu; format screenplay memakai slugline seperti INT. KELAS - PAGI.");
  add("Aksi terlihat kamera", matches("scene", /\b(melihat|menatap|berjalan|berlari|membuka|menutup|mengambil|meletakkan|menyembunyikan|jatuh|mengetuk|tersenyum|menangis|berdiri|duduk)\b/i), "Ubah informasi abstrak menjadi tindakan, ekspresi, atau benda yang dapat direkam kamera.");
  add("Visual dan perubahan konflik", has("visual", 15), "Jelaskan apa yang terlihat dan bagaimana keadaan berubah dari satu adegan ke adegan berikutnya.");
 }else if(stageId === "dialog"){
  const dialogue = text("dialog");
  const lines = dialogue.split(/\n+/).map(line => line.trim()).filter(Boolean);
  const speakerCues = lines.filter(line => /^[A-Z][A-Z0-9 _'-]{1,25}:?$/.test(line));
  add("Sedikitnya delapan baris dialog", lines.length >= 8, "Tulis percakapan minimal delapan baris; pisahkan cue nama tokoh dan ucapannya.");
  add("Dua suara tokoh", new Set(speakerCues).size >= 2, "Beri setiap tokoh pilihan kata atau cara bicara yang berbeda dan beri label nama.");
  add("Tujuan / konflik dalam percakapan", matches("dialog", /\b(tetapi|jangan|harus|tidak mau|minta|tolak|bohong|pergi|tetap|percaya|rahasia|mengapa)\b/i), "Pastikan kedua tokoh menginginkan sesuatu, bukan sekadar bertukar informasi.");
  add("Subteks dijelaskan", has("subtext", 10), "Terangkan maksud tersembunyi atau emosi yang tidak diucapkan langsung.");
  add("Dialog dapat diucapkan", lines.some(line => line.length > 15 && line.length < 180), "Baca dialog keras-keras; pecah kalimat yang terasa seperti penjelasan panjang.");
 }else if(stageId === "screenplay"){
  const screenplay = text("screenplay");
  const sluglines = (screenplay.match(/^\s*(INT\.|EXT\.|INT\/EXT\.|EXT\/INT\.)\s+.+/gim) || []).length;
  const cues = screenplay.split(/\n+/).map(line => line.trim()).filter(line => /^[A-Z][A-Z0-9 _'-]{1,25}$/.test(line));
  add("Slugline INT./EXT. dan waktu", sluglines >= 1 && /\b(PAGI|SIANG|SORE|MALAM|SUBUH|DAY|NIGHT)\b/i.test(screenplay), "Awali setiap adegan dengan INT./EXT. + lokasi + waktu yang konsisten.");
  add("Aksi ditulis secara visual", screenplay.split(/\s+/).filter(Boolean).length >= 45 && matches("screenplay", /\b(melihat|menatap|berjalan|berlari|membuka|menutup|mengambil|meletakkan|masuk|keluar|berdiri|duduk)\b/i), "Tulis aksi yang bisa dilihat atau didengar; hindari instruksi tentang pikiran yang tidak tampak di layar.");
  add("Cue karakter", new Set(cues).size >= 1, "Letakkan nama karakter dengan huruf kapital pada baris tersendiri sebelum dialog.");
  add("Dialog dan aksi terpisah", cues.some(cue => screenplay.includes(cue + "\n")), "Pisahkan nama karakter, dialog, dan paragraf aksi agar halaman mudah dibaca kru.");
  add("Catatan kelayakan produksi", has("produksi", 15) && matches("produksi", /\b(lokasi|properti|pemain|aktor|kostum|suara|cahaya|izin|durasi)\b/i), "Catat kebutuhan lokasi, pemain, properti, suara/cahaya, atau kendala produksi yang relevan.");
 }

 return checks;
}

function currentAiReview(stage){
 if(latestAiReview.stageId!==stage.id||latestAiReview.status!=="complete"||latestAiReview.fingerprint!==getAiReviewFingerprint(stage.id)) return null;
 return latestAiReview.review;
}

function getAiReviewFingerprint(stageId){
 const stage=stages.find(item=>item.id===stageId);
 if(!stage) return "";
 return JSON.stringify(stage.questions.map(question=>[question[0],String(state.answers[question[0]]||"").trim()]));
}

function renderAiReviewPanel(stage){
 const panel=document.getElementById("aiReviewPanel");
 if(!panel) return;
 if(!aiReviewStages.includes(stage.id)){
  panel.innerHTML="";
  return;
 }
 const isCurrent=latestAiReview.stageId===stage.id&&latestAiReview.fingerprint===getAiReviewFingerprint(stage.id);
 const status=isCurrent?latestAiReview.status:"idle";
 if(status==="complete"&&latestAiReview.review){
  const review=latestAiReview.review;
  const renderIssue=issue=>{
   const label=stage.questions.find(question=>question[0]===issue.field)?.[1]||issue.field;
   return `<li class="ai-issue"><strong>${esc(label)} · ${esc(issue.criterion)}</strong><span>${esc(issue.feedback)}</span><em>Coba pikirkan: ${esc(issue.revisionQuestion)}</em></li>`;
  };
  const blockingIssues=review.issues.filter(issue=>issue.blocking).map(renderIssue).join("");
  const suggestions=review.issues.filter(issue=>!issue.blocking).map(renderIssue).join("");
  const strengths=review.strengths.map(strength=>`<li>${esc(strength)}</li>`).join("");
  panel.innerHTML=`<div class="ai-review-header"><div><strong>Ulasan AI</strong><span>Penilaian makna dan konsistensi</span></div><b class="${review.ready?"ai-ready":"ai-needs-revision"}">${review.ready?"SIAP LANJUT":"PERLU REVISI"} · ${review.score}%</b></div><p class="ai-review-summary">${esc(review.summary)}</p>${strengths?`<div class="ai-strengths"><strong>Yang sudah kuat</strong><ul>${strengths}</ul></div>`:""}${blockingIssues?`<div class="ai-issues"><strong>Wajib diperbaiki sebelum lanjut</strong><ul>${blockingIssues}</ul></div>`:""}${suggestions?`<div class="ai-suggestions"><strong>Saran tambahan</strong><ul>${suggestions}</ul></div>`:""}<p class="ai-review-disclaimer">Ulasan AI dapat keliru. Gunakan saran sebagai panduan, bukan pengganti pertimbanganmu dan guru.</p>`;
 }else if(status==="loading"){
  panel.innerHTML=`<div class="ai-review-status" role="status"><strong>AI sedang membaca tulisanmu…</strong><span>Memeriksa makna, kekhususan, dan hubungan antarjawaban.</span></div>`;
 }else if(status==="error"){
  panel.innerHTML=`<div class="ai-review-status ai-review-error" role="alert"><strong>Pemeriksaan AI gagal</strong><span>${esc(latestAiReview.error||"Coba lagi sebentar.")}</span><button class="secondary-btn" type="button" onclick="retryAiReview()">Coba lagi</button></div>`;
 }else if(status==="waiting"){
  panel.innerHTML=`<div class="ai-review-status" role="status"><strong>AI akan memeriksa tulisanmu</strong><span>Menunggu kamu berhenti mengetik sebentar…</span></div>`;
 }else{
  panel.innerHTML=`<div class="ai-review-status"><strong>Ulasan AI</strong><span>Tulis jawabanmu; AI akan memeriksa makna dan konsistensinya secara otomatis. Draft akan dikirim ke OpenAI melalui server, tanpa nama atau nomor absen.</span></div>`;
 }
}

function updateInlineFeedback(stage, aiReview){
 if(!aiReviewStages.includes(stage.id)) return;
 document.querySelectorAll(".question[data-field]").forEach(question=>{
  const field=question.dataset.field;
  const messages=aiReview
   ? aiReview.issues.filter(issue=>issue.field===field&&issue.blocking).map(issue=>`${issue.criterion}: ${issue.feedback} ${issue.revisionQuestion}`)
   : [];
  const control=question.querySelector("input, textarea, select");
  const previousNote=question.querySelector(".field-feedback");
  if(previousNote) previousNote.remove();
  question.classList.toggle("has-error",messages.length>0);
  if(messages.length){
   control.setAttribute("aria-invalid","true");
   const note=document.createElement("small");
   note.className="field-feedback";
   note.id=`${field}-feedback`;
   note.textContent=messages.join(" ");
   control.setAttribute("aria-describedby",note.id);
   question.appendChild(note);
  }else{
   control.removeAttribute("aria-invalid");
   control.removeAttribute("aria-describedby");
  }
 });
}

function scheduleAiReview(stageId){
 if(!aiReviewStages.includes(stageId)) return;
 clearTimeout(aiReviewTimer);
 if(activeAiReviewController) activeAiReviewController.abort();
 activeAiReview=null;
 const sequence=++aiReviewSequence;
 const fingerprint=getAiReviewFingerprint(stageId);
 const stage=stages.find(item=>item.id===stageId);
 const characters=stage.questions.reduce((total,question)=>total+String(state.answers[question[0]]||"").trim().length,0);
 latestAiReview={stageId,fingerprint,status:characters<25?"idle":"waiting",review:null,error:null};
 feedback();
 if(characters<25) return;
 const cooldown=Math.max(1200,aiReviewMinimumInterval-(Date.now()-lastAiReviewAt));
 aiReviewTimer=setTimeout(()=>{if(sequence===aiReviewSequence)requestAiReview(stageId);},cooldown);
}

function requestAiReview(stageId, force=false){
 const stage=stages.find(item=>item.id===stageId);
 if(!stage||!aiReviewStages.includes(stageId)) return Promise.resolve(null);
 const fingerprint=getAiReviewFingerprint(stageId);
 if(latestAiReview.stageId===stageId&&latestAiReview.fingerprint===fingerprint&&latestAiReview.status==="complete"){
  return Promise.resolve(latestAiReview.review);
 }
 if(activeAiReview?.stageId===stageId&&activeAiReview.fingerprint===fingerprint){
  return activeAiReview.promise;
 }
 const characters=stage.questions.reduce((total,question)=>total+String(state.answers[question[0]]||"").trim().length,0);
 if(!force&&characters<25){
  latestAiReview={stageId,fingerprint,status:"idle",review:null,error:null};
  feedback();
  return Promise.resolve(null);
 }
 clearTimeout(aiReviewTimer);
 if(activeAiReviewController) activeAiReviewController.abort();
 const sequence=++aiReviewSequence;
 const controller=new AbortController();
 const requestTimeout=setTimeout(()=>controller.abort(),45000);
 lastAiReviewAt=Date.now();
 activeAiReviewController=controller;
 latestAiReview={stageId,fingerprint,status:"loading",review:null,error:null};
 feedback();
 const answers=Object.fromEntries(stage.questions.map(question=>[question[0],String(state.answers[question[0]]||"").trim()]));
 const promise=(async()=>{
  try{
   const response=await fetch(`${SUPABASE_URL}/functions/v1/review-writing`,{
    method:"POST",
    headers:{...supabaseHeaders},
    body:JSON.stringify({stage:stageId,answers}),
    signal:controller.signal
   });
   let payload;
   try{payload=await response.json();}catch{throw new Error("Server AI mengirim respons yang tidak valid.");}
   if(!response.ok) throw new Error(payload.error||`Pemeriksaan AI gagal (${response.status}).`);
   if(typeof payload.ready!=="boolean"||!Number.isInteger(payload.score)||!Array.isArray(payload.issues)||!Array.isArray(payload.strengths)){
    throw new Error("Hasil pemeriksaan AI tidak lengkap. Coba lagi.");
   }
   if(sequence!==aiReviewSequence) return null;
   latestAiReview={stageId,fingerprint,status:"complete",review:payload,error:null};
   feedback();
   return payload;
  }catch(error){
   if(sequence!==aiReviewSequence) return null;
   const message=error.name==="AbortError"
    ?"Pemeriksaan AI terlalu lama. Periksa koneksi lalu coba lagi."
    :error.message==="Failed to fetch"
     ?"Layanan AI tidak dapat dijangkau. Periksa internet dan pastikan Edge Function sudah di-deploy di Supabase."
     :error.message||"Tidak dapat terhubung ke layanan AI.";
   latestAiReview={stageId,fingerprint,status:"error",review:null,error:message};
   feedback();
   return null;
  }finally{
   clearTimeout(requestTimeout);
   if(activeAiReview?.sequence===sequence) activeAiReview=null;
   if(activeAiReviewController===controller) activeAiReviewController=null;
  }
 })();
 activeAiReview={stageId,fingerprint,sequence,promise};
 return promise;
}

function feedback(){
 const stage = stages[state.current];
 const checks = getStageReview(stage.id, state.answers);
 const passed = checks.filter(check => check.passed).length;
 const percent = Math.round(passed / checks.length * 100);
 const firstMissing = checks.find(check => !check.passed);
 const sourceNote = `<p class="feedback-source">${reviewSources[stage.id]}</p>`;
 const isAiStage=aiReviewStages.includes(stage.id);
 const checklistHtml=isAiStage?"":`<ul class="feedback-checklist">${checks.map(check => `<li class="${check.passed ? "is-passed" : "is-missing"}"><span aria-hidden="true">${check.passed ? "✓" : "!"}</span><div><strong>${check.label}</strong>${check.passed ? "" : `<small>${check.advice}</small>`}</div></li>`).join("")}</ul>`;
 const feedbackNext=isAiStage?"":`<p class="feedback-next">${firstMissing ? `<strong>Prioritas revisi:</strong> ${firstMissing.advice}` : "Semua indikator awal lolos. Baca ulang untuk memastikan hubungan sebab-akibat dan makna cerita benar-benar kuat."}</p>`;
 document.getElementById("feedback").innerHTML = `
  <div class="feedback-heading"><div><strong>${isAiStage?"Koreksi Otomatis dengan AI":"Koreksi Otomatis"} · ${stage.title}</strong><span>${isAiStage?"Menilai makna, konsistensi, dan hubungan sebab-akibat":`${passed} dari ${checks.length} indikator terdeteksi`}</span></div>${isAiStage?"":`<b>${percent}%</b>`}</div>
  ${checklistHtml}
  ${feedbackNext}
  ${isAiStage?'<div id="aiReviewPanel" class="ai-review-panel" aria-live="polite"></div>':""}
  <p class="feedback-note">${isAiStage?"Status kelayakan ditentukan setelah ulasan AI selesai. AI dapat keliru; tinjau saran bersama guru.":"Skor menunjukkan kelengkapan indikator tulisan, bukan penilaian final atas mutu cerita. Tinjau ulang bersama guru."}</p>
  ${sourceNote}`;
 const aiReview=currentAiReview(stage);
 updateInlineFeedback(stage, aiReview);
 renderAiReviewPanel(stage);
}

window.retryAiReview=()=>requestAiReview(stages[state.current]?.id,true);
function goStage(i){if(i<0||i>=stages.length)return;if(i!==state.current){clearTimeout(aiReviewTimer);if(activeAiReviewController)activeAiReviewController.abort();activeAiReview=null;aiReviewSequence++;}state.current=i;save();renderStages();renderForm();document.getElementById("workspace").scrollIntoView({behavior:"smooth"});}
document.getElementById("prevBtn").onclick=()=>goStage(Math.max(0,state.current-1));
document.getElementById("nextBtn").onclick=()=>{
 const stageIndex=state.current;
 const s=stages[stageIndex];
 s.questions.forEach(q=>{const el=document.getElementById(q[0]);state.answers[q[0]]=el.value;});
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
 const practiceDone=Object.values(state.practice||{}).filter(Boolean).length;
 document.getElementById("stats").innerHTML=[["Progress",percent+"%","Tahap screenplay"],["Tahap selesai",done,"dari "+total],["Jawaban",Object.keys(state.answers).filter(k=>state.answers[k].trim()).length,"isian tersimpan"],["Praktik",`${practiceDone}/${practiceTasks.length}`,"latihan mandiri"]].map(x=>`<div class="stat"><strong>${x[1]}</strong><span>${x[0]} — ${x[2]}</span></div>`).join("");
 const studentProgress=document.getElementById("studentProgress");
 if(studentProgress) studentProgress.innerHTML=`<strong>${percent}%</strong><span>${done} dari ${total} tahap selesai</span><div class="student-progress-track"><i style="width:${percent}%"></i></div>`;
}

async function renderSubmissions(){
 if(currentUser?.role!=="teacher") return;
 const submissions=document.getElementById("studentSubmissions");
 if(!submissions) return;
 const dashboardStatus=document.getElementById("dashboardStatus");
 let students=Object.values(users).filter(user=>isLearner(user));
 try{
  const response=await fetch(`${SUPABASE_URL}/rest/v1/student_work?select=account_key,student_name,absence_number,account_type,group_members,answers,completed,state:current_stage,challenge,practice,updated_at&order=updated_at.desc`,{headers:supabaseHeaders});
  if(!response.ok) throw new Error(`Supabase memuat dashboard gagal (${response.status}): ${await response.text()}`);
  const rows=await response.json();
  students=rows.map(row=>({username:row.account_key,name:row.student_name,absence:row.absence_number,role:row.account_type==="group"?"group":"student",members:row.group_members||[],state:{answers:row.answers||{},completed:row.completed||{},current:row.state||0,challenge:row.challenge||null,practice:row.practice||{}}}));
  students.forEach(student=>{users[student.username]=student;});
  localStorage.setItem("scriptLabUsers",JSON.stringify(users));
  if(dashboardStatus) dashboardStatus.textContent=`Data online berhasil dimuat · ${students.filter(student=>student.role==="student").length} siswa individu · ${students.filter(student=>student.role==="group").length} kelompok.`;
 }catch(error){
  console.warn("Daftar online tidak tersedia; memakai data lokal.",error);
  if(dashboardStatus) dashboardStatus.textContent="Data online tidak dapat dimuat. Menampilkan data yang tersimpan di perangkat ini saja.";
 }
 const studentSelect=document.getElementById("portfolioStudent");
 if(studentSelect) studentSelect.innerHTML=`<option value="">Pilih siswa atau kelompok untuk dibuatkan portfolio</option>`+students.map(user=>`<option value="${esc(user.username)}">${user.role==="group"?"Kelompok":"Siswa"}: ${esc(user.name||user.username)}${user.role==="group"?` · ${esc((user.members||[]).join(", "))}`:` · No. absen ${esc(user.absence||"-")}`}</option>`).join("");
 submissions.innerHTML=students.length?students.map(user=>{
  const userState=user.state||defaultState(), done=Object.values(userState.completed||{}).filter(Boolean).length;
  const answers=Object.values(userState.answers||{}).filter(value=>String(value).trim()).length;
  const identity=user.role==="group"?`Kelompok · ${esc((user.members||[]).join(", ")||"Anggota belum dicatat")}`:`Siswa individu · No. absen ${esc(user.absence||"-")}`;
  return `<div class="submission ${user.role==="group"?"submission-group":""}"><div><strong>${esc(user.name||user.username)}</strong><small>${identity}</small></div><b>${Math.round(done/stages.length*100)}%</b><span>${answers} jawaban tersimpan</span></div>`;
 }).join(""):"<p class=\"empty-state\">Belum ada hasil siswa.</p>";
}

function portfolioText(){
 return `SCRIPT LAB — PORTFOLIO PENULISAN NASKAH\n\n`+stages.map((s,i)=>`[${String(i+1).padStart(2,"0")}] ${s.title.toUpperCase()}\n`+s.questions.map(q=>`${q[1]}:\n${state.answers[q[0]]||"(belum diisi)"}`).join("\n\n")).join("\n\n--------------------------------\n\n")+`\n\nPRODUCER CHALLENGE:\n${state.challenge?state.challenge.join(" | "):"Belum dibuat"}`;
}
function portfolioHtml(portfolioState=state,portfolioUser=currentUser){
 const done=Object.values(portfolioState.completed||{}).filter(Boolean).length, percent=Math.round(done/stages.length*100);
 const answerSections=stages.map((stage,index)=>`<section class="stage"><div class="stage-title"><span>${String(index+1).padStart(2,"0")}</span><h2>${esc(stage.title)}</h2></div>${stage.questions.map(question=>`<div class="answer"><h3>${esc(question[1])}</h3><p>${esc(portfolioState.answers?.[question[0]]||"Belum diisi").replace(/\n/g,"<br>")}</p></div>`).join("")}</section>`).join("");
 const portfolioIdentity=portfolioUser?.role==="group"?`<div><b>Anggota kelompok</b><span>${esc((portfolioUser.members||[]).join(", ")||"Belum dicatat")}</span></div>`:`<div><b>Nomor absen</b><span>${esc(portfolioUser?.absence||"-")}</span></div>`;
 return `<!doctype html><html lang="id"><head><meta charset="UTF-8"><title>Portfolio - ${esc(portfolioUser?.name||"SCRIPT LAB")}</title><style>
 @page{size:A4;margin:18mm}*{box-sizing:border-box}body{margin:0;color:#17171d;background:#f5f1e9;font:15px Arial,sans-serif;line-height:1.65}.sheet{max-width:900px;margin:30px auto;background:#fffdf8;padding:55px 65px;box-shadow:0 15px 50px #17171d1c}.cover{min-height:520px;display:flex;flex-direction:column;justify-content:space-between;border-bottom:3px solid #735cff;padding-bottom:35px}.eyebrow{color:#735cff;font-size:11px;font-weight:bold;letter-spacing:3px}.cover h1{font:700 64px Arial,sans-serif;line-height:.95;margin:45px 0 20px}.cover h1 em{color:#735cff;font-style:normal}.meta{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.meta div{background:#f1efff;padding:14px;border-radius:7px}.meta b{display:block;font-size:11px;color:#777680;text-transform:uppercase;letter-spacing:1px}.meta span{font-weight:bold}.stage{break-inside:avoid;border-bottom:1px solid #d9d5cc;padding:30px 0}.stage-title{display:flex;align-items:center;gap:15px}.stage-title span{color:#735cff;font-weight:bold}.stage-title h2{font-size:26px;margin:0}.answer{margin:22px 0}.answer h3{font-size:14px;margin:0 0 5px;color:#735cff}.answer p{margin:0;white-space:normal}.challenge{margin-top:28px;padding:20px;background:#f08a5d;border-radius:8px}.challenge h2{margin:0 0 8px;font-size:20px}.print-actions{position:fixed;top:18px;right:18px;display:flex;gap:8px}.print-actions button{border:0;border-radius:6px;padding:11px 15px;background:#17171d;color:white;font-weight:bold;cursor:pointer}.print-actions button:first-child{background:#735cff}@media print{body{background:white}.sheet{margin:0;max-width:none;padding:0;box-shadow:none}.print-actions{display:none}.cover{min-height:245mm}}
 </style></head><body><div class="print-actions"><button onclick="window.print()">Simpan sebagai PDF / Cetak</button><button onclick="window.close()">Tutup</button></div><main class="sheet"><section class="cover"><div><p class="eyebrow">SCRIPT LAB / PORTFOLIO PENULISAN NASKAH</p><h1>${esc(portfolioUser?.name||"Siswa")}<br><em>Portfolio</em></h1><p>Dokumentasi proses pengembangan ide menjadi naskah yang siap diproduksi.</p></div><div class="meta">${portfolioIdentity}<div><b>Progress</b><span>${percent}%</span></div><div><b>Tanggal</b><span>${new Date().toLocaleDateString("id-ID")}</span></div></div></section>${answerSections}<div class="challenge"><h2>Producer Challenge</h2><p>${esc(portfolioState.challenge?portfolioState.challenge.join(" • "):"Belum dibuat")}</p></div></main></body></html>`;
}
function openPortfolio(){
 const selectedKey=document.getElementById("portfolioStudent")?.value;
 const selectedUser=selectedKey?users[selectedKey]:currentUser;
 if(currentUser?.role==="teacher"&&!selectedUser){alert("Pilih siswa atau kelompok terlebih dahulu.");return;}
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
 const isGroup=document.getElementById("loginRole").value==="group";
 document.getElementById("absenceField").hidden=!isStudent;
 document.getElementById("passwordField").hidden=isStudent;
 document.getElementById("groupMembersField").hidden=!isGroup;
 document.getElementById("loginAbsence").required=isStudent;
 document.getElementById("loginPassword").required=!isStudent;
 document.getElementById("loginPassword").minLength=isGroup?4:0;
 document.getElementById("loginPassword").inputMode=isGroup?"numeric":"";
 document.getElementById("loginPassword").autocomplete=isGroup?"off":"current-password";
 document.getElementById("groupMembers").required=isGroup;
 document.getElementById("usernameLabel").textContent=isStudent?"Nama lengkap":isGroup?"Nama kelompok":"Nama guru";
 document.getElementById("loginUsername").placeholder=isStudent?"Masukkan nama lengkap siswa":isGroup?"Contoh: Kelompok Produksi 1":"Farhan Desri Yanto";
 document.getElementById("passwordLabel").textContent=isGroup?"PIN kelompok":"Password";
 document.getElementById("loginPassword").placeholder=isGroup?"Contoh: 1234":"Masukkan password guru";
 document.getElementById("loginHint").textContent=isStudent?"Siswa individu cukup memasukkan nama lengkap dan nomor absen.":isGroup?"Isi nama kelompok, 2–12 nama anggota, dan PIN yang mudah diingat (contoh: 1234).":"Masukkan kredensial guru untuk melanjutkan.";
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
const individualLoginHandler=document.getElementById("loginForm").onsubmit;
async function accessGroupAccount(accountKey,groupName,accessCode,members){
 let response;
 try{
  response=await fetch(`${SUPABASE_URL}/rest/v1/rpc/access_script_lab_group`,{
   method:"POST",
   headers:supabaseHeaders,
   body:JSON.stringify({p_account_key:accountKey,p_group_name:groupName,p_access_code:accessCode,p_members:members})
  });
 }catch(error){
  if(error instanceof TypeError) throw new Error("Alamat proyek Supabase yang digunakan tidak dapat dijangkau. Live Server tidak memperbaiki alamat proyek yang salah atau sudah tidak aktif. Pastikan Project URL aktif di Supabase cocok dengan SUPABASE_URL di script.js.");
  throw error;
 }
 if(!response.ok){
  if(response.status===404) throw new Error("Fungsi login kelompok belum ditemukan. Jalankan ulang supabase-schema.sql di Supabase → SQL Editor.");
  if(response.status===401||response.status===403) throw new Error("Supabase menolak akses. Periksa konfigurasi URL dan publishable key pada script.js.");
  const details=await response.json().catch(()=>null);
  if(details?.message==="Invalid group account details") throw new Error("Detail kelompok tidak valid. Periksa nama kelompok, PIN minimal 4 karakter, dan daftar 2–12 anggota.");
  throw new Error(`Supabase gagal memproses login kelompok (${response.status}). ${details?.message||"Periksa supabase-schema.sql dan coba lagi."}`);
 }
 const result=await response.json();
 if(!result.authenticated){
  if(result.reason==="members_required") throw new Error("Isi nama 2–12 anggota kelompok, satu nama per baris.");
  throw new Error("Nama kelompok atau kode akses tidak sesuai, atau akun kelompok sedang dikunci sementara.");
 }
 return result;
}
document.getElementById("loginForm").onsubmit=async event=>{
 if(document.getElementById("loginRole").value!=="group"){
  individualLoginHandler(event);
  return;
 }
 event.preventDefault();
 const form=document.getElementById("loginForm"),name=document.getElementById("loginUsername").value.trim(),accessCode=document.getElementById("loginPassword").value;
 const errorElement=document.getElementById("loginError"),submitButton=form.querySelector(".auth-submit");
 const memberText=document.getElementById("groupMembers").value.trim();
 const members=memberText?[...new Map(memberText.split(/[\n,;]+/).map(member=>member.trim()).filter(Boolean).map(member=>[member.toLocaleLowerCase("id-ID"),member])).values()]:null;
 const slug=name.normalize("NFKD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,50).replace(/-$/g,"");
 errorElement.textContent="";
 if(name.length<3||slug.length<2||accessCode.trim().length<4||!members||members.length<2||members.length>12||members.some(member=>member.length>100)){
  errorElement.textContent="Isi nama kelompok, PIN minimal 4 karakter, dan 2–12 nama anggota (satu nama per baris).";
  return;
 }
 submitButton.disabled=true;
 submitButton.textContent="Memeriksa akses…";
 try{
  const group=await accessGroupAccount(`kelompok-${slug}`,name,accessCode,members);
  const username=group.account_key;
  currentUser={...(users[username]||{}),username,name:group.group_name,role:"group",members:group.members||members||[],state:users[username]?.state||defaultState()};
  users[username]=currentUser;
  state=currentUser.state;
  localStorage.setItem("scriptLabUsers",JSON.stringify(users));
  localStorage.setItem("scriptLabSession",username);
  await loadStudentWork(currentUser);
  await syncStudentWork();
  activateSession();
 }catch(error){
  currentUser=null;
  localStorage.removeItem("scriptLabSession");
  errorElement.textContent=error.message;
  console.warn("Login kelompok gagal.",error);
 }finally{
  submitButton.disabled=false;
  submitButton.innerHTML='Masuk <span>→</span>';
 }
};
function activateSession(){
 migrateAiReviewProgress();
 document.body.classList.remove("locked");document.body.classList.toggle("teacher-mode",currentUser.role==="teacher");document.body.classList.toggle("student-mode",isLearner());
 document.getElementById("authScreen").classList.add("hidden");document.getElementById("sessionLabel").textContent=`${currentUser.name||currentUser.username} · ${currentUser.role==="teacher"?"Guru":currentUser.role==="group"?"Kelompok":"Siswa individu"}`;
 document.querySelector('nav a[href="#teacher"]').hidden=currentUser.role!=="teacher";
 renderJourney();renderStages();renderForm();renderPracticeBoard();updateStats();
 if(state.challenge) renderChallenge(state.challenge);
 if(currentUser.role==="teacher") renderSubmissions();
}
window.goStage=goStage;
updateLoginFields();
if(currentUser?.role==="group"){
 loadStudentWork(currentUser).then(activateSession).catch(error=>{
  localStorage.removeItem("scriptLabSession");
  currentUser=null;
  document.getElementById("loginError").textContent=error.message;
  console.warn("Sesi kelompok tidak dapat memuat progres.",error);
 });
}else if(currentUser) activateSession();
if(state.challenge) renderChallenge(state.challenge);
