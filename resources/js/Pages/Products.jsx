import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import MainLayout from '../Layouts/MainLayout';
import { useLanguage } from '../Contexts/LanguageContext';
import {
    Search, ArrowRight, ChevronRight, ChevronDown,
    Box, ArrowUpRight, Layers, PackageSearch
} from 'lucide-react';

export default function Products() {
    const [mounted, setMounted] = useState(false);
    const [activeCategory, setActiveCategory] = useState('All Products');
    const [expandedCategories, setExpandedCategories] = useState(['AmedaStruct™ Alloys', 'AmedaChem™ Solvents']);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleCategory = (cat) => {
        if (expandedCategories.includes(cat)) {
            setExpandedCategories(expandedCategories.filter(c => c !== cat));
        } else {
            setExpandedCategories([...expandedCategories, cat]);
        }
    };

    // Corporate Categories Data
    const categories = [
        {
            name: 'AmedaStruct™ Alloys',
            sub: ['Aerospace Titanium', 'Marine Grade Steel', 'Tungsten Carbide', 'Aluminum Matrix']
        },
        {
            name: 'AmedaChem™ Solvents',
            sub: ['High-Purity Ethanol', 'Toluene Diisocyanate', 'Hexane Compounds', 'Reagent Grade Acids']
        },
        {
            name: 'AmedaPoly™ Polymers',
            sub: ['Industrial Polyurethane', 'PTFE Resins', 'Kevlar Synthetics']
        },
        {
            name: 'Specialized Coatings',
            sub: ['Thermal Barriers', 'Anti-Corrosion Primers']
        }
    ];

    // High-End Industrial Product Data
    const products = [
        {
            id: 1,
            name: 'Aerospace Grade Titanium (Ti-6Al-4V)',
            category: 'AmedaStruct™ Alloys',
            badge: 'Alloys',
            img: 'https://images.unsplash.com/photo-1518558997970-4ddc236affcd?q=80&w=800'
        },
        {
            id: 2,
            name: 'Marine-Grade Stainless Steel Coil',
            category: 'AmedaStruct™ Alloys',
            badge: 'Alloys',
            img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800'
        },
        {
            id: 3,
            name: 'High-Purity Industrial Ethanol (99.9%)',
            category: 'AmedaChem™ Solvents',
            badge: 'Solvents',
            img: 'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=800'
        },
        {
            id: 4,
            name: 'Industrial Polyurethane Resin',
            category: 'AmedaPoly™ Polymers',
            badge: 'Polymers',
            img: 'https://images.unsplash.com/photo-1587582423116-ec07293f0395?q=80&w=800'
        },
        {
            id: 5,
            name: 'Toluene Diisocyanate (TDI)',
            category: 'AmedaChem™ Solvents',
            badge: 'Solvents',
            img: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=800'
        },
        {
            id: 6,
            name: 'Tungsten Carbide Powder',
            category: 'AmedaStruct™ Alloys',
            badge: 'Alloys',
            img: 'https://images.unsplash.com/photo-1518558997970-4ddc236affcd?q=80&w=800'
        },
        {
            id: 7,
            name: 'PTFE Fluoropolymer Resins',
            category: 'AmedaPoly™ Polymers',
            badge: 'Polymers',
            img: 'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=800'
        },
        {
            id: 8,
            name: 'Thermal Barrier Ceramic Coating',
            category: 'Specialized Coatings',
            badge: 'Coatings',
            img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800'
        },
        {
            id: 9,
            name: 'Hexane Extraction Solvent',
            category: 'AmedaChem™ Solvents',
            badge: 'Solvents',
            img: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=800'
        }
    ];

    return (
        <MainLayout>

            {/* 1. IMMERSIVE HERO SECTION */}
            <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-36 overflow-hidden bg-gray-900 min-h-[55vh] flex items-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=3840&auto=format&fit=crop"
                        alt="Ameda Global Industrial Materials"
                        className="w-full h-full object-cover opacity-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/50 to-blue-950/30"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 max-w-[90rem]">
                    <div className={`transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>

                        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600/30 backdrop-blur-md border border-blue-400/40 text-sky-200 mb-8 shadow-xl">
                            <PackageSearch className="w-5 h-5 text-sky-300" />
                            <span className="text-sm font-bold tracking-widest uppercase">Global Material Catalog</span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-black text-white leading-[1.05] mb-8 tracking-tight max-w-4xl drop-shadow-lg">
                            High-Performance <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-sky-200">Raw Materials</span>
                        </h1>

                        <p className="text-2xl text-gray-100 max-w-3xl leading-relaxed border-l-4 border-blue-500 pl-8 font-light drop-shadow-md">
                            Explore our comprehensive catalog. Engineered for extreme durability, absolute purity, and strict global compliance.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. MAIN CONTENT AREA (Sidebar + Grid) */}
            <section className="py-20 bg-gray-50/50">
                <div className="container mx-auto px-6 max-w-[90rem]">
                    <div className="flex flex-col lg:flex-row gap-12">

                        {/* LEFT SIDEBAR: Categories Filter */}
                        <aside className="w-full lg:w-1/4 xl:w-1/5 shrink-0">
                            <div className="sticky top-32">

                                {/* Search Box */}
                                <div className="relative mb-8">
                                    <input
                                        type="text"
                                        placeholder="Search catalog..."
                                        className="w-full bg-white border border-gray-200 rounded-2xl py-4 pl-12 pr-4 text-base font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 shadow-sm transition-all"
                                    />
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                </div>

                                {/* Categories Wrapper */}
                                <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_10px_40px_rgb(0,0,0,0.04)] overflow-hidden">

                                    {/* Sidebar Header */}
                                    <div className="bg-blue-700 text-white px-7 py-5 flex items-center justify-between">
                                        <h3 className="font-black text-xl tracking-wide">Categories</h3>
                                        <ChevronDown className="w-6 h-6 opacity-80" />
                                    </div>

                                    {/* Category List */}
                                    <div className="p-3">
                                        <button
                                            onClick={() => setActiveCategory('All Products')}
                                            className={`w-full flex items-center gap-3 px-5 py-4 rounded-2xl text-left text-base font-bold transition-all ${activeCategory === 'All Products' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                                                }`}
                                        >
                                            <Layers className="w-5 h-5" /> All Products
                                        </button>

                                        {categories.map((cat, idx) => (
                                            <div key={idx} className="mt-2">
                                                {/* Parent Category */}
                                                <button
                                                    onClick={() => toggleCategory(cat.name)}
                                                    className="w-full flex items-center justify-between px-5 py-4 rounded-2xl text-left text-base font-bold text-gray-800 hover:bg-gray-50 transition-all"
                                                >
                                                    <span className="flex items-center gap-3">
                                                        <div className={`w-2 h-2 rounded-full transition-colors ${expandedCategories.includes(cat.name) ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
                                                        {cat.name}
                                                    </span>
                                                    <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${expandedCategories.includes(cat.name) ? 'rotate-90' : ''}`} />
                                                </button>

                                                {/* Nested Sub-categories */}
                                                <div className={`overflow-hidden transition-all duration-300 ${expandedCategories.includes(cat.name) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                                    <div className="pb-3 pl-6 border-l-[3px] border-gray-100 ml-6 mt-1 space-y-1">
                                                        {cat.sub.map((sub, sIdx) => (
                                                            <button
                                                                key={sIdx}
                                                                onClick={() => setActiveCategory(sub)}
                                                                className={`w-full text-left px-5 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${activeCategory === sub ? 'text-blue-700 bg-blue-50/80 shadow-sm' : 'text-gray-500 hover:text-blue-600 hover:bg-gray-50'
                                                                    }`}
                                                            >
                                                                {activeCategory === sub && <ArrowRight className="w-4 h-4 text-blue-600 shrink-0" />}
                                                                <span className="leading-snug">{sub}</span>
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Need Help Box */}
                                <div className="mt-8 bg-gradient-to-br from-gray-900 to-gray-950 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden group">
                                    <div className="absolute -right-4 -top-4 w-32 h-32 bg-blue-600/30 blur-3xl rounded-full group-hover:bg-blue-500/40 transition-colors"></div>
                                    <h4 className="font-black text-2xl mb-3 relative z-10">Need Custom Specs?</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-6 relative z-10 font-medium">
                                        Our trade engineers can source unique formulations tailored to your exact manufacturing requirements.
                                    </p>
                                    <button className="w-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold uppercase tracking-widest py-4 rounded-xl transition-colors relative z-10 shadow-lg shadow-blue-600/20">
                                        Contact Sales
                                    </button>
                                </div>

                            </div>
                        </aside>

                        {/* RIGHT MAIN AREA: Product Grid */}
                        <div className="w-full lg:w-3/4 xl:w-4/5">

                            {/* Grid Top Bar */}
                            <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_4px_15px_rgb(0,0,0,0.02)] mb-10">
                                <p className="text-base text-gray-500 font-medium mb-4 sm:mb-0">
                                    Showing results for <span className="font-black text-gray-900 text-lg ml-1">{activeCategory}</span>
                                </p>
                                <div className="flex items-center gap-4">
                                    <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Sort By</span>
                                    <select className="bg-gray-50 border border-gray-200 text-gray-800 text-base rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 block px-4 py-2.5 outline-none font-bold cursor-pointer transition-all">
                                        <option>Recommended</option>
                                        <option>A-Z Alphabetical</option>
                                        <option>Newest Additions</option>
                                    </select>
                                </div>
                            </div>

                            {/* The Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                                {products.map((product) => (
                                    <div key={product.id} className="group flex flex-col bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.08)] hover:-translate-y-1.5 transition-all duration-500">

                                        {/* Image Container */}
                                        <div className="relative h-64 overflow-hidden bg-gray-100">
                                            <img
                                                src={product.img}
                                                alt={product.name}
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[2s] ease-out"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                            {/* Product Badge */}
                                            <div className="absolute top-5 left-5 bg-gray-900/90 backdrop-blur-md text-white text-[0.7rem] font-bold uppercase tracking-widest px-4 py-2 rounded-lg shadow-lg">
                                                {product.badge}
                                            </div>
                                        </div>

                                        {/* Content Container */}
                                        <div className="p-8 flex flex-col flex-1 relative bg-white">
                                            <p className="text-blue-600 text-sm font-bold mb-3 tracking-wider uppercase">
                                                {product.category}
                                            </p>
                                            <h3 className="text-xl md:text-2xl font-black text-gray-900 leading-snug mb-6 group-hover:text-blue-700 transition-colors">
                                                {product.name}
                                            </h3>
                                            {/* Interactive Button */}
                                            <Link
                                                href={`/products/${product.id}`}
                                                className="mt-auto w-full flex items-center justify-between bg-blue-50 text-blue-700 group-hover:bg-blue-600 group-hover:text-white px-6 py-4 rounded-xl text-base font-bold tracking-wide transition-all duration-300"
                                            >
                                                View Specifications
                                                <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Pagination */}
                            <div className="mt-20 flex justify-center items-center gap-3">
                                <button className="w-12 h-12 rounded-xl bg-blue-600 text-white font-black text-base shadow-lg shadow-blue-600/20 flex items-center justify-center transition-colors">1</button>
                                <button className="w-12 h-12 rounded-xl bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-bold text-base transition-colors flex items-center justify-center">2</button>
                                <button className="w-12 h-12 rounded-xl bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-bold text-base transition-colors flex items-center justify-center">3</button>
                                <span className="text-gray-400 px-2 font-bold">...</span>
                                <button className="w-12 h-12 rounded-xl bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-bold text-base transition-colors flex items-center justify-center">12</button>
                                <button className="px-6 h-12 rounded-xl bg-white border border-gray-200 text-gray-700 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 font-black text-sm uppercase tracking-wide transition-all flex items-center gap-2 ml-2">
                                    Next <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </MainLayout>
    );
}