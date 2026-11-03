import React, { useEffect } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { ShieldCheck, Mail, Lock, ArrowRight, AlertCircle } from 'lucide-react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <div className="bg-gray-50 font-sans antialiased text-gray-900 selection:bg-blue-600 selection:text-white flex h-screen w-full overflow-hidden">
            <Head title="Enterprise Portal Login" />

            {/* LEFT SIDE: Immersive Branding (Hidden on mobile) */}
            <div className="hidden lg:flex lg:w-1/2 relative bg-gray-950 items-center justify-center overflow-hidden">
                {/* Background Image */}
                <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop"
                    className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity"
                    alt="Industrial Facility"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-blue-900/60 to-transparent"></div>

                {/* Content */}
                <div className="relative z-10 p-16 max-w-2xl flex flex-col justify-end h-full w-full pb-24">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-400/30 text-sky-300 w-max mb-6 shadow-xl">
                        <ShieldCheck className="w-4 h-4" />
                        <span className="text-xs font-bold tracking-widest uppercase">Secure Enterprise Gateway</span>
                    </div>

                    <h1 className="text-5xl font-black text-white leading-tight mb-6 tracking-tight">
                        Global Operations <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">Command Center</span>
                    </h1>

                    <p className="text-lg text-gray-300 font-light leading-relaxed border-l-4 border-blue-500 pl-6">
                        Authorized access only. This system is actively monitored. All procurement, inventory, and logistics modifications are logged.
                    </p>
                </div>
            </div>

            {/* RIGHT SIDE: Login Form */}
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8 sm:p-12 md:p-24 bg-white relative">

                <div className="w-full max-w-md">
                    {/* Brand Logo */}
                    <div className="flex items-center gap-3 mb-12">
                        <div className="w-12 h-12">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
                                <defs>
                                    <linearGradient id="globe-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#1d4ed8" />
                                        <stop offset="100%" stopColor="#10b981" />
                                    </linearGradient>
                                </defs>
                                <circle cx="12" cy="12" r="10" stroke="url(#globe-gradient)" strokeWidth="2" />
                                <path d="M12 2v20" stroke="url(#globe-gradient)" strokeWidth="2" />
                                <ellipse cx="12" cy="12" rx="4.5" ry="10" stroke="url(#globe-gradient)" strokeWidth="2" />
                                <path d="M2 12h20" stroke="url(#globe-gradient)" strokeWidth="2" />
                                <path d="M3.34 7 C 8 10 16 10 20.66 7" stroke="url(#globe-gradient)" strokeWidth="2" strokeLinecap="round" />
                                <path d="M3.34 17 C 8 14 16 14 20.66 17" stroke="url(#globe-gradient)" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                        <div className="flex flex-col justify-center">
                            <span className="text-2xl font-black tracking-[0.15em] leading-none uppercase text-gray-900">Ameda</span>
                            <span className="text-[0.65rem] font-bold tracking-[0.4em] leading-none mt-1 uppercase text-emerald-600">Global</span>
                        </div>
                    </div>

                    <div className="mb-10">
                        <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-2">Welcome Back</h2>
                        <p className="text-gray-500 font-medium">Please enter your corporate credentials to proceed.</p>
                    </div>

                    {/* Status / Errors */}
                    {status && (
                        <div className="mb-6 bg-green-50 border border-green-200 text-green-600 px-5 py-4 rounded-xl text-sm font-medium">
                            {status}
                        </div>
                    )}

                    {Object.keys(errors).length > 0 && (
                        <div className="mb-6 bg-red-50 border border-red-200 text-red-600 px-5 py-4 rounded-xl text-sm font-medium flex items-center gap-3">
                            <AlertCircle className="w-5 h-5 shrink-0" />
                            <span>{errors.email || errors.password || 'Authentication failed.'}</span>
                        </div>
                    )}

                    <form onSubmit={submit} className="space-y-6">

                        {/* Email */}
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Corporate Email</label>
                            <div className="relative">
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    required
                                    autoFocus
                                    className={`w-full bg-gray-50 border ${errors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:border-blue-600 focus:ring-blue-600/20'} rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:bg-white focus:ring-2 transition-all font-medium text-gray-900 placeholder-gray-400`}
                                    placeholder="admin@amedaglobal.com"
                                />
                                <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${errors.email ? 'text-red-400' : 'text-gray-400'}`} />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="space-y-2">
                            <div className="flex items-center justify-between ml-1">
                                <label htmlFor="password" className="text-xs font-bold text-gray-500 uppercase tracking-widest">Password</label>
                                {canResetPassword && (
                                    <Link href={route('password.request')} className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors">
                                        Forgot Password?
                                    </Link>
                                )}
                            </div>
                            <div className="relative">
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    required
                                    className={`w-full bg-gray-50 border ${errors.password ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:border-blue-600 focus:ring-blue-600/20'} rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:bg-white focus:ring-2 transition-all font-medium text-gray-900 placeholder-gray-400`}
                                    placeholder="••••••••"
                                />
                                <Lock className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${errors.password ? 'text-red-400' : 'text-gray-400'}`} />
                            </div>
                        </div>

                        {/* Remember Me */}
                        <div className="flex items-center">
                            <input
                                id="remember"
                                type="checkbox"
                                name="remember"
                                checked={data.remember}
                                onChange={(e) => setData('remember', e.target.checked)}
                                className="w-4 h-4 text-blue-600 bg-gray-50 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                            />
                            <label htmlFor="remember" className="ml-2 block text-sm text-gray-600 font-medium cursor-pointer">
                                Keep me signed in
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-black text-sm uppercase tracking-widest py-4 rounded-2xl transition-all shadow-[0_10px_20px_rgba(29,78,216,0.2)] hover:shadow-[0_15px_30px_rgba(29,78,216,0.3)] flex items-center justify-center gap-3 disabled:opacity-75"
                        >
                            {processing ? (
                                <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> Processing...</>
                            ) : (
                                <>Authenticate Session <ArrowRight className="w-5 h-5" /></>
                            )}
                        </button>
                    </form>

                    <div className="mt-12 text-center">
                        <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                            &copy; {new Date().getFullYear()} Ameda Global Pvt. Ltd.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}