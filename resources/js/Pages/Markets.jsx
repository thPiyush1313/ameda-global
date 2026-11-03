import React, { useState, useEffect } from 'react';
import MainLayout from '../Layouts/MainLayout';
import { useLanguage } from '../Contexts/LanguageContext';
import {
    Globe, ArrowRight, ArrowUpRight,
    Wheat, Coffee, FlaskConical,
    Sparkles, Droplet, ShieldCheck, Factory,
    CheckCircle2, Layers, Cpu, Compass, Building2, ChevronLeft, ChevronRight, Award
} from 'lucide-react';

export default function Markets() {
    const [mounted, setMounted] = useState(false);
    const [activeTab, setActiveTab] = useState(0);
    const [sliderIndex, setSliderIndex] = useState(0);

    useEffect(() => {
        setMounted(true);
    }, []);

    const sliderImages = [
        {
            url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=3840&auto=format&fit=crop',
            caption: 'Global Manufacturing & Supply Hubs Across 40+ Nations'
        },
        {
            url: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=3840&auto=format&fit=crop',
            caption: 'Certified Cleanroom & Chemical Synthesis Laboratories'
        },
        {
            url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=3840&auto=format&fit=crop',
            caption: 'Cold-Chain & Precision Global Freight Distribution'
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setSliderIndex((prev) => (prev + 1) % sliderImages.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [sliderImages.length]);

    const industries = [
        {
            id: 1,
            name: 'Animal Nutrition',
            icon: Wheat,
            desc: 'High-bioavailability additives and essential amino acids formulated for livestock health, optimized feed conversion, and immunity reinforcement.',
            img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800',
            metrics: ['99.4% Bioavailability', 'ISO 22000 Certified', 'Zero Residue Guarantee']
        },
        {
            id: 2,
            name: 'Food & Beverages',
            icon: Coffee,
            desc: 'Food-grade preservatives, emulsifiers, texturizers, and functional stabilizers complying with rigorous FDA, EFSA, and global safety standards.',
            img: 'https://images.unsplash.com/photo-1571104508999-893933ded431?q=80&w=800',
            metrics: ['FDA & EFSA Aligned', 'Shelf-Life Extended', 'Clean-Label Solutions']
        },
        {
            id: 3,
            name: 'Pharmaceuticals',
            icon: FlaskConical,
            desc: 'Ultra-pure active pharmaceutical ingredients (APIs), excipients, and diagnostic intermediates driving the next generation of global healthcare.',
            img: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=800',
            metrics: ['99.98% API Purity', 'cGMP Compliant', 'Full DMF Dossiers']
        },
        {
            id: 4,
            name: 'Home Care, I&I',
            icon: Sparkles,
            desc: 'Industrial & Institutional cleaning agents, aggressive surfactants, enzymes, and eco-friendly home care formulations for commercial plants.',
            img: 'https://images.unsplash.com/photo-1587582423116-ec07293f0395?q=80&w=800',
            metrics: ['High Biodegradability', 'Cost-Optimized Blends', 'Heavy-Duty Degreasing']
        },
        {
            id: 5,
            name: 'Personal Care & Cosmetics',
            icon: Droplet,
            desc: 'Dermatologically tested bases, emollients, surfactants, and botanical extracts engineered for premium cosmetic and skincare brands.',
            img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800',
            metrics: ['Hypoallergenic Testing', 'Cruelty-Free Sourcing', 'Advanced Emulsification']
        }
    ];

    const supplyWorkflow = [
        { step: "01", title: "Direct Source Auditing", desc: "We partner exclusively with ISO-certified smelters, synthesis plants, and agricultural producers worldwide." },
        { step: "02", title: "Laboratory Quality Assay", desc: "Every batch undergoes rigorous HPLC and GC-MS testing in certified cleanroom facilities prior to export." },
        { step: "03", title: "Regulatory Documentation", desc: "Complete Certificate of Analysis (CoA), Safety Data Sheets (SDS), and customs clearance dossiers prepared." },
        { step: "04", title: "Secure Global Transit", desc: "Real-time telemetry tracked cold-chain and containerized freight delivery straight to enterprise manufacturing lines." }
    ];

    return (
        <MainLayout>
            {/* 1. IMMERSIVE HERO SECTION WITH HIGH-VISIBILITY BACKGROUND IMAGE */}
            <section className="relative pt-36 pb-28 lg:pt-52 lg:pb-40 overflow-hidden bg-gray-900 min-h-[65vh] flex items-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src={sliderImages[sliderIndex].url}
                        alt="Global Markets & Manufacturing"
                        className="w-full h-full object-cover opacity-60 transition-opacity duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/50 to-blue-950/20"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 max-w-[90rem]">
                    <div className={`transition-all duration-1000 transform text-center flex flex-col items-center ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600/30 backdrop-blur-md border border-blue-400/40 text-sky-200 mb-8 shadow-xl">
                            <Globe className="w-5 h-5 animate-pulse text-sky-300" />
                            <span className="text-sm font-bold tracking-widest uppercase">Global Application & Sourcing Markets</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tight max-w-5xl drop-shadow-lg">
                            Critical Industries <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-sky-200">We Serve & Supply</span>
                        </h1>

                        <p className="text-xl text-gray-100 max-w-3xl leading-relaxed font-normal mb-12 drop-shadow-md">
                            From high-purity active pharmaceutical ingredients to agricultural feed additives and industrial surfactants, Ameda Global orchestrates seamless procurement networks across 120+ nations.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="#sectors" className="bg-blue-600 hover:bg-blue-500 text-white font-extrabold px-8 py-4 rounded-2xl shadow-xl transition-all uppercase tracking-wider text-sm">
                                Explore Sectors
                            </a>
                            <a href="#workflow" className="bg-gray-900/80 hover:bg-gray-900 text-white border border-gray-600 font-bold px-8 py-4 rounded-2xl transition-all uppercase tracking-wider text-sm backdrop-blur-sm">
                                Manufacturing Workflow
                            </a>
                        </div>
                    </div>
                </div>

                {/* Slider Indicators */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                    {sliderImages.map((_, sIdx) => (
                        <button
                            key={sIdx}
                            onClick={() => setSliderIndex(sIdx)}
                            className={`h-2.5 rounded-full transition-all shadow-md ${sliderIndex === sIdx ? 'w-10 bg-blue-400' : 'w-2.5 bg-white/50'}`}
                        ></button>
                    ))}
                </div>
            </section>

            {/* 2. STATS & CAPABILITY BAR */}
            <section className="bg-blue-950 text-white py-12 border-y border-blue-900">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="p-4">
                            <div className="text-4xl font-black text-blue-400 mb-1">120+</div>
                            <div className="text-xs font-bold uppercase tracking-widest text-blue-200/70">Global Destination Markets</div>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl font-black text-blue-400 mb-1">99.9%</div>
                            <div className="text-xs font-bold uppercase tracking-widest text-blue-200/70">Compound Quality Accuracy</div>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl font-black text-blue-400 mb-1">ISO</div>
                            <div className="text-xs font-bold uppercase tracking-widest text-blue-200/70">Certified Sourcing Hubs</div>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl font-black text-blue-400 mb-1">24/7</div>
                            <div className="text-xs font-bold uppercase tracking-widest text-blue-200/70">Supply Chain Telemetry</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. CONNECTED NODE TIMELINE */}
            <section id="sectors" className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[300px] bg-sky-50/50 blur-[100px] rounded-full pointer-events-none"></div>

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600 mb-3 block">Market Sectors</span>
                        <h2 className="text-4xl font-black text-gray-900 tracking-tight">Interactive Industry Ecosystem</h2>
                    </div>

                    <div className="relative w-full py-16 hidden lg:block">
                        <div className="absolute top-1/2 left-0 w-full border-t-2 border-dashed border-gray-200 -translate-y-1/2 z-0"></div>

                        <div className="flex justify-between items-center relative z-10 px-8">
                            {industries.map((ind, idx) => (
                                <div
                                    key={ind.id}
                                    onClick={() => setActiveTab(idx)}
                                    className={`flex flex-col items-center group cursor-pointer w-48 transition-transform duration-700 ease-out hover:-translate-y-4 ${idx % 2 === 0 ? '-translate-y-8' : 'translate-y-8'}`}
                                >
                                    <div className="relative flex items-center justify-center mb-6">
                                        <div className={`absolute w-28 h-28 rounded-full transition-all duration-500 ${activeTab === idx ? 'bg-blue-100 scale-110' : 'bg-blue-50 opacity-0 group-hover:opacity-100'}`}></div>
                                        <div className={`relative w-20 h-20 bg-white rounded-full border-[3px] shadow-lg flex items-center justify-center transition-colors duration-500 z-10 ${activeTab === idx ? 'border-blue-600 bg-blue-600 text-white' : 'border-blue-600 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'}`}>
                                            <ind.icon className={`w-8 h-8 transition-colors duration-500 ${activeTab === idx ? 'text-white' : 'text-blue-600 group-hover:text-white'}`} strokeWidth={1.5} />
                                        </div>
                                    </div>
                                    <h3 className={`text-center font-black text-lg leading-tight transition-colors duration-300 ${activeTab === idx ? 'text-blue-700' : 'text-gray-900 group-hover:text-blue-700'}`}>
                                        {ind.name}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. DEEP DIVE CONTENT CARDS WITH METRICS */}
            <section className="py-24 bg-gray-50 relative">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-sm font-bold text-blue-700 tracking-widest uppercase mb-3">Sector Deep Dive & Specifications</h2>
                        <h3 className="text-4xl font-black text-gray-900 tracking-tight">Tailored Manufacturing & Sourcing Solutions</h3>
                    </div>

                    <div className="space-y-16">
                        {industries.map((ind, idx) => (
                            <div
                                key={ind.id}
                                className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} bg-white rounded-[2.5rem] border border-gray-100 shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-700`}
                            >
                                <div className="w-full md:w-1/2 h-80 md:h-auto overflow-hidden relative">
                                    <img
                                        src={ind.img}
                                        alt={ind.name}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[2s] ease-out"
                                    />
                                    <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                </div>

                                <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center relative">
                                    <div className="absolute top-10 right-10 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                                        <ind.icon className="w-32 h-32 text-blue-900" />
                                    </div>

                                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 border border-blue-100 group-hover:bg-blue-600 transition-colors duration-500 z-10">
                                        <ind.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-500" strokeWidth={2} />
                                    </div>

                                    <h3 className="text-3xl font-black text-gray-900 mb-4 tracking-tight z-10 group-hover:text-blue-700 transition-colors">{ind.name}</h3>
                                    <p className="text-gray-600 text-lg leading-relaxed mb-8 z-10">
                                        {ind.desc}
                                    </p>

                                    {/* Metrics Grid */}
                                    <div className="grid grid-cols-3 gap-4 mb-8 z-10">
                                        {ind.metrics.map((m, mIdx) => (
                                            <div key={mIdx} className="bg-gray-50 p-3 rounded-xl border border-gray-100 text-center">
                                                <span className="text-xs font-bold text-blue-700 block">{m}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <ul className="space-y-3 mb-10 z-10">
                                        <li className="flex items-center gap-3 text-sm font-bold text-gray-700">
                                            <ShieldCheck className="w-5 h-5 text-sky-500" /> Global Regulatory Compliance & Certification
                                        </li>
                                        <li className="flex items-center gap-3 text-sm font-bold text-gray-700">
                                            <Factory className="w-5 h-5 text-sky-500" /> Direct Manufacturer Integration & Bulk Allocation
                                        </li>
                                    </ul>

                                    <a href="/contact" className="flex items-center gap-3 text-blue-700 font-bold uppercase tracking-wide text-sm group/btn w-max z-10">
                                        Inquire About {ind.name} Sourcing
                                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover/btn:bg-blue-600 group-hover/btn:text-white transition-colors">
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. MANUFACTURING & SOURCING WORKFLOW DIAGRAM */}
            <section id="workflow" className="py-28 bg-white text-gray-900">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-xs font-bold text-blue-600 tracking-widest uppercase mb-3 block">End-to-End Orchestration</span>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight">Our Manufacturing & Sourcing Workflow</h2>
                        <p className="text-gray-600 mt-4 text-lg">How Ameda Global bridges raw synthesis plants with Fortune 500 manufacturing floors.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {supplyWorkflow.map((item, wIdx) => (
                            <div key={wIdx} className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 relative group">
                                <div className="text-4xl font-black text-blue-200 mb-6 group-hover:text-blue-600 transition-colors">{item.step}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. BOTTOM CTA */}
            <section className="relative py-24 bg-blue-700 overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')] opacity-10"></div>
                <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Need a Specialized Formulation or Bulk Allocation?</h2>
                    <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto font-light">
                        Our trade engineers can source, audit, and deliver custom material specifications for highly regulated industries across 120+ global markets.
                    </p>
                    <a href="/contact" className="inline-block bg-white text-blue-700 hover:bg-gray-50 px-10 py-4 rounded-full font-black uppercase tracking-widest shadow-2xl transition-all hover:scale-105">
                        Consult With Our Experts
                    </a>
                </div>
            </section>
        </MainLayout>
    );
}