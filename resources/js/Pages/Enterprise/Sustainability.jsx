import React, { useState, useEffect } from 'react';
import MainLayout from '@/Layouts/MainLayout';
import { Head, Link } from '@inertiajs/react';
import { Leaf, Globe, Recycle, ShieldCheck, ArrowRight, CheckCircle2, Trees, Droplet, Sun, ChevronLeft, ChevronRight, Award, Zap, Factory, BarChart3, HeartHandshake, Users } from 'lucide-react';

export default function Sustainability() {
    const [mounted, setMounted] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [activeEsgTab, setActiveEsgTab] = useState(0);

    useEffect(() => {
        setMounted(true);
    }, []);

    const sliderImages = [
        {
            url: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=3840&auto=format&fit=crop",
            title: "Green Energy Integration",
            subtitle: "Transitioning 100% of our global logistics hubs to solar and wind micro-grids by 2028."
        },
        {
            url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=3840&auto=format&fit=crop",
            title: "Circular Economy Packaging",
            subtitle: "Eliminating single-use plastics across all chemical and pharmaceutical shipments."
        },
        {
            url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=3840&auto=format&fit=crop",
            title: "Responsible Watershed Management",
            subtitle: "Advanced water recycling units installed across all manufacturing and synthesis plants."
        }
    ];

    const esgTabs = [
        {
            title: "Environmental (E)",
            subtitle: "Carbon Neutrality & Circular Economy",
            desc: "Our environmental framework prioritizes radical reduction of Scope 1, 2, and 3 emissions. Through automated power management in our warehousing facilities and zero-discharge chemical synthesis, we ensure ecological preservation across all operating territories.",
            points: ["50% emissions reduction target by 2030", "100% recyclable chemical packaging", "Zero-waste landfill certification"]
        },
        {
            title: "Social (S)",
            subtitle: "Workforce Equity & Community Upliftment",
            desc: "We invest directly in the safety, mental health, and professional growth of our global workforce. By funding technical vocational academies near our manufacturing hubs, we foster long-term community resilience and fair labor practices.",
            points: ["Vocational training academies for youth", "Comprehensive global health coverage", "Zero-tolerance workplace safety standards"]
        },
        {
            title: "Governance (G)",
            subtitle: "Ethical Sourcing & Transparent Audits",
            desc: "Absolute accountability drives our supply chain. Every mineral ore, active pharmaceutical ingredient, and alloy supplier undergoes rigorous third-party auditing to guarantee conflict-free origins and strict anti-corruption compliance.",
            points: ["100% audited tier-1 supplier network", "ISO 37002 whistleblower protection", "Independent audit board oversight"]
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [sliderImages.length]);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);

    return (
        <MainLayout>
            <Head title="Sustainability & ESG | Ameda Global" />

            {/* HERO SECTION */}
            <section className="relative pt-36 pb-28 lg:pt-52 lg:pb-36 overflow-hidden bg-gray-900 text-white">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=3840&auto=format&fit=crop"
                        alt="Ameda Global Sustainability Initiatives"
                        className="w-full h-full object-cover opacity-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/50 to-emerald-950/30"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                    <div className={`transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/40 text-emerald-300 mb-6 shadow-lg">
                            <Leaf className="w-4 h-4 text-emerald-400" />
                            <span className="text-xs font-bold tracking-widest uppercase">Environmental, Social & Governance (ESG)</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight drop-shadow-lg">
                            Pioneering Sustainable Futures & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200">Resilient Circular Economies</span>
                        </h1>
                        <p className="text-xl text-gray-100 max-w-3xl leading-relaxed border-l-4 border-emerald-500 pl-6 font-light drop-shadow-md">
                            At Ameda Global, environmental stewardship is embedded into every tier of our supply chain architecture. We unite rigorous chemical synthesis with zero-waste logistics across 120+ nations.
                        </p>
                    </div>
                </div>
            </section>

            {/* METRICS & ESG SCORECARD BAR */}
            <section className="bg-emerald-950 text-white py-12 border-y border-emerald-900">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="p-4">
                            <div className="text-4xl font-black text-emerald-400 mb-1">-50%</div>
                            <div className="text-xs font-bold uppercase tracking-widest text-emerald-200/70">Scope 1 & 2 Emissions Target</div>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl font-black text-emerald-400 mb-1">100%</div>
                            <div className="text-xs font-bold uppercase tracking-widest text-emerald-200/70">Recyclable Packaging By 2030</div>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl font-black text-emerald-400 mb-1">Zero</div>
                            <div className="text-xs font-bold uppercase tracking-widest text-emerald-200/70">Waste Landfill Warehousing</div>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl font-black text-emerald-400 mb-1">AAA</div>
                            <div className="text-xs font-bold uppercase tracking-widest text-emerald-200/70">Global ESG Rating</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTERACTIVE ESG PILLARS SECTION */}
            <section className="py-28 bg-white text-gray-900">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-xs font-bold text-emerald-600 tracking-widest uppercase mb-4 block">Core Framework</span>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight">Our ESG Commitment Pillars</h2>
                        <p className="text-gray-600 mt-4 text-lg">Click through our Environmental, Social, and Governance benchmarks to explore our strategic roadmap.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        {esgTabs.map((tab, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveEsgTab(idx)}
                                className={`p-8 rounded-[2rem] border text-left transition-all duration-300 ${activeEsgTab === idx ? 'bg-emerald-900 text-white border-emerald-900 shadow-xl shadow-emerald-900/20' : 'bg-gray-50 text-gray-900 border-gray-200 hover:bg-gray-100'}`}
                            >
                                <span className={`text-xs font-black uppercase tracking-widest block mb-2 ${activeEsgTab === idx ? 'text-emerald-300' : 'text-emerald-600'}`}>Pillar 0{idx + 1}</span>
                                <h3 className="text-2xl font-black mb-1">{tab.title}</h3>
                                <p className={`text-xs ${activeEsgTab === idx ? 'text-gray-300' : 'text-gray-500'}`}>{tab.subtitle}</p>
                            </button>
                        ))}
                    </div>

                    <div className="bg-gray-50 border border-gray-200/80 p-10 md:p-14 rounded-[2.5rem] shadow-sm">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            <div className="lg:col-span-7 space-y-6">
                                <span className="text-xs font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 border border-emerald-200 px-4 py-1.5 rounded-lg inline-block">
                                    Strategic Focus Area
                                </span>
                                <h3 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
                                    {esgTabs[activeEsgTab].headline || esgTabs[activeEsgTab].title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-base font-light">
                                    {esgTabs[activeEsgTab].desc}
                                </p>
                            </div>
                            <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-gray-200/80 shadow-sm space-y-4">
                                <h4 className="font-extrabold text-gray-900 text-sm uppercase tracking-wider mb-2">Key Benchmarks</h4>
                                {esgTabs[activeEsgTab].points.map((pt, pIdx) => (
                                    <div key={pIdx} className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                                        <span>{pt}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* IMAGE SLIDER CAROUSEL SECTION */}
            <section className="py-28 bg-gray-950 text-white overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-xs font-bold text-emerald-400 tracking-widest uppercase mb-4 block">Visualizing Our Impact</span>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                            Global Sustainability in Action
                        </h2>
                        <p className="text-gray-400 mt-4 text-lg">Explore our active ecological projects, solar-powered logistics depots, and closed-loop material recovery facilities.</p>
                    </div>

                    {/* Slider Component */}
                    <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-gray-800 bg-gray-900 h-[500px] md:h-[600px] flex items-center">
                        <div className="absolute inset-0 z-0">
                            <img
                                src={sliderImages[currentSlide].url}
                                alt={sliderImages[currentSlide].title}
                                className="w-full h-full object-cover opacity-60 transition-opacity duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"></div>
                        </div>

                        <div className="relative z-10 p-8 md:p-16 max-w-3xl text-white">
                            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-4 py-1.5 rounded-full border border-emerald-800 mb-4 inline-block">
                                Initiative 0{currentSlide + 1} of 0{sliderImages.length}
                            </span>
                            <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
                                {sliderImages[currentSlide].title}
                            </h3>
                            <p className="text-gray-300 text-lg leading-relaxed font-light">
                                {sliderImages[currentSlide].subtitle}
                            </p>
                        </div>

                        {/* Slider Controls */}
                        <div className="absolute bottom-8 right-8 z-20 flex gap-3">
                            <button onClick={prevSlide} className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-emerald-600 transition-colors">
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button onClick={nextSlide} className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-emerald-600 transition-colors">
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2030 ROADMAP & MATERIAL SOURCING */}
            <section className="py-28 bg-white text-gray-900">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="bg-emerald-50 border border-emerald-100 p-10 md:p-12 rounded-[2.5ref]">
                            <h3 className="text-3xl font-black text-emerald-950 mb-6 tracking-tight">Our 2030 ESG Roadmap</h3>
                            <p className="text-gray-700 text-sm leading-relaxed mb-8">
                                We measure our corporate success not solely by financial returns, but by our net-positive impact on global ecosystems and industrial communities.
                            </p>
                            <ul className="space-y-4 text-emerald-900 font-bold text-sm">
                                <li className="flex items-center gap-3 bg-white p-4 rounded-xl border border-emerald-100 shadow-sm">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" /> 50% Reduction in Scope 1 & 2 Emissions across all hubs
                                </li>
                                <li className="flex items-center gap-3 bg-white p-4 rounded-xl border border-emerald-100 shadow-sm">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" /> 100% Recyclable Packaging across chemical & pharma shipments
                                </li>
                                <li className="flex items-center gap-3 bg-white p-4 rounded-xl border border-emerald-100 shadow-sm">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" /> Zero-Waste Warehousing operations deployed globally by 2030
                                </li>
                            </ul>
                        </div>

                        <div>
                            <span className="text-xs font-bold text-emerald-600 tracking-widest uppercase mb-4 block">Ethical Supply Integrity</span>
                            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-6">
                                Responsible Material Sourcing & Audits
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-8 font-normal">
                                We audit every tier of our supplier network to guarantee conflict-free minerals, eco-friendly chemical synthesis, and fair-wage community development across all operating zones.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200/80 shadow-sm">
                                    <Trees className="w-8 h-8 text-emerald-600 mb-3" />
                                    <h4 className="font-bold text-gray-900 mb-1">Conflict-Free Minerals</h4>
                                    <p className="text-xs text-gray-500 leading-relaxed">Rigorous tracing of all metallic ores and battery-grade lithium sources.</p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200/80 shadow-sm">
                                    <Droplet className="w-8 h-8 text-emerald-600 mb-3" />
                                    <h4 className="font-bold text-gray-900 mb-1">Water Conservation</h4>
                                    <p className="text-xs text-gray-500 leading-relaxed">Closed-loop filtration preventing industrial chemical runoff into watersheds.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* RENEWABLE FLEET & LOGISTICS DECARBONIZATION */}
            <section className="py-28 bg-gray-50 border-t border-gray-200/60">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-600/20 to-teal-500/20 rounded-[3rem] blur-2xl"></div>
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-200">
                                <img
                                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=3840&auto=format&fit=crop"
                                    alt="Green Logistics Fleet"
                                    className="w-full h-[450px] object-cover"
                                />
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="text-xs font-bold text-emerald-600 tracking-widest uppercase mb-4 block">Fleet Decarbonization</span>
                            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight mb-6">
                                Electrifying Global Freight Corridors
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Transportation emissions represent a critical challenge in heavy industrial trade. Ameda Global is actively modernizing its shipping fleets with electric freight carriers, liquefied natural gas (LNG) maritime vessels, and AI-optimized route planning that minimizes idle fuel consumption.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold shrink-0 mt-1">✓</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">AI Route Optimization</h4>
                                        <p className="text-xs text-gray-500 mt-1">Predictive routing algorithms reduce cumulative transit mileage by 14% annually.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold shrink-0">✓</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Alternative Fuel PPA Agreements</h4>
                                        <p className="text-xs text-gray-500 mt-1">Long-term power purchase agreements securing green hydrogen and bio-diesel bunkering.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SOCIAL IMPACT & COMMUNITY DEVELOPMENT */}
            <section className="py-28 bg-emerald-950 text-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-xs font-bold text-emerald-400 tracking-widest uppercase mb-4 block">Social Responsibility</span>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
                            Empowering Communities Across Operating Zones
                        </h2>
                        <p className="text-gray-300 mt-4 text-lg">True sustainability extends beyond carbon accounting—it requires active investment in regional workforces, education, and public health.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-emerald-900/40 p-8 rounded-[2rem] border border-emerald-800 shadow-xl">
                            <Users className="w-10 h-10 text-emerald-400 mb-6" />
                            <h3 className="text-xl font-bold mb-3">Vocational Training Academies</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">Funding technical colleges near our industrial manufacturing hubs to equip local youth with advanced chemical engineering and logistics skills.</p>
                        </div>
                        <div className="bg-emerald-900/40 p-8 rounded-[2rem] border border-emerald-800 shadow-xl">
                            <HeartHandshake className="w-10 h-10 text-emerald-400 mb-6" />
                            <h3 className="text-xl font-bold mb-3">Safe Harbor Health Initiatives</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">Providing comprehensive clean drinking water infrastructure and mobile healthcare clinics for rural communities adjacent to our supply corridors.</p>
                        </div>
                        <div className="bg-emerald-900/40 p-8 rounded-[2rem] border border-emerald-800 shadow-xl">
                            <Award className="w-10 h-10 text-emerald-400 mb-6" />
                            <h3 className="text-xl font-bold mb-3">Fair Wage & Labor Equity</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">Guaranteeing living wages, ergonomic safety standards, and progressive mental health support for all direct and contracted personnel.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CALL TO ACTION */}
            <section className="relative py-24 bg-emerald-600 overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')] opacity-10"></div>
                <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Partner With a Sustainable Enterprise</h2>
                    <p className="text-emerald-100 text-lg mb-10 max-w-2xl mx-auto font-light">
                        Discover how our ESG-compliant supply chains and green chemical intermediates can elevate your corporate sustainability targets.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="bg-white text-emerald-700 hover:bg-gray-50 px-8 py-4 rounded-full font-bold uppercase tracking-wider shadow-xl transition-all flex items-center justify-center gap-2">
                            Request ESG Dossier <ArrowRight className="w-4 h-4" />
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