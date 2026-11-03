@extends('admin.layouts.app')

@section('header_title', 'Create New Product')

@section('content')
    <!-- INNER NAVIGATION BAR -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <!-- Breadcrumbs -->
        <div class="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
            <a href="{{ route('admin.dashboard') }}"
                class="hover:text-blue-600 transition-colors flex items-center gap-1.5">
                <i data-lucide="home" class="w-3.5 h-3.5"></i> Home
            </a>
            <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
            <a href="{{ route('admin.products.index') }}" class="hover:text-blue-600 transition-colors">
                Catalog
            </a>
            <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
            <span class="text-gray-900">New Product</span>
        </div>

        <!-- Back Button -->
        <a href="{{ route('admin.products.index') }}"
            class="flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-blue-700 bg-white px-4 py-2 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
            <i data-lucide="arrow-left" class="w-4 h-4"></i> Back to Catalog
        </a>
    </div>

    <!-- MAIN FORM CONTAINER -->
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 w-full">

        @if ($errors->any())
            <div class="mb-8 bg-red-50 border border-red-200 text-red-600 px-6 py-4 rounded-xl flex items-center gap-3">
                <i data-lucide="alert-circle" class="w-5 h-5 shrink-0"></i>
                <span class="font-bold text-sm">Please correct the errors below before saving the product.</span>
            </div>
        @endif

        <form action="{{ route('admin.products.store') }}" method="POST" enctype="multipart/form-data" class="space-y-6">
            @csrf

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Product Name -->
                <div>
                    <label class="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Product Name</label>
                    <input type="text" name="name" value="{{ old('name') }}"
                        placeholder="e.g., Aerospace Grade Titanium (Ti-6Al-4V)"
                        class="w-full border {{ $errors->has('name') ? 'border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:ring-blue-500/20 focus:border-blue-500' }} rounded-xl px-4 py-3 text-sm focus:ring-2 outline-none transition-all placeholder-gray-400"
                        required>
                    @error('name')
                        <p class="text-red-500 text-xs mt-1.5 font-bold">{{ $message }}</p>
                    @enderror
                </div>

                <!-- Category -->
                <div>
                    <label class="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Category
                        Assignment</label>
                    <select name="category_id"
                        class="w-full border rounded-xl px-4 py-3 text-sm focus:ring-2 outline-none transition-all text-gray-700"
                        required>
                        <option value="" disabled selected>Select taxonomy node...</option>
                        @foreach($categoriesTree as $id => $name)
                            <option value="{{ $id }}">{{ $name }}</option>
                        @endforeach
                    </select>

                    @error('category')
                        <p class="text-red-500 text-xs mt-1.5 font-bold">{{ $message }}</p>
                    @enderror
                </div>
            </div>

            <!-- Feature Badge -->
            <div>
                <label class="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Feature Badge
                    (Optional)</label>
                <input type="text" name="badge" value="{{ old('badge') }}"
                    placeholder="e.g., ISO 9001 Certified / High-Tensile"
                    class="w-full border {{ $errors->has('badge') ? 'border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:ring-blue-500/20 focus:border-blue-500' }} rounded-xl px-4 py-3 text-sm focus:ring-2 outline-none transition-all placeholder-gray-400">
                @error('badge')
                    <p class="text-red-500 text-xs mt-1.5 font-bold">{{ $message }}</p>
                @enderror
            </div>

            <!-- Product Image -->
            <div>
                <label class="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Product Image</label>
                <input type="file" name="image"
                    class="w-full border {{ $errors->has('image') ? 'border-red-500' : 'border-gray-200' }} rounded-xl px-4 py-2.5 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-bold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-all text-gray-500">
                <p class="text-[0.65rem] font-bold text-gray-400 uppercase tracking-widest mt-2">Accepted formats: JPG, PNG,
                    WEBP (Max 2MB)</p>
                @error('image')
                    <p class="text-red-500 text-xs mt-1.5 font-bold">{{ $message }}</p>
                @enderror
            </div>

            <!-- Detailed Description -->
            <div>
                <label class="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Detailed
                    Description</label>
                <div class="{{ $errors->has('description') ? 'border border-red-500 rounded-xl overflow-hidden' : '' }}">
                    <textarea name="description" class="summernote"
                        placeholder="Provide comprehensive technical specifications, material properties, safety guidelines, and intended industry applications..."
                        required>{{ old('description') }}</textarea>
                </div>
                @error('description')
                    <p class="text-red-500 text-xs mt-1.5 font-bold">{{ $message }}</p>
                @enderror
            </div>

            <!-- Actions -->
            <div class="pt-8 border-t border-gray-100 flex justify-end gap-4">
                <a href="{{ route('admin.products.index') }}"
                    class="px-6 py-3 rounded-xl font-bold text-gray-600 hover:bg-gray-100 transition-colors">Cancel</a>
                <button type="submit"
                    class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold uppercase tracking-wider transition-colors shadow-lg shadow-blue-600/20">
                    Save Product
                </button>
            </div>
        </form>

    </div>
@endsection