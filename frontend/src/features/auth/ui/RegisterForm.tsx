import { Link } from 'react-router-dom';
import { Button } from '../../../shared/ui/Button/Button';
import { Input } from '../../../shared/ui/Input/Input';

export function RegisterForm() {
  return (
    <div className="w-full">
        <div className="mb-10 text-center lg:text-left">
            <h1 className="text-3xl font-bold tracking-tighter uppercase mb-2">DAFTAR AKUN BARU</h1>
            <p className="text-slate-500 text-[10px] tracking-[0.3em] uppercase">MULAI PERJALANAN DIGITAL ANDA</p>
        </div>

        <form className="space-y-5">
            <Input
                id="fullname"
                type="text"
                label="Nama Lengkap"
                subLabel="[ID_VERIFICATION]"
                placeholder="Masukkan nama lengkap"
            />

            <Input
                id="email"
                type="email"
                label="Email"
                subLabel="[COMM_LINK]"
                placeholder="nama@email.com"
            />

            <Input
                id="password"
                type="password"
                label="Kata Sandi"
                subLabel="[SECRET_KEY]"
                placeholder="Min. 8 Karakter"
            />

            <Button type="submit" className="w-full rounded-xl mt-4" size="lg">
                DAFTAR SEKARANG
            </Button>
        </form>

        <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/5"></div>
            </div>
            <div className="relative flex justify-center">
                <span className="bg-background-dark px-4 text-[10px] font-bold text-slate-600 tracking-[0.5em]">ATAU</span>
            </div>
        </div>

        <button className="w-full border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 text-white py-4 rounded-xl font-bold text-xs tracking-[0.1em] transition-all duration-300 flex items-center justify-center gap-3 uppercase cursor-pointer">
            <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
            </svg>
            Lanjutkan dengan Google
        </button>

        <p className="mt-8 text-center text-slate-500 text-[11px] tracking-wide">
            Sudah punya akun?
            <Link to="/login" className="text-primary font-bold hover:underline underline-offset-4 ml-1">Masuk di sini</Link>
        </p>

        <div className="mt-12 flex items-center justify-center gap-6 opacity-20 grayscale text-[8px] font-mono tracking-widest uppercase">
            <span>Node: Register_V2</span>
            <span className="w-1 h-1 bg-white rounded-full"></span>
            <span>Status: Open</span>
            <span className="w-1 h-1 bg-white rounded-full"></span>
            <span>Region: ID_JKT</span>
        </div>
    </div>
  );
}
