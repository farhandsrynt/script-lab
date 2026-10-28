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
  ["ironiCerita","Ironi / hal tak terduga","Apa pertentangan menarik dalam ceritamu? Pikirkan hal yang seharusnya terjadi dibandingkan dengan kenyataannya.","textarea"],
  ["gambaranVisual","Gambaran visual","Adegan atau gambar apa yang langsung terbayang dari ceritamu? Jelaskan aksi, tempat, atau benda yang bisa dilihat kamera.","textarea"],
  ["judulMenarik","Judul yang menarik","Buat judul yang singkat, khas, dan membuat target penonton ingin tahu ceritanya.","text"],
  ["targetPenonton","Siapa target penontonnya?","Sebutkan kelompok penonton yang spesifik, misalnya remaja 15–18 tahun penyuka drama sekolah.","text"],
  ["logline","Tulis logline ceritamu","Satu kalimat: tokoh + tujuan + konflik + taruhan. Masukkan ironi/hal tak terduga dan gambaran visual yang kuat.","textarea"]
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

const groupStages = [
 {id:"ide", title:"Ide Cerita", desc:"Tentukan gagasan utama yang ingin dikembangkan bersama.", questions:[
  ["ide","Apa ide cerita kelompokmu?","Tuliskan kejadian, gagasan, atau persoalan utama yang ingin diangkat.","textarea"]
 ]},
 {id:"premis", title:"Premis", desc:"Padatkan cerita menjadi tokoh, tujuan, konflik, dan taruhan.", questions:[
  ["tokoh","Siapa tokoh utama?","Sebutkan nama/peran tokoh dan ciri pentingnya.","textarea"],
  ["tujuan","Apa tujuan tokoh?","Tuliskan hal konkret yang ingin dicapai tokoh.","textarea"],
  ["konflik","Apa konflik atau hambatannya?","Jelaskan kekuatan yang menghalangi tujuan tokoh.","textarea"],
  ["taruhan","Apa yang dipertaruhkan?","Jelaskan akibat jika tokoh gagal.","textarea"]
 ]},
 {id:"logline", title:"Logline", desc:"Rangkum cerita dalam satu kalimat yang kuat.", questions:[
  ["logline","Tulis logline ceritamu","Gabungkan tokoh, tujuan, konflik, dan taruhan dalam satu kalimat.","textarea"]
 ]},
 {id:"sinopsis", title:"Sinopsis", desc:"Kembangkan logline menjadi alur cerita yang utuh.", questions:[
  ["sinopsis","Tulis sinopsis","Ceritakan awal, perkembangan konflik, klimaks, dan penyelesaian.","textarea"]
 ]},
 {id:"threeActs", title:"Struktur Tiga Babak", desc:"Petakan perubahan cerita dari awal hingga akhir.", questions:[
  ["babak1","Babak I — Pengenalan dan pemicu","Kenalkan dunia tokoh, situasi awal, lalu tuliskan peristiwa yang memulai konflik.","textarea"],
  ["babak2","Babak II — Konfrontasi","Tuliskan usaha tokoh, hambatan yang meningkat, titik tengah, dan krisis.","textarea"],
  ["babak3","Babak III — Klimaks dan resolusi","Tuliskan pilihan puncak tokoh, hasil konflik, dan keadaan setelahnya.","textarea"]
 ]},
 {id:"screenplay", title:"Shooting Script", desc:"Ubah rancangan kelompok menjadi naskah yang siap diproduksi.", questions:[
  ["screenplay","Tulis shooting script","Gunakan INT./EXT., lokasi, waktu, aksi visual, nama tokoh, dan dialog.","textarea"],
  ["produksi","Catatan produksi","Tuliskan kebutuhan lokasi, properti, pemain, dan hal penting untuk produksi.","textarea"]
 ]}
];

function stagesForUser(user=currentUser){
 return user?.role==="group"?groupStages:stages;
}
function activeStages(){return stagesForUser(currentUser);}

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
  notes:["Tulis hal yang bisa dilihat atau didengar kamera.","Jaga deskripsi aksi tetap jelas, ringkas, dan mudah diproduksi.","Periksa konsistensi nama tokoh, lokasi, waktu, dan properti."],
  learningPath:[
   {title:"1. Ide cerita: temukan benih cerita",description:"Ide adalah bahan awal, belum harus menjadi cerita lengkap. Mulailah dari tokoh, keadaan menarik, masalah, atau pertanyaan “bagaimana jika?”. Cari kemungkinan perubahan dan konflik yang dapat terlihat di layar.",example:"Bagaimana jika arsip siaran radio sekolah akan dihapus, sementara seorang siswa ingin membuktikan bahwa suara-suara di dalamnya penting bagi komunitas sekolah?",task:"Tulis satu kalimat tentang hal yang membuatmu penasaran. Tambahkan siapa yang terdampak dan masalah apa yang mungkin muncul."},
   {title:"2. Premis: rumuskan inti cerita",description:"Premis memadatkan hubungan tokoh, tujuan, hambatan, dan akibat menjadi dasar cerita. Premis membantu penulis mengecek apakah bahan awal memiliki konflik yang cukup untuk dikembangkan.",example:"Raka, anggota radio sekolah yang pemalu, berusaha menyelamatkan arsip siaran sebelum server dibersihkan, tetapi ia harus menemukan cara meyakinkan kepala sekolah tanpa menyiarkan rekaman pribadi tanpa izin.",task:"Isi pola: “Tokoh ___ ingin ___, tetapi ___ menghalanginya; jika gagal, ___.” Pastikan hambatan dan akibatnya spesifik."},
   {title:"3. Logline: ceritakan daya tariknya dalam satu kalimat",description:"Logline adalah ringkasan sangat singkat untuk memperkenalkan cerita. Umumnya mencantumkan tokoh utama, pemicu atau situasi, tujuan, hambatan utama, dan taruhan. Logline bukan slogan dan tidak perlu menceritakan semua akhir cerita.",example:"Saat arsip radio sekolah terancam dihapus sebelum bel pulang, Raka yang pemalu harus merekam suara baru dan meyakinkan kepala sekolah agar menyimpannya, tanpa membocorkan pesan pribadi yang ia temukan di rekaman lama.",task:"Tulis satu kalimat. Garisbawahi tokoh, tujuan, hambatan, dan taruhan; hapus detail yang tidak mendorong konflik."},
   {title:"4. Sinopsis: uraikan perjalanan cerita",description:"Sinopsis menceritakan cerita secara berurutan dalam bentuk prosa. Berbeda dengan logline, sinopsis mencakup perkembangan konflik, keputusan penting, klimaks, dan penyelesaian. Untuk latihan, buat satu sampai tiga paragraf dengan sebab-akibat yang jelas.",example:"Raka mengetahui arsip radio sekolah akan terhapus saat server dibersihkan sore itu. Ia ingin menyelamatkannya, tetapi kepala sekolah meminta bukti bahwa arsip tersebut layak disimpan. Saat memilah rekaman lama, Raka menemukan pesan pribadi seorang siswa dan sadar bahwa pesan itu tidak boleh dipakai tanpa izin.\n\nRaka mengajak teman-temannya merekam suara dan cerita baru dari warga sekolah. Ketika alat rekam bermasalah dan waktu hampir habis, ia harus memilih: memakai pesan pribadi sebagai jalan pintas atau menyampaikan gagasannya sendiri. Raka memilih berbicara langsung dan memutar rekaman baru yang dibuat dengan persetujuan. Kepala sekolah menyetujui penyimpanan arsip sebagai proyek uji coba; Raka pun berani menjadi penyiar untuk pertama kalinya.",task:"Tulis awal, perkembangan, klimaks, dan akhir. Pastikan tindakan tokoh menyebabkan peristiwa berikutnya dan akhir menjawab konflik utama."},
   {title:"5. Karakter: bangun tokoh yang memilih dan berubah",description:"Karakter bukan hanya nama dan sifat. Kenali keinginan luar yang bisa diamati, kebutuhan batin, kekuatan, kelemahan, ketakutan, hubungan dengan tokoh lain, serta pilihan yang mengubah dirinya. Perubahan sebaiknya tampak melalui tindakan, bukan hanya dijelaskan.",example:"Raka ingin menyelamatkan arsip (keinginan luar). Ia perlu belajar menyuarakan pendapat dan menghormati privasi orang lain (kebutuhan). Ia teliti dalam mengedit audio, tetapi takut berbicara di depan orang. Pada klimaks, ia menolak memakai pesan pribadi tanpa izin dan memilih menyampaikan idenya sendiri.",task:"Buat profil tokoh utama dengan: tujuan, kebutuhan, kekuatan, kelemahan, ketakutan, dan keputusan yang menunjukkan perubahan."},
   {title:"6. Alur: susun sebab, akibat, dan pilihan",description:"Alur adalah urutan peristiwa yang saling mendorong. Rangkaikan pemicu, usaha tokoh, hambatan yang meningkat, titik balik, krisis, klimaks, dan akibat. Tiap adegan sebaiknya mengubah informasi, hubungan, atau keadaan.",example:"Arsip akan dihapus → Raka meminta bantuan dan ditolak karena belum punya bukti → ia menemukan rekaman pribadi yang bisa menjadi bukti tetapi bermasalah secara etis → alat rekam rusak dan waktu menipis → ia mengajak komunitas membuat rekaman baru → ia menyampaikan proposal dan memutar hasilnya → arsip disimpan sebagai uji coba.",task:"Tulis 6–10 peristiwa. Hubungkan dengan kata “karena itu” atau “tetapi”; jika hanya “lalu”, cari hubungan sebab-akibat yang lebih kuat."},
   {title:"7. Struktur tiga babak: atur perubahan besar cerita",description:"Struktur tiga babak adalah peta untuk mengatur awal, konfrontasi, dan penyelesaian. Ini alat bantu, bukan rumus wajib: durasi tiap babak dapat berubah, terutama dalam film pendek. Titik balik ialah keputusan atau peristiwa yang mengubah arah usaha tokoh.",example:"BABAK I — Pengenalan dan pemicu: kita mengenal Raka dan radio sekolah; ia mengetahui arsip akan dihapus sore itu. Titik balik I: ia memutuskan mengumpulkan bukti dan menyelamatkan arsip.\n\nBABAK II — Konfrontasi: Raka mencoba meminta dukungan, menghadapi batas waktu, dan menemukan pesan pribadi. Titik tengah: ia sadar bukti yang mudah dipakai justru melanggar privasi. Krisis: alat bermasalah dan waktu hampir habis. Titik balik II: ia memilih membuat rekaman baru dengan persetujuan warga sekolah.\n\nBABAK III — Klimaks dan resolusi: Raka mempresentasikan rekaman serta proposalnya langsung kepada kepala sekolah. Ia mendapat persetujuan uji coba dan berani memandu siaran pertama.",task:"Bagi peristiwa ceritamu menjadi Babak I (dunia awal dan pemicu), Babak II (usaha, hambatan, pilihan sulit), dan Babak III (klimaks serta akibat). Pastikan tokoh membuat pilihan penting di setiap bagian."}
  ]
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
 {id:"format",title:"Mengenal Format Naskah",label:"KUIS 1",topic:"Berita, talk show, dokumenter, variety show, dan media sosial",questions:[
  {id:"lead",prompt:"Bagian naskah berita yang menyampaikan inti peristiwa paling penting disebut …",choices:["Cue","Lead","Closing","Transisi"],answer:1,explanation:"Lead membuka berita dengan inti peristiwa agar penonton segera memahami informasi utamanya."},
  {id:"talkshow",prompt:"Pertanyaan yang baik untuk narasumber talk show sebaiknya …",choices:["Menggiring narasumber agar setuju dengan host","Terbuka dan memberi ruang untuk jawaban spontan","Hanya dijawab dengan ya atau tidak","Tidak berhubungan dengan topik"],answer:1,explanation:"Pertanyaan terbuka membantu percakapan lebih informatif dan memberi ruang pada jawaban narasumber."},
  {id:"documentary",prompt:"Hal yang harus dilakukan saat menggunakan kutipan atau gambar dalam dokumenter adalah …",choices:["Mengubah konteks supaya lebih dramatis","Memastikan sumber dan konteksnya dapat dipertanggungjawabkan","Menghilangkan semua informasi sumber","Menganggap semua materi internet bebas digunakan"],answer:1,explanation:"Dokumenter perlu menjaga konteks fakta, mencatat sumber, dan meminta izin untuk materi yang digunakan."},
  {id:"cue",prompt:"Dalam naskah variety show, cue digunakan untuk …",choices:["Memberi petunjuk teknis kepada kru dan talent","Menggantikan semua dialog host","Menentukan konflik tokoh utama","Menuliskan opini penonton"],answer:0,explanation:"Cue adalah petunjuk eksekusi, misalnya untuk audio, visual, lampu, kamera, atau kesiapan talent."},
  {id:"hook",prompt:"Bagian awal konten media sosial yang menarik perhatian penonton disebut …",choices:["Scene heading","Hook","Closing credit","Atribusi"],answer:1,explanation:"Hook adalah pembuka singkat dan relevan yang membuat penonton tertarik menyimak."}
 ]},
 {id:"story",title:"Membangun Cerita",label:"KUIS 2",topic:"Ide, tokoh, tujuan, konflik, logline, dan perubahan",questions:[
  {id:"conflict",prompt:"Konflik dalam cerita adalah …",choices:["Daftar semua tokoh dalam cerita","Hambatan yang membuat tujuan tokoh sulit dicapai","Pesan penutup dari pembuat film","Deskripsi lokasi tanpa peristiwa"],answer:1,explanation:"Konflik menghadirkan hambatan yang mendorong tokoh mengambil tindakan dan membuat cerita bergerak."},
  {id:"logline",prompt:"Unsur inti yang sebaiknya tampak dalam logline adalah …",choices:["Tokoh, tujuan, konflik, dan taruhan","Daftar kru dan anggaran","Semua dialog dari awal sampai akhir","Ulasan penonton"],answer:0,explanation:"Logline merangkum tokoh, apa yang ingin dicapai, hambatan, dan konsekuensi atau taruhan."},
  {id:"stakes",prompt:"Dalam cerita, “taruhan” menjelaskan …",choices:["Lokasi tempat cerita dibuat","Apa akibatnya jika tokoh gagal","Jumlah adegan dalam film","Peralatan yang digunakan kru"],answer:1,explanation:"Taruhan memperjelas konsekuensi yang dihadapi tokoh jika ia tidak berhasil."},
  {id:"change",prompt:"Akhir cerita terasa sebagai perubahan ketika …",choices:["Tokoh mengalami konsekuensi dari pilihan dan tindakannya","Semua masalah selesai tanpa sebab","Cerita berpindah lokasi secara acak","Tokoh baru muncul tanpa fungsi"],answer:0,explanation:"Perubahan tokoh sebaiknya tumbuh dari pilihan, tindakan, dan konsekuensi yang dibangun sepanjang cerita."},
  {id:"scene-change",prompt:"Sebuah adegan akan terasa bermakna jika …",choices:["Keadaan, informasi, atau hubungan berubah","Hanya mengulang informasi sebelumnya","Tidak berkaitan dengan tujuan tokoh","Selalu memiliki banyak tokoh"],answer:0,explanation:"Adegan yang efektif mengubah informasi, hubungan, atau keadaan cerita."}
 ]},
 {id:"screenplay",title:"Adegan dan Format Film",label:"KUIS 3",topic:"Scene heading, aksi visual, dialog, dan urutan dramatik",questions:[
  {id:"heading",prompt:"Penulisan “INT. RUANG KELAS - PAGI” menunjukkan …",choices:["Nama tokoh dan dialog","Interior, lokasi, dan waktu adegan","Jenis kamera dan lensa","Judul serta genre film"],answer:1,explanation:"Scene heading menandai interior atau eksterior, lokasi, dan waktu adegan."},
  {id:"action",prompt:"Deskripsi aksi dalam naskah film sebaiknya berisi …",choices:["Pikiran tokoh yang tidak terlihat atau terdengar","Hal yang dapat dilihat atau didengar penonton","Penjelasan panjang tentang pesan moral","Instruksi untuk setiap gerakan kamera"],answer:1,explanation:"Aksi ditulis melalui peristiwa visual atau suara yang bisa diwujudkan saat produksi."},
  {id:"dialog",prompt:"Dialog yang kuat biasanya …",choices:["Menjelaskan semua hal yang sudah terlihat","Memiliki tujuan atau konflik dan terdengar sesuai tokohnya","Selalu panjang agar halaman cepat penuh","Mengulang informasi yang sama"],answer:1,explanation:"Dialog sebaiknya punya fungsi, terasa alami, dan tidak sekadar menjelaskan yang sudah tampak."},
  {id:"screenplay-order",prompt:"Sebelum menulis naskah film halaman demi halaman, penulis sebaiknya …",choices:["Menyusun urutan adegan terlebih dahulu","Memilih font poster film","Menulis credit title","Merekam semua dialog"],answer:0,explanation:"Menyusun urutan adegan membantu memastikan alur, perkembangan konflik, dan perubahan cerita."},
  {id:"visual",prompt:"Kalimat aksi yang paling mudah divisualisasikan adalah …",choices:["Rani merasa sangat kehilangan harapan","Rani meremas surat itu lalu duduk sendiri di lantai","Rani memahami bahwa hidup itu rumit","Rani mempunyai masa lalu yang berat"],answer:1,explanation:"Aksi yang dapat difilmkan menjelaskan perilaku yang tampak, bukan hanya perasaan abstrak."}
 ]},
 {id:"production",title:"Produksi dan Penyampaian Pesan",label:"KUIS 4",topic:"Kelayakan produksi, target penonton, dan tanggung jawab media",questions:[
  {id:"production-ready",prompt:"Cerita lebih layak diproduksi untuk tugas kelas jika …",choices:["Membutuhkan banyak lokasi yang tidak dapat diakses","Kebutuhan pemain, lokasi, dan properti sesuai sumber daya yang tersedia","Semua adegan harus memakai efek khusus","Jumlah tokoh terus ditambah"],answer:1,explanation:"Kelayakan produksi mempertimbangkan sumber daya nyata seperti pemain, lokasi, waktu, dan properti."},
  {id:"audience",prompt:"Mengapa target penonton perlu ditentukan saat merancang program atau konten?",choices:["Agar pesan, gaya, dan pilihan format sesuai dengan penontonnya","Supaya naskah menjadi lebih panjang","Agar fakta dapat diubah sesuai selera","Supaya tidak perlu merencanakan visual"],answer:0,explanation:"Target penonton membantu menentukan bahasa, isi, gaya, dan format penyampaian."},
  {id:"fact",prompt:"Saat membuat konten faktual, penulis harus …",choices:["Memeriksa sumber dan membedakan fakta dari opini","Memilih klaim paling mengejutkan tanpa bukti","Menghapus konteks kutipan","Menganggap informasi viral pasti benar"],answer:0,explanation:"Informasi faktual harus diperiksa dan disampaikan dengan konteks yang tidak menyesatkan."},
  {id:"social-cta",prompt:"Fungsi ajakan bertindak (call to action) pada konten media sosial adalah …",choices:["Memberi langkah lanjutan yang jelas kepada penonton","Menggantikan pesan utama konten","Menyembunyikan sumber informasi","Menambah jumlah tokoh"],answer:0,explanation:"Ajakan bertindak memberi tahu penonton langkah relevan yang dapat mereka lakukan setelah melihat konten."},
  {id:"variety-duration",prompt:"Mengapa total durasi segmen variety show perlu diperiksa?",choices:["Agar rundown dan waktu perpindahan panggung sesuai durasi acara","Agar semua segmen memiliki isi yang sama","Supaya cue tidak perlu ditulis","Agar host tidak perlu menutup acara"],answer:0,explanation:"Durasi tiap segmen dan perpindahan harus dihitung agar acara selesai sesuai waktu yang direncanakan."}
 ]}
];

const groupPracticeTasks=[
 {id:"group-story",title:"Ide, Premis, dan Logline",label:"KUIS 1",topic:"Mengembangkan gagasan menjadi inti cerita film",questions:[
  {id:"idea",prompt:"Langkah awal dalam mengembangkan cerita film adalah ...",choices:["Menulis credit title","Menentukan ide cerita","Memilih font naskah","Membuat daftar kru"],answer:1,explanation:"Ide cerita menjadi gagasan awal yang kemudian dikembangkan menjadi premis, logline, dan tahap berikutnya."},
  {id:"premise",prompt:"Premis yang kuat memuat hubungan antara ...",choices:["Tokoh, tujuan, konflik, dan taruhan","Kamera, lensa, dan lampu","Judul, poster, dan credit","Lokasi, anggaran, dan jadwal saja"],answer:0,explanation:"Premis memadatkan inti cerita melalui tokoh, tujuan, konflik, dan konsekuensi atau taruhan."},
  {id:"logline",prompt:"Fungsi logline adalah ...",choices:["Menulis semua dialog film","Merangkum cerita dalam satu kalimat yang menarik","Mencatat kebutuhan konsumsi kru","Menggantikan shooting script"],answer:1,explanation:"Logline merangkum inti cerita secara singkat agar arah dan daya tarik cerita mudah dipahami."},
  {id:"stakes",prompt:"Dalam premis atau logline, taruhan menjelaskan ...",choices:["Berapa biaya produksi","Apa akibat jika tokoh gagal","Berapa jumlah halaman","Siapa sutradaranya"],answer:1,explanation:"Taruhan menunjukkan konsekuensi yang dihadapi tokoh jika tujuan tidak tercapai."},
  {id:"specific",prompt:"Ide cerita yang spesifik sebaiknya memiliki ...",choices:["Tokoh, kejadian, dan persoalan yang jelas","Sebanyak mungkin tokoh tambahan","Pesan moral tanpa peristiwa","Judul tanpa konflik"],answer:0,explanation:"Ide yang spesifik lebih mudah dikembangkan karena tokoh, kejadian, dan persoalannya dapat dibayangkan."}
 ]},
 {id:"group-outline",title:"Sinopsis dan Struktur Tiga Babak",label:"KUIS 2",topic:"Menyusun perkembangan konflik dari awal sampai akhir",questions:[
  {id:"synopsis",prompt:"Sinopsis yang baik menceritakan ...",choices:["Daftar properti saja","Awal, perkembangan konflik, klimaks, dan penyelesaian","Semua dialog secara lengkap","Pendapat penonton"],answer:1,explanation:"Sinopsis memberi gambaran cerita yang utuh dan menunjukkan hubungan sebab-akibat."},
  {id:"act1",prompt:"Babak I biasanya berisi ...",choices:["Pengenalan dunia tokoh dan peristiwa pemicu","Kredit penutup","Semua hambatan terakhir","Daftar kebutuhan kamera"],answer:0,explanation:"Babak I mengenalkan tokoh dan keadaan awal, lalu menghadirkan pemicu yang menggerakkan cerita."},
  {id:"act2",prompt:"Fokus utama Babak II adalah ...",choices:["Konfrontasi, usaha tokoh, dan hambatan yang meningkat","Memperkenalkan semua kru","Menutup semua konflik sebelum klimaks","Menulis daftar pemeran"],answer:0,explanation:"Babak II menguji tokoh melalui usaha, hambatan, pilihan sulit, dan krisis."},
  {id:"act3",prompt:"Babak III berisi ...",choices:["Pengenalan lokasi","Klimaks, pilihan tokoh, dan resolusi","Daftar sponsor","Ide yang belum dikembangkan"],answer:1,explanation:"Babak III menghadirkan tindakan puncak, hasil konflik, dan keadaan setelahnya."},
  {id:"turning-point",prompt:"Titik balik adalah ...",choices:["Peristiwa atau keputusan yang mengubah arah usaha tokoh","Perpindahan font","Nama pemeran utama","Jeda antarparagraf"],answer:0,explanation:"Titik balik mengubah arah cerita dan memaksa tokoh menghadapi keadaan baru."}
 ]},
 {id:"group-shooting",title:"Shooting Script",label:"KUIS 3",topic:"Format naskah film dan kesiapan produksi",questions:[
  {id:"slugline",prompt:"INT. RUANG KELAS - PAGI adalah contoh ...",choices:["Logline","Scene heading atau slugline","Sinopsis","Catatan sutradara"],answer:1,explanation:"Slugline menunjukkan interior atau eksterior, lokasi, dan waktu adegan."},
  {id:"visual-action",prompt:"Aksi dalam shooting script sebaiknya ditulis sebagai ...",choices:["Pikiran tokoh yang tidak terlihat","Hal yang dapat dilihat atau didengar kamera","Pesan moral panjang","Penjelasan anggaran"],answer:1,explanation:"Aksi film harus dapat diwujudkan dan diamati melalui gambar atau suara."},
  {id:"dialogue",prompt:"Dialog yang efektif sebaiknya ...",choices:["Mengulang semua yang sudah terlihat","Memiliki tujuan atau konflik dan sesuai karakter","Selalu sepanjang mungkin","Tidak berhubungan dengan cerita"],answer:1,explanation:"Dialog yang baik terdengar alami, memiliki fungsi, dan menunjukkan keinginan atau konflik tokoh."},
  {id:"scene-order",prompt:"Sebelum menulis shooting script secara lengkap, kelompok sebaiknya ...",choices:["Menyusun urutan adegan","Memilih poster film","Menulis credit title","Membeli semua properti"],answer:0,explanation:"Urutan adegan membantu kelompok memeriksa alur, konflik, dan kesinambungan cerita."},
  {id:"production",prompt:"Shooting script yang siap diproduksi perlu memperhatikan ...",choices:["Lokasi, pemain, properti, waktu, dan kebutuhan suara atau cahaya","Jumlah pengikut media sosial saja","Warna sampul naskah saja","Nama penonton"],answer:0,explanation:"Naskah perlu mempertimbangkan kebutuhan produksi agar cerita dapat diwujudkan secara realistis."}
 ]}
];

function practiceTasksForUser(user=currentUser){
 return user?.role==="group"?groupPracticeTasks:practiceTasks;
}

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
 const currentPracticeTasks=practiceTasksForUser();
 const isGroupPractice=currentUser?.role==="group";
 const getRecord=taskId=>{
  const record=state.practice?.[taskId];
  if(!record||typeof record!=="object"||Array.isArray(record)) return {answers:{},submitted:false};
  return {answers:record.answers&&typeof record.answers==="object"?record.answers:{},submitted:record.submitted===true};
 };
 const completedCount = currentPracticeTasks.filter(task => getRecord(task.id).submitted).length;
 const percent = Math.round((completedCount / currentPracticeTasks.length) * 100);
 const taskCards = currentPracticeTasks.map(task => {
  const record=getRecord(task.id);
  const answeredCount=task.questions.filter(question=>Number.isInteger(record.answers[question.id])).length;
  const review=record.submitted?`<div class="quiz-review" aria-live="polite">
    <strong>Hasil: ${task.questions.filter(question=>record.answers[question.id]===question.answer).length} dari ${task.questions.length} benar</strong>
    ${task.questions.map((question,index)=>{
     const correct=record.answers[question.id]===question.answer;
     return `<p class="${correct?"quiz-correct":"quiz-incorrect"}"><b>${index+1}. ${correct?"Benar":"Belum tepat"}.</b> ${question.explanation}</p>`;
    }).join("")}
   </div>`:"";
  return `<article class="practice-card ${record.submitted ? "done" : ""}">
    <div class="practice-card-head">
      <div>
        <span class="practice-chip">${task.label}</span>
        <h4>${task.title}</h4>
      </div>
      <span class="practice-chip">${task.questions.length} soal</span>
    </div>
    <p class="quiz-topic">${task.topic}</p>
    <form class="practice-quiz" data-practice-form="${task.id}">
      ${task.questions.map((question,index)=>`<fieldset class="quiz-question">
        <legend>${index+1}. ${question.prompt}</legend>
        <div class="quiz-choices">${question.choices.map((choice,choiceIndex)=>{
         const inputId=`quiz-${task.id}-${question.id}-${choiceIndex}`;
         return `<label for="${inputId}" class="quiz-choice"><input id="${inputId}" type="radio" name="${task.id}-${question.id}" value="${choiceIndex}" data-practice-answer="${task.id}:${question.id}" ${record.answers[question.id]===choiceIndex?"checked":""}><span>${choice}</span></label>`;
        }).join("")}</div>
       </fieldset>`).join("")}
      <div class="quiz-submit-row"><span data-answered-count="${task.id}">${answeredCount} dari ${task.questions.length} dijawab${record.submitted?" · Sudah dikumpulkan":""}</span><button type="submit" data-practice-submit="${task.id}" ${answeredCount!==task.questions.length?"disabled":""}>${record.submitted?"Periksa Lagi":"Kumpulkan Jawaban"}</button></div>
    </form>
    ${review}
  </article>`;
 }).join("");

 panel.innerHTML = `
  <div class="practice-summary">
    <div class="practice-summary-header">
      <div>
        <p class="eyebrow">${isGroupPractice?"KUIS NASKAH FILM":"KUIS PEMBELAJARAN"}</p>
        <h3>${percent}%</h3>
      </div>
      <span class="summary-badge">${isGroupPractice?"Materi naskah film":"Latihan materi"}</span>
    </div>
    <div class="practice-bar"><i style="width:${percent}%"></i></div>
    <div class="practice-meta">
      <div><strong>${completedCount}</strong><span>kuis dikumpulkan</span></div>
      <div><strong>${currentPracticeTasks.length}</strong><span>total kuis</span></div>
      <div><strong>${currentPracticeTasks.length-completedCount}</strong><span>belum dikumpulkan</span></div>
    </div>
  </div>
  <div class="practice-list">${taskCards || '<p class="task-empty">Belum ada tugas.</p>'}</div>
 `;

 panel.querySelectorAll("[data-practice-answer]").forEach(input=>{
  input.addEventListener("change",()=>{
   const [taskId,questionId]=input.dataset.practiceAnswer.split(":");
   const record=getRecord(taskId);
   state.practice={...(state.practice||{}),[taskId]:{answers:{...record.answers,[questionId]:Number(input.value)},submitted:false}};
   const answeredCount=currentPracticeTasks.find(task=>task.id===taskId).questions.filter(question=>Number.isInteger(state.practice[taskId].answers[question.id])).length;
   const counter=panel.querySelector(`[data-answered-count="${taskId}"]`);
   const submit=panel.querySelector(`[data-practice-submit="${taskId}"]`);
   if(counter) counter.textContent=`${answeredCount} dari ${currentPracticeTasks.find(task=>task.id===taskId).questions.length} dijawab`;
   if(submit) submit.disabled=answeredCount!==currentPracticeTasks.find(task=>task.id===taskId).questions.length;
   const article=input.closest(".practice-card");
   article?.querySelector(".quiz-review")?.remove();
   save();
  });
 });
 panel.querySelectorAll("[data-practice-form]").forEach(form=>{
  form.addEventListener("submit",event=>{
   event.preventDefault();
   const taskId=form.dataset.practiceForm;
   const task=currentPracticeTasks.find(item=>item.id===taskId);
   const record=getRecord(taskId);
   if(!task||task.questions.some(question=>!Number.isInteger(record.answers[question.id]))) return;
   state.practice={...(state.practice||{}),[taskId]:{answers:record.answers,submitted:true}};
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
   ${module.learningPath?`<section class="module-learning-path" aria-labelledby="module-learning-title">
    <div class="module-section-heading"><span>04</span><h3 id="module-learning-title">Dari ide hingga tiga babak</h3></div>
    <p class="module-learning-intro">Ikuti langkah berikut secara berurutan. Contoh-contohnya memakai satu cerita yang sama agar terlihat bagaimana sebuah gagasan berkembang.</p>
    <div class="module-learning-list">${module.learningPath.map((step,index)=>`<article class="module-learning-step">
     <span class="module-learning-number">${String(index+1).padStart(2,"0")}</span>
     <div class="module-learning-content">
      <h4>${esc(step.title)}</h4>
      <p>${esc(step.description)}</p>
      <div class="module-learning-example"><strong>CONTOH CERITA</strong><p>${esc(step.example).replace(/\\n|\n/g,"<br>")}</p></div>
      <div class="module-learning-task"><strong>COBA KERJAKAN</strong><p>${esc(step.task)}</p></div>
     </div>
    </article>`).join("")}</div>
   </section>`:""}
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
 const currentStages=activeStages();
 document.getElementById("stageList").innerHTML=currentStages.map((s,i)=>{const done=Boolean(state.completed[s.id]);return `<button class="stage-item ${i===state.current?"active":""} ${done?"completed":""}" onclick="goStage(${i})"><b>${String(i+1).padStart(2,"0")}</b><span>${s.title}</span><small>${done?"Isian lengkap":"Belum lengkap"}</small></button>`;}).join("");
}

function renderForm(){
 const currentStages=activeStages();
 state.current=Math.min(state.current,currentStages.length-1);
 const s=currentStages[state.current];
 document.getElementById("stageNumber").textContent=String(state.current+1).padStart(2,"0");
 document.getElementById("stageTitle").textContent=s.title;
 document.getElementById("stageDesc").textContent=s.desc;
 document.getElementById("formArea").innerHTML=s.questions.map(q=>{
  const val=state.answers[q[0]]||"";
  const control=q[3]==="textarea"?`<textarea id="${q[0]}" rows="8" placeholder="${esc(q[2])}">${esc(val)}</textarea>`:`<input id="${q[0]}" type="${esc(q[3])}" value="${esc(val)}" placeholder="${esc(q[2])}">`;
  return `<div class="question" data-field="${esc(q[0])}"><label for="${q[0]}">${q[1]}</label>${control}${q[3]!=="textarea"?`<small>${esc(q[2])}</small>`:""}</div>`;
 }).join("");
 s.questions.forEach(q=>{document.getElementById(q[0]).value=state.answers[q[0]]||"";document.getElementById(q[0]).addEventListener("input",e=>{state.answers[q[0]]=e.target.value;if(aiReviewStages.includes(s.id))state.completed[s.id]=false;feedback();scheduleAiReview(s.id);save();renderStages();updateStats();});});
 feedback();
 if(aiReviewStages.includes(s.id)) scheduleAiReview(s.id);
 document.getElementById("prevBtn").disabled=state.current===0;
 document.getElementById("nextBtn").textContent=state.current===currentStages.length-1?"Selesaikan Naskah ✓":"Simpan & Lanjut →";
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

 if(currentUser?.role==="group"){
  if(stageId==="ide"){
   add("Ide cukup spesifik", hasSubstance(text("ide"), 7, 6) && !isFiller(text("ide")), "Jelaskan kejadian, tokoh, dan persoalan yang membuat ide ini menarik.", "ide");
  }else if(stageId==="premis"){
   add("Tokoh dan tujuan jelas", hasSubstance(text("tokoh"), 2, 2) && hasSubstance(text("tujuan"), 4, 3), "Jelaskan siapa tokohnya dan apa yang ingin dicapai.", "tokoh");
   add("Konflik dan taruhan jelas", hasSubstance(text("konflik"), 4, 3) && hasSubstance(text("taruhan"), 4, 3), "Jelaskan hambatan utama dan akibat jika tokoh gagal.", "konflik");
  }else if(stageId==="logline"){
   add("Logline satu kalimat", text("logline").split(/\s+/).filter(Boolean).length >= 12 && text("logline").length <= 400, "Gabungkan tokoh, tujuan, konflik, dan taruhan dalam satu kalimat.", "logline");
  }
  if(checks.length) return checks;
 }

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
  const irony = text("ironiCerita");
  const visual = text("gambaranVisual");
  const title = text("judulMenarik");
  add("Ironi / hal tak terduga teridentifikasi", hasSubstance(irony, 5, 4) && !isFiller(irony), "Jelaskan pertentangan yang spesifik antara harapan atau keadaan awal dengan hal tak terduga yang terjadi.", "ironiCerita");
  add("Ironi / paradoks", matches("logline", /\b(justru|padahal|ironis(?:nya)?|berlawanan|kontras|sebaliknya|bertolak belakang|kontradiksi)\b/i) && hasSubstance(line, 9, 8), "Tampilkan pertentangan yang menarik dan bangun kalimat dengan detail cerita. Kata penanda ironi di dalam kalimat acak belum cukup.", "logline");
  add("Gambaran visual yang konkret", hasSubstance(visual, 5, 4) && matches("gambaranVisual", /\b(di|ke|dari|menyelinap|berlari|menyembunyikan|mengejar|membangun|membongkar|menghapus|menyelamatkan|merekam|menukar|terjebak|panggung|sekolah|rumah|stasiun|studio|desa|kota|hutan|kapal|kamera|surat|rekaman|pintu|jembatan)\b/i) && !isFiller(visual), "Jelaskan aksi visual beserta tempat atau benda yang spesifik dan dapat direkam kamera.", "gambaranVisual");
  add("Judul menarik dan sesuai cerita", title.length >= 3 && title.length <= 60 && hasSubstance(title, 2, 2) && !/^(judul|film|kisah|cerita saya|tanpa judul)$/i.test(title) && !isFiller(title), "Buat judul ringkas dan khas yang selaras dengan konflik atau ironi cerita, bukan label umum.", "judulMenarik");
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
 }else if(stageId === "threeActs"){
  add("Babak I terisi", hasSubstance(text("babak1"), 20, 15), "Jelaskan dunia awal tokoh dan peristiwa pemicu yang memulai konflik.", "babak1");
  add("Babak II terisi", hasSubstance(text("babak2"), 30, 20), "Jelaskan usaha tokoh, hambatan yang meningkat, dan krisis.", "babak2");
  add("Babak III terisi", hasSubstance(text("babak3"), 20, 15), "Jelaskan klimaks, pilihan tokoh, dan akibatnya.", "babak3");
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
 const stage=activeStages().find(item=>item.id===stageId);
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
  const correctionIssues=review.issues.filter(issue=>issue.correction);
  if(correctionIssues.length){
   const correctionPanel=document.createElement("div");
   correctionPanel.className="ai-corrections";
   correctionPanel.innerHTML=`<strong>Contoh perbaikan</strong><ul>${correctionIssues.map(issue=>`<li>${esc(issue.correction)}</li>`).join("")}</ul>`;
   panel.appendChild(correctionPanel);
  }
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
  const correctionMessages=aiReview
   ? aiReview.issues.filter(issue=>issue.field===field&&issue.blocking&&issue.correction).map(issue=>`Perbaikan konkret: ${issue.correction}`)
   : [];
  if(previousNote) previousNote.remove();
  question.classList.toggle("has-error",messages.length>0);
  if(messages.length){
   control.setAttribute("aria-invalid","true");
   const note=document.createElement("small");
   note.className="field-feedback";
   note.id=`${field}-feedback`;
   note.textContent=messages.concat(correctionMessages).join(" ");
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
 const stage=activeStages().find(item=>item.id===stageId);
 const characters=stage.questions.reduce((total,question)=>total+String(state.answers[question[0]]||"").trim().length,0);
 latestAiReview={stageId,fingerprint,status:characters<25?"idle":"waiting",review:null,error:null};
 feedback();
 if(characters<25) return;
 const cooldown=Math.max(1200,aiReviewMinimumInterval-(Date.now()-lastAiReviewAt));
 aiReviewTimer=setTimeout(()=>{if(sequence===aiReviewSequence)requestAiReview(stageId);},cooldown);
}

function requestAiReview(stageId, force=false){
 const stage=activeStages().find(item=>item.id===stageId);
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
 const stage = activeStages()[state.current];
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

window.retryAiReview=()=>requestAiReview(activeStages()[state.current]?.id,true);
function goStage(i){const currentStages=activeStages();if(i<0||i>=currentStages.length)return;if(i!==state.current){clearTimeout(aiReviewTimer);if(activeAiReviewController)activeAiReviewController.abort();activeAiReview=null;aiReviewSequence++;}state.current=i;save();renderStages();renderForm();document.getElementById("workspace").scrollIntoView({behavior:"smooth"});}
document.getElementById("prevBtn").onclick=()=>goStage(Math.max(0,state.current-1));
document.getElementById("nextBtn").onclick=()=>{
 const currentStages=activeStages();
 const stageIndex=state.current;
 const s=currentStages[stageIndex];
 s.questions.forEach(q=>{const el=document.getElementById(q[0]);state.answers[q[0]]=el.value;});
 state.completed[s.id]=s.questions.every(q=>(state.answers[q[0]]||"").trim().length>0);
 if(state.current<currentStages.length-1) state.current++; save();renderStages();renderForm();updateStats();
 document.getElementById("workspace").scrollIntoView({behavior:"smooth"});
};
function updateStats(){
 const total=activeStages().length, done=activeStages().filter(stage=>state.completed[stage.id]).length;
 const percent=Math.round(done/total*100);document.getElementById("heroPercent").textContent=percent+"%";
 const currentPracticeTasks=practiceTasksForUser();
 const practiceDone=currentPracticeTasks.filter(task=>state.practice?.[task.id]?.submitted===true).length;
 document.getElementById("stats").innerHTML=[["Progress",percent+"%",currentUser?.role==="group"?"Tahap shooting script":"Tahap screenplay"],["Tahap selesai",done,"dari "+total],["Jawaban",Object.keys(state.answers).filter(k=>state.answers[k].trim()).length,"isian tersimpan"],["Praktik",`${practiceDone}/${currentPracticeTasks.length}`,"latihan mandiri"]].map(x=>`<div class="stat"><strong>${x[1]}</strong><span>${x[0]} — ${x[2]}</span></div>`).join("");
 const studentProgress=document.getElementById("studentProgress");
 if(studentProgress) studentProgress.innerHTML=`<strong>${percent}%</strong><span>${done} dari ${total} tahap selesai</span><div class="student-progress-track"><i style="width:${percent}%"></i></div>`;
}

async function renderSubmissions(){
 if(currentUser?.role!=="teacher") return;
 const individualSubmissions=document.getElementById("individualSubmissions");
 const groupSubmissions=document.getElementById("groupSubmissions");
 const individualAssessments=document.getElementById("individualAssessments");
 const groupAssessments=document.getElementById("groupAssessments");
 if(!individualSubmissions||!groupSubmissions||!individualAssessments||!groupAssessments) return;
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
 const renderSubmission=user=>{
  const userState=user.state||defaultState(), done=stagesForUser(user).filter(stage=>userState.completed?.[stage.id]).length;
  const answers=Object.values(userState.answers||{}).filter(value=>String(value).trim()).length;
  const identity=user.role==="group"?`Kelompok · ${esc((user.members||[]).join(", ")||"Anggota belum dicatat")}`:`Siswa individu · No. absen ${esc(user.absence||"-")}`;
  return `<div class="submission ${user.role==="group"?"submission-group":""}"><div><strong>${esc(user.name||user.username)}</strong><small>${identity}</small></div><b>${Math.round(done/stagesForUser(user).length*100)}%</b><span>${answers} jawaban tersimpan</span></div>`;
 };
 const individuals=students.filter(user=>user.role==="student");
 const groups=students.filter(user=>user.role==="group");
 individualSubmissions.innerHTML=individuals.length?individuals.map(renderSubmission).join(""):"<p class=\"empty-state\">Belum ada hasil siswa individu.</p>";
 groupSubmissions.innerHTML=groups.length?groups.map(renderSubmission).join(""):"<p class=\"empty-state\">Belum ada hasil kelompok.</p>";
 const renderAssessment=user=>{
  const userState=user.state||defaultState();
  const userPracticeTasks=practiceTasksForUser(user);
  const records=userPracticeTasks.map(task=>{
   const savedRecord=userState.practice?.[task.id];
   const answers=savedRecord&&typeof savedRecord==="object"&&!Array.isArray(savedRecord)&&savedRecord.answers&&typeof savedRecord.answers==="object"&&!Array.isArray(savedRecord.answers)?savedRecord.answers:{};
   const submitted=savedRecord?.submitted===true;
   const correct=task.questions.filter(question=>submitted&&answers[question.id]===question.answer).length;
   return {task,answers,submitted,correct};
  });
  const submittedRecords=records.filter(record=>record.submitted);
  const correctCount=submittedRecords.reduce((total,record)=>total+record.correct,0);
  const possibleCount=submittedRecords.reduce((total,record)=>total+record.task.questions.length,0);
  const percent=possibleCount?Math.round(correctCount/possibleCount*100):null;
  const identity=user.role==="group"
   ?`Kelompok · ${esc((user.members||[]).join(", ")||"Anggota belum dicatat")}`
   :`Siswa individu · No. absen ${esc(user.absence||"-")}`;
  const quizScores=records.map(({task,submitted,correct})=>`<div class="assessment-quiz-score"><span>${esc(task.label)} · ${esc(task.title)}</span><strong>${submitted?`${correct}/${task.questions.length}`:"Belum dikumpulkan"}</strong></div>`).join("");
  const responseDetails=records.map(({task,answers,submitted,correct})=>{
   const questionDetails=task.questions.map((question,index)=>{
    const choiceIndex=answers[question.id];
    const hasAnswer=Number.isInteger(choiceIndex)&&choiceIndex>=0&&choiceIndex<question.choices.length;
    const chosenAnswer=hasAnswer?esc(question.choices[choiceIndex]):"Belum dijawab";
    const isCorrect=hasAnswer&&choiceIndex===question.answer;
    return `<li class="${submitted?(isCorrect?"assessment-answer-correct":"assessment-answer-incorrect"):""}"><strong>${index+1}. ${esc(question.prompt)}</strong><span>Jawaban siswa: ${chosenAnswer}</span>${submitted?`<span>Kunci jawaban: ${esc(question.choices[question.answer])}</span>`:""}</li>`;
   }).join("");
   return `<section class="assessment-quiz-detail"><h5>${esc(task.label)} · ${esc(task.title)} <span>${submitted?`Nilai ${correct}/${task.questions.length}`:"Belum dinilai"}</span></h5><ol>${questionDetails}</ol></section>`;
  }).join("");
  return `<article class="assessment-student ${user.role==="group"?"assessment-group":""}">
   <div class="assessment-student-heading"><div><strong>${esc(user.name||user.username)}</strong><small>${identity}</small></div><div class="assessment-total"><b>${percent===null?"—":`${percent}%`}</b><span>${percent===null?"Belum ada penilaian":`${correctCount}/${possibleCount} benar`}</span></div></div>
   <p class="assessment-completion">${submittedRecords.length} dari ${userPracticeTasks.length} kuis dikumpulkan</p>
   <div class="assessment-scores">${quizScores}</div>
   <details class="assessment-details"><summary>Lihat jawaban siswa${submittedRecords.length?" dan kunci jawaban":""}</summary><div class="assessment-detail-list">${responseDetails}</div></details>
  </article>`;
 };
 individualAssessments.innerHTML=individuals.length?individuals.map(renderAssessment).join(""):"<p class=\"empty-state\">Belum ada penilaian siswa individu.</p>";
 groupAssessments.innerHTML=groups.length?groups.map(renderAssessment).join(""):"<p class=\"empty-state\">Belum ada penilaian siswa kelompok.</p>";
}
document.getElementById("refreshSubmissionsBtn").onclick=renderSubmissions;

/* function portfolioText(){
 const portfolioStages=stagesForUser(currentUser);
 return `SCRIPT LAB — PORTFOLIO PENULISAN NASKAH\n\n`+portfolioStages.map((s,i)=>`[${String(i+1).padStart(2,"0")}] ${s.title.toUpperCase()}\n`+s.questions.map(q=>`${q[1]}:\n${state.answers[q[0]]||"(belum diisi)"}`).join("\n\n")).join("\n\n--------------------------------\n\n")+`\n\nPRODUCER CHALLENGE:\n${state.challenge?state.challenge.join(" | "):"Belum dibuat"}`;
}
function portfolioText(){
 const portfolioStages=stagesForUser(currentUser);
 return `SCRIPT LAB — PORTFOLIO PENULISAN NASKAH\n\n`+portfolioStages.map((s,i)=>`[${String(i+1).padStart(2,"0")}] ${s.title.toUpperCase()}\n`+s.questions.map(q=>`${q[1]}:\n${state.answers[q[0]]||"(belum diisi)"}`).join("\n\n")).join("\n\n--------------------------------\n\n`);
}
*/
function portfolioText(){return stagesForUser(currentUser).map((s,i)=>"["+String(i+1).padStart(2,"0")+"] "+s.title.toUpperCase()+"\n"+s.questions.map(q=>q[1]+":\n"+(state.answers[q[0]]||"(belum diisi)")).join("\n\n")).join("\n\n--------------------------------\n\n");}
function pdfText(value){
 return String(value||"").normalize("NFKD").replace(/[\u0300-\u036f]/g,"").replace(/[“”„]/g,'"').replace(/[‘’]/g,"'").replace(/[—–]/g,"-").replace(/…/g,"...").replace(/•/g,"*").replace(/[^\x09\x0A\x0D\x20-\x7E]/g,"");
}
function pdfEscape(value){return pdfText(value).replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)");}
function wrapPdfLine(value,maxChars=92){
 const words=pdfText(value).split(/\s+/).filter(Boolean), lines=[]; let line="";
 words.forEach(word=>{
  if(word.length>maxChars){
   if(line){lines.push(line);line="";}
   for(let i=0;i<word.length;i+=maxChars) lines.push(word.slice(i,i+maxChars));
  }else if(!line) line=word;
  else if((line+" "+word).length<=maxChars) line+=" "+word;
  else{lines.push(line);line=word;}
 });
 if(line) lines.push(line);
 return lines.length?lines:[""];
}
function portfolioPdfBytes(portfolioState=state,portfolioUser=currentUser){
 const stagesForPdf=stagesForUser(portfolioUser), done=stagesForPdf.filter(stage=>portfolioState.completed?.[stage.id]).length;
 const lines=["SCRIPT LAB - PORTFOLIO PENULISAN NASKAH","",`Nama: ${portfolioUser?.name||"Siswa"}`,portfolioUser?.role==="group"?`Anggota kelompok: ${(portfolioUser.members||[]).join(", ")||"Belum dicatat"}`:`Nomor absen: ${portfolioUser?.absence||"-"}`,`Progress: ${Math.round(done/stagesForPdf.length*100)}%`,`Tanggal: ${new Date().toLocaleDateString("id-ID")}`,""];
 stagesForPdf.forEach((stage,index)=>{
  lines.push(`${String(index+1).padStart(2,"0")} - ${stage.title.toUpperCase()}`,"");
  stage.questions.forEach(question=>{lines.push(question[1]); const answer=portfolioState.answers?.[question[0]]||"Belum diisi"; String(answer).split(/\r?\n/).forEach(row=>lines.push(...wrapPdfLine(row))); lines.push("");});
 });
 lines.push("PRODUCER CHALLENGE",...wrapPdfLine(portfolioState.challenge?portfolioState.challenge.join(" - "):"Belum dibuat"));
 const pageWidth=595,pageHeight=842,margin=48,lineHeight=13,firstY=790,lastY=58,perPage=Math.floor((firstY-lastY)/lineHeight),pages=[];
 for(let i=0;i<lines.length;i+=perPage) pages.push(lines.slice(i,i+perPage));
 const objects=[]; const addObject=body=>{objects.push(body);return objects.length;};
 const fontId=addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
 const pageIds=[]; const contentIds=[];
 pages.forEach(pageLines=>{
  const commands=["BT","/F1 9.5 Tf",`${margin} ${firstY} Td`,"13 TL"];
  pageLines.forEach((line,index)=>{if(index) commands.push("T*");commands.push(`(${pdfEscape(line)}) Tj`);});
  commands.push("ET"); contentIds.push(addObject(`<< /Length ${commands.join("\n").length} >>\nstream\n${commands.join("\n")}\nendstream`)); pageIds.push(addObject(""));
 });
 const pagesId=addObject(`<< /Type /Pages /Kids [${pageIds.map(id=>`${id} 0 R`).join(" ")}] /Count ${pageIds.length} >>`);
 pageIds.forEach((id,index)=>{objects[id-1]=`<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /Font << /F1 ${fontId} 0 R >> >> /Contents ${contentIds[index]} 0 R >>`;});
 const catalogId=addObject(`<< /Type /Catalog /Pages ${pagesId} 0 R >>`);
 let pdf="%PDF-1.4\n%\xE2\xE3\xCF\xD3\n", offsets=[0];
 objects.forEach((body,index)=>{offsets.push(new TextEncoder().encode(pdf).length);pdf+=`${index+1} 0 obj\n${body}\nendobj\n`;});
 const xrefOffset=new TextEncoder().encode(pdf).length; pdf+=`xref\n0 ${objects.length+1}\n0000000000 65535 f \n`; offsets.slice(1).forEach(offset=>{pdf+=`${String(offset).padStart(10,"0")} 00000 n \n`;}); pdf+=`trailer\n<< /Size ${objects.length+1} /Root ${catalogId} 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;
 return new TextEncoder().encode(pdf);
}
function downloadPortfolioPdf(portfolioState=state,portfolioUser=currentUser){
 const blob=new Blob([portfolioPdfBytes(portfolioState,portfolioUser)],{type:"application/pdf"}),url=URL.createObjectURL(blob),link=document.createElement("a");
 link.href=url; link.download=`portfolio-${pdfText(portfolioUser?.name||"siswa").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"siswa"}.pdf`; document.body.appendChild(link); link.click(); link.remove(); setTimeout(()=>URL.revokeObjectURL(url),1000);
}
function portfolioHtml(portfolioState=state,portfolioUser=currentUser){
 const portfolioStages=stagesForUser(portfolioUser);
 const done=portfolioStages.filter(stage=>portfolioState.completed?.[stage.id]).length, percent=Math.round(done/portfolioStages.length*100);
 const answerSections=portfolioStages.map((stage,index)=>`<section class="stage"><div class="stage-title"><span>${String(index+1).padStart(2,"0")}</span><h2>${esc(stage.title)}</h2></div>${stage.questions.map(question=>`<div class="answer"><h3>${esc(question[1])}</h3><p>${esc(portfolioState.answers?.[question[0]]||"Belum diisi").replace(/\n/g,"<br>")}</p></div>`).join("")}</section>`).join("");
 const portfolioIdentity=portfolioUser?.role==="group"?`<div><b>Anggota kelompok</b><span>${esc((portfolioUser.members||[]).join(", ")||"Belum dicatat")}</span></div>`:`<div><b>Nomor absen</b><span>${esc(portfolioUser?.absence||"-")}</span></div>`;
 return `<!doctype html><html lang="id"><head><meta charset="UTF-8"><title>Portfolio - ${esc(portfolioUser?.name||"SCRIPT LAB")}</title><style>
 @page{size:A4;margin:18mm 20mm}*{box-sizing:border-box}body{margin:0;color:#20202a;background:#eeeae3;font:12pt/1.55 "Courier New",Courier,monospace}.sheet{width:210mm;max-width:100%;margin:24px auto;background:#fffdf8;padding:20mm 18mm;box-shadow:0 16px 40px rgba(32,32,42,.14)}.cover{min-height:245mm;display:flex;flex-direction:column;justify-content:space-between;border-bottom:2px solid #20202a;padding-bottom:18mm}.eyebrow{color:#20202a;font-size:10pt;font-weight:bold;letter-spacing:.08em;margin:0 0 18mm}.cover h1{font:700 25pt/1.2 "Courier New",Courier,monospace;margin:0 0 10mm;text-transform:uppercase}.cover h1 em{font-style:normal}.cover p{max-width:150mm;margin:0;text-align:justify}.meta{display:grid;grid-template-columns:repeat(3,1fr);gap:5mm;margin-top:16mm}.meta div{background:#f1eee8;border:1px solid #bdb8ad;padding:4mm;min-height:20mm}.meta b{display:block;font-size:9pt;text-transform:uppercase;letter-spacing:.06em;margin-bottom:2mm}.meta span{display:block;font-size:10pt;overflow-wrap:anywhere}.stage{break-inside:auto;border-bottom:1px solid #bdb8ad;padding:10mm 0}.stage-title{display:flex;align-items:baseline;gap:8mm;border-bottom:1px solid #20202a;padding-bottom:4mm;margin-bottom:8mm}.stage-title span{font-weight:bold;min-width:12mm}.stage-title h2{font-size:15pt;line-height:1.3;margin:0;text-transform:uppercase}.answer{margin:7mm 0;break-inside:avoid}.answer h3{font-size:10pt;line-height:1.35;margin:0 0 3mm;text-transform:uppercase}.answer p{margin:0;white-space:pre-wrap;text-align:justify;overflow-wrap:anywhere}.challenge{margin-top:10mm;padding:6mm;border:1px solid #20202a;background:#f1eee8}.challenge h2{margin:0 0 3mm;font-size:14pt;text-transform:uppercase}.challenge p{margin:0;white-space:pre-wrap;text-align:justify}.print-actions{position:fixed;top:18px;right:18px;display:flex;flex-wrap:wrap;justify-content:flex-end;gap:8px;z-index:5}.print-actions button{border:1px solid #20202a;border-radius:3px;padding:10px 14px;background:#20202a;color:white;font:700 10pt "Courier New",Courier,monospace;cursor:pointer}.print-actions button:first-child{background:#fffdf8;color:#20202a}@media print{body{background:white}.sheet{width:auto;margin:0;max-width:none;padding:0;box-shadow:none}.print-actions{display:none}.cover{min-height:245mm}}
 </style></head><body><div class="print-actions"><button onclick="window.opener.downloadPortfolioPdf()">Unduh PDF langsung</button><button onclick="window.print()">Cetak / Simpan dari browser</button><button onclick="window.close()">Tutup</button></div><main class="sheet"><section class="cover"><div><p class="eyebrow">SCRIPT LAB / PORTFOLIO PENULISAN NASKAH</p><h1>${esc(portfolioUser?.name||"Siswa")}<br><em>Portfolio</em></h1><p>Dokumentasi proses pengembangan ide menjadi naskah yang siap diproduksi.</p></div><div class="meta">${portfolioIdentity}<div><b>Progress</b><span>${percent}%</span></div><div><b>Tanggal</b><span>${new Date().toLocaleDateString("id-ID")}</span></div></div></section>${answerSections}<div class="challenge"><h2>Producer Challenge</h2><p>${esc(portfolioState.challenge?portfolioState.challenge.join(" • "):"Belum dibuat")}</p></div></main></body></html>`;
}
function openPortfolio(){
 const selectedKey=document.getElementById("portfolioStudent")?.value;
 const selectedUser=selectedKey?users[selectedKey]:currentUser;
 if(currentUser?.role==="teacher"&&!selectedUser){alert("Pilih siswa atau kelompok terlebih dahulu.");return;}
 const portfolioWindow=window.open("","_blank","width=1000,height=800");
 if(!portfolioWindow){alert("Izinkan pop-up browser untuk membuka portfolio.");return;}
 const selectedState=selectedUser.state||defaultState();
 portfolioWindow.document.open();portfolioWindow.document.write(portfolioHtml(selectedState,selectedUser).replace(/<div class="challenge">[\s\S]*?<\/div><\/main>/,"</main>"));portfolioWindow.document.close();
 portfolioWindow.downloadPortfolioPdf=()=>downloadPortfolioPdf(selectedState,selectedUser);
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
 const role=document.getElementById("loginRole").value;
 const isStudent=role==="student";
 const isGroup=role==="group";
 const isTeacher=role==="teacher";
 const authScreen=document.getElementById("authScreen");
 const authCard=document.getElementById("authCard");
 authScreen.classList.remove("role-student","role-group","role-teacher");
 authScreen.classList.add(`role-${role}`);
 authCard.classList.remove("role-student","role-group","role-teacher");
 authCard.classList.add(`role-${role}`);
 document.getElementById("loginEyebrow").textContent=isStudent?"SCRIPT LAB / SISWA INDIVIDU":isGroup?"SCRIPT LAB / KERJA KELOMPOK":"SCRIPT LAB / RUANG GURU";
 document.getElementById("loginTitleMain").textContent=isStudent?"Mulai":isGroup?"Berkarya":"Pantau";
 document.getElementById("loginTitleAccent").textContent=isStudent?"menulis.":isGroup?"bersama.":"kelas.";
 document.getElementById("loginLead").textContent=isStudent?"Masuk dengan nama dan nomor absen untuk melanjutkan perjalanan menulis naskah.":isGroup?"Masuk bersama tim dengan nama kelompok, daftar anggota, dan PIN kelompok.":"Masuk ke ruang guru untuk melihat progres siswa dan membuka portfolio kelas.";
 document.getElementById("absenceField").hidden=!isStudent;
 document.getElementById("passwordField").hidden=isStudent;
 document.getElementById("groupMembersField").hidden=!isGroup;
 document.getElementById("loginAbsence").required=isStudent;
 document.getElementById("loginPassword").required=!isStudent;
 document.getElementById("loginPassword").minLength=isGroup?4:0;
 document.getElementById("loginPassword").type=isGroup?"text":"password";
 document.getElementById("loginPassword").inputMode=isGroup?"numeric":"";
 document.getElementById("loginPassword").autocomplete=isGroup?"off":"current-password";
 document.getElementById("groupMembers").required=false;
 document.getElementById("usernameLabel").textContent=isStudent?"Nama lengkap":isGroup?"Nama kelompok":"Nama guru";
 document.getElementById("loginUsername").placeholder=isStudent?"Masukkan nama lengkap siswa":isGroup?"Contoh: Kelompok Produksi 1":"Farhan Desri Yanto";
 document.getElementById("passwordLabel").textContent=isGroup?"PIN pilihan kelompok":"Password";
 document.getElementById("loginPassword").placeholder=isGroup?"Tentukan PIN yang mudah diingat":"Masukkan password guru";
 document.getElementById("loginHint").textContent=isStudent?"Akun individu menyimpan progres atas nama dan nomor absenmu.":isGroup?"Kelompok bebas menentukan PIN sendiri (minimal 4 karakter; angka disarankan). Ingat PIN ini untuk masuk kembali. Saat pertama masuk, isi 1–15 nama anggota.":"Dashboard guru menampilkan progres individu dan kelompok yang tersimpan online.";
}
document.getElementById("loginRole").onchange=updateLoginFields;
document.getElementById("loginForm").onsubmit=e=>{
 e.preventDefault();
 const role=document.getElementById("loginRole").value, name=document.getElementById("loginUsername").value.trim(), normalizedName=name.toLowerCase(), absence=document.getElementById("loginAbsence").value.trim(), password=document.getElementById("loginPassword").value;
 const username=role==="student"?`siswa-${absence}-${normalizedName.replace(/[^a-z0-9]+/g,"-")}`:normalizedName;
 const teacherAccounts={
   "farhan desri yanto":"051202",
   "sapto agung nugroho":"197009022005011009"
 };
 const valid=(role==="teacher"&&teacherAccounts[normalizedName]===password)||(role==="student"&&name.length>=2&&/^[0-9]+$/.test(absence)&&Number(absence)>0);
 if(!valid){document.getElementById("loginError").textContent=role==="student"?"Masukkan nama lengkap dan nomor absen yang benar.":"Nama guru atau password tidak sesuai.";return;}
 if(!users[username]) users[username]={username,name,absence,role,state:defaultState()};
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
  if(details?.message==="Invalid group account details") throw new Error("Detail kelompok tidak valid. Periksa nama kelompok, PIN minimal 4 karakter, dan daftar 1–15 anggota.");
  throw new Error(`Supabase gagal memproses login kelompok (${response.status}). ${details?.message||"Periksa supabase-schema.sql dan coba lagi."}`);
 }
 const result=await response.json();
 if(!result.authenticated){
  if(result.reason==="members_required") throw new Error("Isi nama 1–15 anggota kelompok, satu nama per baris.");
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
 if(name.length<3||slug.length<2||accessCode.trim().length<4||(members&&(members.length>15||members.some(member=>member.length>100)))){
  errorElement.textContent="Isi nama kelompok dan PIN minimal 4 karakter. Jika mengisi daftar anggota, masukkan maksimal 15 nama dan setiap nama maksimal 100 karakter.";
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
 document.body.classList.toggle("group-mode",currentUser.role==="group");
 const isGroup=currentUser.role==="group";
 document.querySelector("#home .eyebrow").textContent=isGroup?"RUANG KERJA KELOMPOK":"ON AIR / WRITING ROOM";
 document.querySelector("#home h1").innerHTML=isGroup?"Berkarya<br><em>bersama.</em><br>Siap tayang.":"Mulai menulis.<br><em>Jadi cerita.</em><br>Siap tayang.";
 document.querySelector("#home .lead").textContent=isGroup?"Bangun satu cerita bersama tim, dari ide pertama sampai shooting script yang siap diproduksi.":"Ruang kreatif untuk mengembangkan ide, menulis naskah, dan belajar proses produksi film—satu tahap, satu karya.";
 document.querySelector("#workspace .eyebrow").textContent=isGroup?"02 / COLLABORATIVE WRITING ROOM":"02 / WRITING ROOM";
 document.querySelector("#workspace .section-note").textContent=isGroup?"Susun cerita bersama secara bertahap. Setiap tahap menjadi fondasi untuk tahap berikutnya.":"Pilih tahap, jawab pertanyaan, lalu gunakan feedback untuk melakukan revisi.";
 document.querySelector("#practice .eyebrow").textContent=isGroup?"03 / KUIS NASKAH FILM":"03 / LATIHAN MANDIRI";
 document.getElementById("authScreen").classList.add("hidden");document.getElementById("sessionLabel").textContent=`${currentUser.name||currentUser.username} · ${currentUser.role==="teacher"?"Guru":currentUser.role==="group"?"Kelompok":"Siswa individu"}`;
 document.querySelector('nav a[href="#teacher"]').hidden=currentUser.role!=="teacher";
 renderJourney();renderStages();renderForm();renderPracticeBoard();updateStats();
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
