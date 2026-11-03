import React, { useState, useEffect } from 'react';
import MainLayout from '@/Layouts/MainLayout';
import { Head, Link } from '@inertiajs/react';
import { ShieldCheck, Scale, FileText, CheckCircle2, Lock, ArrowRight, Award, Building2, Eye, ShieldAlert, Cpu, Globe2 } from 'lucide-react';

export default function Governance() {
    const [mounted, setMounted] = useState(false);
    const [activePillar, setActivePillar] = useState(0);

    useEffect(() => {
        setMounted(true);
    }, []);

    const pillars = [
        {
            title: "Ethical Trade & Labor Standards",
            icon: Scale,
            badge: "Pillar 01",
            headline: "Zero-Tolerance for Labor Exploitation",
            desc: "Ameda Global enforces rigorous supplier codes of conduct across 120+ territories. Independent third-party auditors inspect manufacturing plants quarterly to guarantee fair wages, safe conditions, and absolute elimination of child or forced labor.",
            metrics: ["100% Audited Supply Tier-1", "Zero Compliance Violations Recorded", "Quarterly On-Site Inspections"]
        },
        {
            title: "Independent Risk & Audit Board",
            icon: ShieldCheck,
            badge: "Pillar 02",
            headline: "Autonomous Financial & Operational Oversight",
            desc: "Our Board of Directors features an independent audit committee with full veto power over capital allocation, high-stakes supply agreements, and geopolitical risk exposure, protecting long-term enterprise value.",
            metrics: ["100% Independent Audit Committee", "Real-Time Exposure Tracking", "Biannual Board Stress Testing"]
        },
        {
            title: "Regulatory & Customs Compliance",
            icon: FileText,
            badge: "Pillar 03",
            headline: "Frictionless Cross-Border Operations",
            desc: "Navigating international tariffs, export licenses, and hazardous material regulations with precision. Our in-house legal team ensures total alignment with ISO 9001, FDA, and international trade laws.",
            metrics: ["ISO 9001:2015 Certified", "Zero Customs Detention Rate", "Automated Tariff Reconciliation"]
        },
        {
            title: "Data Sovereignty & Cybersecurity",
            icon: Lock,
            badge: "Pillar 04",
            headline: "End-to-End Encrypted Trade Infrastructure",
            desc: "Protecting proprietary supply chain blueprints, client procurement records, and financial ledgers behind multi-layered zero-trust security architectures and ISO 27001 certified data centers.",
            metrics: ["ISO 27001 Data Security", "Zero-Trust Network Access", "24/7 Security Operations Center"]
        }
    ];

    return (
        <MainLayout>
            <Head title="Corporate Governance | Ameda Global" />

            {/* IMMERSIVE ASYMMETRIC HERO */}
            <section className="relative pt-36 pb-28 lg:pt-52 lg:pb-40 overflow-hidden bg-slate-900">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=3840&auto=format&fit=crop"
                        alt="Corporate Governance & Ethics"
                        className="w-full h-full object-cover opacity-75 transform scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                    <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                        <div className="lg:col-span-7">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-500/20 backdrop-blur-md border border-sky-500/40 text-sky-300 mb-6 font-semibold text-xs tracking-wider uppercase shadow-lg">
                                <Building2 className="w-4 h-4 text-sky-400" /> Enterprise Governance & Integrity
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.08] tracking-tight mb-6 drop-shadow-lg">
                                Uncompromising Standards in <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-300 to-indigo-200">Global Accountability</span>
                            </h1>
                            <p className="text-lg text-slate-100 max-w-2xl leading-relaxed font-light mb-10 drop-shadow-md">
                                At Ameda Global, governance is not a checklist—it is the bedrock of our international supply network. We engineer transparency into every transaction, contract, and shipment.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/contact" className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold px-8 py-4 rounded-2xl shadow-xl shadow-sky-500/20 transition-all flex items-center gap-2 text-sm uppercase tracking-wider">
                                    Request Governance Dossier <ArrowRight className="w-4 h-4" />
                                </Link>
                                <a href="#pillars" className="bg-slate-900/80 hover:bg-slate-900 text-white border border-slate-700 font-bold px-8 py-4 rounded-2xl transition-all text-sm uppercase tracking-wider backdrop-blur-sm">
                                    Explore Framework
                                </a>
                            </div>
                        </div>

                        {/* Floating Trust Indicator Card */}
                        <div className="lg:col-span-5">
                            <div className="bg-slate-900/90 border border-slate-800/80 backdrop-blur-xl p-8 rounded-[2.5xl] shadow-2xl space-y-6">
                                <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                                    <span className="text-xs font-bold uppercase tracking-widest text-sky-400">Trust & Compliance Index</span>
                                    <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> 100% Verified
                                    </span>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-slate-400">Board Independence</span>
                                        <span className="font-mono font-bold text-white">100% Autonomous</span>
                                    </div>
                                    <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden">
                                        <div className="bg-sky-500 h-full rounded-full w-full"></div>
                                    </div>
                                    <div className="flex justify-between items-center text-sm pt-2">
                                        <span className="text-slate-400">Regulatory Audit Score</span>
                                        <span className="font-mono font-bold text-white">Grade A+ (ISO Aligned)</span>
                                    </div>
                                    <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden">
                                        <div className="bg-blue-500 h-full rounded-full w-[98%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTERACTIVE TABS COMPLIANCE PILLARS (Replaces boring card grid) */}
            <section id="pillars" className="py-32 bg-slate-900 text-white relative">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-xs font-extrabold uppercase tracking-widest text-sky-400 mb-3 block">Operational Architecture</span>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
                            Four Pillars of Enterprise Integrity
                        </h2>
                        <p className="text-slate-400 text-lg">Click through our core governance protocols to review how we maintain absolute institutional discipline.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Selector Navigation */}
                        <div className="lg:col-span-5 space-y-4">
                            {pillars.map((item, idx) => {
                                const IconComponent = item.icon;
                                const isActive = activePillar === idx;
                                return (
                                    <div
                                        key={idx}
                                        onClick={() => setActivePillar(idx)}
                                        className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 flex items-center justify-between group ${isActive ? 'bg-sky-600 border-sky-500 shadow-xl shadow-sky-600/20 translate-x-2' : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'}`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${isActive ? 'bg-white text-sky-600' : 'bg-slate-900 text-sky-400 group-hover:bg-slate-800'}`}>
                                                <IconComponent className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <span className={`text-[0.65rem] font-black uppercase tracking-widest block mb-1 ${isActive ? 'text-sky-100' : 'text-slate-500'}`}>{item.badge}</span>
                                                <h4 className={`text-lg font-bold ${isActive ? 'text-white' : 'text-slate-200'}`}>{item.title}</h4>
                                            </div>
                                        </div>
                                        <ArrowRight className={`w-5 h-5 transition-transform ${isActive ? 'text-white translate-x-1' : 'text-slate-600'}`} />
                                    </div>
                                );
                            })}
                        </div>

                        {/* Active Pillar Showcase Box */}
                        <div className="lg:col-span-7">
                            <div className="bg-slate-950 border border-slate-800 p-10 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>
                                <span className="text-xs font-black uppercase tracking-widest text-sky-400 bg-sky-950 px-4 py-1.5 rounded-lg border border-sky-800/60 inline-block mb-6">
                                    {pillars[activePillar].badge} Specification
                                </span>
                                <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-6">
                                    {pillars[activePillar].headline}
                                </h3>
                                <p className="text-slate-300 text-base leading-relaxed mb-10 font-light">
                                    {pillars[activePillar].desc}
                                </p>

                                <div className="space-y-4 pt-8 border-t border-slate-800/80">
                                    <h5 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-4">Key Enforcement Benchmarks</h5>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        {pillars[activePillar].metrics.map((metric, mIdx) => (
                                            <div key={mIdx} className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-center gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" />
                                                <span className="text-xs font-bold text-slate-200">{metric}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* RISK MITIGATION TIMELINE / PROCESS */}
            <section className="py-32 bg-white text-slate-900">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600 mb-3 block">Continuous Evaluation</span>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
                                Dynamic Risk Mitigation & Audit Cycles
                            </h2>
                            <p className="text-slate-600 leading-relaxed mb-8 font-medium">
                                We do not wait for regulatory updates; our internal compliance teams continuously audit supply vectors, trade tariffs, and environmental regulations across all jurisdictions in real-time.
                            </p>
                            <div className="space-y-6">
                                <div className="flex gap-4 items-start">
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold shrink-0">01</div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg mb-1">Pre-Transaction Screening</h4>
                                        <p className="text-slate-600 text-sm">Automated vetting of all partner entities against global sanction lists and trade restriction databases.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold shrink-0">02</div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg mb-1">In-Transit Telemetry Audits</h4>
                                        <p className="text-slate-600 text-sm">Real-time GPS and temperature logging ensures zero cargo tampering or environmental deviation.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold shrink-0">03</div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg mb-1">Post-Delivery Reconciliation</h4>
                                        <p className="text-slate-600 text-sm">Comprehensive financial and legal reconciliation matching Mill Test Certificates with final client receipts.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-50 border border-slate-200/80 p-10 rounded-[3rem] shadow-sm relative">
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
                            <h3 className="text-2xl font-black text-slate-900 mb-6">Global Whistleblower Protection</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-8">
                                In accordance with ISO 37002 standards, Ameda Global operates an independent, encrypted reporting portal enabling employees, partners, and contractors to report potential compliance breaches anonymously.
                            </p>
                            <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm space-y-4">
                                <div className="flex items-center gap-3">
                                    <ShieldAlert className="w-6 h-6 text-blue-600 shrink-0" />
                                    <div>
                                        <h5 className="font-bold text-slate-900 text-sm">Confidential Ethics Channel</h5>
                                        <p className="text-xs text-slate-500">Available 24/7 in 40+ native languages</p>
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-xs font-bold">
                                    <span className="text-slate-500">Response SLA:</span>
                                    <span className="text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">&lt; 24 Hours Guaranteed</span>
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
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Partner With an Enterprise Built on Unyielding Trust</h2>
                    <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                        Inquire about our compliance dossiers, corporate governance frameworks, and international trade policies.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="bg-white text-blue-700 hover:bg-gray-50 px-8 py-4 rounded-full font-bold uppercase tracking-wider shadow-xl transition-all flex items-center justify-center gap-2">
                            Request Compliance Dossier <ArrowRight className="w-4 h-4" />
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