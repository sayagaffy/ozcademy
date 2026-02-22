---
name: fsd-slicer
description: Converts Google Stitch HTML/Tailwind static files into React/Vue components using Feature-Sliced Design (FSD) architecture. Use when building UI, frontend pages, or translating mockups.
---

# Feature-Sliced Design (FSD) UI Slicer

## Misi
Kamu bertugas mengubah kode HTML/Tailwind statis hasil ekspor Google Stitch menjadi komponen React/Vue yang interaktif dengan aturan FSD.

## Aturan Mutlak
1. **Dilarang Menambah CSS Baru:** Gunakan *utility classes* Tailwind bawaan dari Stitch.
2. **Hukum FSD:** Patuhi arsitektur DAG (Directed Acyclic Graph). Layer bawah DILARANG mengimpor layer atas.
3. **Pecah Komponen:** Jangan biarkan file UI lebih dari 300 baris. Pecah menjadi komponen kecil di folder `shared/ui`.

## Workflow Slicing
1. **Analisis:** Baca file HTML Stitch yang diberikan user.
2. **Identifikasi FSD:** Tentukan mana bagian yang masuk ke `pages` (halaman utama), `widgets` (gabungan UI seperti Sidebar), dan `shared` (tombol, input).
3. **Eksekusi:** Buat komponen React/Vue dengan TypeScript (`interface` wajib).
4. **Validasi:** Pastikan tidak ada class Tailwind yang terhapus agar desain *pixel-perfect* dengan Stitch
