@extends('admin.layouts.app')

@section('header_title', 'Material Catalog')

@section('content')
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

        <!-- Table Toolbar -->
        <div class="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
            <div class="relative w-64">
                <input type="text" placeholder="Search catalog..."
                    class="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all">
                <i data-lucide="search" class="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"></i>
            </div>

            <a href="{{ route('admin.products.create') }}"
                class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wider transition-colors shadow-md">
                + New Product
            </a>
        </div>

        <!-- Data Table -->
        <table class="w-full text-left border-collapse">
            <thead>
                <tr class="bg-gray-50 border-b border-gray-100">
                    <th class="py-4 px-6 text-xs font-bold text-gray-500 uppercase tracking-widest">Product Name</th>
                    <th class="py-4 px-6 text-xs font-bold text-gray-500 uppercase tracking-widest">Category</th>
                    <th class="py-4 px-6 text-xs font-bold text-gray-500 uppercase tracking-widest">Status</th>
                    <th class="py-4 px-6 text-xs font-bold text-gray-500 uppercase tracking-widest text-right">Actions</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
                @forelse($products as $product)
                    <tr class="hover:bg-blue-50/50 transition-colors group">
                        <td class="py-4 px-6">
                            <div class="flex items-center gap-4">
                                <div
                                    class="w-10 h-10 rounded-lg bg-gray-100 overflow-hidden border border-gray-200 flex items-center justify-center shrink-0">
                                    @if($product->image)
                                        <img src="{{ asset('storage/' . $product->image) }}" class="w-full h-full object-cover">
                                    @else
                                        <i data-lucide="box" class="w-5 h-5 text-gray-400"></i>
                                    @endif
                                </div>
                                <div>
                                    <p class="font-bold text-gray-900">{{ $product->name }}</p>
                                    @if($product->badge)
                                        <p class="text-xs text-blue-600 font-bold mt-0.5">{{ $product->badge }}</p>
                                    @endif
                                </div>
                            </div>
                        </td>
                        <td class="py-4 px-6">
                            <span
                                class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-bold">{{ $product->category }}</span>
                        </td>
                        <td class="py-4 px-6">
                            <span
                                class="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold flex items-center w-max gap-1">
                                <div class="w-1.5 h-1.5 rounded-full bg-green-500"></div> Active
                            </span>
                        </td>
                        <td class="py-4 px-6 text-right">
                            <div
                                class="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                <form method="POST" action="{{ route('admin.products.destroy', $product->id) }}"
                                    onsubmit="return confirm('Are you sure you want to delete this product?');">
                                    @csrf @method('DELETE')
                                    <button type="submit" class="text-gray-400 hover:text-red-600 transition-colors"><i
                                            data-lucide="trash-2" class="w-4 h-4"></i></button>
                                </form>
                            </div>
                        </td>
                    </tr>
                @empty
                    <tr>
                        <td colspan="4" class="py-12 text-center text-gray-500">
                            <i data-lucide="inbox" class="w-12 h-12 mx-auto text-gray-300 mb-3"></i>
                            <p class="font-medium text-lg">No products found.</p>
                            <p class="text-sm">Click "New Product" to add your first catalog item.</p>
                        </td>
                    </tr>
                @endforelse
            </tbody>
        </table>
    </div>
@endsection