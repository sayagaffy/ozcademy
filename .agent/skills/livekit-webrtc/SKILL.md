---
name: livekit-webrtc
description: Implements real-time video conferencing for live mentoring sessions using LiveKit WebRTC. Use when working on live class, video call, streaming features, or booking session execution.
---

# LiveKit WebRTC Integration

## Misi
Membangun infrastruktur kelas *Live* interaktif menggunakan LiveKit (Distributed SFU), bukan Zoom atau Google Meet.

## Penggunaan Context7 (Wajib)
Sebelum menulis kode React untuk antarmuka video, kamu **WAJIB** menggunakan Context7 MCP untuk mengambil dokumentasi terbaru.
- **Library ID:** Gunakan ID `/livekit/components-react` untuk mendapatkan API React terbaru.

## Aturan Backend (Golang)
- Gunakan `livekit-server-sdk-go` untuk men- *generate* token otentikasi saat siswa/mentor masuk ke *room*.
- Pastikan *Room Name* digenerate secara unik berdasarkan ID *Booking* di *database*.

## Workflow
- [ ] Buat endpoint Go untuk *generate* Token LiveKit.
- [ ] Panggil Context7 MCP untuk membaca dokumentasi `LiveKitRoom` komponen.
- [ ] Buat UI ruang kelas (*camera, mic, screen share*) menggunakan komponen bawaan LiveKit yang sudah di- *styling* dengan Tailwind tema gelap OZCADEMY.
