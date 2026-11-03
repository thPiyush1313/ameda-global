import React, { useEffect } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { ShieldCheck, Mail, Lock, User, ArrowRight, AlertCircle } from 'lucide-react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('register'));
    };

    return (
        <div className="bg-gray-50 font-sans antialiased text-gray-900 selection:bg-blue-600 selection:text-white flex h-screen w-full overflow-hidden">
            <Head title="Enterprise Registration" />

            {/* LEFT SIDE: Immersive Branding */}
            <div className="hidden lg:flex lg:w-1/2 relative bg-gray-950 items-center justify-center overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2000&auto=format&fit=crop"
                    className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity"
                    alt="Global Technology Infrastructure"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-blue-900/60 to-transparent"></div>

                <div className="relative z-10 p-16 max-w-2xl flex flex-col justify-end h-full w-full pb-24">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-400/30 text-sky-300 w-max mb-6 shadow-xl">
                        <ShieldCheck className="w-4 h-4" />
                        <span className="text-xs font-bold tracking-widest uppercase">Client Onboarding</span>
                    </div>

                    <h1 className="text-5xl font-black text-white leading-tight mb-6 tracking-tight">
                        Join the Global <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">Supply Network</span>
                    </h1>

                    <p className="text-lg text-gray-300 font-light leading-relaxed border-l-4 border-blue-500 pl-6">
                        Establish your corporate account to access specialized procurement tools, real-time logistics tracking, and enterprise-grade compliance reports.
                    </p>
                </div>
            </div>

            {/* RIGHT SIDE: Registration Form */}
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8 sm:p-12 lg:px-24 bg-white relative overflow-y-auto">

                <div className="w-full max-w-md py-12">
                    {/* Brand Logo */}
                    <div className="flex items-center gap-3 mb-10">
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
                        <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-2">Create Account</h2>
                        <p className="text-gray-500 font-medium">Already have an account? <Link href={route('login')} className="text-blue-600 font-bold hover:text-blue-800 transition-colors">Sign in here</Link>.</p>
                    </div>

                    {/* Global Form Errors */}
                    {Object.keys(errors).length > 0 && (
                        <div className="mb-6 bg-red-50 border border-red-200 text-red-600 px-5 py-4 rounded-xl text-sm font-medium flex items-center gap-3">
                            <AlertCircle className="w-5 h-5 shrink-0" />
                            <span>Please correct the errors below.</span>
                        </div>
                    )}

                    <form onSubmit={submit} className="space-y-5">

                        {/* Name */}
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                            <div className="relative">
                                <input id="name" type="text" name="name" value={data.name} onChange={(e) => setData('name', e.target.value)} required autoFocus
                                    className={`w-full bg-gray-50 border ${errors.name ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:border-blue-600 focus:ring-blue-600/20'} rounded-2xl py-3.5 pl-12 pr-4 text-sm focus:outline-none focus:bg-white focus:ring-2 transition-all font-medium text-gray-900 placeholder-gray-400`}
                                    placeholder="Jane Doe"
                                />
                                <User className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${errors.name ? 'text-red-400' : 'text-gray-400'}`} />
                            </div>
                            {errors.name && <p className="text-red-500 text-xs mt-1 ml-1 font-medium">{errors.name}</p>}
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Corporate Email</label>
                            <div className="relative">
                                <input id="email" type="email" name="email" value={data.email} onChange={(e) => setData('email', e.target.value)} required
                                    className={`w-full bg-gray-50 border ${errors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:border-blue-600 focus:ring-blue-600/20'} rounded-2xl py-3.5 pl-12 pr-4 text-sm focus:outline-none focus:bg-white focus:ring-2 transition-all font-medium text-gray-900 placeholder-gray-400`}
                                    placeholder="jane@company.com"
                                />
                                <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${errors.email ? 'text-red-400' : 'text-gray-400'}`} />
                            </div>
                            {errors.email && <p className="text-red-500 text-xs mt-1 ml-1 font-medium">{errors.email}</p>}
                        </div>

                        {/* Password */}
                        <div className="space-y-2">
                            <label htmlFor="password" className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Password</label>
                            <div className="relative">
                                <input id="password" type="password" name="password" value={data.password} onChange={(e) => setData('password', e.target.value)} required
                                    className={`w-full bg-gray-50 border ${errors.password ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:border-blue-600 focus:ring-blue-600/20'} rounded-2xl py-3.5 pl-12 pr-4 text-sm focus:outline-none focus:bg-white focus:ring-2 transition-all font-medium text-gray-900 placeholder-gray-400`}
                                    placeholder="••••••••"
                                />
                                <Lock className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${errors.password ? 'text-red-400' : 'text-gray-400'}`} />
                            </div>
                            {errors.password && <p className="text-red-500 text-xs mt-1 ml-1 font-medium">{errors.password}</p>}
                        </div>

                        {/* Confirm Password */}
                        <div className="space-y-2">
                            <label htmlFor="password_confirmation" className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Confirm Password</label>
                            <div className="relative">
                                <input id="password_confirmation" type="password" name="password_confirmation" value={data.password_confirmation} onChange={(e) => setData('password_confirmation', e.target.value)} required
                                    className={`w-full bg-gray-50 border ${errors.password_confirmation ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:border-blue-600 focus:ring-blue-600/20'} rounded-2xl py-3.5 pl-12 pr-4 text-sm focus:outline-none focus:bg-white focus:ring-2 transition-all font-medium text-gray-900 placeholder-gray-400`}
                                    placeholder="••••••••"
                                />
                                <Lock className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${errors.password_confirmation ? 'text-red-400' : 'text-gray-400'}`} />
                            </div>
                            {errors.password_confirmation && <p className="text-red-500 text-xs mt-1 ml-1 font-medium">{errors.password_confirmation}</p>}
                        </div>

                        {/* Submit Button */}
                        <button type="submit" disabled={processing}
                            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-black text-sm uppercase tracking-widest py-4 rounded-2xl transition-all shadow-[0_10px_20px_rgba(29,78,216,0.2)] hover:shadow-[0_15px_30px_rgba(29,78,216,0.3)] flex items-center justify-center gap-3 disabled:opacity-75 mt-4"
                        >
                            {processing ? (
                                <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> Processing...</>
                            ) : (
                                <>Create Account <ArrowRight className="w-5 h-5" /></>
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