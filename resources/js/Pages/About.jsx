import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import MainLayout from '../Layouts/MainLayout';
import { useLanguage } from '../Contexts/LanguageContext';
import { 
    Compass, Target, ShieldCheck, Zap, Briefcase, Award, 
    ArrowRight, Building2, Globe2, Cpu, Users2, Factory, CheckCircle2, MapPin, Network, Sparkles 
} from 'lucide-react';

export default function About() {
    const [mounted, setMounted] = useState(false);
    const [selectedHub, setSelectedHub] = useState(0);

    useEffect(() => setMounted(true), []);

    const globalHubs = [
        { 
            region: 'North America Hub', 
            location: 'Houston, USA', 
            role: 'Advanced Polymer & Alloy Distribution Center',
            metrics: '40M+ Tons Handled Annually',
            img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000'
        },
        { 
            region: 'European Headquarters', 
            location: 'Frankfurt, Germany', 
            role: 'Regulatory Compliance & Chemical Synthesis Node',
            metrics: '100% ISO Aligned Node',
            img: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=1000'
        },
        { 
            region: 'Asia-Pacific Logistics', 
            location: 'Singapore', 
            role: 'Maritime Freight & Semiconductor Silicon Hub',
            metrics: '85+ Shipping Lanes Connected',
            img: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1000'
        },
        { 
            region: 'Global Corporate HQ', 
            location: 'Mumbai, India', 
            role: 'Executive Leadership & Real-Time Trade Engineering',
            metrics: '24/7 Global Command Center',
            img: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=1000'
        }
    ];

    const leadershipTeam = [
        { name: 'Vikram Ameda', role: 'Founder & Chief Executive Officer', desc: 'Over 30 years of expertise in international trade law and heavy industrial procurement.' },
        { name: 'Dr. Elena Rostova', role: 'Chief Technology & Synthesis Officer', desc: 'Leading our clean chemistry divisions and AI-driven predictive supply analytics.' },
        { name: 'Marcus Vance', role: 'Global Logistics & Freight Director', desc: 'Orchestrating maritime routes, customs compliance, and cold-chain integrity across 120+ nations.' }
    ];

    return (
        <MainLayout>
            {/* HERO SECTION (True High-Visibility 4K Image) */}
            <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-gray-900 min-h-[60vh] flex items-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=3840&auto=format&fit=crop"
                        alt="Ameda Global Corporate Headquarters"
                        className="w-full h-full object-cover opacity-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/50 to-blue-950/30"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                    <div className={`transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/35 backdrop-blur-md border border-blue-400/40 text-sky-200 mb-6 shadow-lg">
                            <Building2 className="w-4 h-4 text-sky-300" />
                            <span className="text-xs font-bold tracking-widest uppercase">Corporate Overview</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight drop-shadow-lg">
                            Architecting the Future of <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-sky-200">Global Supply Chains</span>
                        </h1>
                        <p className="text-xl text-gray-100 max-w-2xl leading-relaxed border-l-4 border-blue-500 pl-6 font-light drop-shadow-md">
                            Since our inception, Ameda Global has defined the standard for unyielding quality, agile logistics, and deep-market compliance across 120+ nations.
                        </p>
                    </div>
                </div>
            </section>

            {/* OUR STORY SECTION */}
            <section className="py-32 bg-white relative">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-sm font-bold text-blue-700 tracking-widest uppercase mb-4 flex items-center gap-2">
                                <Compass className="w-5 h-5" /> Our Heritage
                            </h2>
                            <h3 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-8">
                                From Local Sourcing to <br />
                                <span className="text-blue-700">Global Dominance</span>
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6 font-medium">
                                Ameda Global was founded on a singular premise: the world's most critical industries require materials that never fail, delivered through supply chains that never break.
                            </p>
                            <p className="text-gray-500 leading-relaxed mb-10">
                                Over the past 25 years, we have scaled our operations from a specialized regional procurement firm into an international logistics titan. By combining bleeding-edge data analytics with decades of geopolitical trade expertise, we bypass traditional bottlenecks to deliver high-tensile alloys, industrial solvents, and advanced polymers precisely when our partners need them.
                            </p>
                            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-100">
                                <div>
                                    <div className="text-4xl font-black text-gray-900 mb-1">25<span className="text-blue-600">+</span></div>
                                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Years of Excellence</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-black text-gray-900 mb-1">120<span className="text-sky-500">+</span></div>
                                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Global Markets</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-br from-blue-50 to-sky-50 rounded-[3rem] transform -rotate-3 z-0"></div>
                            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border border-white">
                                <img
                                    src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=3840&auto=format&fit=crop"
                                    alt="Ameda Global Operations Hub"
                                    className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-[2s] ease-out"
                                />
                                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white">
                                    <div className="flex gap-4 items-start">
                                        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                                            <Target className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="text-gray-900 font-bold mb-1">Our Mission</h4>
                                            <p className="text-sm text-gray-600 leading-relaxed">
                                                To architect frictionless global trade networks that empower high-stakes manufacturing and infrastructure worldwide.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* UNIQUE SECTION 1: INTERACTIVE GLOBAL FOOTPRINT SHOWCASE */}
            <section className="py-28 bg-slate-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-xs font-bold text-sky-400 tracking-widest uppercase mb-3 block flex items-center justify-center gap-2">
                            <Network className="w-4 h-4" /> International Infrastructure
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Strategic Global Command Hubs</h2>
                        <p className="text-slate-400 text-lg">Click a regional node below to inspect our primary operational centers across international trade corridors.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        {/* Hub List */}
                        <div className="lg:col-span-5 space-y-4">
                            {globalHubs.map((hub, hIdx) => (
                                <div 
                                    key={hIdx}
                                    onClick={() => setSelectedHub(hIdx)}
                                    className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 flex items-center justify-between ${selectedHub === hIdx ? 'bg-blue-600 border-blue-500 shadow-xl shadow-blue-600/20 translate-x-2' : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'}`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold ${selectedHub === hIdx ? 'bg-white text-blue-600' : 'bg-slate-800 text-sky-400'}`}>
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <span className={`text-xs font-bold uppercase tracking-wider block ${selectedHub === hIdx ? 'text-blue-100' : 'text-slate-400'}`}>{hub.location}</span>
                                            <h4 className={`text-lg font-bold ${selectedHub === hIdx ? 'text-white' : 'text-slate-200'}`}>{hub.region}</h4>
                                        </div>
                                    </div>
                                    <ArrowRight className={`w-5 h-5 transition-transform ${selectedHub === hIdx ? 'text-white translate-x-1' : 'text-slate-600'}`} />
                                </div>
                            ))}
                        </div>

                        {/* Hub Preview Visual Box */}
                        <div className="lg:col-span-7">
                            <div className="relative rounded-[2.5rem] overflow-hidden border border-slate-800 shadow-2xl h-[400px] flex items-end p-8 md:p-12">
                                <div className="absolute inset-0 z-0">
                                    <img 
                                        src={globalHubs[selectedHub].img} 
                                        alt={globalHubs[selectedHub].region} 
                                        className="w-full h-full object-cover opacity-60 transition-all duration-700 scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
                                </div>
                                <div className="relative z-10 space-y-3">
                                    <span className="bg-sky-500/20 text-sky-300 border border-sky-500/30 text-xs font-bold px-3 py-1.5 rounded-full inline-block">
                                        {globalHubs[selectedHub].metrics}
                                    </span>
                                    <h3 className="text-3xl font-black text-white">{globalHubs[selectedHub].region}</h3>
                                    <p className="text-slate-300 text-sm font-light max-w-lg leading-relaxed">{globalHubs[selectedHub].role}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* UNIQUE SECTION 2: MODERN FLOATING FEATURE MATRIX (Replaces old Core Philosophy grid) */}
            <section className="py-32 bg-gray-50 relative">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-xs font-bold text-blue-600 tracking-widest uppercase mb-3 block">Operational Standards</span>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">The Pillars Driving Our Enterprise Network</h2>
                        <p className="text-gray-600 mt-4 text-lg">Engineered for absolute reliability, security, and partnership longevity.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { 
                                icon: ShieldCheck, 
                                title: 'ISO-Certified Uncompromising Quality', 
                                subtitle: 'Multi-stage laboratory assays ensuring absolute compound purity and structural integrity.',
                                color: 'bg-blue-500 text-blue-600'
                            },
                            { 
                                icon: Zap, 
                                title: 'Proprietary Predictive Logistics', 
                                subtitle: 'Real-time AI telemetry models that reroute freight autonomously, bypassing global bottlenecks.',
                                color: 'bg-sky-500 text-sky-600'
                            },
                            { 
                                icon: Briefcase, 
                                title: 'Global Regulatory Compliance', 
                                subtitle: 'In-house legal teams navigating complex international tariffs and customs protocols seamlessly.',
                                color: 'bg-indigo-500 text-indigo-600'
                            },
                            { 
                                icon: Award, 
                                title: 'Strategic Partnership First', 
                                subtitle: 'Deep integration as dedicated procurement consultants supporting your long-term manufacturing growth.',
                                color: 'bg-emerald-500 text-emerald-600'
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex items-start gap-6 group">
                                <div className={`w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300`}>
                                    <item.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-black text-gray-900">{item.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.subtitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 3: TECHNOLOGY & PREDICTIVE LOGISTICS */}
            <section className="py-28 bg-gray-950 text-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-xs font-bold text-sky-400 tracking-widest uppercase mb-4 block">Digital Infrastructure</span>
                            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
                                Powered by AI & Real-Time Telemetry
                            </h2>
                            <p className="text-gray-300 leading-relaxed mb-8 font-light">
                                Our proprietary Laravel and React-based platforms allow procurement teams to monitor inventory levels, track cold-chain transit parameters, and manage automated campaign updates in real-time.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-sm text-gray-200">
                                    <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" />
                                    <span>Automated customs clearance document generation</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-200">
                                    <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" />
                                    <span>Real-time temperature and location GPS telemetry</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-200">
                                    <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" />
                                    <span>Integrated GrapesJS campaign builders for client bulletins</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-900 p-8 rounded-[2.5rem] border border-gray-800 shadow-2xl">
                            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-800">
                                <Cpu className="w-8 h-8 text-sky-400" />
                                <div>
                                    <h4 className="font-bold text-white">AmedaCore™ Analytics Engine</h4>
                                    <p className="text-xs text-gray-400">Version 11.2 Enterprise Build</p>
                                </div>
                            </div>
                            <div className="space-y-4 text-sm font-mono">
                                <div className="flex justify-between bg-gray-950 p-4 rounded-xl">
                                    <span className="text-gray-400">Global Route Optimization:</span>
                                    <span className="text-sky-400 font-bold">Active (99.8% Efficiency)</span>
                                </div>
                                <div className="flex justify-between bg-gray-950 p-4 rounded-xl">
                                    <span className="text-gray-400">Server Response Time:</span>
                                    <span className="text-emerald-400 font-bold">&lt; 45ms</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: EXECUTIVE LEADERSHIP */}
            <section className="py-28 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-xs font-bold text-blue-700 tracking-widest uppercase mb-3 block">Leadership Excellence</span>
                        <h2 className="text-4xl font-black text-gray-900 tracking-tight">Executive Management Board</h2>
                        <p className="text-gray-600 mt-4 text-lg">Decades of combined multidisciplinary expertise guiding international trade operations.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {leadershipTeam.map((leader, lIdx) => (
                            <div key={lIdx} className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
                                <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold mb-6">
                                    <Users2 className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                                <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-4">{leader.role}</p>
                                <p className="text-gray-600 text-sm leading-relaxed">{leader.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CALL TO ACTION */}
            <section className="relative py-24 bg-blue-700 overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')] opacity-10"></div>
                <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Ready to Optimize Your Supply Chain?</h2>
                    <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto font-light">
                        Partner with Ameda Global today and gain access to unparalleled material sourcing, compliance expertise, and global logistics.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/products" className="bg-white text-blue-700 hover:bg-gray-50 px-8 py-4 rounded-full font-bold uppercase tracking-wider shadow-xl transition-all">
                            Explore Catalog
                        </Link>
                        <Link href="/contact" className="bg-blue-800 text-white border border-blue-600 hover:bg-blue-900 px-8 py-4 rounded-full font-bold uppercase tracking-wider transition-all">
                            Contact Procurement
                        </Link>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}