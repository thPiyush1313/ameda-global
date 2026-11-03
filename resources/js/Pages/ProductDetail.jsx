import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import MainLayout from '../Layouts/MainLayout';
import Seo from '../Components/Seo';
import {
    ChevronRight, Download, CheckCircle2,
    Package, ShieldCheck, FileText, ChevronDown,
    ChevronUp, ArrowRight, ArrowUpRight, Target, FlaskConical, Droplet
} from 'lucide-react';

export default function ProductDetail() {
    const [mounted, setMounted] = useState(false);
    const [activeFaq, setActiveFaq] = useState(null);

    useEffect(() => {
        setMounted(true);
        window.scrollTo(0, 0);
    }, []);

    // Static Data Structure (Easy to make dynamic later via Inertia props)
    const productData = {
        name: 'Aerospace Grade Titanium (Ti-6Al-4V)',
        category: 'AmedaStruct™ Alloys',
        badge: 'High-Tensile Alloy',
        description: 'AmedaStruct™ Ti-6Al-4V is our gold-standard alpha-beta titanium alloy. Engineered for global aerospace and defense manufacturers who demand an exceptional strength-to-weight ratio and superior corrosion resistance. Derived from certified conflict-free ores, it delivers industry-leading structural integrity with verified traceability. For engineers navigating extreme load-bearing applications, this alloy is the definitive answer without compromise.',
        image: 'https://images.unsplash.com/photo-1518558997970-4ddc236affcd?q=80&w=1200',
        specs: [
            { label: 'UNS Number', value: 'R56400' },
            { label: 'Density', value: '4.43 g/cm³' },
            { label: 'Tensile Strength', value: '> 1200 MPa' },
            { label: 'Melting Range', value: '1604 - 1660 °C' },
            { label: 'Compliance', value: 'AMS 4911, MIL-T-9046' }
        ],
        benefits: [
            'Exceptional Strength-to-Weight Ratio - Reduces overall mass while maintaining structural integrity.',
            'Superior Corrosion Resistance - Withstands extreme marine, chemical, and atmospheric environments.',
            'High Heat Resilience - Maintains mechanical properties at temperatures up to 400°C (750°F).',
            'Global Traceability - 100% transparent supply chain from extraction to refinement.'
        ],
        applications: [
            { icon: Target, title: 'Aerospace Airframes' },
            { icon: Droplet, title: 'Marine Hardware' },
            { icon: ShieldCheck, title: 'Defense Ballistics' },
            { icon: FlaskConical, title: 'Chemical Processing' }
        ],
        packaging: [
            { size: '500 kg', type: 'Palletized Coils' },
            { size: '1000 kg', type: 'Sealed Crates' },
            { size: 'Custom', type: 'Cut-to-Length Sheets' }
        ],
        faqs: [
            { q: 'How does AmedaStruct™ Ti-6Al-4V differ from standard commercial titanium?', a: 'Our aerospace-grade alloy undergoes a proprietary vacuum-arc remelting (VAR) process, ensuring absolute homogenization and eliminating micro-inclusions that standard commercial titanium might retain.' },
            { q: 'Is the origin of the raw materials certified?', a: 'Yes. All Ameda Global alloys come with strict Country of Origin documentation and comply fully with international conflict-free mineral mandates.' },
            { q: 'What documentation accompanies the shipment?', a: 'Every batch includes a comprehensive Material Test Report (MTR), Safety Data Sheet (SDS), and a Certificate of Analysis (CoA) verified by independent ISO-certified labs.' }
        ],
        related: [
            { id: 2, name: 'Marine-Grade Stainless Steel Coil', category: 'AmedaStruct™ Alloys', img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800' },
            { id: 6, name: 'Tungsten Carbide Powder', category: 'AmedaStruct™ Alloys', img: 'https://images.unsplash.com/photo-1622322306716-e41b2fa3d706?q=80&w=800' },
            { id: 7, name: 'PTFE Fluoropolymer Resins', category: 'AmedaPoly™ Polymers', img: 'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=800' }
        ]
    };

    return (
        <MainLayout>
            {/* Dynamic Product SEO */}
            <Seo
                title={productData.name}
                description={productData.description.substring(0, 150) + "..."}
                image={productData.image}
            />
            {/* 1. HERO BREADCRUMB HEADER */}
            <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gray-950">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-bold tracking-widest uppercase text-gray-500 mb-8">
                        <Link href="/" className="hover:text-blue-500 transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link href="/products" className="hover:text-blue-500 transition-colors">Products</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-sky-400">{productData.category}</span>
                    </div>

                    <div className={`transition-all duration-700 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4 tracking-tight">
                            {productData.name}
                        </h1>
                        <div className="inline-block border-l-4 border-blue-500 pl-4 py-1">
                            <p className="text-lg text-gray-400 font-medium tracking-wide">
                                Advanced Specification Formulation
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. PRODUCT OVERVIEW & SPECS */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* Image Side */}
                        <div className="relative group rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100">
                            <img
                                src={productData.image}
                                alt={productData.name}
                                className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-[2s] ease-out"
                            />
                            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-gray-900 tracking-widest shadow-sm">
                                {productData.badge}
                            </div>
                        </div>

                        {/* Details Side */}
                        <div className="flex flex-col">
                            <h2 className="text-3xl font-black text-gray-900 mb-6">Product Overview</h2>
                            <p className="text-gray-600 leading-relaxed mb-10 text-lg">
                                {productData.description}
                            </p>

                            {/* Specs Table */}
                            <div className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden mb-8 shadow-sm">
                                <div className="bg-blue-700 px-6 py-4">
                                    <h3 className="text-white font-bold tracking-wide">Technical Specifications</h3>
                                </div>
                                <div className="divide-y divide-gray-200">
                                    {productData.specs.map((spec, idx) => (
                                        <div key={idx} className="flex flex-col sm:flex-row px-6 py-4 hover:bg-white transition-colors">
                                            <span className="w-full sm:w-1/3 font-bold text-gray-500 text-sm tracking-wide mb-1 sm:mb-0">
                                                {spec.label}
                                            </span>
                                            <span className="w-full sm:w-2/3 text-gray-900 font-medium">
                                                {spec.value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-4">
                                <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider transition-colors shadow-lg shadow-blue-600/20">
                                    Request a Quote
                                </button>
                                <button className="bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-100 px-8 py-4 rounded-xl font-bold uppercase tracking-wider transition-colors flex items-center gap-2">
                                    <Download className="w-4 h-4" /> Download PDS
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* 3. BENEFITS & APPLICATIONS */}
            <section className="py-24 bg-gray-50 border-y border-gray-100">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Key Benefits */}
                        <div>
                            <h3 className="text-2xl font-black text-gray-900 mb-8">Key Advantages</h3>
                            <div className="space-y-6">
                                {productData.benefits.map((benefit, idx) => {
                                    const [title, desc] = benefit.split(' - ');
                                    return (
                                        <div key={idx} className="flex gap-4">
                                            <CheckCircle2 className="w-6 h-6 text-sky-500 shrink-0 mt-0.5" />
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-1">{title}</h4>
                                                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Applications */}
                        <div>
                            <h3 className="text-2xl font-black text-gray-900 mb-8">Primary Applications</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {productData.applications.map((app, idx) => (
                                    <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4 group hover:border-blue-200 transition-colors">
                                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                                            <app.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                                        </div>
                                        <span className="font-bold text-gray-900">{app.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. SUPPLY CHAIN & PACKAGING */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-sm font-bold text-sky-500 tracking-widest uppercase mb-3">Supply Chain Excellence</h2>
                        <h3 className="text-3xl font-black text-gray-900 tracking-tight">Packaging & Logistics Options</h3>
                    </div>

                    <div className="flex justify-center gap-8 mb-16 flex-wrap">
                        {productData.packaging.map((pack, idx) => (
                            <div key={idx} className="bg-gray-50 border border-gray-200 rounded-[2rem] p-8 text-center min-w-[200px] shadow-sm">
                                <Package className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                                <div className="text-3xl font-black text-gray-900 mb-1">{pack.size}</div>
                                <div className="text-gray-500 font-medium text-sm">{pack.type}</div>
                            </div>
                        ))}
                    </div>

                    {/* Docs Row */}
                    <div className="flex justify-center gap-4 flex-wrap border-t border-gray-100 pt-10">
                        <button className="flex items-center gap-2 bg-gray-900 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-colors">
                            <FileText className="w-4 h-4" /> Material Test Report
                        </button>
                        <button className="flex items-center gap-2 bg-gray-900 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-colors">
                            <ShieldCheck className="w-4 h-4" /> Safety Data Sheet
                        </button>
                    </div>
                </div>
            </section>

            {/* 5. FAQs */}
            <section className="py-24 bg-gray-50 border-t border-gray-100">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h3 className="text-3xl font-black text-gray-900 mb-12 text-center">Frequently Asked Questions</h3>
                    <div className="space-y-4">
                        {productData.faqs.map((faq, idx) => (
                            <div key={idx} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                                <button
                                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                >
                                    <span className="font-bold text-gray-900 pr-4">{faq.q}</span>
                                    {activeFaq === idx ? (
                                        <ChevronUp className="w-5 h-5 text-blue-600 shrink-0" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                                    )}
                                </button>
                                <div className={`px-6 pb-6 text-gray-600 leading-relaxed transition-all duration-300 ${activeFaq === idx ? 'block' : 'hidden'}`}>
                                    {faq.a}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. RELATED PRODUCTS */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="container mx-auto px-6 max-w-7xl">
                    <h3 className="text-3xl font-black text-gray-900 mb-12">Related Materials</h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {productData.related.map((item) => (
                            <Link href={`/products/${item.id}`} key={item.id} className="group relative h-[24rem] rounded-[2rem] bg-gray-900 overflow-hidden shadow-md hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-700">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-[1.5s] ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/30 to-transparent opacity-90"></div>

                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-[1.5rem] transform group-hover:-translate-y-2 transition-all duration-500">
                                        <p className="text-sky-300 text-xs font-bold mb-2 tracking-widest uppercase">
                                            {item.category}
                                        </p>
                                        <h4 className="text-xl font-black text-white tracking-wide mb-4 leading-tight">{item.name}</h4>
                                        <div className="flex items-center justify-between border-t border-white/20 pt-4">
                                            <span className="text-white text-sm font-bold uppercase tracking-wider">View Details</span>
                                            <ArrowUpRight className="w-4 h-4 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

        </MainLayout>
    );
}