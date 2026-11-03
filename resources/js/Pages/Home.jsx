import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import MainLayout from '../Layouts/MainLayout';
import { useLanguage } from '../Contexts/LanguageContext';
import Seo from '../Components/Seo';
import {
    ArrowRight, ShieldCheck, Zap, Leaf,
    Factory, TestTube, Cpu, Building2, Package,
    Box, ArrowUpRight, Globe, Layers, Loader2
} from 'lucide-react';

export default function Home() {
    const [mounted, setMounted] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadingWidth, setLoadingWidth] = useState('w-0');
    const [currentSlide, setCurrentSlide] = useState(0);
    const { t } = useLanguage();

    const heroImages = [
        '/images/hero-1.jpg',
        '/images/hero-2.jpg',
        '/images/hero-3.jpg',
        '/images/hero-4.jpg'
    ];

    useEffect(() => {
        setMounted(true);
        setTimeout(() => setLoadingWidth('w-full'), 100);
        const loadTimer = setTimeout(() => setIsLoading(false), 2500);
        const slideTimer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % heroImages.length), 5000);

        return () => {
            clearTimeout(loadTimer);
            clearInterval(slideTimer);
        };
    }, [heroImages.length]);
    // Define AmedaLogo here so the Preloader can use it
    const AmedaLogo = ({ isFooter = false }) => (
        <div className="flex items-center gap-3 cursor-pointer group">
            <div className="relative flex items-center justify-center w-12 h-12 transform group-hover:scale-105 transition-all duration-500">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl">
                    <defs>
                        <linearGradient id="blue-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#2563eb" />
                            <stop offset="100%" stopColor="#0ea5e9" />
                        </linearGradient>
                        <linearGradient id="light-blue-grad" x1="100%" y1="100%" x2="0%" y2="0%">
                            <stop offset="0%" stopColor="#38bdf8" />
                            <stop offset="100%" stopColor="#7dd3fc" />
                        </linearGradient>
                    </defs>
                    <path d="M32 2L58 17V47L32 62L6 47V17L32 2Z" stroke="url(#blue-grad)" strokeWidth="1.5" fill="url(#blue-grad)" fillOpacity="0.08" strokeLinejoin="round" />
                    <path d="M32 14L48 48H38L32 35L26 48H16L32 14Z" fill="url(#blue-grad)" />
                    <path d="M32 14L48 48H43L32 24L21 48H16L32 14Z" fill="url(#light-blue-grad)" />
                    <path d="M14 38C22 42 42 42 50 38" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
            </div>
            <div className="flex flex-col justify-center border-l-2 pl-3 py-1 transition-colors duration-500 border-blue-500/30">
                <span className="text-2xl font-black tracking-[0.15em] leading-none uppercase text-white drop-shadow-md">
                    Ameda
                </span>
                <span className="text-[0.65rem] font-bold tracking-[0.4em] leading-none mt-1.5 uppercase text-sky-400 drop-shadow-md">
                    Global
                </span>
            </div>
        </div>
    );
    return (
        <MainLayout>

            {/* Inject SEO specific to the Homepage */}
            <Seo
                title="Home"
                description="Ameda Global empowers international industries with high-performance raw materials, rigorous compliance, and sustainable supply chain architecture."
            />

            {/* HERO SECTION */}
            <section className="relative h-screen min-h-[750px] flex items-center justify-start pt-20 overflow-hidden bg-gray-900">
                <div className="absolute inset-0 z-0">
                    {heroImages.map((img, idx) => (
                        <div key={idx} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                            <img src={img} alt={`Ameda Global Logistics ${idx + 1}`} className="w-full h-full object-cover" />
                        </div>
                    ))}
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-900/60 to-transparent z-20"></div>
                </div>

                <div className="container mx-auto px-6 relative z-30">
                    <div className="max-w-3xl">
                        <div className={`transition-all duration-1000 delay-200 transform ${!isLoading && mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-6">
                                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
                                <span className="text-xs font-bold tracking-widest uppercase">Global Network Active</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight">
                                {t('hero_title')} <br />
                                <span className="text-sky-400">{t('hero_subtitle')}</span>
                            </h1>
                            <p className="text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed border-l-4 border-blue-500 pl-6 font-light">
                                Empowering international industries with high-performance raw materials, rigorous compliance, and sustainable supply chain architecture.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/#products" className="bg-blue-700 text-white hover:bg-blue-600 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-3 group shadow-lg shadow-blue-700/30">
                                    Explore Catalog <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link href="/about" className="bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300">
                                    Partner With Us
                                </Link>
                            </div>
                            <div className="flex gap-2 mt-12">
                                {heroImages.map((_, idx) => (
                                    <button key={idx} onClick={() => setCurrentSlide(idx)} className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-8 bg-sky-400' : 'w-4 bg-white/30 hover:bg-white/50'}`} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CORE VALUES SECTION - 4 Items, Scaled Down & Refined */}
            <section className="pt-8 pb-20 bg-gray-50 relative -mt-10 z-30 rounded-t-[3rem] shadow-[0_-10px_30px_rgba(0,0,0,0.08)]">
                {/* Subtle top inner highlight to give it a 3D edge feel */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-60 rounded-t-[3rem]"></div>

                <div className="container mx-auto px-6 mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[90rem] mx-auto">
                        {[
                            {
                                icon: ShieldCheck,
                                title: 'Uncompromising Quality',
                                desc: 'Rigorous testing and compliance frameworks ensure every material meets strict global standards.',
                                color: 'text-sky-600', bg: 'bg-sky-100/60', hoverColor: 'group-hover:bg-sky-500'
                            },
                            {
                                icon: Zap,
                                title: 'Agile Logistics',
                                desc: 'Adaptive supply chain networks engineered to navigate disruptions and ensure on-time delivery.',
                                color: 'text-blue-600', bg: 'bg-blue-100/60', hoverColor: 'group-hover:bg-blue-600'
                            },
                            {
                                icon: Globe,
                                title: 'Global Reach',
                                desc: 'Extensive sourcing networks spanning over 120 countries for seamless, borderless market access.',
                                color: 'text-indigo-600', bg: 'bg-indigo-100/60', hoverColor: 'group-hover:bg-indigo-500'
                            },
                            {
                                icon: Leaf,
                                title: 'Sustainable Growth',
                                desc: 'Dedicated to eco-friendly sourcing and achieving net-zero emissions across all operations.',
                                color: 'text-emerald-600', bg: 'bg-emerald-100/60', hoverColor: 'group-hover:bg-emerald-500'
                            }
                        ].map((value, idx) => (
                            <div key={idx} className="group relative bg-white p-8 rounded-[1.75rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 overflow-hidden cursor-pointer">

                                {/* Subtle Hover Gradient Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

                                <div className="relative z-10">
                                    {/* Icon & Action Arrow Row */}
                                    <div className="flex items-center justify-between mb-8">
                                        <div className={`w-14 h-14 ${value.bg} rounded-2xl flex items-center justify-center transition-all duration-500 ${value.hoverColor} group-hover:shadow-lg group-hover:scale-110`}>
                                            <value.icon className={`w-7 h-7 ${value.color} transition-colors duration-500 group-hover:text-white`} strokeWidth={1.5} />
                                        </div>

                                        {/* Modern Action Arrow */}
                                        <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-300 group-hover:text-gray-900 group-hover:border-gray-300 group-hover:bg-gray-50 transition-all duration-500">
                                            <ArrowUpRight className="w-4 h-4 transform group-hover:scale-110 transition-transform duration-300" />
                                        </div>
                                    </div>

                                    {/* Text Content */}
                                    <h3 className="text-xl font-black text-gray-900 mb-3 tracking-tight">{value.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed font-medium">{value.desc}</p>
                                </div>

                                {/* Sleek Animated Bottom Accent Line */}
                                <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-gray-900 group-hover:w-full transition-all duration-700 ease-out"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MODERNIZED MARKETS SECTION */}
            <section className="py-32 bg-gray-50 relative overflow-hidden" id="markets">
                {/* Subtle background pattern */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNlN2U1ZTQiLz48L3N2Zz4=')] opacity-50 z-0"></div>

                <div className="container mx-auto px-6 relative z-10">

                    {/* Editorial Style Split Header */}
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 max-w-7xl mx-auto gap-8">
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-100/80 text-sky-700 text-xs font-bold tracking-widest uppercase mb-6 border border-sky-200/50">
                                <Globe className="w-3.5 h-3.5" /> Global Reach
                            </div>
                            <h3 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
                                Powering the World's <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-emerald-500">Most Critical Sectors</span>
                            </h3>
                        </div>
                        <p className="text-gray-500 text-lg leading-relaxed max-w-md border-l-2 border-sky-500/50 pl-5">
                            Delivering high-performance materials and specialized supply chain formulations to high-stakes industries worldwide.
                        </p>
                    </div>

                    {/* Premium Glassmorphism Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {[
                            { title: 'Industrial Manufacturing', icon: Factory, img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800' },
                            { title: 'Pharmaceuticals', icon: TestTube, img: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=800' },
                            { title: 'Agrochemicals', icon: Leaf, img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800' },
                            { title: 'Advanced Technology', icon: Cpu, img: 'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=800' },
                            { title: 'Global Infrastructure', icon: Building2, img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800' },
                            { title: 'Consumer Goods', icon: Package, img: 'https://images.unsplash.com/photo-1584286595398-a59f21d313f5?q=80&w=800' }
                        ].map((market, index) => (
                            <div key={index} className="group relative h-[24rem] rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-sky-900/20 transition-all duration-700">

                                {/* Background Image with smooth scale */}
                                <img
                                    src={market.img}
                                    alt={market.title}
                                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                                />

                                {/* Multi-layered Gradient for depth */}
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700"></div>
                                <div className="absolute inset-0 bg-sky-900/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                                {/* Index Number Indicator */}
                                <div className="absolute top-6 right-8 text-white/30 font-bold tracking-widest text-sm font-mono group-hover:text-white/60 transition-colors duration-500">
                                    0{index + 1}
                                </div>

                                {/* Floating Glass Capsule */}
                                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                    <div className="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-[1.5rem] transform translate-y-4 group-hover:translate-y-0 group-hover:bg-white/15 transition-all duration-500 overflow-hidden">

                                        {/* Glowing Top Border inside the capsule */}
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 shrink-0 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white group-hover:bg-sky-500 group-hover:border-sky-400 transition-all duration-500">
                                                <market.icon className="w-5 h-5" strokeWidth={2} />
                                            </div>
                                            <h3 className="text-xl font-bold text-white tracking-wide leading-tight group-hover:text-sky-100 transition-colors duration-300">
                                                {market.title}
                                            </h3>
                                        </div>

                                        {/* Expanding Details Section */}
                                        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                                            <div className="overflow-hidden">
                                                <div className="pt-5 mt-5 border-t border-white/20 flex justify-between items-center">
                                                    <span className="text-sky-300 text-xs font-bold uppercase tracking-widest">
                                                        Explore Division
                                                    </span>
                                                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                                        <ArrowRight className="w-4 h-4" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2026 MODERN PRODUCTS SECTION */}
            <section className="py-32 bg-white relative overflow-hidden" id="products">
                {/* Subtle background glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-sky-50/50 blur-[100px] rounded-full pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10">

                    {/* Header Area */}
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 max-w-7xl mx-auto gap-8">
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold tracking-widest uppercase mb-6 border border-emerald-100">
                                <Box className="w-3.5 h-3.5" /> Core Divisions
                            </div>
                            <h3 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
                                High-Performance <br />
                                <span className="text-gray-400 font-light">Materials Catalog</span>
                            </h3>
                        </div>

                        <button className="group relative px-6 py-3 bg-gray-900 text-white rounded-full text-sm font-bold uppercase tracking-wider overflow-hidden shadow-lg shadow-gray-900/20 hover:shadow-gray-900/40 transition-all duration-300">
                            <div className="absolute inset-0 w-0 bg-sky-600 transition-all duration-500 ease-out group-hover:w-full z-0"></div>
                            <span className="relative z-10 flex items-center gap-2">
                                View Complete Catalog <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                        </button>
                    </div>

                    {/* Interactive Spec Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {[
                            {
                                series: 'AmedaStruct™',
                                title: 'High-Tensile Alloys',
                                desc: 'Engineered for extreme load-bearing infrastructure and aerospace applications.',
                                img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800',
                                specs: [
                                    { label: 'Tensile Strength', value: '> 1200 MPa' },
                                    { label: 'Thermal Grade', value: 'Aerospace' }
                                ]
                            },
                            {
                                series: 'AmedaChem™',
                                title: 'Industrial Solvents',
                                desc: 'High-purity chemical compounds essential for precision manufacturing processes.',
                                img: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=800',
                                specs: [
                                    { label: 'Base Purity', value: '99.98%' },
                                    { label: 'ISO Standard', value: 'ISO 9001:2015' }
                                ]
                            },
                            {
                                series: 'AmedaPoly™',
                                title: 'Advanced Polymers',
                                desc: 'Durable, temperature-resistant synthetic materials for next-gen technology.',
                                img: 'https://images.unsplash.com/photo-1587582423116-ec07293f0395?q=80&w=800',
                                specs: [
                                    { label: 'Flexural Modulus', value: 'High Yield' },
                                    { label: 'Temp Resistance', value: 'Up to 350°C' }
                                ]
                            }
                        ].map((product, idx) => (
                            <div key={idx} className="group relative h-[32rem] rounded-[2rem] bg-gray-900 overflow-hidden shadow-md hover:shadow-2xl hover:shadow-sky-900/10 transition-all duration-700 cursor-pointer">

                                {/* Full Background Image */}
                                <img
                                    src={product.img}
                                    alt={product.title}
                                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-[1.5s] ease-out"
                                />

                                {/* Gradient Overlays */}
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/20 to-transparent opacity-90"></div>
                                <div className="absolute inset-0 bg-sky-900/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                                {/* Floating Series Badge */}
                                <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase shadow-sm group-hover:bg-white group-hover:text-gray-900 transition-colors duration-500">
                                    {product.series}
                                </div>

                                {/* Floating Glassmorphism Content Panel */}
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-[1.5rem] transform group-hover:-translate-y-2 group-hover:bg-white/15 transition-all duration-500 overflow-hidden">

                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="text-2xl font-black text-white tracking-wide">{product.title}</h3>
                                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/20 group-hover:bg-sky-500 group-hover:border-sky-500 transform group-hover:rotate-45 transition-all duration-500 shrink-0">
                                                <ArrowUpRight className="w-5 h-5" />
                                            </div>
                                        </div>

                                        <p className="text-gray-300 text-sm leading-relaxed mb-0 group-hover:mb-6 transition-all duration-500">
                                            {product.desc}
                                        </p>

                                        {/* Expanding Technical Specs Section */}
                                        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                                            <div className="overflow-hidden">
                                                <div className="pt-4 border-t border-white/20 flex gap-6">
                                                    {product.specs.map((spec, i) => (
                                                        <div key={i} className="flex flex-col">
                                                            <span className="text-sky-300 text-[0.65rem] font-bold uppercase tracking-widest mb-1">{spec.label}</span>
                                                            <span className="text-white text-sm font-semibold">{spec.value}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BRIGHT & VISIBLE GLOBAL NETWORK & TESTIMONIALS SECTION */}
            <section className="py-32 bg-white relative overflow-hidden" id="global-network">
                {/* Soft, bright ambient background accents - Strictly Blue/Sky Theme */}
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-50/80 blur-[120px] rounded-full pointer-events-none z-0"></div>
                <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-sky-50/80 blur-[120px] rounded-full pointer-events-none z-0"></div>

                <div className="container mx-auto px-6 relative z-10 max-w-7xl">

                    {/* Section Header - Monochromatic Blue Theme */}
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 border border-blue-100 mb-6 shadow-sm">
                            <Globe className="w-4 h-4" />
                            <span className="text-xs font-bold tracking-widest uppercase">Global Trade Architecture</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight leading-[1.1]">
                            Borderless Sourcing, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-sky-500">Precision Delivery</span>
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed font-medium">
                            Operating across major industrial hubs, our strategic locations ensure agile logistics and uninterrupted material flow to our partners worldwide.
                        </p>
                    </div>

                    {/* Interactive UI Map Container */}
                    <div className="relative w-full max-w-5xl mx-auto aspect-[2/1] bg-gradient-to-br from-blue-50/30 to-white rounded-[2.5rem] border border-blue-100/50 mb-24 overflow-hidden shadow-[0_20px_50px_rgba(14,165,233,0.08)]">

                        {/* Highly Reliable Blank World Map SVG */}
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg"
                            alt="World Map"
                            className="absolute inset-0 w-full h-full object-contain p-8 opacity-20 pointer-events-none"
                            style={{ filter: 'invert(53%) sepia(50%) saturate(1487%) hue-rotate(167deg) brightness(97%) contrast(97%)' }}
                        />

                        {/* Connecting Trade Route Lines - Mathematically aligned */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 500" preserveAspectRatio="none">
                            {/* USA to India Route */}
                            <path d="M 220 180 Q 450 80 680 230" stroke="url(#light-trade-grad)" strokeWidth="2.5" fill="transparent" strokeDasharray="6,6" className="animate-[dash_20s_linear_infinite]" />
                            {/* India to Japan Route */}
                            <path d="M 680 230 Q 750 160 840 180" stroke="url(#light-trade-grad)" strokeWidth="2.5" fill="transparent" strokeDasharray="6,6" />
                            {/* Brazil to South Africa Route */}
                            <path d="M 330 330 Q 430 380 540 360" stroke="url(#light-trade-grad)" strokeWidth="2.5" fill="transparent" strokeDasharray="6,6" />
                            <defs>
                                <linearGradient id="light-trade-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#2563eb" />
                                    <stop offset="100%" stopColor="#0ea5e9" />
                                </linearGradient>
                            </defs>
                        </svg>

                        {/* Map Markers */}
                        {[
                            { country: 'USA', position: 'top-[36%] left-[22%]', delay: 'delay-[0ms]' },
                            { country: 'Brazil', position: 'top-[66%] left-[33%]', delay: 'delay-[200ms]' },
                            { country: 'South Africa', position: 'top-[72%] left-[54%]', delay: 'delay-[400ms]' },
                            { country: 'India', position: 'top-[46%] left-[68%]', delay: 'delay-[600ms]' },
                            { country: 'China', position: 'top-[39%] left-[76%]', delay: 'delay-[800ms]' },
                            { country: 'Japan', position: 'top-[36%] left-[84%]', delay: 'delay-[1000ms]' }
                        ].map((marker, idx) => (
                            <div key={idx} className={`absolute ${marker.position} flex flex-col items-center group cursor-pointer -translate-x-1/2 -translate-y-1/2`}>

                                {/* Ping Animation */}
                                <div className="relative flex items-center justify-center">
                                    <div className={`absolute w-10 h-10 bg-sky-400/40 rounded-full animate-ping ${marker.delay}`}></div>
                                    <div className="relative z-10 w-3.5 h-3.5 bg-blue-600 rounded-full border-[2.5px] border-white shadow-md group-hover:scale-150 group-hover:bg-sky-500 transition-all duration-300"></div>
                                </div>

                                {/* Tooltip Label */}
                                <div className="absolute top-5 opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300 bg-gray-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap z-20 shadow-xl pointer-events-none">
                                    {marker.country} Hub
                                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                                </div>

                            </div>
                        ))}
                    </div>

                    {/* Premium Testimonials Grid */}


                </div>
            </section>
            {/* PREMIUM ENTERPRISE STATS SECTION */}
            <section className="py-24 relative overflow-hidden bg-gray-950 border-y border-gray-900">

                {/* Modern Technical Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>

                {/* Ambient Glowing Orbs */}
                <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-sky-600/20 blur-[120px] rounded-full pointer-events-none"></div>
                <div className="absolute top-1/2 right-1/4 translate-x-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-emerald-600/10 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {[
                            { num: '500', suffix: 'k+', label: 'MT Annual Capacity', icon: Layers, color: 'text-sky-400', bg: 'bg-sky-500/10', border: 'group-hover:border-sky-500/30' },
                            { num: '120', suffix: '+', label: 'Export Destinations', icon: Globe, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'group-hover:border-emerald-500/30' },
                            { num: '25', suffix: '+', label: 'Years Experience', icon: ShieldCheck, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'group-hover:border-blue-500/30' },
                            { num: '99', suffix: '%', label: 'On-Time Delivery', icon: Zap, color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'group-hover:border-amber-500/30' }
                        ].map((stat, idx) => (
                            <div
                                key={idx}
                                className={`relative group p-10 rounded-[2rem] bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] ${stat.border} hover:bg-white/[0.04] transition-all duration-500 overflow-hidden text-center cursor-default`}
                            >
                                {/* Internal Hover Glow */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative z-10 flex flex-col items-center">

                                    {/* Icon Container */}
                                    <div className={`w-14 h-14 rounded-2xl ${stat.bg} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500 shadow-inner`}>
                                        <stat.icon className={`w-7 h-7 ${stat.color}`} strokeWidth={1.5} />
                                    </div>

                                    {/* Number & Suffix */}
                                    <div className="flex items-baseline justify-center gap-1 mb-3">
                                        <span className="text-5xl md:text-6xl font-black text-white tracking-tighter drop-shadow-md">
                                            {stat.num}
                                        </span>
                                        <span className={`text-3xl font-black ${stat.color}`}>
                                            {stat.suffix}
                                        </span>
                                    </div>

                                    {/* Expanding Accent Divider */}
                                    <div className={`h-0.5 w-8 bg-gray-800 group-hover:w-20 transition-all duration-700 ease-out my-4 rounded-full`}>
                                        <div className={`h-full w-full bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                                    </div>

                                    {/* Label */}
                                    <span className="text-[0.65rem] font-bold text-gray-400 uppercase tracking-[0.2em]">
                                        {stat.label}
                                    </span>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2026 EDITORIAL KNOWLEDGE HUB */}
            <section className="py-32 bg-gray-50 relative overflow-hidden" id="insights">

                {/* Subtle Decorative Background Lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50 z-0"></div>

                <div className="container mx-auto px-6 relative z-10 max-w-7xl">

                    {/* Header Area */}
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold tracking-widest uppercase mb-6 border border-indigo-100">
                                <Box className="w-3.5 h-3.5" /> Market Intelligence
                            </div>
                            <h3 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
                                Latest Industry <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-500">Insights & Reports</span>
                            </h3>
                        </div>

                        <button className="group flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-gray-600 hover:text-indigo-600 transition-colors duration-300">
                            View All Articles
                            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-indigo-600 group-hover:bg-indigo-50 transition-all duration-300">
                                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
                        </button>
                    </div>

                    {/* Premium Editorial Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { tag: 'Supply Chain', title: 'Navigating Global Shipping Disruptions in 2026', date: 'Sep 24, 2026', readTime: '5 min read', img: 'https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?q=80&w=800' },
                            { tag: 'Materials Science', title: 'The Rise of Bio-Based Polymers in Manufacturing', date: 'Sep 18, 2026', readTime: '8 min read', img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800' },
                            { tag: 'Compliance', title: 'Understanding New REACH Regulations for Imports', date: 'Sep 10, 2026', readTime: '6 min read', img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800' }
                        ].map((post, idx) => (
                            <div key={idx} className="group relative bg-white p-3 rounded-[2.5rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.1)] transition-all duration-500 cursor-pointer flex flex-col">

                                {/* Image Container with Floating Tags */}
                                <div className="relative h-60 rounded-[2rem] overflow-hidden mb-6">
                                    <img
                                        src={post.img}
                                        alt={post.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                                    />
                                    {/* Dark gradient overlay for tag legibility */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 via-transparent to-transparent"></div>

                                    {/* Floating Tag */}
                                    <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-1.5 rounded-full text-[0.65rem] font-bold tracking-widest uppercase shadow-sm">
                                        {post.tag}
                                    </div>
                                </div>

                                {/* Article Content */}
                                <div className="px-5 pb-5 flex flex-col flex-1">
                                    <div className="flex items-center gap-3 text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                                        <span>{post.date}</span>
                                        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                        <span>{post.readTime}</span>
                                    </div>

                                    <h4 className="text-xl font-black text-gray-900 leading-snug mb-6 group-hover:text-indigo-600 transition-colors duration-300 line-clamp-3">
                                        {post.title}
                                    </h4>

                                    {/* Animated Read Button placed at the bottom */}
                                    <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                                        <span className="text-sm font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                                            Read Full Report
                                        </span>
                                        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-indigo-100 transition-colors duration-300 text-gray-400 group-hover:text-indigo-600">
                                            <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* REST OF SECTIONS (Products, Stats, Global Network, Insights) Remain Identical, but rendered via MainLayout */}
            {/* ... (Include your complete existing Home sections here) ... */}
        </MainLayout>
    );
}