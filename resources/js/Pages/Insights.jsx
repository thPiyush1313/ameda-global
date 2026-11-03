import React, { useState, useEffect } from 'react';
import MainLayout from '../Layouts/MainLayout';
import { useLanguage } from '../Contexts/LanguageContext';
import {
    ArrowUpRight, ArrowRight, Search,
    Filter, Newspaper, TrendingUp, ShieldAlert, FlaskConical,
    Box
} from 'lucide-react';

export default function Insights() {
    const [mounted, setMounted] = useState(false);
    const [activeCategory, setActiveCategory] = useState('All Insights');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        setMounted(true);
    }, []);

    const featuredArticle = {
        tag: 'Global Logistics',
        title: 'State of the Global Supply Chain: 2026 Resilience Report',
        date: 'September 28, 2026',
        readTime: '12 min read',
        desc: 'An in-depth analysis of how predictive AI, geopolitical shifts, and net-zero carbon mandates are permanently rewriting international freight corridors and raw material procurement strategies.',
        img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600'
    };

    const articles = [
        {
            tag: 'Materials Science',
            category: 'R&D',
            title: 'The Rise of Bio-Based Polymers in Manufacturing',
            date: 'Sep 18, 2026',
            readTime: '8 min read',
            img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800'
        },
        {
            tag: 'Compliance',
            category: 'Compliance',
            title: 'Understanding New REACH Regulations for Imports',
            date: 'Sep 10, 2026',
            readTime: '6 min read',
            img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800'
        },
        {
            tag: 'Pharmaceuticals',
            category: 'Market Trends',
            title: 'Ensuring Cold-Chain Integrity for API Distribution',
            date: 'Sep 02, 2026',
            readTime: '7 min read',
            img: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=800'
        },
        {
            tag: 'Sustainability',
            category: 'Market Trends',
            title: 'Carbon-Neutral Maritime Shipping: Myth or Reality?',
            date: 'Aug 25, 2026',
            readTime: '10 min read',
            img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800'
        },
        {
            tag: 'Agrochemicals',
            category: 'Market Trends',
            title: 'Fertilizer Scarcity: Strategic Alternatives for 2027',
            date: 'Aug 18, 2026',
            readTime: '5 min read',
            img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800'
        },
        {
            tag: 'Market Trends',
            category: 'Market Trends',
            title: 'Why High-Tensile Titanium Demand is Spiking',
            date: 'Aug 11, 2026',
            readTime: '4 min read',
            img: 'https://images.unsplash.com/photo-1518558997970-4ddc236affcd?q=80&w=800'
        }
    ];

    const categories = [
        { name: 'All Insights', icon: Newspaper },
        { name: 'Market Trends', icon: TrendingUp },
        { name: 'Compliance', icon: ShieldAlert },
        { name: 'R&D', icon: FlaskConical }
    ];

    const filteredArticles = articles.filter(article => {
        const matchesCategory = activeCategory === 'All Insights' || article.category === activeCategory;
        const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || article.tag.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <MainLayout>
            {/* 1. IMMERSIVE HERO SECTION (High-Visibility 4K Background) */}
            <section className="relative pt-36 pb-32 lg:pt-52 lg:pb-36 overflow-hidden bg-gray-900 min-h-[60vh] flex items-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=3840&auto=format&fit=crop"
                        alt="Global Insights & Data"
                        className="w-full h-full object-cover opacity-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/50 to-blue-950/30"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                    <div className={`transition-all duration-1000 transform text-center flex flex-col items-center ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>

                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/35 backdrop-blur-md border border-blue-400/40 text-sky-200 mb-6 shadow-lg">
                            <Newspaper className="w-4 h-4 text-sky-300" />
                            <span className="text-xs font-bold tracking-widest uppercase">Intelligence & Analytics</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-[1.1] max-w-4xl drop-shadow-lg">
                            Knowledge <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-sky-200">Hub</span>
                        </h1>
                        <p className="text-xl text-gray-100 font-light max-w-2xl mx-auto mb-12 leading-relaxed drop-shadow-md">
                            Actionable market intelligence, compliance updates, and material science breakthroughs curated by Ameda Global experts.
                        </p>

                        {/* Filtering & Search Bar */}
                        <div className="w-full max-w-4xl flex flex-col md:flex-row justify-between items-center bg-gray-950/80 backdrop-blur-xl p-3 rounded-2xl shadow-2xl border border-gray-800">
                            <div className="flex overflow-x-auto w-full md:w-auto gap-2 p-1">
                                {categories.map((cat, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveCategory(cat.name)}
                                        className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${activeCategory === cat.name ? 'bg-blue-600 text-white shadow-md border border-blue-500' : 'text-gray-300 hover:bg-white/10 hover:text-white border border-transparent'}`}
                                    >
                                        <cat.icon className="w-4 h-4" /> {cat.name}
                                    </button>
                                ))}
                            </div>
                            <div className="w-full md:w-auto p-1 relative mt-2 md:mt-0">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search reports..."
                                    className="w-full md:w-64 bg-gray-900 border border-gray-700 text-white placeholder-gray-400 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-400 transition-all"
                                />
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 2. FEATURED ARTICLE */}
            <section className="py-16 bg-gray-50 relative z-20">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="group relative bg-gray-900 rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] cursor-pointer">
                        <img
                            src={featuredArticle.img}
                            alt="Featured Report"
                            className="absolute inset-0 w-full h-full object-cover opacity-50 transform group-hover:scale-105 transition-transform duration-[2s] ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/60 to-transparent"></div>

                        <div className="relative z-10 p-10 md:p-16 flex flex-col justify-end min-h-[500px]">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white text-xs font-bold tracking-widest uppercase mb-6 w-max shadow-lg">
                                Featured Report
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black text-white leading-[1.15] tracking-tight max-w-4xl mb-6 group-hover:text-sky-300 transition-colors">
                                {featuredArticle.title}
                            </h2>
                            <p className="text-gray-300 text-lg max-w-3xl leading-relaxed mb-8">
                                {featuredArticle.desc}
                            </p>

                            <div className="flex items-center justify-between border-t border-white/20 pt-8 mt-auto">
                                <div className="flex items-center gap-4 text-sm font-bold text-gray-300 uppercase tracking-wider">
                                    <span>{featuredArticle.date}</span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                    <span>{featuredArticle.readTime}</span>
                                </div>
                                <button className="flex items-center gap-3 text-white font-bold uppercase tracking-wider text-sm bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl border border-white/20 group-hover:bg-blue-600 transition-all">
                                    Read Full Report <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. ARTICLES GRID */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredArticles.map((post, idx) => (
                            <div key={idx} className="group relative bg-white p-3 rounded-[2.5rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.1)] transition-all duration-500 cursor-pointer flex flex-col">

                                <div className="relative h-60 rounded-[2rem] overflow-hidden mb-6 bg-gray-100">
                                    <img
                                        src={post.img}
                                        alt={post.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 via-transparent to-transparent"></div>

                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-gray-900 px-4 py-1.5 rounded-full text-[0.65rem] font-black tracking-widest uppercase shadow-sm">
                                        {post.tag}
                                    </div>
                                </div>

                                <div className="px-5 pb-5 flex flex-col flex-1">
                                    <div className="flex items-center gap-3 text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                                        <span>{post.date}</span>
                                        <span className="w-1 h-1 rounded-full bg-blue-300"></span>
                                        <span>{post.readTime}</span>
                                    </div>

                                    <h4 className="text-xl md:text-2xl font-black text-gray-900 leading-snug mb-6 group-hover:text-blue-700 transition-colors duration-300 line-clamp-3">
                                        {post.title}
                                    </h4>

                                    <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                                        <span className="text-sm font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300 uppercase tracking-wide">
                                            Read Article
                                        </span>
                                        <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors duration-300 text-gray-400 group-hover:text-white">
                                            <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredArticles.length === 0 && (
                        <div className="text-center py-16">
                            <p className="text-gray-500 text-lg">No insights found matching your search criteria.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* 4. NEWSLETTER CTA */}
            <section className="py-24 bg-blue-50 border-t border-blue-100">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-blue-100 flex items-center justify-center mx-auto mb-8">
                        <Newspaper className="w-8 h-8 text-blue-600" />
                    </div>
                    <h2 className="text-4xl font-black text-gray-900 mb-6 tracking-tight">Stay Ahead of the Market</h2>
                    <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
                        Subscribe to our weekly dispatch for exclusive commodity pricing forecasts, regulatory updates, and supply chain strategies.
                    </p>
                    <div className="flex flex-col sm:flex-row max-w-xl mx-auto gap-4 bg-white p-2 rounded-2xl shadow-xl border border-gray-100">
                        <input
                            type="email"
                            placeholder="Enter your corporate email address..."
                            className="flex-1 bg-transparent px-6 py-4 outline-none text-gray-900 placeholder-gray-400 font-medium"
                        />
                        <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider transition-colors shadow-md">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}