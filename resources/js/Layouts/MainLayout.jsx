import React, { useState, useEffect, useRef } from 'react';
import { Link } from '@inertiajs/react';
import {
    Menu, X, Globe, Search, ChevronDown,
    Phone, Mail, Bot, Send, Loader2, MessageSquare
} from 'lucide-react';
import { useLanguage } from '../Contexts/LanguageContext';

export default function MainLayout({ children, forceSolidNav = false }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // SEARCH STATE
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const searchInputRef = useRef(null);

    // PRELOADER STATE
    const [isLoading, setIsLoading] = useState(true);
    const [loadingWidth, setLoadingWidth] = useState('w-0');

    const { currentLang, changeLanguage, t } = useLanguage();
    const [langDropdownOpen, setLangDropdownOpen] = useState(false);

    // THIS IS THE CRITICAL VARIABLE:
    const isSolid = forceSolidNav || isScrolled;

    const languages = [
        { code: 'EN', name: 'English' },
        { code: 'FR', name: 'Français' },
        { code: 'ZH', name: '中文' }
    ];

    const handleDropdownSelect = (code) => {
        changeLanguage(code);
        setLangDropdownOpen(false);
    };

    // Chat State
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [chatInput, setChatInput] = useState('');
    const [chatMessages, setChatMessages] = useState([
        { role: 'assistant', text: 'Hello. I am the Ameda Global Trade Assistant. How can I assist you today?' }
    ]);
    const [isChatLoading, setIsChatLoading] = useState(false);
    const chatEndRef = useRef(null);

    const scrollToBottom = () => chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    useEffect(() => { if (isChatOpen) scrollToBottom(); }, [chatMessages, isChatOpen]);

    // Preloader, Scroll, & Search Focus
    useEffect(() => {
        setTimeout(() => setLoadingWidth('w-full'), 100);
        const timer = setTimeout(() => setIsLoading(false), 2000);
        const handleScroll = () => setIsScrolled(window.scrollY > 50);

        if (isSearchOpen && searchInputRef.current && !isSearchFocused) {
            searchInputRef.current.focus();
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            clearTimeout(timer);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isSearchOpen, isSearchFocused]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!chatInput.trim()) return;
        const userText = chatInput.trim();
        setChatMessages(prev => [...prev, { role: 'user', text: userText }]);
        setChatInput('');
        setIsChatLoading(true);

        setTimeout(() => {
            setChatMessages(prev => [
                ...prev,
                { role: 'assistant', text: `Inquiry received regarding "${userText}". Our specialists will verify specifications and reach out shortly.` }
            ]);
            setIsChatLoading(false);
        }, 1000);
    };

    const navLinks = [
        { name: t('nav_home') || 'Home', url: '/' },
        { name: t('nav_about') || 'About Us', url: '/about' },
        { name: t('nav_markets') || 'Markets', url: '/markets' },
        { name: t('nav_products') || 'Products', url: '/products' },
        { name: t('nav_insights') || 'Insights', url: '/insights' }
    ];

    // UPDATED BRAND LOGO
    const BrandLogo = ({ isFooter = false }) => (
        <Link href="/" className="flex items-center gap-3 cursor-pointer group">
            <div className="relative flex items-center justify-center w-12 h-12 transform group-hover:scale-105 transition-all duration-500">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
                    <defs>
                        <linearGradient id="globe-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor={isFooter ? "#60a5fa" : (isSolid ? "#1d4ed8" : "#ffffff")} />
                            <stop offset="100%" stopColor={isFooter ? "#34d399" : (isSolid ? "#10b981" : "#a7f3d0")} />
                        </linearGradient>
                    </defs>
                    <circle cx="12" cy="12" r="10" stroke="url(#globe-gradient)" strokeWidth="1.5" />
                    <path d="M12 2v20" stroke="url(#globe-gradient)" strokeWidth="1.5" />
                    <ellipse cx="12" cy="12" rx="4.5" ry="10" stroke="url(#globe-gradient)" strokeWidth="1.5" />
                    <path d="M2 12h20" stroke="url(#globe-gradient)" strokeWidth="1.5" />
                    <path d="M3.34 7 C 8 10 16 10 20.66 7" stroke="url(#globe-gradient)" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M3.34 17 C 8 14 16 14 20.66 17" stroke="url(#globe-gradient)" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            </div>
            <div className={`flex flex-col justify-center transition-colors duration-500`}>
                <span className={`text-2xl font-black tracking-[0.15em] leading-none uppercase ${isFooter ? 'text-white' : (isSolid ? 'text-blue-700' : 'text-white drop-shadow-md')}`}>
                    Ameda
                </span>
                <span className={`text-[0.65rem] font-bold tracking-[0.4em] leading-none mt-1.5 uppercase ${isFooter ? 'text-emerald-400' : (isSolid ? 'text-emerald-600' : 'text-emerald-300 drop-shadow-md')}`}>
                    Global
                </span>
            </div>
        </Link>
    );

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 w-full overflow-x-hidden selection:bg-blue-600 selection:text-white">

            {/* PRELOADER OVERLAY */}
            <div className={`fixed inset-0 z-[100] bg-gray-950 flex flex-col items-center justify-center transition-all duration-1000 ease-in-out ${isLoading ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="flex flex-col items-center transform transition-transform duration-1000">
                    <div className="animate-pulse mb-10">
                        <BrandLogo isFooter={true} />
                    </div>
                    <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden mb-4">
                        <div className={`h-full bg-gradient-to-r from-sky-500 to-emerald-500 transition-all ease-out duration-[2000ms] ${loadingWidth}`}></div>
                    </div>
                    <div className="text-emerald-400/80 text-[0.65rem] font-bold tracking-[0.3em] uppercase animate-pulse flex items-center gap-2">
                        <Loader2 className="w-3 h-3 animate-spin" /> Initializing Global Network...
                    </div>
                </div>
            </div>

            {/* HEADER */}
            <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${isSolid ? 'bg-white/95 backdrop-blur-md py-3 shadow-md border-b border-gray-200' : 'bg-transparent py-6'}`}>
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <BrandLogo />

                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link key={link.name} href={link.url} className={`text-sm font-bold tracking-wide transition-colors uppercase ${isSolid ? 'text-gray-900 hover:text-blue-700' : 'text-white hover:text-gray-200 drop-shadow-sm'}`}>
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden lg:flex items-center gap-6">

                        {/* EXPANDING SEARCH BAR */}
                        <div className="relative flex items-center" onMouseEnter={() => setIsSearchOpen(true)} onMouseLeave={() => { if (!isSearchFocused && !searchInputRef.current?.value) { setIsSearchOpen(false); } }}>
                            <div className={`overflow-hidden transition-all duration-300 ease-out flex items-center ${isSearchOpen ? 'w-48 opacity-100 mr-3' : 'w-0 opacity-0 mr-0'}`}>
                                <input
                                    ref={searchInputRef}
                                    type="text"
                                    placeholder={t('search_placeholder') || "Search catalog..."}
                                    className={`w-full rounded-full py-1.5 px-4 text-sm focus:outline-none focus:ring-2 transition-all ${isSolid
                                        ? 'bg-gray-100 border border-transparent text-gray-900 placeholder-gray-500 focus:bg-white focus:border-blue-500 focus:ring-blue-500/20'
                                        : 'bg-white/10 border border-white/20 text-white placeholder-white/60 focus:bg-white/20 focus:border-white/50 focus:ring-white/20 backdrop-blur-md'
                                        }`}
                                    onFocus={() => setIsSearchFocused(true)}
                                    onBlur={(e) => { setIsSearchFocused(false); if (!e.target.value) setIsSearchOpen(false); }}
                                />
                            </div>
                            <button onClick={() => { if (isSearchOpen) { if (searchInputRef.current) searchInputRef.current.value = ''; setIsSearchOpen(false); } else { setIsSearchOpen(true); } }}
                                className={`${isSolid ? 'text-gray-900 hover:text-blue-700' : 'text-white hover:text-gray-200'} transition-colors flex items-center justify-center`}
                            >
                                {isSearchOpen ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
                            </button>
                        </div>

                        {/* LANGUAGE DROPDOWN */}
                        <div className="relative">
                            <button onClick={() => setLangDropdownOpen(!langDropdownOpen)} className={`flex items-center gap-1.5 text-sm font-bold tracking-wide transition-colors uppercase ${isSolid ? 'text-gray-900 hover:text-blue-700' : 'text-white hover:text-gray-200'}`}>
                                <Globe className="w-4 h-4" /> {currentLang} <ChevronDown className="w-3 h-3" />
                            </button>
                            {langDropdownOpen && (
                                <div className="absolute top-full right-0 mt-3 w-36 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden py-2 z-50">
                                    {languages.map((lang) => (
                                        <button key={lang.code} onClick={() => handleDropdownSelect(lang.code)} className="w-full text-left px-4 py-2.5 text-sm font-bold text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors flex justify-between items-center">
                                            {lang.name}
                                            {currentLang === lang.code && <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link href="/contact" className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-colors shadow-lg shadow-blue-600/30">
                            {t('btn_contact') || 'Contact Us'}
                        </Link>
                    </div>

                    <button className={`lg:hidden ${isSolid ? 'text-gray-900' : 'text-white'}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                    </button>
                </div>

                {mobileMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100">
                        <div className="flex flex-col px-6 py-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link key={link.name} href={link.url} className="text-gray-900 hover:text-blue-600 font-bold text-lg py-3 border-b border-gray-100 uppercase tracking-wide" onClick={() => setMobileMenuOpen(false)}>
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </header>

            {/* DYNAMIC PAGE CONTENT GOES HERE */}
            <main>
                {children}
            </main>

            {/* GLOBAL FOOTER */}
            <footer className="bg-gray-950 pt-24 pb-12 border-t-4 border-blue-600 text-gray-400 font-sans">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
                        <div className="lg:col-span-4 pr-8">
                            <div className="mb-8"><BrandLogo isFooter={true} /></div>
                            <p className="text-sm leading-relaxed mb-8 max-w-sm text-gray-400">
                                Setting the global standard in high-performance material sourcing, precision manufacturing, and unyielding supply chain architecture.
                            </p>
                        </div>
                        <div className="lg:col-span-2">
                            <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest">{t('footer_enterprise') || 'Enterprise'}</h4>
                            <ul className="space-y-4">
                                <li><Link href="/enterprise/overview" className="text-sm hover:text-sky-400 transition-colors">Corporate Overview</Link></li>
                                <li><Link href="/enterprise/governance" className="text-sm hover:text-sky-400 transition-colors">Governance</Link></li>
                                <li><Link href="/enterprise/sustainability" className="text-sm hover:text-sky-400 transition-colors">Sustainability</Link></li>
                                <li><Link href="/enterprise/careers" className="text-sm hover:text-sky-400 transition-colors">Careers</Link></li>
                            </ul>
                        </div>
                        <div className="lg:col-span-2">
                            <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest">{t('footer_sectors') || 'Sectors'}</h4>
                            <ul className="space-y-4">
                                <li><Link href="/sectors/industrial" className="text-sm hover:text-sky-400 transition-colors">Industrial</Link></li>
                                <li><Link href="/sectors/pharmaceuticals" className="text-sm hover:text-sky-400 transition-colors">Pharmaceuticals</Link></li>
                                <li><Link href="/sectors/agrochemicals" className="text-sm hover:text-sky-400 transition-colors">Agrochemicals</Link></li>
                                <li><Link href="/sectors/tech-energy" className="text-sm hover:text-sky-400 transition-colors">Tech & Energy</Link></li>
                            </ul>
                        </div>
                        <div className="lg:col-span-4">
                            <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest">{t('footer_contact') || 'Contact'}</h4>
                            <div className="space-y-4 text-sm">
                                <p className="flex items-center gap-3"><Phone className="w-4 h-4 text-emerald-500" /> +91-11-4567-8900</p>
                                <p className="flex items-center gap-3"><Mail className="w-4 h-4 text-emerald-500" /> operations@amedaglobal.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wider uppercase font-semibold text-gray-500">
                        <p>&copy; {new Date().getFullYear()} Ameda Global Pvt. Ltd. {t('rights') || 'All rights reserved.'}</p>
                    </div>
                </div>
            </footer>

            {/* FLOATING CHAT WIDGET */}
            <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end font-sans">
                {isChatOpen && (
                    <div className="mb-4 w-[350px] sm:w-[380px] h-[520px] bg-white shadow-2xl overflow-hidden flex flex-col rounded-2xl border border-gray-200 origin-bottom-right transition-all">
                        <div className="bg-gradient-to-r from-blue-700 to-emerald-500 p-4 flex justify-between items-center text-white">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                    <Bot className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm tracking-wide uppercase">Trade Assistant</h3>
                                </div>
                            </div>
                            <button onClick={() => setIsChatOpen(false)} className="text-white/70 hover:text-white transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="flex-1 overflow-y-auto p-5 bg-gray-50/50 space-y-5">
                            {chatMessages.map((msg, idx) => (
                                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[85%] p-3.5 text-sm shadow-sm leading-relaxed ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-l-2xl rounded-tr-2xl' : 'bg-white border border-gray-100 text-gray-800 rounded-r-2xl rounded-tl-2xl'}`}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            <div ref={chatEndRef} />
                        </div>
                        <div className="p-4 bg-white border-t border-gray-100">
                            <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                                <input type="text" value={chatInput} onChange={(e) => setChatInput(e.target.value)} placeholder="Type..." className="flex-1 text-sm p-3 outline-none border border-gray-200 rounded-xl" />
                                <button type="submit" className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700"><Send className="w-4 h-4" /></button>
                            </form>
                        </div>
                    </div>
                )}
                <button onClick={() => setIsChatOpen(!isChatOpen)} className={`w-14 h-14 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-blue-700 transition-all ${isChatOpen ? 'hidden' : 'flex'}`}>
                    <MessageSquare className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
}