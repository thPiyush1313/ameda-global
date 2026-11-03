import React, { useState, useEffect } from 'react';
import MainLayout from '@/Layouts/MainLayout';
import { Head, Link } from '@inertiajs/react';
import { Sprout, ShieldCheck, Leaf, Globe, ArrowRight, CheckCircle2, Factory, BarChart3 } from 'lucide-react';

export default function Agrochemicals() {
    const [mounted, setMounted] = useState(false);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        setMounted(true);
    }, []);

    const technicalData = [
        { title: "Purity & Synthesis", desc: "Every batch undergoes rigorous HPLC and GC-MS testing to guarantee a minimum active ingredient purity of 98.5%, minimizing environmental runoff." },
        { title: "Controlled Release Tech", desc: "Micro-encapsulated formulations ensure gradual nutrient uptake by crops, reducing application frequency by up to 40%." },
        { title: "Eco-Compliance", desc: "Fully certified under international OECD guidelines and regional agricultural ministries for safe integration into organic-adjacent rotations." }
    ];

    return (
        <MainLayout>
            <Head title="Agrochemicals Sector | Ameda Global" />

            {/* HERO SECTION */}
            <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-36 overflow-hidden bg-gray-900 min-h-[65vh] flex items-center text-white">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=3840&auto=format&fit=crop"
                        alt="Agrochemical Innovation"
                        className="w-full h-full object-cover opacity-75 transform scale-105 transition-transform duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/50 to-emerald-950/30"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                    <div className={`transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/40 text-emerald-300 mb-6 shadow-lg">
                            <Sprout className="w-4 h-4 text-emerald-400" />
                            <span className="text-xs font-bold tracking-widest uppercase">Global Agrochemical Solutions</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight drop-shadow-lg">
                            Engineering the Future of <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200">Sustainable Agriculture</span>
                        </h1>
                        <p className="text-xl text-gray-100 max-w-3xl leading-relaxed border-l-4 border-emerald-500 pl-6 font-light drop-shadow-md">
                            Advanced fertilizer intermediates, crop protection compounds, and bio-engineered nutrient enhancers designed to maximize global food yields while preserving soil microbiome integrity.
                        </p>
                    </div>
                </div>
            </section>
            {/* METRICS / STATS BAR */}
            <section className="bg-emerald-950 text-white py-12 border-y border-emerald-900">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="p-4">
                            <div className="text-4xl font-black text-emerald-400 mb-1">98.5%</div>
                            <div className="text-xs font-bold uppercase tracking-widest text-emerald-200/70">Average Compound Purity</div>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl font-black text-emerald-400 mb-1">65+</div>
                            <div className="text-xs font-bold uppercase tracking-widest text-emerald-200/70">Global Export Markets</div>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl font-black text-emerald-400 mb-1">1.2M</div>
                            <div className="text-xs font-bold uppercase tracking-widest text-emerald-200/70">Metric Tons Supplied Annually</div>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl font-black text-emerald-400 mb-1">Zero</div>
                            <div className="text-xs font-bold uppercase tracking-widest text-emerald-200/70">Compromise Safety Record</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CORE PRODUCT LINES GRID */}
            <section className="py-32 bg-white relative">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-xs font-bold text-emerald-600 tracking-widest uppercase mb-4 block">Portfolio Overview</span>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
                            Specialized Chemical Intermediates & <span className="text-emerald-600">Nutrient Systems</span>
                        </h2>
                        <p className="text-gray-600 mt-4 text-lg">Manufactured in ISO-certified synthesis facilities to meet the rigorous demands of commercial agricultural corporations worldwide.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group flex flex-col justify-between">
                            <div>
                                <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-500">
                                    <ShieldCheck className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors duration-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Crop Protection Intermediates</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">High-purity chemical components formulated to safeguard global food yields against aggressive pests, fungal blights, and climatic stress.</p>
                            </div>
                            <ul className="space-y-2.5 pt-6 border-t border-gray-200/60 text-xs font-semibold text-gray-700">
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Broad-spectrum efficacy</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Low mammalian toxicity profiles</li>
                            </ul>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group flex flex-col justify-between">
                            <div>
                                <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-500">
                                    <Leaf className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors duration-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Sustainable Nutrient Enhancers</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">Bio-stimulants and mineral-rich soil conditioners designed to promote long-term agricultural fertility and root resilience.</p>
                            </div>
                            <ul className="space-y-2.5 pt-6 border-t border-gray-200/60 text-xs font-semibold text-gray-700">
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Enhanced microbial activity</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Optimized water retention</li>
                            </ul>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group flex flex-col justify-between">
                            <div>
                                <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-500">
                                    <Globe className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors duration-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Precision Delivery Polymers</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">Advanced release agents and adjuvant formulations that ensure maximum foliar adhesion and active ingredient absorption.</p>
                            </div>
                            <ul className="space-y-2.5 pt-6 border-t border-gray-200/60 text-xs font-semibold text-gray-700">
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Rainfast technology</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Reduced chemical runoff</li>
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
                            <span className="text-xs font-bold text-emerald-400 tracking-widest uppercase mb-4 block">Research & Quality Control</span>
                            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
                                Backed by Rigorous Laboratory Science
                            </h2>
                            <p className="text-gray-400 text-base leading-relaxed mb-8">
                                Ameda Global invests heavily in state-of-the-art synthesis laboratories. We partner directly with agronomists and institutional researchers to test efficacy across diverse soil compositions and climatic zones.
                            </p>

                            <div className="space-y-4">
                                {technicalData.map((item, idx) => (
                                    <div
                                        key={idx}
                                        onClick={() => setActiveTab(idx)}
                                        className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${activeTab === idx ? 'bg-emerald-950/60 border-emerald-500 shadow-lg' : 'bg-gray-900/40 border-gray-800 hover:border-gray-700'}`}
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <h4 className="text-lg font-bold text-white flex items-center gap-3">
                                                <span className={`w-3 h-3 rounded-full ${activeTab === idx ? 'bg-emerald-400 animate-pulse' : 'bg-gray-600'}`}></span>
                                                {item.title}
                                            </h4>
                                            <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider">Spec 0{idx + 1}</span>
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
                            <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-600/20 to-teal-500/20 rounded-[3rem] blur-2xl"></div>
                            <div className="relative bg-gray-900 border border-gray-800 p-8 rounded-[2.5rem] shadow-2xl">
                                <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-800">
                                    <div className="flex items-center gap-3">
                                        <Factory className="w-8 h-8 text-emerald-400" />
                                        <div>
                                            <h4 className="font-bold text-white">Global Synthesis Plant #4</h4>
                                            <p className="text-xs text-gray-400">Automated Batch Processing Unit</p>
                                        </div>
                                    </div>
                                    <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold px-3 py-1 rounded-full">Operational</span>
                                </div>
                                <div className="space-y-6 text-sm">
                                    <div className="flex justify-between items-center bg-gray-950 p-4 rounded-xl">
                                        <span className="text-gray-400">Reactor Temperature</span>
                                        <span className="font-mono font-bold text-emerald-400">142.5 °C</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-gray-950 p-4 rounded-xl">
                                        <span className="text-gray-400">Catalyst Purity Index</span>
                                        <span className="font-mono font-bold text-emerald-400">99.91%</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-gray-950 p-4 rounded-xl">
                                        <span className="text-gray-400">Environmental Emissions</span>
                                        <span className="font-mono font-bold text-teal-400">Zero-Discharge Verified</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CALL TO ACTION */}
            <section className="relative py-24 bg-emerald-600 overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')] opacity-10"></div>
                <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Secure Agrochemical Supply Partnerships</h2>
                    <p className="text-emerald-100 text-lg mb-10 max-w-2xl mx-auto">
                        Connect with our procurement and technical logistics teams to discuss bulk chemical allocations, custom synthesis, and regional distribution agreements.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="bg-white text-emerald-700 hover:bg-gray-50 px-8 py-4 rounded-full font-bold uppercase tracking-wider shadow-xl transition-all flex items-center justify-center gap-2">
                            Request Specification Sheets <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link href="/enterprise/overview" className="bg-emerald-700 text-white border border-emerald-500 hover:bg-emerald-800 px-8 py-4 rounded-full font-bold uppercase tracking-wider transition-all flex items-center justify-center">
                            Explore Corporate Profile
                        </Link>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}