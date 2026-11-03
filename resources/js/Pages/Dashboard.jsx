import MainLayout from '../Layouts/MainLayout';
import { Head, Link } from '@inertiajs/react';
import { Package, FileText, Clock, ChevronRight, Box, ShieldCheck, LogOut, User as UserIcon } from 'lucide-react';

export default function Dashboard({ auth }) {
    return (
        <MainLayout forceSolidNav={true}>
            <Head title="Client Dashboard | Ameda Global" />

            <div className="min-h-screen bg-gray-50 pt-32 pb-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-6">

                    {/* Header Actions */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                        <div>
                            <h2 className="text-2xl font-black text-gray-900 tracking-tight">Client Portal</h2>
                            <p className="text-gray-500 text-sm font-medium">Manage your corporate account</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Link href={route('profile.edit')} className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-blue-600 px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm">
                                <UserIcon className="w-4 h-4" /> Profile
                            </Link>
                            <Link href={route('logout')} method="post" as="button" className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm">
                                <LogOut className="w-4 h-4" /> Sign Out
                            </Link>
                        </div>
                    </div>

                    {/* Welcome Banner */}
                    <div className="bg-gradient-to-r from-blue-700 to-sky-600 overflow-hidden shadow-lg sm:rounded-2xl relative">
                        <div className="p-8 md:p-10 relative z-10 text-white">
                            <div className="flex items-center gap-2 text-blue-100 text-xs font-bold tracking-widest uppercase mb-3">
                                <ShieldCheck className="w-4 h-4" /> Secure Session
                            </div>
                            <h3 className="text-3xl md:text-4xl font-black mb-3">Welcome back, {auth.user.name}</h3>
                            <p className="text-blue-100 font-medium max-w-xl leading-relaxed">
                                Manage your corporate procurement, track active shipments, and review compliance documentation all in one centralized location.
                            </p>
                        </div>
                        <Box className="absolute -right-10 -bottom-10 w-64 h-64 text-white opacity-10" />
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                                <Package className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Active Orders</p>
                                <h4 className="text-2xl font-black text-gray-900">2</h4>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                                <FileText className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Pending Quotes</p>
                                <h4 className="text-2xl font-black text-gray-900">4</h4>
                            </div>
                        </div>

                        <Link href="/products" className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between group hover:border-blue-300 hover:shadow-md transition-all cursor-pointer">
                            <div>
                                <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Product Catalog</p>
                                <h4 className="text-lg font-bold text-blue-600">Browse Materials</h4>
                            </div>
                            <ChevronRight className="w-6 h-6 text-gray-300 group-hover:text-blue-600 transition-colors" />
                        </Link>
                    </div>

                    {/* Recent Activity */}
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-2xl border border-gray-100">
                        <div className="px-6 py-5 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
                            <h3 className="font-bold text-gray-900">Recent Procurement Activity</h3>
                            <button className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors">View All</button>
                        </div>
                        <div className="divide-y divide-gray-100">
                            {[
                                { id: 'ORD-2026-8991', product: 'Aerospace Grade Titanium', status: 'In Transit', date: 'Oct 04, 2026', color: 'text-blue-600', bg: 'bg-blue-50' },
                                { id: 'QT-2026-1042', product: 'Industrial Grade Glycolic Acid', status: 'Quote Ready', date: 'Oct 01, 2026', color: 'text-emerald-600', bg: 'bg-emerald-50' },
                                { id: 'ORD-2026-8104', product: 'PTFE Fluoropolymer Resins', status: 'Delivered', date: 'Sep 15, 2026', color: 'text-gray-600', bg: 'bg-gray-100' },
                            ].map((item, idx) => (
                                <div key={idx} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-gray-50 transition-colors group">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
                                            <Box className="w-5 h-5 text-gray-500" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">{item.product}</p>
                                            <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
                                                <span className="font-bold">{item.id}</span>
                                                <span>•</span>
                                                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {item.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between sm:justify-end gap-6">
                                        <span className={`px-3 py-1.5 rounded-full text-xs font-bold ${item.color} ${item.bg}`}>
                                            {item.status}
                                        </span>
                                        <button className="text-gray-300 hover:text-blue-600 transition-colors">
                                            <ChevronRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </MainLayout>
    );
}