import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authApi } from '../../../entities/user/api/authApi';
import { useUserStore } from '../../../entities/user/model/userStore';
import { setToken } from '../../../shared/api/base';
import { Button } from '../../../shared/ui/Button/Button';
import { Input } from '../../../shared/ui/Input/Input';

export function LoginForm() {
    const navigate = useNavigate();
    const location = useLocation();
    const successMessage = location.state?.message;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Global State (Zustand)
    const setAuth = useUserStore((state) => state.setAuth);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const response = await authApi.login({ email, password });

            // 1. Save Token to Local Storage
            setToken(response.token);

            // 2. Update Global State
            // Assuming we decode JWT to get user later, or API returns user object.
            // For now, updating auth status to true.
            setAuth(null, true);

            // 3. Redirect to Dashboard
            navigate('/student/explore');
        } catch (err: any) {
            setError(err.message || 'Email atau kata sandi salah.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full">
            <div className="mb-10">
                <h1 className="text-3xl font-bold tracking-tighter uppercase mb-2">Selamat Datang</h1>
                <p className="text-slate-500 text-xs tracking-widest uppercase">Otentikasi Identitas Digital Anda</p>
            </div>

            {successMessage && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 text-green-500 text-sm rounded-xl">
                    {successMessage}
                </div>
            )}

            {error && (
                <div
                    className="mb-6 p-4 bg-red-500/10 border border-red-500/20 text-red-500 text-sm rounded-xl flex items-center gap-3"
                    role="alert"
                    aria-live="assertive"
                    aria-atomic="true"
                >
                    <span className="material-symbols-outlined text-lg">error</span>
                    <span>{error}</span>
                </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
                <Input
                    id="email"
                    type="email"
                    label="Email"
                    subLabel="[SYS_PENDING_INPUT]"
                    placeholder="nama@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-invalid={!!error ? "true" : "false"}
                />

                <div className="space-y-2">
                    <div className="flex justify-between items-end">
                        <label className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase" htmlFor="password">Kata Sandi</label>
                        <Link to="/forgot-password" className="text-[9px] font-bold text-primary hover:text-white transition-colors uppercase tracking-widest">Lupa Sandi?</Link>
                    </div>
                    <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        className="mt-0"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        aria-invalid={!!error ? "true" : "false"}
                    />
                </div>

                <Button type="submit" className="w-full rounded-xl" size="lg" disabled={isLoading}>
                    {isLoading ? 'MEMPROSES...' : 'Masuk'}
                </Button>
            </form>

            <div className="relative my-10">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/5"></div>
                </div>
                <div className="relative flex justify-center">
                    <span className="bg-background-dark px-4 text-[10px] font-bold text-slate-600 tracking-[0.5em]">ATAU</span>
                </div>
            </div>

            <button type="button" className="w-full border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 text-white py-4 rounded-xl font-bold text-xs tracking-[0.1em] transition-all duration-300 flex items-center justify-center gap-3 uppercase cursor-pointer">
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                </svg>
                Lanjutkan dengan Google
            </button>

            <p className="mt-10 text-center text-slate-500 text-[11px] tracking-wide">
                Belum punya akun?
                <Link to="/register" className="text-primary font-bold hover:underline underline-offset-4 ml-1">Daftar sekarang</Link>
            </p>

            <div className="mt-16 flex items-center justify-center gap-8 opacity-20 grayscale text-[9px] font-mono tracking-widest uppercase">
                <span>Node: Login_V2</span>
                <span className="w-1 h-1 bg-white rounded-full"></span>
                <span>Status: Secure</span>
                <span className="w-1 h-1 bg-white rounded-full"></span>
                <span>103.1 FM</span>
            </div>
        </div>
    );
}
