@extends('admin.layouts.app')
@section('header_title', 'Category Architecture')
@section('content')
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div class="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
            <h3 class="font-bold text-gray-900">Taxonomy Tree</h3>
            <a href="{{ route('admin.categories.create') }}"
                class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wider transition-colors shadow-md">+
                New Node</a>
        </div>
        <table class="w-full text-left border-collapse">
            <thead>
                <tr class="bg-gray-50 border-b border-gray-100">
                    <th class="py-4 px-6 text-xs font-bold text-gray-500 uppercase tracking-widest">Category Name</th>
                    <th class="py-4 px-6 text-xs font-bold text-gray-500 uppercase tracking-widest">Parent Node</th>
                    <th class="py-4 px-6 text-xs font-bold text-gray-500 uppercase tracking-widest text-right">Actions</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
                @forelse($categories as $category)
                    <tr class="hover:bg-blue-50/50 transition-colors group">
                        <td class="py-4 px-6 font-bold text-gray-900">{{ $category->name }}</td>
                        <td class="py-4 px-6">
                            @if($category->parent)
                                <span
                                    class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-bold">{{ $category->parent->name }}</span>
                            @else
                                <span class="text-xs font-bold text-gray-400 uppercase tracking-widest">— Root Level —</span>
                            @endif
                        </td>
                        <td class="py-4 px-6 text-right">
                            <form method="POST" action="{{ route('admin.categories.destroy', $category->id) }}"
                                class="inline-block opacity-0 group-hover:opacity-100 transition-opacity"
                                onsubmit="return confirm('Delete this category? Linked products will become uncategorized.');">
                                @csrf @method('DELETE')
                                <button type="submit" class="text-red-400 hover:text-red-600 transition-colors"><i
                                        data-lucide="trash-2" class="w-4 h-4"></i></button>
                            </form>
                        </td>
                    </tr>
                @empty
                    <tr>
                        <td colspan="3" class="py-12 text-center text-gray-500 font-medium">No taxonomy structure defined.</td>
                    </tr>
                @endforelse
            </tbody>
        </table>
    </div>
@endsection