# SCRIPT LAB
## Laboratorium Digital Penulisan Naskah — Broadcasting & Perfilman

SCRIPT LAB adalah web app pembelajaran berbasis HTML, CSS, dan JavaScript untuk membantu siswa mengembangkan penulisan naskah dari ide hingga screenplay.

### Fitur
- Script Journey: Ide → Premis → Logline → Sinopsis → Karakter → Alur → Scene → Dialog → Screenplay
- Tahap Logline mencakup ironi/hal tak terduga, gambaran visual, judul menarik, satu kalimat logline, dan target penonton
- Materi modul Naskah Film bertahap dari ide cerita, premis, logline, sinopsis, karakter, alur, hingga struktur tiga babak, dengan contoh cerita dan latihan pada setiap tahap
- Form penulisan interaktif
- Penyimpanan otomatis menggunakan localStorage
- Progress dashboard
- Ulasan AI untuk ide cerita, premis, dan logline: menilai makna, konsistensi, dan hubungan sebab-akibat; kolom yang perlu direvisi ditandai merah dengan pertanyaan pemandu
- AI berfungsi sebagai pendamping belajar: memberi feedback dan pertanyaan revisi pada ide cerita, premis, dan logline; siswa tetap bebas membuka dan melanjutkan ke tahap mana pun
- Latihan mandiri berupa 4 kuis pilihan ganda tentang format naskah, pengembangan cerita, screenplay, dan produksi; jawaban tersimpan, dapat dinilai, dan dilengkapi pembahasan
- Producer Challenge acak
- Ekspor portfolio siswa/kelompok menjadi PDF langsung dengan pagination untuk naskah panjang; tersedia juga tampilan cetak browser
- Login siswa individu (nama + nomor absen), akun kerja kelompok (nama kelompok + nama anggota + PIN sederhana), dan guru
- Satu ruang kerja bersama per kelompok; hasil kerja individu dan kelompok dipantau terpisah di dashboard guru
- Dashboard guru menampilkan anggota kelompok serta mendukung ekspor portfolio individu/kelompok
- Dashboard guru menampilkan penilaian kuis pilihan ganda secara terpisah, termasuk nilai per kuis, nilai keseluruhan, jawaban siswa, dan kunci jawaban untuk kuis yang sudah dikumpulkan
- Aplikasi tetap dapat dibuka sebagai file lokal; fitur AI dan sinkronisasi memerlukan internet

### Cara menjalankan
1. Ekstrak folder `SCRIPT-LAB`.
2. Buka folder di VS Code.
3. Klik kanan `index.html`.
4. Pilih **Open with Live Server**.
5. Website akan terbuka di browser.

Website dapat dibuka sebagai file lokal, tetapi penyimpanan bersama dan ulasan AI memerlukan koneksi internet serta konfigurasi Supabase.

### Login demo
 
### Supabase
Jalankan seluruh `supabase-schema.sql` melalui **Supabase → SQL Editor** setelah perubahan. Skema ini menambahkan penyimpanan jenis akun, anggota kelompok, progres praktik, dan fungsi RPC untuk membuat/memeriksa PIN kelompok. Saat pertama kali masuk, kelompok mengisi nama kelompok, 1–15 nama anggota (satu nama per baris), dan membuat PIN pilihan sendiri minimal 4 karakter; PIN angka seperti `1234` disarankan agar mudah diingat. Tidak ada PIN yang ditetapkan aplikasi. Untuk masuk kembali, gunakan nama kelompok dan PIN yang sama; daftar anggota boleh dikosongkan atau diperbarui. PIN disimpan sebagai hash; setelah 10 percobaan gagal, login akun kelompok dikunci selama 15 menit. Semua anggota kelompok memakai satu progres/naskah bersama. Guru melihat akun individu dan kelompok secara terpisah di dashboard serta dapat membuka portfolio masing-masing.

Jika login kelompok menampilkan “fungsi login kelompok belum ditemukan”, jalankan ulang skema terbaru di SQL Editor. Jika aplikasi menyebut alamat Supabase tidak dapat dijangkau, cocokkan `SUPABASE_URL` di `script.js` dengan **Project URL** aktif pada pengaturan API proyek Supabase. Live Server tidak dapat memperbaiki URL proyek yang salah atau sudah tidak aktif.

Aplikasi memakai Supabase REST dari browser dan publishable key di `script.js`; jangan pernah memasukkan `service_role key` atau kunci OpenAI ke frontend. Skema demo saat ini memberi akses anon ke tabel `student_work` agar login siswa dapat menyimpan progres dan dashboard dapat membaca hasil. Login guru yang ada juga merupakan pemeriksaan frontend, bukan autentikasi server. Karena itu, jangan gunakan konfigurasi demo ini untuk data pribadi/rahasia atau produksi sebelum akses tabel dipindahkan ke Supabase Auth dan policy berbasis peran.

Ulasan AI memakai Supabase Edge Function `review-writing` dan OpenAI Responses API (`gpt-4.1-mini`). Kunci OpenAI disimpan sebagai secret di Supabase, bukan di Git atau browser. Draft jawaban yang sedang diperiksa (tanpa nama atau nomor absen) dikirim ke OpenAI; beri tahu siswa sebelum menggunakan fitur ini.

Untuk mengaktifkan ulasan AI:
1. Jalankan `supabase-schema.sql` melalui SQL Editor Supabase.
2. Pasang Supabase CLI, login dengan `supabase login`, lalu hubungkan folder proyek dengan `supabase link --project-ref <PROJECT_REF>`.
3. Simpan secret OpenAI: `supabase secrets set OPENAI_API_KEY=<OPENAI_API_KEY>`.
4. Deploy fungsi dari folder proyek: `supabase functions deploy review-writing --no-verify-jwt`.
5. Buka aplikasi melalui Live Server atau hosting web (bukan `file://` jika browser memblokir permintaan lintas-origin). Pastikan proyek Supabase dan OpenAI memiliki batas penggunaan/biaya yang sesuai.

Fungsi membatasi ukuran draft dan laju permintaan hingga 240 kali per menit per alamat IP, sementara browser membatasi ulasan otomatis menjadi paling banyak satu kali per 10 detik per sesi. Pemeriksaan membutuhkan internet; ketika AI tidak tersedia, aplikasi menampilkan kesalahan, tetapi siswa tetap dapat membuka dan melanjutkan tahap penulisan.

Data progres tersimpan di Supabase dan dicadangkan di `localStorage` browser. Dashboard guru dapat mengambil hasil siswa dari perangkat berbeda setelah skema Supabase dijalankan.
**Pertemuan awal**
- Guru menjelaskan masalah nyata dalam penulisan naskah.
- Siswa mengeksplorasi format naskah televisi.

**Tahap film**
- Siswa masuk ke Script Journey.
- Setiap tahap diisi dan direvisi.
- Guru melakukan konferensi singkat dengan kelompok/siswa.

**Producer Challenge**
- Siswa mendapatkan batasan produksi.
- Siswa merevisi naskah berdasarkan budget, lokasi, pemain, waktu, atau tuntutan visual.

**Produk akhir**
- Naskah film.
- Portfolio TXT.
- Presentasi/pitching.
- Jika memungkinkan, produksi film pendek.

### Catatan
Aplikasi tetap dapat dijalankan secara lokal dengan penyimpanan browser. Untuk login kelompok dan pemantauan terpusat lintas perangkat, Supabase harus tersedia dan skema di atas harus sudah diterapkan.
