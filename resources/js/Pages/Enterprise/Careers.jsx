import React, { useState, useEffect } from 'react';
import MainLayout from '@/Layouts/MainLayout';
import { Head, Link } from '@inertiajs/react';
import { Briefcase, MapPin, ArrowRight, Sparkles, Globe, Zap, CheckCircle2, ChevronRight, Layers, Users, Building, ShieldCheck } from 'lucide-react';

export default function Careers() {
    const [mounted, setMounted] = useState(false);
    const [selectedDept, setSelectedDept] = useState('All');

    useEffect(() => {
        setMounted(true);
    }, []);

    const departments = ['All', 'Engineering', 'Logistics', 'Procurement', 'Executive', 'Legal & Compliance'];

    const jobOpenings = [
        {
            title: "Senior Laravel Full-Stack Architect",
            dept: "Engineering",
            location: "Mumbai HQ / Remote",
            type: "Full-Time • Permanent",
            experience: "6-10 Years",
            desc: "Lead the technical architecture of our real-time trade platform, high-throughput email campaign management engines, and complex database schemas built on Laravel 11, PHP 8.2, MySQL, and Inertia/React.",
            tags: ["PHP 8.2", "Laravel 11", "MySQL", "Inertia/React", "Redis"]
        },
        {
            title: "Global Supply Chain Director",
            dept: "Logistics",
            location: "Singapore Hub / Hybrid",
            type: "Full-Time • Senior Executive",
            experience: "12+ Years",
            desc: "Direct international freight forwarding, maritime logistics corridors, and customs compliance protocols across 40+ active global trade zones. Manage vendor negotiations and predictive inventory routing.",
            tags: ["Freight Logistics", "ISO 9001", "Tariffs & Customs", "Risk Mitigation"]
        },
        {
            title: "Senior Chemical Sourcing Specialist",
            dept: "Procurement",
            location: "Mumbai, India",
            type: "Full-Time • Mid-Senior",
            experience: "5-8 Years",
            desc: "Oversee active pharmaceutical ingredient (API) and industrial polymer procurement. Conduct rigorous on-site supplier audits, verify Certificate of Analysis (CoA) records, and enforce strict cGMP standards.",
            tags: ["API Sourcing", "cGMP Standards", "Vendor Audits", "Polymer Chemistry"]
        },
        {
            title: "Frontend UI/UX Design Lead",
            dept: "Engineering",
            location: "Remote (Global)",
            type: "Full-Time • Permanent",
            experience: "5-8 Years",
            desc: "Architect intuitive enterprise dashboards, Constant Contact-style drag-and-drop campaign editors with GrapesJS, and high-performance client procurement portals adhering to 2026 design standards.",
            tags: ["Tailwind CSS", "Figma", "React", "GrapesJS", "Design Systems"]
        },
        {
            title: "International Trade Legal Counsel",
            dept: "Legal & Compliance",
            location: "New Delhi / Hybrid",
            type: "Full-Time • Senior",
            experience: "8-12 Years",
            desc: "Review cross-border shipping contracts, manage export/import licensing under international trade laws, and oversee our ISO 37002 whistleblower and anti-corruption compliance frameworks.",
            tags: ["Trade Law", "ISO 37002", "Sanctions Screening", "Contracts"]
        },
        {
            title: "DevOps & Cloud Infrastructure Engineer",
            dept: "Engineering",
            location: "Mumbai HQ / Remote",
            type: "Full-Time • Permanent",
            experience: "4-7 Years",
            desc: "Manage high-availability server clusters on AWS/XAMPP environments, configure automated CI/CD deployment pipelines, enforce SSL encryption, and optimize MySQL query performance.",
            tags: ["AWS", "Docker", "CI/CD", "Linux", "Nginx"]
        }
    ];

    const filteredJobs = selectedDept === 'All'
        ? jobOpenings
        : jobOpenings.filter(job => job.dept === selectedDept);

    return (
        <MainLayout>
            <Head title="Careers & Global Openings | Ameda Global" />

            {/* DARK IMMERSIVE THEME HERO */}
            <section className="relative pt-36 pb-28 lg:pt-52 lg:pb-36 overflow-hidden bg-gray-900 text-white">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=3840&auto=format&fit=crop"
                        alt="Ameda Global Team Culture"
                        className="w-full h-full object-cover opacity-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/50 to-blue-950/30"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                    <div className={`transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-500/40 text-blue-300 mb-6 shadow-lg">
                            <Sparkles className="w-4 h-4 text-blue-400" />
                            <span className="text-xs font-bold tracking-widest uppercase">Global Talent Acquisition</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight drop-shadow-lg">
                            Build Your Legacy at the Forefront of <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-sky-200">Global Enterprise Logistics</span>
                        </h1>
                        <p className="text-xl text-gray-100 max-w-3xl leading-relaxed border-l-4 border-blue-500 pl-6 font-light drop-shadow-md">
                            We unite brilliant software architects, metallurgical specialists, and international trade strategists to power supply chains across 120+ nations. Discover your next career milestone below.
                        </p>
                    </div>
                </div>
            </section>

            {/* METRICS & CULTURE HIGHLIGHTS BAR */}
            <section className="bg-blue-950 text-white py-12 border-y border-blue-900">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="p-4">
                            <div className="text-4xl font-black text-blue-400 mb-1">40+</div>
                            <div className="text-xs font-bold uppercase tracking-widest text-blue-200/70">Nationalities Represented</div>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl font-black text-blue-400 mb-1">100%</div>
                            <div className="text-xs font-bold uppercase tracking-widest text-blue-200/70">Health & Wellness Coverage</div>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl font-black text-blue-400 mb-1">₹1.5L</div>
                            <div className="text-xs font-bold uppercase tracking-widest text-blue-200/70">Annual Learning Stipend</div>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl font-black text-blue-400 mb-1">4.9/5</div>
                            <div className="text-xs font-bold uppercase tracking-widest text-blue-200/70">Internal Employee Satisfaction</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DETAILED CULTURE & VALUES SECTION */}
            <section className="py-28 bg-white text-gray-900">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-xs font-bold text-blue-600 tracking-widest uppercase mb-4 block">The Ameda Experience</span>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
                            Why Top-Tier Professionals <span className="text-blue-600">Choose Ameda Global</span>
                        </h2>
                        <p className="text-gray-600 mt-4 text-lg">We foster an environment of radical autonomy, rigorous technical excellence, and genuine cross-border collaboration.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 text-blue-600 font-bold">
                                <Globe className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Global Scale & Impact</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Your initiatives directly influence multi-million dollar trade corridors, advanced chemical synthesis facilities, and real-time enterprise platforms.</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 text-blue-600 font-bold">
                                <Zap className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Cutting-Edge Tech Stack</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Work with modern enterprise stacks including Laravel 11, React, Inertia, GrapesJS, and AI-assisted predictive logistics modeling.</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 text-blue-600 font-bold">
                                <ShieldCheck className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Uncompromising Stability</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Enjoy competitive remuneration, performance bonuses, comprehensive medical insurance, and clear internal career progression pathways.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* COMPREHENSIVE JOB OPENINGS SECTION WITH FILTER TABS */}
            <section id="openings" className="py-28 bg-gray-50 border-t border-gray-200/60">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                        <div>
                            <span className="text-xs font-black uppercase tracking-widest text-blue-600 mb-2 block">Active Opportunities</span>
                            <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">Open Positions ({filteredJobs.length})</h2>
                        </div>

                        {/* Department Filters */}
                        <div className="flex flex-wrap gap-2 bg-white p-2 rounded-2xl border border-gray-200/80 shadow-sm">
                            {departments.map((dept) => (
                                <button
                                    key={dept}
                                    onClick={() => setSelectedDept(dept)}
                                    className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${selectedDept === dept ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}
                                >
                                    {dept}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Job Cards List */}
                    <div className="space-y-6">
                        {filteredJobs.map((job, idx) => (
                            <div key={idx} className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 group">
                                <div className="space-y-3 max-w-3xl">
                                    <div className="flex flex-wrap items-center gap-3">
                                        <span className="text-xs font-black uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1 rounded-lg">
                                            {job.dept}
                                        </span>
                                        <span className="text-xs font-bold text-gray-500 flex items-center gap-1.5">
                                            <MapPin className="w-4 h-4 text-gray-400" /> {job.location}
                                        </span>
                                        <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-lg">
                                            {job.experience}
                                        </span>
                                        <span className="text-xs font-semibold text-gray-500 hidden sm:inline">
                                            • {job.type}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-black text-gray-900 group-hover:text-blue-600 transition-colors">
                                        {job.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed font-normal">
                                        {job.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-2 pt-3">
                                        {job.tags.map((tag, tIdx) => (
                                            <span key={tIdx} className="text-xs font-bold bg-gray-100 text-gray-700 px-3 py-1 rounded-md">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <Link href="/contact" className="bg-gray-900 group-hover:bg-blue-600 text-white px-8 py-4 rounded-2xl font-extrabold text-xs uppercase tracking-wider shrink-0 transition-all shadow-md flex items-center gap-2">
                                    Apply For Position <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CALL TO ACTION */}
            <section className="relative py-24 bg-blue-600 overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')] opacity-10"></div>
                <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Don't See Your Exact Position?</h2>
                    <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto font-light">
                        We are always seeking elite talent across software engineering, chemical procurement, and global logistics. Submit your open application directly.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="bg-white text-blue-700 hover:bg-gray-50 px-8 py-4 rounded-full font-bold uppercase tracking-wider shadow-xl transition-all flex items-center justify-center gap-2">
                            Submit Open Application <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}