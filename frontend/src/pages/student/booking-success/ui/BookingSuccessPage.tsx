import { Link } from "react-router-dom";

export const BookingSuccessPage = () => {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center max-w-2xl mx-auto px-6 text-center">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-8 border border-primary/20">
                <span className="material-symbols-outlined text-5xl text-primary">
                    check_circle
                </span>
            </div>

            <h1 className="text-4xl font-black text-white uppercase tracking-tight mb-4">
                Booking Berhasil!
            </h1>

            <p className="text-slate-400 mb-10 leading-relaxed text-sm">
                Terima kasih! Sesi mentoring Anda telah dikonfirmasi dan dimasukkan ke dalam jadwal.
                Mentor akan segera mereview materi portofolio dan tujuan Anda sebelum sesi dimulai.
                Notifikasi lebih detail terkait tautan pertemuan akan dikirimkan ke email Anda.
            </p>

            <div className="flex gap-4">
                <Link
                    to="/student/explore/mentors"
                    className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-xl text-xs font-black uppercase tracking-widest border border-white/10 transition-colors"
                >
                    Eksplorasi Lagi
                </Link>
                <Link
                    to="/student/explore/modules"
                    className="px-8 py-4 bg-primary text-background-dark hover:bg-primary/90 rounded-xl text-xs font-black uppercase tracking-widest shadow-lg shadow-primary/20 transition-all font-bold"
                >
                    Lihat Modul
                </Link>
            </div>
        </div>
    );
};
