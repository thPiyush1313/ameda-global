import React, { useState, useEffect } from 'react';
import MainLayout from '@/Layouts/MainLayout';
import { Head, Link } from '@inertiajs/react';
import { Zap, BatteryCharging, Cpu, Globe, ArrowRight, CheckCircle2, ShieldCheck, SunMedium } from 'lucide-react';

export default function TechEnergy() {
    const [mounted, setMounted] = useState(false);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        setMounted(true);
    }, []);

    const technicalData = [
        { title: "Battery Grade Lithium & Cathodes", desc: "High-purity lithium carbonate and nickel-cobalt-manganese (NCM) precursors engineered for maximum energy density and thermal stability in EV batteries." },
        { title: "Semiconductor Grade Silicon (99.999% purity)", desc: "Ultra-pure polycrystalline and monocrystalline silicon inputs fueling advanced microchip fabrication and high-efficiency photovoltaic solar panels." },
        { title: "Smart Grid Infrastructure Alloys", desc: "Oxygen-free high-conductivity (OFHC) copper wire rods and low-core-loss electrical steel designed for next-gen power transmission grids." }
    ];

    return (
        <MainLayout>
            <Head title="Tech & Energy Sector | Ameda Global" />

            {/* HERO SECTION */}
            <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-36 overflow-hidden bg-gray-900 min-h-[65vh] flex items-center text-white">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=3840&auto=format&fit=crop"
                        alt="Clean Energy & Technology Infrastructure"
                        className="w-full h-full object-cover opacity-75 transform scale-105 transition-transform duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/50 to-violet-950/30"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                    <div className={`transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/20 backdrop-blur-md border border-violet-500/40 text-violet-300 mb-6 shadow-lg">
                            <Zap className="w-4 h-4 text-violet-400" />
                            <span className="text-xs font-bold tracking-widest uppercase">Global Tech & Energy Division</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight drop-shadow-lg">
                            Powering the Transition to <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-indigo-200">Clean Energy & Advanced Tech</span>
                        </h1>
                        <p className="text-xl text-gray-100 max-w-3xl leading-relaxed border-l-4 border-violet-500 pl-6 font-light drop-shadow-md">
                            High-grade lithium compounds, semiconductor-grade silicon wafers, and resilient grid infrastructure materials engineered for the global electrification revolution.
                        </p>
                    </div>
                </div>
            </section>

            {/* METRICS / STATS BAR */}
            <section className="bg-violet-950 text-white py-12 border-y border-violet-900">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="p-4">
                            <div className="text-4xl font-black text-violet-400 mb-1">99.999%</div>
                            <div className="text-xs font-bold uppercase tracking-widest text-violet-200/70">Silicon Purity Benchmark</div>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl font-black text-violet-400 mb-1">45+</div>
                            <div className="text-xs font-bold uppercase tracking-widest text-violet-200/70">Gigawatt Projects Supplied</div>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl font-black text-violet-400 mb-1">100%</div>
                            <div className="text-xs font-bold uppercase tracking-widest text-violet-200/70">Conflict-Free Mineral Sourcing</div>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl font-black text-violet-400 mb-1">ISO</div>
                            <div className="text-xs font-bold uppercase tracking-widest text-violet-200/70">14001 Environmental Standard</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CORE PRODUCT LINES GRID */}
            <section className="py-32 bg-white relative">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-xs font-bold text-violet-600 tracking-widest uppercase mb-4 block">Technology Portfolio</span>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
                            Critical Materials for <span className="text-violet-600">Next-Gen Innovation</span>
                        </h2>
                        <p className="text-gray-600 mt-4 text-lg">Supplying the essential physical building blocks for electric vehicles, solar farms, and high-performance microelectronics.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group flex flex-col justify-between">
                            <div>
                                <div className="w-14 h-14 rounded-2xl bg-violet-100 flex items-center justify-center mb-6 group-hover:bg-violet-600 transition-colors duration-500">
                                    <BatteryCharging className="w-7 h-7 text-violet-600 group-hover:text-white transition-colors duration-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Battery & Storage Materials</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">High-grade lithium compounds and cathode precursors powering the global electric vehicle and utility-scale grid storage revolution.</p>
                            </div>
                            <ul className="space-y-2.5 pt-6 border-t border-gray-200/60 text-xs font-semibold text-gray-700">
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-violet-600" /> High volumetric energy density</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-violet-600" /> Enhanced thermal stability</li>
                            </ul>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group flex flex-col justify-between">
                            <div>
                                <div className="w-14 h-14 rounded-2xl bg-violet-100 flex items-center justify-center mb-6 group-hover:bg-violet-600 transition-colors duration-500">
                                    <Cpu className="w-7 h-7 text-violet-600 group-hover:text-white transition-colors duration-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Semiconductor Grade Silicon</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">Ultra-pure polycrystalline silicon inputs for advanced microchip manufacturing and high-efficiency photovoltaic solar panels.</p>
                            </div>
                            <ul className="space-y-2.5 pt-6 border-t border-gray-200/60 text-xs font-semibold text-gray-700">
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-violet-600" /> Five-nine (99.999%) purity index</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-violet-600" /> Optimized solar wafer cutting</li>
                            </ul>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group flex flex-col justify-between">
                            <div>
                                <div className="w-14 h-14 rounded-2xl bg-violet-100 flex items-center justify-center mb-6 group-hover:bg-violet-600 transition-colors duration-500">
                                    <SunMedium className="w-7 h-7 text-violet-600 group-hover:text-white transition-colors duration-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Grid Infrastructure Materials</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">High-conductivity copper wire rods and transformer-grade electrical steel designed for smart grid expansion and renewable transmission.</p>
                            </div>
                            <ul className="space-y-2.5 pt-6 border-t border-gray-200/60 text-xs font-semibold text-gray-700">
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-violet-600" /> Low electrical resistance</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-violet-600" /> High magnetic permeability</li>
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
                            <span className="text-xs font-bold text-violet-400 tracking-widest uppercase mb-4 block">Innovation & Technical Specs</span>
                            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
                                Engineered for Maximum Energy Efficiency
                            </h2>
                            <p className="text-gray-400 text-base leading-relaxed mb-8">
                                Ameda Global works alongside renewable energy developers and microchip fabrication plants to deliver inputs that minimize resistance, lower thermal output, and maximize overall system longevity.
                            </p>

                            <div className="space-y-4">
                                {technicalData.map((item, idx) => (
                                    <div
                                        key={idx}
                                        onClick={() => setActiveTab(idx)}
                                        className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${activeTab === idx ? 'bg-violet-950/60 border-violet-500 shadow-lg' : 'bg-gray-900/40 border-gray-800 hover:border-gray-700'}`}
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <h4 className="text-lg font-bold text-white flex items-center gap-3">
                                                <span className={`w-3 h-3 rounded-full ${activeTab === idx ? 'bg-violet-400 animate-pulse' : 'bg-gray-600'}`}></span>
                                                {item.title}
                                            </h4>
                                            <span className="text-xs text-violet-400 font-bold uppercase tracking-wider">Spec 0{idx + 1}</span>
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
                            <div className="absolute -inset-4 bg-gradient-to-tr from-violet-600/20 to-indigo-500/20 rounded-[3rem] blur-2xl"></div>
                            <div className="relative bg-gray-900 border border-gray-800 p-8 rounded-[2.5rem] shadow-2xl">
                                <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-800">
                                    <div className="flex items-center gap-3">
                                        <ShieldCheck className="w-8 h-8 text-violet-400" />
                                        <div>
                                            <h4 className="font-bold text-white">Clean Energy Testing Hub</h4>
                                            <p className="text-xs text-gray-400">Photovoltaic & Storage Simulation Unit</p>
                                        </div>
                                    </div>
                                    <span className="bg-violet-500/10 text-violet-400 border border-violet-500/20 text-xs font-bold px-3 py-1 rounded-full">Optimized</span>
                                </div>
                                <div className="space-y-6 text-sm">
                                    <div className="flex justify-between items-center bg-gray-950 p-4 rounded-xl">
                                        <span className="text-gray-400">Silicon Crystal Lattice Index</span>
                                        <span className="font-mono font-bold text-violet-400">Zero Defect Grade</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-gray-950 p-4 rounded-xl">
                                        <span className="text-gray-400">Lithium Cathode Efficiency</span>
                                        <span className="font-mono font-bold text-violet-400">98.4% Retention</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-gray-950 p-4 rounded-xl">
                                        <span className="text-gray-400">Grid Conductivity Rating</span>
                                        <span className="font-mono font-bold text-indigo-400">101.5% IACS</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CALL TO ACTION */}
            <section className="relative py-24 bg-violet-600 overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')] opacity-10"></div>
                <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Accelerate Your Clean Tech & Energy Supply Chain</h2>
                    <p className="text-violet-100 text-lg mb-10 max-w-2xl mx-auto">
                        Partner with Ameda Global for reliable allocations of battery-grade lithium, semiconductor silicon, and grid infrastructure components.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="bg-white text-violet-700 hover:bg-gray-50 px-8 py-4 rounded-full font-bold uppercase tracking-wider shadow-xl transition-all flex items-center justify-center gap-2">
                            Request Material Dossier <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link href="/enterprise/overview" className="bg-violet-700 text-white border border-violet-500 hover:bg-violet-800 px-8 py-4 rounded-full font-bold uppercase tracking-wider transition-all flex items-center justify-center">
                            Explore Corporate Profile
                        </Link>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}