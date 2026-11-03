@extends('admin.layouts.app')

@section('header_title', 'Read Article')

@section('content')
    <div class="flex items-center justify-between mb-6">
        <a href="{{ route('admin.insights.index') }}"
            class="flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-blue-700 bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-sm transition-all">
            <i data-lucide="arrow-left" class="w-4 h-4"></i> Back to Articles
        </a>

        <div class="flex gap-3">
            <a href="{{ route('admin.insights.edit', $insight->id) }}"
                class="flex items-center gap-2 text-sm font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-4 py-2 rounded-xl border border-emerald-100 shadow-sm transition-all">
                <i data-lucide="edit" class="w-4 h-4"></i> Edit
            </a>
        </div>
    </div>

    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 max-w-4xl mx-auto">

        <!-- Article Header -->
        <div class="border-b border-gray-100 pb-8 mb-8 text-center">
            <span
                class="inline-block bg-blue-50 text-blue-700 text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                {{ $insight->category }}
            </span>
            <h1 class="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight">{{ $insight->title }}</h1>
            <p class="text-sm font-bold text-gray-500 flex items-center justify-center gap-2">
                <i data-lucide="calendar" class="w-4 h-4"></i> Published on
                {{ $insight->created_at->format('F d, Y \a\t h:i A') }}
            </p>
        </div>


        <div class="prose prose-blue max-w-none text-gray-700 prose-headings:font-black prose-a:text-blue-600">
            {!! $insight->content !!}
        </div>

    </div>
@endsection