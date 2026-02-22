---
name: hls-vod-pipeline
description: Processes uploaded video modules into HLS format (.m3u8) using FFmpeg and uploads to Cloudflare R2. Use when working on video uploads, VOD playback, or media processing.
---

# VOD HLS & Cloudflare R2 Pipeline

## Misi
Membangun sistem *Video on Demand* yang adaptif, anti-bajak, dan membebaskan biaya *egress* (keluar) server menggunakan kombinasi FFmpeg dan Cloudflare R2.

## Aturan Backend (Golang)
1. **Background Job:** Proses *upload* video dari mentor tidak boleh memblokir *thread* utama. Gunakan *goroutine* dan *message queue* untuk konversi video.
2. **FFmpeg Transcoding:** Video mentah (.mp4) WAJIB dikonversi menjadi format HLS (`.m3u8` playlist dan `.ts` segments) dengan resolusi adaptif (1080p, 720p, 360p).
3. **Cloudflare R2:** Semua file hasil HLS diunggah ke *bucket* Cloudflare R2 menggunakan kompatibilitas AWS S3 SDK di Golang.

## Penggunaan Context7 (Frontend)
- Saat membangun *video player* di React/Vue, WAJIB panggil Context7 MCP dengan ID `/videojs/http-streaming` untuk memutar file `.m3u8`.
- Gunakan antarmuka *native* yang warnanya disesuaikan dengan tema Emas/Gelap OZCADEMY.


--------------------------------------------------------------------------------
