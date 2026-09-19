# SCRIPT LAB
## Laboratorium Digital Penulisan Naskah — Broadcasting & Perfilman

SCRIPT LAB adalah web app pembelajaran berbasis HTML, CSS, dan JavaScript untuk membantu siswa mengembangkan penulisan naskah dari ide hingga screenplay.

### Fitur
- Script Journey: Ide → Premis → Logline → Sinopsis → Karakter → Alur → Scene → Dialog → Screenplay
- Form penulisan interaktif
- Penyimpanan otomatis menggunakan localStorage
- Progress dashboard
- Feedback otomatis berdasarkan kelengkapan draft
- Producer Challenge acak
- Export portfolio siswa menjadi TXT
- Login terpisah untuk siswa dan guru
- Dashboard guru untuk melihat ringkasan hasil kerja siswa
- Bisa dijalankan offline setelah file tersedia

### Cara menjalankan
1. Ekstrak folder `SCRIPT-LAB`.
2. Buka folder di VS Code.
3. Klik kanan `index.html`.
4. Pilih **Open with Live Server**.
5. Website akan terbuka di browser.

Tidak membutuhkan database atau instalasi server.

### Login demo
 
### Supabase
File `supabase-schema.sql` berisi tabel dan policy yang harus dijalankan satu kali melalui **Supabase → SQL Editor**. Setelah itu aplikasi akan menyimpan dan mengambil progres siswa melalui Supabase. Publishable key berada di `script.js`; jangan pernah memasukkan `service_role key` ke file frontend.

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
Versi ini sengaja dibuat tanpa backend agar langsung mudah digunakan di sekolah. Data tersimpan di browser masing-masing perangkat. Untuk pengumpulan seluruh siswa secara terpusat, versi berikutnya dapat ditambah Firebase/Supabase/Google Sheets.
