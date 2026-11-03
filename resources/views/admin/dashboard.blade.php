@extends('admin.layouts.app')

@section('header_title', 'Command Center Overview')

@section('content')
    <div class="space-y-6">

        <!-- WELCOME BANNER -->
        <div
            class="bg-gradient-to-r from-blue-700 to-sky-500 rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
            <div class="relative z-10">
                <h2 class="text-3xl font-black tracking-tight mb-2">Welcome back, {{ Auth::user()->name }}</h2>
                <p class="text-blue-100 font-medium">Here is what is happening across your global supply network today.</p>
            </div>
            <!-- Decorative background icon -->
            <i data-lucide="globe" class="absolute -right-10 -bottom-10 w-64 h-64 text-white opacity-10"></i>
        </div>

        <!-- METRICS GRID -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Stat Card 1 -->
            <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
                <div class="flex justify-between items-start mb-4">
                    <div class="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                        <i data-lucide="box" class="w-6 h-6"></i>
                    </div>
                    <span class="bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">+12%</span>
                </div>
                <p class="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Active Materials</p>
                <h3 class="text-3xl font-black text-gray-900">142</h3>
            </div>

            <!-- Stat Card 2 -->
            <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
                <div class="flex justify-between items-start mb-4">
                    <div class="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
                        <i data-lucide="mail" class="w-6 h-6"></i>
                    </div>
                    <span class="bg-blue-100 text-blue-700 text-xs font-bold px-2.5 py-1 rounded-full">3 New</span>
                </div>
                <p class="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Pending Inquiries</p>
                <h3 class="text-3xl font-black text-gray-900">28</h3>
            </div>

            <!-- Stat Card 3 -->
            <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
                <div class="flex justify-between items-start mb-4">
                    <div class="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center">
                        <i data-lucide="newspaper" class="w-6 h-6"></i>
                    </div>
                </div>
                <p class="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Published Insights</p>
                <h3 class="text-3xl font-black text-gray-900">45</h3>
            </div>

            <!-- Stat Card 4 -->
            <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
                <div class="flex justify-between items-start mb-4">
                    <div class="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center">
                        <i data-lucide="users" class="w-6 h-6"></i>
                    </div>
                    <span class="bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">+4%</span>
                </div>
                <p class="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Corporate Clients</p>
                <h3 class="text-3xl font-black text-gray-900">89</h3>
            </div>
        </div>

        <!-- QUICK ACTIONS & RECENT ACTIVITY -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">

            <!-- Recent Activity (Takes up 2 columns) -->
            <div class="lg:col-span-2 bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
                <div class="px-6 py-5 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
                    <h3 class="font-bold text-gray-900">Recent System Activity</h3>
                    <a href="#" class="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors">View All</a>
                </div>
                <div class="divide-y divide-gray-100">
                    <div class="p-6 flex items-start gap-4 hover:bg-gray-50 transition-colors">
                        <div
                            class="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                            <i data-lucide="edit" class="w-4 h-4"></i>
                        </div>
                        <div>
                            <p class="text-sm font-bold text-gray-900 mb-1">Aerospace Grade Titanium specs updated</p>
                            <p class="text-xs text-gray-500">Modified by {{ Auth::user()->name }} • 2 hours ago</p>
                        </div>
                    </div>
                    <div class="p-6 flex items-start gap-4 hover:bg-gray-50 transition-colors">
                        <div
                            class="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                            <i data-lucide="mail-plus" class="w-4 h-4"></i>
                        </div>
                        <div>
                            <p class="text-sm font-bold text-gray-900 mb-1">New bulk inquiry received from Global Merchants
                                Ltd.</p>
                            <p class="text-xs text-gray-500">System • 5 hours ago</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Quick Actions (Takes up 1 column) -->
            <div class="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden flex flex-col">
                <div class="px-6 py-5 border-b border-gray-100 bg-gray-50/50">
                    <h3 class="font-bold text-gray-900">Quick Actions</h3>
                </div>
                <div class="p-6 flex-1 flex flex-col gap-3">
                    <a href="{{ route('admin.products.create') }}"
                        class="w-full flex items-center gap-3 bg-gray-50 hover:bg-blue-50 hover:text-blue-700 border border-gray-200 hover:border-blue-200 text-gray-700 px-4 py-3 rounded-xl font-bold transition-all">
                        <i data-lucide="plus-circle" class="w-5 h-5"></i> Add New Product
                    </a>
                    <a href="#"
                        class="w-full flex items-center gap-3 bg-gray-50 hover:bg-blue-50 hover:text-blue-700 border border-gray-200 hover:border-blue-200 text-gray-700 px-4 py-3 rounded-xl font-bold transition-all">
                        <i data-lucide="file-text" class="w-5 h-5"></i> Publish Insight
                    </a>
                    <a href="#"
                        class="w-full flex items-center gap-3 bg-gray-50 hover:bg-blue-50 hover:text-blue-700 border border-gray-200 hover:border-blue-200 text-gray-700 px-4 py-3 rounded-xl font-bold transition-all">
                        <i data-lucide="settings" class="w-5 h-5"></i> Site Settings
                    </a>
                </div>
            </div>

        </div>
    </div>
@endsection