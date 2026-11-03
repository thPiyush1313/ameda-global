import React, { useState, useEffect } from 'react';
import MainLayout from '@/Layouts/MainLayout';
import { Head, Link } from '@inertiajs/react';
import { Wrench, Layers, Cpu, ShieldCheck, Globe, ArrowRight, CheckCircle2, Factory, HardHat } from 'lucide-react';

export default function Industrial() {
    const [mounted, setMounted] = useState(false);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        setMounted(true);
    }, []);

    const technicalData = [
        { title: "Tensile Strength & Durability", desc: "All alloy matrices undergo rigorous ASTM and ISO tension testing to guarantee resistance against extreme structural stress and thermal expansion." },
        { title: "Custom Alloy Casting", desc: "Our metallurgical engineering division provides bespoke casting configurations tailored for specialized aerospace and heavy marine applications." },
        { title: "Traceability & Certification", desc: "Every shipment includes complete Mill Test Certificates (MTC) ensuring total transparency from raw smelting to final delivery." }
    ];

    return (
        <MainLayout>
            <Head title="Industrial Sector | Ameda Global" />

            {/* HERO SECTION */}
            <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-36 overflow-hidden bg-gray-900 min-h-[65vh] flex items-center text-white">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=3840&auto=format&fit=crop"
                        alt="Industrial Manufacturing & Alloys"
                        className="w-full h-full object-cover opacity-75 transform scale-105 transition-transform duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/50 to-blue-950/30"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                    <div className={`transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-500/40 text-blue-300 mb-6 shadow-lg">
                            <Wrench className="w-4 h-4 text-blue-400" />
                            <span className="text-xs font-bold tracking-widest uppercase">Heavy Industry & Metallurgy</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight drop-shadow-lg">
                            Engineering the Foundation of <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-sky-200">Global Heavy Manufacturing</span>
                        </h1>
                        <p className="text-xl text-gray-100 max-w-3xl leading-relaxed border-l-4 border-blue-500 pl-6 font-light drop-shadow-md">
                            High-grade metal alloys, precision structural components, and certified industrial minerals engineered to withstand the most demanding operational environments worldwide.
                        </p>
                    </div>
                </div>
            </section>

            {/* METRICS / STATS BAR */}
            <section className="bg-blue-950 text-white py-12 border-y border-blue-900">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="p-4">
                            <div className="text-4xl font-black text-blue-400 mb-1">99.9%</div>
                            <div className="text-xs font-bold uppercase tracking-widest text-blue-200/70">Alloy Structural Integrity</div>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl font-black text-blue-400 mb-1">80+</div>
                            <div className="text-xs font-bold uppercase tracking-widest text-blue-200/70">Industrial Hubs Served</div>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl font-black text-blue-400 mb-1">2.5M</div>
                            <div className="text-xs font-bold uppercase tracking-widest text-blue-200/70">Tons of Metal Processed</div>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl font-black text-blue-400 mb-1">ISO</div>
                            <div className="text-xs font-bold uppercase tracking-widest text-blue-200/70">9001:2015 Certified Plants</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CORE PRODUCT LINES GRID */}
            <section className="py-32 bg-white relative">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-xs font-bold text-blue-600 tracking-widest uppercase mb-4 block">Industrial Portfolio</span>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
                            Specialized Alloys & <span className="text-blue-600">Heavy Components</span>
                        </h2>
                        <p className="text-gray-600 mt-4 text-lg">Sourced from top-tier smelters and machined to exact tolerances for heavy machinery and structural engineering.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group flex flex-col justify-between">
                            <div>
                                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-500">
                                    <Layers className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Specialty Steel & Alloys</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">Corrosion-resistant stainless steel coils, titanium bars, and custom alloy casting engineered for aerospace, marine, and automotive plants.</p>
                            </div>
                            <ul className="space-y-2.5 pt-6 border-t border-gray-200/60 text-xs font-semibold text-gray-700">
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> High tensile & yield strength</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Superior thermal resistance</li>
                            </ul>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group flex flex-col justify-between">
                            <div>
                                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-500">
                                    <Wrench className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Heavy Machinery Components</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">Precision-machined parts, forged shafts, and hydraulic assemblies built to endure extreme continuous operational loads.</p>
                            </div>
                            <ul className="space-y-2.5 pt-6 border-t border-gray-200/60 text-xs font-semibold text-gray-700">
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> CNC precision tolerances</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Extended operational lifespan</li>
                            </ul>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group flex flex-col justify-between">
                            <div>
                                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-500">
                                    <Cpu className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Bulk Industrial Minerals</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">Certified industrial-grade silica, metallurgical graphite, and high-purity mineral aggregates for continuous furnace operations.</p>
                            </div>
                            <ul className="space-y-2.5 pt-6 border-t border-gray-200/60 text-xs font-semibold text-gray-700">
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Consistent chemical grading</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Bulk cargo vessel transport</li>
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
                            <span className="text-xs font-bold text-blue-400 tracking-widest uppercase mb-4 block">Metallurgical Testing & QA</span>
                            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
                                Rigorous Standards for Heavy Industrial Applications
                            </h2>
                            <p className="text-gray-400 text-base leading-relaxed mb-8">
                                Ameda Global operates strict quality inspection protocols across every logistics hub. We verify metallurgical composition, microscopic grain structure, and load endurance before dispatching materials to manufacturing partners.
                            </p>

                            <div className="space-y-4">
                                {technicalData.map((item, idx) => (
                                    <div
                                        key={idx}
                                        onClick={() => setActiveTab(idx)}
                                        className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${activeTab === idx ? 'bg-blue-950/60 border-blue-500 shadow-lg' : 'bg-gray-900/40 border-gray-800 hover:border-gray-700'}`}
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <h4 className="text-lg font-bold text-white flex items-center gap-3">
                                                <span className={`w-3 h-3 rounded-full ${activeTab === idx ? 'bg-blue-400 animate-pulse' : 'bg-gray-600'}`}></span>
                                                {item.title}
                                            </h4>
                                            <span className="text-xs text-blue-400 font-bold uppercase tracking-wider">Protocol 0{idx + 1}</span>
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
                            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/20 to-sky-500/20 rounded-[3rem] blur-2xl"></div>
                            <div className="relative bg-gray-900 border border-gray-800 p-8 rounded-[2.5rem] shadow-2xl">
                                <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-800">
                                    <div className="flex items-center gap-3">
                                        <HardHat className="w-8 h-8 text-blue-400" />
                                        <div>
                                            <h4 className="font-bold text-white">Metallurgy Lab & Testing Hub</h4>
                                            <p className="text-xs text-gray-400">Automated Stress & Tension Analyzer</p>
                                        </div>
                                    </div>
                                    <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-bold px-3 py-1 rounded-full">Active Audit</span>
                                </div>
                                <div className="space-y-6 text-sm">
                                    <div className="flex justify-between items-center bg-gray-950 p-4 rounded-xl">
                                        <span className="text-gray-400">Ultimate Tensile Load</span>
                                        <span className="font-mono font-bold text-blue-400">880 MPa</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-gray-950 p-4 rounded-xl">
                                        <span className="text-gray-400">Charpy Impact Resistance</span>
                                        <span className="font-mono font-bold text-blue-400">64 J at -40°C</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-gray-950 p-4 rounded-xl">
                                        <span className="text-gray-400">Metallurgical Compliance</span>
                                        <span className="font-mono font-bold text-sky-400">ASTM / ISO Approved</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CALL TO ACTION */}
            <section className="relative py-24 bg-blue-600 overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')] opacity-10"></div>
                <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Secure Heavy Industrial Supply Partnerships</h2>
                    <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                        Partner with Ameda Global for secure raw material allocations, bulk alloy shipments, and dependable industrial component logistics.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="bg-white text-blue-700 hover:bg-gray-50 px-8 py-4 rounded-full font-bold uppercase tracking-wider shadow-xl transition-all flex items-center justify-center gap-2">
                            Request Alloy Catalog <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link href="/enterprise/overview" className="bg-blue-700 text-white border border-blue-500 hover:bg-blue-800 px-8 py-4 rounded-full font-bold uppercase tracking-wider transition-all flex items-center justify-center">
                            Explore Corporate Profile
                        </Link>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}