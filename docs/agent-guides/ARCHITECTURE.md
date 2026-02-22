# OZCADEMY System Architecture & Flowcharts

Dokumen ini adalah referensi arsitektur absolut untuk platform OZCADEMY (B2C & B2B Enterprise EdTech). Agen AI WAJIB menjadikan dokumen ini sebagai acuan saat merancang arsitektur kode, batasan sistem, dan integrasi pihak ketiga.

## 1. Frontend Architecture: Feature-Sliced Design (FSD)
Frontend dibangun menggunakan React/Vue dengan pola **Feature-Sliced Design (FSD)**. Terdapat aturan *Directed Acyclic Graph* (DAG) yang mutlak: layer di bawah DILARANG KERAS mengimpor layer di atasnya.

```mermaid
graph TD
    subgraph Feature-Sliced Design [Aturan Dependensi FSD - Arah Panah Adalah Arah Import]
        L1[App Layer <br> Router, Global Store, Init]
        L2[Pages Layer <br> Halaman Utuh: Checkout, Katalog]
        L3[Widgets Layer <br> Blok UI Kompleks: Header, Sidebar]
        L4[Features Layer <br> Interaksi User: AddToCart, Booking]
        L5[Entities Layer <br> Model Bisnis: User, Course, Mentor]
        L6[Shared Layer <br> UI Kit, Axios, Helpers]
        
        L1 --> L2
        L2 --> L3
        L3 --> L4
        L4 --> L5
        L5 --> L6
    end
    
    classDef layer fill:#2D3748,stroke:#F6AD55,stroke-width:2px,color:#fff;
    class L1,L2,L3,L4,L5,L6 layer;

2. Backend Architecture: Loosely Coupled Monolith
Backend dibangun menggunakan Golang dengan komunikasi internal via antarmuka yang terdefinisi ketat, dan komunikasi eksternal (ke frontend) menggunakan gRPC-Web.

graph TD
    subgraph Loosely Coupled Monolith (Golang)
        API[gRPC API Gateway]
        
        subgraph Logical Boundaries
            B1(Identity & Auth)
            B2(Subscription & Billing)
            B3(VOD Catalog & Media)
            B4(Live Class Scheduling)
            B5(B2B Institution Management)
        end
        
        API --> B1
        API --> B2
        API --> B3
        API --> B4
        API --> B5
        
        B2 -.->|Async Event| B4
        B4 -.->|Async Event| B1
        
        DB[(PostgreSQL Database <br> Separate Logical Schemas)]
        B1 --> DB
        B2 --> DB
        B3 --> DB
        B4 --> DB
        B5 --> DB
    end

3. Video & Media Infrastructure
Infrastruktur sangat berfokus pada efisiensi biaya (zero egress fee) dan performa rendah latensi. Sistem memisahkan secara fundamental antara VOD dan kelas Live.

flowchart LR
    subgraph VOD [Sistem Video on Demand - Langganan Bulanan]
        V1(Mentor Unggah Video) --> V2[Backend Go: Trigger Background Job]
        V2 --> V3{FFmpeg Transcoding}
        V3 -->|Ubah ke .m3u8| V4[Format HLS Adaptif Anti-Bajak]
        V4 --> V5[(Cloudflare R2 Bucket <br> Zero Egress Fee)]
        V5 --> V6(Native Video.js Player di Frontend)
    end

    subgraph LIVE [Sistem Kelas Live - Bayar Per Sesi]
        L1(Siswa & Mentor Masuk Jadwal) --> L2[Otentikasi Token via Backend Go]
        L2 --> L3{LiveKit WebRTC Server}
        L3 -->|Distributed SFU| L4[Pertukaran Video/Audio Latensi < 100ms]
        L4 --> L5(Native Live Room UI di Browser)
    end

4. Business Logic: Keuangan & Royalti
Perhatikan pemisahan antara model bisnis langganan VOD (sistem pro-rata/Pool) dan model booking Mentor (transaksi langsung).

graph TD
    User([Siswa B2C / B2B]) --> A{Pilih Layanan?}
    
    A -->|Akses VOD & Audio| B[Beli Langganan Bulanan / Lisensi B2B]
    B --> C[Uang Masuk ke Subscription Pool Bulanan]
    C --> D[Siswa Menonton Modul VOD Bebas]
    D --> E[Sistem Hitung Total Menit Tonton per Mentor]
    E --> F[Akhir Bulan: Hitung Pro-Rata Royalti dari Pool]
    F --> G[Payout ke Rekening Mentor via CMS]

    A -->|Sesi Live Mentor| H[Pilih Kapasitas: 1-on-1 / Grup]
    H --> I[Pilih Jadwal & Checkout via Payment Gateway]
    I --> J[Uang Masuk Sebagai Pendapatan Tiket Live]
    J --> K[Sesi Live Selesai]
    K --> L[Sistem Potong Komisi Platform]
    L --> G


---
