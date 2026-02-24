import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateBooking } from '../api/useCreateBooking';

interface BookingFormProps {
    mentorId?: string;
}

export const BookingForm = ({ mentorId }: BookingFormProps) => {
    const navigate = useNavigate();
    const { createBooking, isLoading, error } = useCreateBooking();

    // Default price & session for the first tier
    const [price, setPrice] = useState(500000);
    const [sessionType, setSessionType] = useState('Privat 1-on-1');
    const [scheduleDate, setScheduleDate] = useState('');
    const [scheduleTime, setScheduleTime] = useState('');
    const [goalsDescription, setGoalsDescription] = useState('');
    const [portfolioLink, setPortfolioLink] = useState('');

    const handleTierChange = (newPrice: number, newSessionType: string) => {
        setPrice(newPrice);
        setSessionType(newSessionType);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!mentorId) return;

        const success = await createBooking({
            mentorId,
            sessionType,
            scheduleDate,
            scheduleTime,
            goalsDescription,
            portfolioLink: portfolioLink || undefined,
            price
        });

        if (success) {
            navigate('/student/booking-success');
        }
    };

    return (
        <div className="sticky top-12 bg-card-dark border border-white/10 rounded-3xl p-8 glow-card">
            <div className="mb-8">
                <div className="text-[8px] font-mono text-primary uppercase tracking-[0.3em] mb-2">
                    SCHEDULING_SYSTEM
                </div>
                <h2 className="text-2xl font-black text-white uppercase tracking-tight">
                    Pesan Sesi Live
                </h2>
                <p className="text-xs text-slate-500 mt-2 uppercase tracking-widest font-bold">
                    Isi Formulir Pemesanan
                </p>
                {error && (
                    <div className="mt-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest">
                        ERROR: {error}
                    </div>
                )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4 mb-8">
                    <label className="block cursor-pointer group">
                        <input
                            type="radio"
                            name="tier"
                            className="hidden peer"
                            checked={sessionType === 'Privat 1-on-1'}
                            onChange={() => handleTierChange(500000, 'Privat 1-on-1')}
                        />
                        <div className="p-5 rounded-2xl border border-white/10 peer-checked:border-primary peer-checked:bg-primary/5 group-hover:border-white/20 transition-all relative">
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-xs font-black text-white uppercase tracking-wider">
                                    Privat 1-on-1
                                </span>
                                <div className="w-4 h-4 rounded-full border-2 border-white/20 flex items-center justify-center peer-checked:border-primary">
                                    <div className="w-2 h-2 rounded-full bg-primary opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                                </div>
                            </div>
                            <div className="text-lg font-black text-primary">
                                Rp 500rb
                            </div>
                            <div className="text-[9px] font-mono text-slate-500 mt-2 uppercase">
                                Durasi 60 Menit • Video Call
                            </div>
                        </div>
                    </label>

                    <label className="block cursor-pointer group">
                        <input
                            type="radio"
                            name="tier"
                            className="hidden peer"
                            checked={sessionType === 'Grup Maks 5'}
                            onChange={() => handleTierChange(250000, 'Grup Maks 5')}
                        />
                        <div className="p-5 rounded-2xl border border-white/10 peer-checked:border-primary peer-checked:bg-primary/5 group-hover:border-white/20 transition-all relative">
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-xs font-black text-white uppercase tracking-wider">
                                    Grup Maks 5
                                </span>
                                <div className="w-4 h-4 rounded-full border-2 border-white/20 flex items-center justify-center peer-checked:border-primary">
                                    <div className="w-2 h-2 rounded-full bg-primary opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                                </div>
                            </div>
                            <div className="text-lg font-black text-primary">
                                Rp 250rb
                            </div>
                            <div className="text-[9px] font-mono text-slate-500 mt-2 uppercase">
                                Durasi 90 Menit • Interaktif
                            </div>
                        </div>
                    </label>

                    <label className="block cursor-pointer group">
                        <input
                            type="radio"
                            name="tier"
                            className="hidden peer"
                            checked={sessionType === 'Grup Maks 10'}
                            onChange={() => handleTierChange(100000, 'Grup Maks 10')}
                        />
                        <div className="p-5 rounded-2xl border border-white/10 peer-checked:border-primary peer-checked:bg-primary/5 group-hover:border-white/20 transition-all relative">
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-xs font-black text-white uppercase tracking-wider">
                                    Grup Maks 10
                                </span>
                                <div className="w-4 h-4 rounded-full border-2 border-white/20 flex items-center justify-center peer-checked:border-primary">
                                    <div className="w-2 h-2 rounded-full bg-primary opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                                </div>
                            </div>
                            <div className="text-lg font-black text-primary">
                                Rp 100rb
                            </div>
                            <div className="text-[9px] font-mono text-slate-500 mt-2 uppercase">
                                Durasi 90 Menit • Webinar Mode
                            </div>
                        </div>
                    </label>
                </div>

                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block ml-1">
                                Tanggal Sesi
                            </label>
                            <input
                                required
                                type="date"
                                value={scheduleDate}
                                onChange={(e) => setScheduleDate(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors [color-scheme:dark]"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block ml-1">
                                Waktu
                            </label>
                            <input
                                required
                                type="time"
                                value={scheduleTime}
                                onChange={(e) => setScheduleTime(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors [color-scheme:dark]"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block ml-1">
                            Tujuan Mentoring (Goals)
                        </label>
                        <textarea
                            required
                            rows={3}
                            placeholder="Ceritakan apa yang ingin Anda capai di sesi ini..."
                            value={goalsDescription}
                            onChange={(e) => setGoalsDescription(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-primary transition-colors resize-none"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block ml-1">
                            Link Portofolio / File (Opsional)
                        </label>
                        <input
                            type="url"
                            placeholder="https://"
                            value={portfolioLink}
                            onChange={(e) => setPortfolioLink(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-primary transition-colors"
                        />
                    </div>
                </div>

                <button
                    disabled={isLoading}
                    type="submit"
                    className={`w-full py-5 rounded-2xl text-[11px] font-black uppercase tracking-[0.3em] transition-all
                        ${isLoading
                            ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                            : 'bg-primary text-background-dark shadow-[0_10px_30px_rgba(242,208,13,0.2)] hover:shadow-[0_15px_40px_rgba(242,208,13,0.3)] hover:-translate-y-1 active:translate-y-0'
                        }`}
                >
                    {isLoading ? 'MEMPROSES...' : 'KONFIRMASI BOOKING'}
                </button>
            </form>

            <div className="mt-6 flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[14px] text-slate-600">
                    verified_user
                </span>
                <span className="text-[8px] font-mono text-slate-600 uppercase tracking-widest">
                    TRANSACTION_SECURED: END-TO-END
                </span>
            </div>
        </div>
    );
};
