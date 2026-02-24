import { BookOpen, Calendar, ChevronRight, Clock, Video } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { LiveRoom } from '../../../../features/live-room/ui/LiveRoom';

export const MyLearningPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const activeBookingId = searchParams.get('booking_id');

    // Mock data for demonstration
    const mockBookings = [
        {
            id: 'mock-booking-1',
            mentorName: 'Aris Budiman',
            sessionType: 'Privat 1-on-1',
            date: '10 Okt 2026',
            time: '10:00 WIB',
            status: 'upcoming'
        }
    ];

    const handleJoinClass = (id: string) => {
        setSearchParams({ booking_id: id });
    };

    if (activeBookingId) {
        return (
            <div className="space-y-6 animate-in fade-in duration-500">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-black text-white uppercase tracking-tight">KAMPUS LIVE</h1>
                        <p className="text-slate-400 mt-2">Sesi mentoring interaktif OZCADEMY.</p>
                    </div>
                    <button
                        onClick={() => setSearchParams({})}
                        className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors text-sm font-bold tracking-wider"
                    >
                        KEMBALI KE DAFTAR
                    </button>
                </div>

                <div className="bg-[#111] p-1 rounded-2xl border border-white/10">
                    <LiveRoom bookingId={activeBookingId} />
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div>
                <h1 className="text-3xl font-black text-white uppercase tracking-tight">PEMBELAJARANKU</h1>
                <p className="text-slate-400 mt-2">Pantau jadwal dan gabung sesi mentoring live Anda.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockBookings.map((booking) => (
                    <div key={booking.id} className="bg-background-darker rounded-2xl border border-white/10 p-6 flex flex-col hover:border-primary/50 transition-all group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-10 -mt-10 transition-all group-hover:bg-primary/20"></div>

                        <div className="flex items-center justify-between mb-4 relative z-10">
                            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider border border-primary/20">
                                {booking.sessionType}
                            </span>
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-white">
                                <Video className="w-5 h-5" />
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-1 relative z-10">{booking.mentorName}</h3>
                        <p className="text-slate-400 text-sm mb-6 relative z-10">Voice Acting Mastery</p>

                        <div className="space-y-3 mb-6 flex-1 relative z-10">
                            <div className="flex items-center text-slate-300 text-sm">
                                <Calendar className="w-4 h-4 mr-3 text-slate-500" />
                                {booking.date}
                            </div>
                            <div className="flex items-center text-slate-300 text-sm">
                                <Clock className="w-4 h-4 mr-3 text-slate-500" />
                                {booking.time}
                            </div>
                        </div>

                        <button
                            onClick={() => handleJoinClass(booking.id)}
                            className="w-full py-3 bg-white/5 hover:bg-primary hover:text-background-darker text-white rounded-xl transition-all font-bold text-sm tracking-widest flex items-center justify-center relative z-10 group/btn"
                        >
                            GABUNG KELAS MOCK
                            <ChevronRight className="w-4 h-4 ml-2 opacity-50 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all" />
                        </button>
                    </div>
                ))}
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center shrink-0">
                    <BookOpen className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1">
                    <h4 className="text-white font-bold mb-1">Masuk Kelas Asli (Database)</h4>
                    <p className="text-slate-400 text-sm">Masukkan ID Booking dari database PostgreSQL Anda untuk masuk ke ruangan spesifik LiveKit.</p>
                </div>
                <div className="flex w-full md:w-auto gap-2">
                    <input
                        type="text"
                        placeholder="UUID Booking..."
                        className="bg-background-dark border border-white/10 rounded-xl px-4 py-2 text-white text-sm focus:outline-none focus:border-primary w-full md:w-64"
                        id="custom-booking-id"
                    />
                    <button
                        onClick={() => {
                            const val = (document.getElementById('custom-booking-id') as HTMLInputElement).value;
                            if (val) handleJoinClass(val);
                        }}
                        className="px-6 py-2 bg-primary text-background-dark font-bold text-sm rounded-xl hover:shadow-[0_0_20px_rgba(242,208,13,0.3)] transition-all"
                    >
                        GABUNG
                    </button>
                </div>
            </div>
        </div>
    );
};
