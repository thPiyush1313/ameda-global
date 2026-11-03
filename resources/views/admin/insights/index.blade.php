@extends('admin.layouts.app')

@section('header_title', 'Industry Insights')

@section('content')
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div class="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
            <h3 class="font-bold text-gray-900">Published Articles</h3>
            <a href="{{ route('admin.insights.create') }}"
                class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wider transition-colors shadow-md">
                + New Article
            </a>
        </div>
        <div class="divide-y divide-gray-100">
            @forelse($insights as $insight)
                <div class="p-6 flex items-center justify-between hover:bg-blue-50/50 transition-colors group">
                    <div>
                        <p class="font-bold text-gray-900 text-lg mb-1">{{ $insight->title }}</p>
                        <div class="flex items-center gap-3 text-xs font-bold text-gray-500">
                            <span class="bg-gray-100 text-gray-700 px-2.5 py-0.5 rounded-full">{{ $insight->category }}</span>
                            <span>•</span>
                            <span>{{ $insight->created_at->format('M d, Y') }}</span>
                        </div>
                    </div>

                    <!-- ACTION BUTTONS -->
                    <div class="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">

                        <!-- View -->
                        <a href="{{ route('admin.insights.show', $insight->id) }}"
                            class="text-gray-400 hover:text-blue-600 transition-colors" title="Read Article">
                            <i data-lucide="eye" class="w-5 h-5"></i>
                        </a>

                        <!-- Edit -->
                        <a href="{{ route('admin.insights.edit', $insight->id) }}"
                            class="text-gray-400 hover:text-emerald-600 transition-colors" title="Edit Article">
                            <i data-lucide="edit" class="w-5 h-5"></i>
                        </a>

                        <!-- Delete -->
                        <form method="POST" action="{{ route('admin.insights.destroy', $insight->id) }}"
                            onsubmit="return confirm('Are you sure you want to delete this article?');" class="inline-block">
                            @csrf @method('DELETE')
                            <button type="submit" class="text-gray-400 hover:text-red-600 transition-colors"
                                title="Delete Article">
                                <i data-lucide="trash-2" class="w-5 h-5"></i>
                            </button>
                        </form>
                    </div>
                </div>
            @empty
                <div class="p-12 text-center text-gray-500">
                    <div class="w-16 h-16 bg-gray-50 text-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i data-lucide="file-text" class="w-8 h-8"></i>
                    </div>
                    <p class="font-bold text-gray-900 mb-1">No insights published yet.</p>
                    <p class="text-sm">Click "New Article" to draft your first post.</p>
                </div>
            @endforelse
        </div>
    </div>
@endsection