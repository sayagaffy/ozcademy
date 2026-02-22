
--------------------------------------------------------------------------------

# AGENTS.md - OZCADEMY Enterprise EdTech

## 🎯 Visi & Konteks Proyek
Proyek ini adalah OZCADEMY, platform EdTech & Mentorship skala Enterprise untuk pasar Indonesia (mendukung model bisnis B2C dan B2B/Kampus). Platform ini memiliki VOD berbasis langganan bulanan dan Live Class interaktif berbasis *pay-per-session*.
**Tujuan Agen:** Mengubah desain UI statis (dari Google Stitch) menjadi komponen dinamis yang fungsional, dan membangun backend performa tinggi.

## 🛠 Tech Stack Utama
- **Frontend:** React 18 (dengan TypeScript) menggunakan arsitektur **Feature-Sliced Design (FSD)**.
- **Styling:** Tailwind CSS v3 (kode dari Google Stitch).
- **State Management:** Redux Toolkit (RTK) & RTK Query.
- **Backend:** Golang (Go 1.21+) dengan arsitektur Loosely Coupled Monolith.
- **Komunikasi:** gRPC & Protocol Buffers (gRPC-Web untuk frontend).
- **Video & Live:** Cloudflare R2 (VOD HLS Transcoding) dan LiveKit (WebRTC Live Class).

## 🚧 Guardrails & Aturan Mutlak (DILARANG DILANGGAR)
1. **Hukum FSD:** DILARANG KERAS melanggar aturan dependensi Feature-Sliced Design. Layer bawah (`shared`, `entities`) tidak boleh mengimpor layer di atasnya (`features`, `widgets`, `pages`, `app`).
2. **Keamanan:** DILARANG men-commit *secrets*, API Keys, atau token ke dalam kode. Gunakan `.env` dan panggil via `os.Getenv()`.
3. **TypeScript:** DILARANG KERAS menggunakan `@ts-ignore` atau `any`. Semua tipe data harus dideklarasikan secara eksplisit (gunakan `interface`).
4. **Backend Go:** Cegah *Escape to Heap*. Hindari penggunaan `interface{}` yang tidak perlu untuk meminimalisir beban *Garbage Collector* saat konkurensi tinggi.
5. **UI & Styling:** JANGAN membuat file CSS eksternal baru. Gunakan kembalian *utility classes* Tailwind CSS dari desain Stitch.

## 🧠 Progressive Disclosure & Context7
Agen tidak boleh menebak API pihak ketiga. Agen diwajibkan:
1. Menggunakan **Context7 MCP** untuk membaca dokumentasi terbaru. 
   - Gunakan ID `/livekit/components-react` untuk antarmuka video.
   - Gunakan ID `/videojs/http-streaming` untuk pemutar VOD.
2. Saat menjumpai tugas spesifik, periksa dan muat instruksi dari `.agent/skills/<nama-skill>/SKILL.md` sebelum mulai menulis kode.

## 💻 Terminal Commands (SOP Verifikasi)
Agen WAJIB menjalankan perintah ini sebelum merencanakan atau menyelesaikan *Pull Request* (PR):
- **Install Dependensi:** `npm install` (Frontend) | `go mod tidy` (Backend)
- **Linting & FSD Check:** `npm run lint` (Frontend) | `golangci-lint run` (Backend)
- **Type Checking:** `npm run type-check` (Frontend)
- **Testing:** `npm run test` (Frontend) | `go test ./... -v` (Backend)

## 🔄 Git & Collaboration Workflow
- Terapkan pola **Interactive Plan**: Analisis *codebase*, buat rencana, dan **tunggu persetujuan user** sebelum menulis kode.
- Format *Commit* harus menggunakan *Conventional Commits*: `<type>(<scope>): <pesan>` (Contoh: `feat(booking): add livekit room generation`).
- Pastikan semua tes hijau (sukses) sebelum menginisiasi pembuatan Pull Request.


--------------------------------------------------------------------------------
