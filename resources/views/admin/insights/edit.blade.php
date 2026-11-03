@extends('admin.layouts.app')

@section('header_title', 'Edit Insight')

@section('content')
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div class="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
            <a href="{{ route('admin.dashboard') }}"
                class="hover:text-blue-600 transition-colors flex items-center gap-1.5"><i data-lucide="home"
                    class="w-3.5 h-3.5"></i> Home</a>
            <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
            <a href="{{ route('admin.insights.index') }}" class="hover:text-blue-600 transition-colors">Insights & News</a>
            <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
            <span class="text-gray-900">Edit Article</span>
        </div>

        <a href="{{ route('admin.insights.index') }}"
            class="flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-blue-700 bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-sm transition-all">
            <i data-lucide="arrow-left" class="w-4 h-4"></i> Back to Articles
        </a>
    </div>

    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 w-full">
        @if ($errors->any())
            <div class="mb-8 bg-red-50 border border-red-200 text-red-600 px-6 py-4 rounded-xl flex items-center gap-3">
                <i data-lucide="alert-circle" class="w-5 h-5 shrink-0"></i>
                <span class="font-bold text-sm">Please correct the errors below before updating.</span>
            </div>
        @endif

        <!-- Note the route targets update, and includes the $insight ID -->
        <form action="{{ route('admin.insights.update', $insight->id) }}" method="POST" class="space-y-6">
            @csrf
            @method('PUT')

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <label class="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Article
                        Title</label>
                    <input type="text" name="title" value="{{ old('title', $insight->title) }}"
                        class="w-full border {{ $errors->has('title') ? 'border-red-500' : 'border-gray-200 focus:border-blue-500' }} rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                        required>
                </div>

                <div>
                    <label class="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Category</label>
                    <select name="category"
                        class="w-full border {{ $errors->has('category') ? 'border-red-500' : 'border-gray-200 focus:border-blue-500' }} rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-gray-700"
                        required>
                        <option value="Market Trends" {{ old('category', $insight->category) == 'Market Trends' ? 'selected' : '' }}>Market Trends</option>
                        <option value="Company News" {{ old('category', $insight->category) == 'Company News' ? 'selected' : '' }}>Company News</option>
                        <option value="Sustainability" {{ old('category', $insight->category) == 'Sustainability' ? 'selected' : '' }}>Sustainability</option>
                    </select>
                </div>
            </div>

            <div>
                <label class="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Article Content</label>
                <div class="{{ $errors->has('content') ? 'border border-red-500 rounded-xl overflow-hidden' : '' }}">
                    <textarea name="content" class="summernote" required>{{ old('content', $insight->content) }}</textarea>
                </div>
            </div>

            <div class="pt-8 border-t border-gray-100 flex justify-end gap-4">
                <a href="{{ route('admin.insights.index') }}"
                    class="px-6 py-3 rounded-xl font-bold text-gray-600 hover:bg-gray-100 transition-colors">Cancel</a>
                <button type="submit"
                    class="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl font-bold uppercase tracking-wider transition-colors shadow-lg shadow-emerald-600/20">
                    Save Changes
                </button>
            </div>
        </form>
    </div>
@endsection