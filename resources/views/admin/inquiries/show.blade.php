@extends('admin.layouts.app')

@section('header_title', 'Inquiry Details')

@section('content')
    <div class="mb-6">
        <a href="{{ route('admin.inquiries.index') }}"
            class="flex inline-items-center gap-2 text-sm font-bold text-gray-600 hover:text-blue-700 bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-sm w-max transition-all">
            <i data-lucide="arrow-left" class="w-4 h-4"></i> Back to Inbox
        </a>
    </div>

    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 w-full max-w-4xl mx-auto">
        <div class="flex flex-col md:flex-row justify-between gap-6 border-b border-gray-100 pb-8 mb-8">
            <div>
                <h2 class="text-2xl font-black text-gray-900 mb-1">{{ $inquiry->name }}</h2>
                <a href="mailto:{{ $inquiry->email }}"
                    class="text-blue-600 font-bold hover:underline flex items-center gap-2">
                    <i data-lucide="mail" class="w-4 h-4"></i> {{ $inquiry->email }}
                </a>
            </div>
            <div class="bg-gray-50 rounded-xl p-4 border border-gray-100 w-full md:w-64 shrink-0">
                <p class="text-[0.65rem] font-bold text-gray-400 uppercase tracking-widest mb-1">Company</p>
                <p class="font-bold text-gray-900 mb-3">{{ $inquiry->company }}</p>

                <p class="text-[0.65rem] font-bold text-gray-400 uppercase tracking-widest mb-1">Region</p>
                <p class="font-bold text-blue-600 uppercase">{{ strtoupper($inquiry->region) }}</p>
            </div>
        </div>

        <div>
            <p class="text-[0.65rem] font-bold text-gray-400 uppercase tracking-widest mb-4">Message Content</p>
            <div
                class="bg-gray-50 p-6 rounded-xl border border-gray-100 text-gray-700 leading-relaxed font-medium whitespace-pre-wrap">
                {{ $inquiry->message }}
            </div>
        </div>

        <div class="mt-8 text-xs font-bold text-gray-400 flex items-center gap-2">
            <i data-lucide="clock" class="w-4 h-4"></i> Received on {{ $inquiry->created_at->format('F d, Y \a\t h:i A') }}
        </div>
    </div>
@endsection