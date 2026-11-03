import React, { useState, useEffect } from 'react';
import MainLayout from '@/Layouts/MainLayout';
import { Head, Link } from '@inertiajs/react';
import { Activity, ShieldCheck, Globe, ArrowRight, CheckCircle2, ThermometerSnowflake, FileCheck2, FlaskConical } from 'lucide-react';

export default function Pharmaceuticals() {
    const [mounted, setMounted] = useState(false);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        setMounted(true);
    }, []);

    const technicalData = [
        { title: "Active Pharmaceutical Ingredients (APIs)", desc: "Synthesized under strict current Good Manufacturing Practices (cGMP), our APIs provide exceptional potency and stability for global drug formulations." },
        { title: "Cold-Chain Integrity", desc: "Monitored real-time temperature tracking during transit ensures zero thermal degradation for biological and temperature-sensitive compounds." },
        { title: "Regulatory Documentation", desc: "Comprehensive Drug Master Files (DMFs), Certificates of Analysis (CoA), and full regulatory dossiers provided for streamlined FDA & EMA filings." }
    ];

    return (
        <MainLayout>
            <Head title="Pharmaceuticals Sector | Ameda Global" />

            {/* HERO SECTION */}
            <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-36 overflow-hidden bg-gray-900 min-h-[65vh] flex items-center text-white">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=3840&auto=format&fit=crop"
                        alt="Pharmaceutical Laboratory & Research"
                        className="w-full h-full object-cover opacity-75 transform scale-105 transition-transform duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/50 to-sky-950/30"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                    <div className={`transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/20 backdrop-blur-md border border-sky-500/40 text-sky-300 mb-6 shadow-lg">
                            <Activity className="w-4 h-4 text-sky-400" />
                            <span className="text-xs font-bold tracking-widest uppercase">Global Pharmaceutical Division</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight drop-shadow-lg">
                            Precision Medical Compounds & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-200">Active Pharmaceutical Ingredients</span>
                        </h1>
                        <p className="text-xl text-gray-100 max-w-3xl leading-relaxed border-l-4 border-sky-500 pl-6 font-light drop-shadow-md">
                            Delivering high-purity APIs, excipients, and medical-grade chemical compounds engineered to meet the strictest FDA, EMA, and GMP compliance standards worldwide.
                        </p>
                    </div>
                </div>
            </section>

            {/* METRICS / STATS BAR */}
            <section className="bg-sky-950 text-white py-12 border-y border-sky-900">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="p-4">
                            <div className="text-4xl font-black text-sky-400 mb-1">99.98%</div>
                            <div className="text-xs font-bold uppercase tracking-widest text-sky-200/70">API Purity Benchmark</div>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl font-black text-sky-400 mb-1">50+</div>
                            <div className="text-xs font-bold uppercase tracking-widest text-sky-200/70">Global Pharma Partners</div>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl font-black text-sky-400 mb-1">24/7</div>
                            <div className="text-xs font-bold uppercase tracking-widest text-sky-200/70">Cold-Chain Monitoring</div>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl font-black text-sky-400 mb-1">cGMP</div>
                            <div className="text-xs font-bold uppercase tracking-widest text-sky-200/70">Certified Cleanrooms</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CORE PRODUCT LINES GRID */}
            <section className="py-32 bg-white relative">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-xs font-bold text-sky-600 tracking-widest uppercase mb-4 block">Medical Portfolio</span>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
                            Advanced Medical-Grade <span className="text-sky-600">Chemical Compounds</span>
                        </h2>
                        <p className="text-gray-600 mt-4 text-lg">Manufactured in sterile, ISO-certified environments to guarantee complete safety and therapeutic efficacy.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group flex flex-col justify-between">
                            <div>
                                <div className="w-14 h-14 rounded-2xl bg-sky-100 flex items-center justify-center mb-6 group-hover:bg-sky-600 transition-colors duration-500">
                                    <FlaskConical className="w-7 h-7 text-sky-600 group-hover:text-white transition-colors duration-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Active Pharmaceutical Ingredients</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">High-potency therapeutic compounds synthesized for oncology, cardiology, and general pharmacology applications.</p>
                            </div>
                            <ul className="space-y-2.5 pt-6 border-t border-gray-200/60 text-xs font-semibold text-gray-700">
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sky-600" /> Strict impurity profiling</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sky-600" /> Full Drug Master Files</li>
                            </ul>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group flex flex-col justify-between">
                            <div>
                                <div className="w-14 h-14 rounded-2xl bg-sky-100 flex items-center justify-center mb-6 group-hover:bg-sky-600 transition-colors duration-500">
                                    <ThermometerSnowflake className="w-7 h-7 text-sky-600 group-hover:text-white transition-colors duration-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Cold-Chain Logistics</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">Temperature-controlled storage and air freight solutions protecting biologicals and vaccines across international borders.</p>
                            </div>
                            <ul className="space-y-2.5 pt-6 border-t border-gray-200/60 text-xs font-semibold text-gray-700">
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sky-600" /> Real-time telemetry tracking</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sky-600" /> -80°C to +8°C chambers</li>
                            </ul>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group flex flex-col justify-between">
                            <div>
                                <div className="w-14 h-14 rounded-2xl bg-sky-100 flex items-center justify-center mb-6 group-hover:bg-sky-600 transition-colors duration-500">
                                    <FileCheck2 className="w-7 h-7 text-sky-600 group-hover:text-white transition-colors duration-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Excipients & Intermediates</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">High-grade functional excipients designed to optimize drug delivery, bioavailability, and tablet compressibility.</p>
                            </div>
                            <ul className="space-y-2.5 pt-6 border-t border-gray-200/60 text-xs font-semibold text-gray-700">
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sky-600" /> USP/EP pharmacopeia compliant</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sky-600" /> Batch-to-batch consistency</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTERACTIVE TECHNICAL SPOTLIGHT SECTION */}
            <section className="py-28 bg-gray-950 text-white overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-xs font-bold text-sky-400 tracking-widest uppercase mb-4 block">Quality Assurance & Safety</span>
                            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
                                Uncompromised Safety from Synthesis to Patient
                            </h2>
                            <p className="text-gray-400 text-base leading-relaxed mb-8">
                                Ameda Global maintains rigorous oversight across all pharmaceutical supply lines. Every vial and active ingredient batch is audited for absolute sterility, chemical purity, and regulatory alignment.
                            </p>

                            <div className="space-y-4">
                                {technicalData.map((item, idx) => (
                                    <div
                                        key={idx}
                                        onClick={() => setActiveTab(idx)}
                                        className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${activeTab === idx ? 'bg-sky-950/60 border-sky-500 shadow-lg' : 'bg-gray-900/40 border-gray-800 hover:border-gray-700'}`}
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <h4 className="text-lg font-bold text-white flex items-center gap-3">
                                                <span className={`w-3 h-3 rounded-full ${activeTab === idx ? 'bg-sky-400 animate-pulse' : 'bg-gray-600'}`}></span>
                                                {item.title}
                                            </h4>
                                            <span className="text-xs text-sky-400 font-bold uppercase tracking-wider">Standard 0{idx + 1}</span>
                                        </div>
                                        {activeTab === idx && (
                                            <p className="text-gray-300 text-sm mt-3 leading-relaxed animate-fadeIn">
                                                {item.desc}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-sky-600/20 to-blue-500/20 rounded-[3rem] blur-2xl"></div>
                            <div className="relative bg-gray-900 border border-gray-800 p-8 rounded-[2.5rem] shadow-2xl">
                                <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-800">
                                    <div className="flex items-center gap-3">
                                        <ShieldCheck className="w-8 h-8 text-sky-400" />
                                        <div>
                                            <h4 className="font-bold text-white">Cleanroom Facility Alpha</h4>
                                            <p className="text-xs text-gray-400">ISO Class 5 Sterile Synthesis Unit</p>
                                        </div>
                                    </div>
                                    <span className="bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-bold px-3 py-1 rounded-full">GMP Certified</span>
                                </div>
                                <div className="space-y-6 text-sm">
                                    <div className="flex justify-between items-center bg-gray-950 p-4 rounded-xl">
                                        <span className="text-gray-400">Air Filtration Standard</span>
                                        <span className="font-mono font-bold text-sky-400">HEPA ULPA 99.999%</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-gray-950 p-4 rounded-xl">
                                        <span className="text-gray-400">Cold-Chain Temperature</span>
                                        <span className="font-mono font-bold text-sky-400">+2.4 °C (Stable)</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-gray-950 p-4 rounded-xl">
                                        <span className="text-gray-400">Regulatory Audit Status</span>
                                        <span className="font-mono font-bold text-blue-400">FDA / EMA Approved</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CALL TO ACTION */}
            <section className="relative py-24 bg-sky-600 overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')] opacity-10"></div>
                <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Secure Pharmaceutical Supply Partnerships</h2>
                    <p className="text-sky-100 text-lg mb-10 max-w-2xl mx-auto">
                        Partner with Ameda Global for dependable API allocations, cold-chain logistics, and fully compliant medical compound distribution.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="bg-white text-sky-700 hover:bg-gray-50 px-8 py-4 rounded-full font-bold uppercase tracking-wider shadow-xl transition-all flex items-center justify-center gap-2">
                            Request API Dossier <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link href="/enterprise/overview" className="bg-sky-700 text-white border border-sky-500 hover:bg-sky-800 px-8 py-4 rounded-full font-bold uppercase tracking-wider transition-all flex items-center justify-center">
                            Explore Corporate Profile
                        </Link>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}