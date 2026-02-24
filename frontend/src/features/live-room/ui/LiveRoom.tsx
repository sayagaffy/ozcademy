import { LiveKitRoom, VideoConference } from '@livekit/components-react';
import '@livekit/components-styles';
import { useLiveToken } from '../api/useLiveToken';

interface LiveRoomProps {
    bookingId: string;
}

export const LiveRoom = ({ bookingId }: LiveRoomProps) => {
    const { token, serverUrl, isLoading, error } = useLiveToken(bookingId);

    if (isLoading) {
        return (
            <div className="flex w-full h-[600px] bg-background-darker items-center justify-center rounded-2xl border border-white/5">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin"></div>
                    <p className="text-slate-400 text-sm tracking-widest uppercase font-bold">Menyiapkan Ruang Kelas...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col w-full h-[600px] bg-red-950/20 items-center justify-center rounded-2xl border border-red-500/20 p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Gagal Masuk Kelas</h3>
                <p className="text-slate-400 max-w-md">{error}</p>
            </div>
        );
    }

    if (!token || !serverUrl) {
        return (
            <div className="flex w-full h-[600px] bg-background-darker items-center justify-center rounded-2xl border border-white/5">
                <p className="text-slate-400 text-sm">Akses Token tidak tersedia. ServerUrl atau Token kosong.</p>
            </div>
        );
    }

    return (
        <div className="w-full h-[800px] rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] bg-[#111] relative">
            <LiveKitRoom
                video={true}
                audio={true}
                token={token}
                serverUrl={serverUrl}
                data-lk-theme="default"
                connect={true}
            >
                <VideoConference />
            </LiveKitRoom>
        </div>
    );
};
