import React, { useState, useEffect } from 'react';
import MainLayout from '../Layouts/MainLayout';
import { useLanguage } from '../Contexts/LanguageContext';
import { useForm } from '@inertiajs/react';
import {
    MapPin, Phone, Mail, Globe,
    ArrowRight, Building2, Send, CheckCircle2,
    MessageSquare, User, Briefcase, ChevronDown,
    ShieldCheck
} from 'lucide-react';

export default function Contact() {
    const [mounted, setMounted] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    // Inertia useForm Hook
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        company: '',
        region: '',
        message: ''
    });

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        post(route('contact.store'), {
            preserveScroll: true,
            onSuccess: () => {
                setShowSuccess(true);
                reset(); // Clear the form
                setTimeout(() => setShowSuccess(false), 5000);
            }
        });
    };

    const globalHubs = [
        { country: 'India', city: 'Mumbai', type: 'Global Headquarters', phone: '+91-22-4567-8900', email: 'hq.india@amedaglobal.com' },
        { country: 'USA', city: 'New York', type: 'Americas Operations', phone: '+1-212-555-0198', email: 'americas@amedaglobal.com' },
        { country: 'Japan', city: 'Tokyo', type: 'APAC Logistics', phone: '+81-3-3211-0000', email: 'apac@amedaglobal.com' },
        { country: 'Brazil', city: 'São Paulo', type: 'LATAM Sourcing', phone: '+55-11-3000-4000', email: 'latam@amedaglobal.com' },
        { country: 'China', city: 'Shanghai', type: 'Manufacturing Hub', phone: '+86-21-5000-6000', email: 'china.ops@amedaglobal.com' },
        { country: 'South Africa', city: 'Johannesburg', type: 'EMEA Sourcing', phone: '+27-11-200-3000', email: 'emea@amedaglobal.com' }
    ];

    return (
        <MainLayout>

            {/* 1. IMMERSIVE HERO SECTION */}
            <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-36 overflow-hidden bg-gray-950 min-h-[55vh] flex items-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=3840&auto=format&fit=crop"
                        alt="Ameda Global Corporate Office"
                        className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-gray-900/80 to-blue-950/60"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 max-w-[90rem]">
                    <div className={`transition-all duration-1000 transform text-center flex flex-col items-center ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-500/30 text-sky-400 mb-8">
                            <Globe className="w-5 h-5" />
                            <span className="text-sm font-bold tracking-widest uppercase">Global Connectivity</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black text-white leading-[1.05] mb-8 tracking-tight max-w-4xl">
                            Connect With <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">Our Network</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl leading-relaxed font-light">
                            Whether you require specialized material procurement or compliance consulting, our trade engineers and regional directors are ready to assist.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. CONTACT FORM & DIRECT ROUTING */}
            <section className="py-24 bg-gray-50 relative -mt-10 z-20 rounded-t-[3rem]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-16">

                        {/* Left Side: Context & Direct Contacts */}
                        <div className="w-full lg:w-5/12 flex flex-col">
                            <h2 className="text-sm font-bold text-blue-700 tracking-widest uppercase mb-4">Corporate Inquiries</h2>
                            <h3 className="text-4xl font-black text-gray-900 mb-6 tracking-tight">How can we help your supply chain?</h3>
                            <p className="text-gray-600 text-lg leading-relaxed mb-12">
                                Use the form to direct your inquiry to the appropriate regional desk. For urgent logistics or compliance matters, please refer to our direct lines below.
                            </p>

                            <div className="space-y-6 mt-auto">
                                <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex gap-5 items-center group cursor-pointer hover:shadow-lg hover:border-blue-100 transition-all">
                                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors">
                                        <Briefcase className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-lg">Sales & Procurement</h4>
                                        <p className="text-blue-600 text-sm font-semibold">sales@amedaglobal.com</p>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex gap-5 items-center group cursor-pointer hover:shadow-lg hover:border-blue-100 transition-all">
                                    <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-sky-500 transition-colors">
                                        <ShieldCheck className="w-6 h-6 text-sky-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-lg">Legal & Compliance</h4>
                                        <p className="text-sky-600 text-sm font-semibold">compliance@amedaglobal.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: The Form */}
                        <div className="w-full lg:w-7/12">
                            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(37,99,235,0.06)] border border-gray-100 relative overflow-hidden">

                                {/* Success Overlay */}
                                <div className={`absolute inset-0 bg-blue-600 z-50 flex flex-col items-center justify-center text-white transition-all duration-500 ${showSuccess ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                                    <CheckCircle2 className="w-20 h-20 mb-6 animate-[bounce_1s_ease-in-out]" />
                                    <h3 className="text-3xl font-black mb-2">Inquiry Sent</h3>
                                    <p className="text-blue-100 font-medium text-center px-6">Our procurement desk will contact you within 24 hours.</p>
                                </div>

                                <form onSubmit={handleFormSubmit} className="space-y-6 relative z-10">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Name */}
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                                            <div className="relative">
                                                <input type="text" value={data.name} onChange={e => setData('name', e.target.value)} className={`w-full bg-gray-50 border ${errors.name ? 'border-red-500' : 'border-gray-200'} rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all font-medium text-gray-900`} placeholder="John Doe" />
                                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            </div>
                                            {errors.name && <p className="text-red-500 text-xs font-bold mt-1 ml-1">{errors.name}</p>}
                                        </div>

                                        {/* Email */}
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Corporate Email</label>
                                            <div className="relative">
                                                <input type="email" value={data.email} onChange={e => setData('email', e.target.value)} className={`w-full bg-gray-50 border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all font-medium text-gray-900`} placeholder="john@company.com" />
                                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            </div>
                                            {errors.email && <p className="text-red-500 text-xs font-bold mt-1 ml-1">{errors.email}</p>}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Company */}
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Company Name</label>
                                            <div className="relative">
                                                <input type="text" value={data.company} onChange={e => setData('company', e.target.value)} className={`w-full bg-gray-50 border ${errors.company ? 'border-red-500' : 'border-gray-200'} rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all font-medium text-gray-900`} placeholder="Acme Corp" />
                                                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            </div>
                                            {errors.company && <p className="text-red-500 text-xs font-bold mt-1 ml-1">{errors.company}</p>}
                                        </div>

                                        {/* Region */}
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Operating Region</label>
                                            <div className="relative">
                                                <select value={data.region} onChange={e => setData('region', e.target.value)} className={`w-full bg-gray-50 border ${errors.region ? 'border-red-500' : 'border-gray-200'} rounded-2xl py-4 pl-12 pr-10 text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all font-medium text-gray-900 appearance-none cursor-pointer`}>
                                                    <option value="" disabled>Select Region</option>
                                                    <option value="na">North America</option>
                                                    <option value="latam">Latin America</option>
                                                    <option value="emea">Europe, Middle East, Africa</option>
                                                    <option value="apac">Asia Pacific</option>
                                                </select>
                                                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                                            </div>
                                            {errors.region && <p className="text-red-500 text-xs font-bold mt-1 ml-1">{errors.region}</p>}
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Inquiry Details</label>
                                        <div className="relative">
                                            <textarea value={data.message} onChange={e => setData('message', e.target.value)} rows="4" className={`w-full bg-gray-50 border ${errors.message ? 'border-red-500' : 'border-gray-200'} rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all font-medium text-gray-900 resize-none`} placeholder="Provide material specifications or logistics requirements..."></textarea>
                                            <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-gray-400" />
                                        </div>
                                        {errors.message && <p className="text-red-500 text-xs font-bold mt-1 ml-1">{errors.message}</p>}
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="w-full bg-blue-700 hover:bg-blue-800 text-white font-black text-sm uppercase tracking-widest py-5 rounded-2xl transition-all shadow-[0_10px_20px_rgba(29,78,216,0.2)] hover:shadow-[0_15px_30px_rgba(29,78,216,0.3)] flex items-center justify-center gap-3 disabled:opacity-70"
                                    >
                                        {processing ? (
                                            <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> Processing...</>
                                        ) : (
                                            <>Transmit Inquiry <ArrowRight className="w-5 h-5" /></>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 3. GLOBAL HUBS DIRECTORY */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-sm font-bold text-sky-500 tracking-widest uppercase mb-3">Directory</h2>
                        <h3 className="text-4xl font-black text-gray-900 tracking-tight">Worldwide Operating Hubs</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {globalHubs.map((hub, idx) => (
                            <div key={idx} className="group p-8 rounded-[2rem] border border-gray-100 bg-white shadow-sm hover:shadow-[0_20px_40px_rgba(14,165,233,0.06)] hover:border-sky-100 transition-all duration-500 relative overflow-hidden cursor-default">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-sky-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full"></div>
                                <div className="flex justify-between items-start mb-6 relative z-10">
                                    <div>
                                        <h4 className="text-2xl font-black text-gray-900 tracking-tight">{hub.country}</h4>
                                        <p className="text-sky-600 font-bold text-sm tracking-wide">{hub.city}</p>
                                    </div>
                                    <div className="px-3 py-1 bg-gray-100 group-hover:bg-blue-600 group-hover:text-white text-gray-600 text-[0.65rem] font-black uppercase tracking-widest rounded-lg transition-colors duration-500">
                                        {hub.type}
                                    </div>
                                </div>
                                <div className="space-y-4 relative z-10">
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-sky-50 group-hover:text-sky-600 transition-colors">
                                            <Phone className="w-4 h-4" />
                                        </div>
                                        <span className="font-medium text-sm">{hub.phone}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-sky-50 group-hover:text-sky-600 transition-colors">
                                            <Mail className="w-4 h-4" />
                                        </div>
                                        <span className="font-medium text-sm">{hub.email}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}