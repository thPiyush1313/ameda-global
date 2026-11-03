<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        // Fetch categories with their parent for the table view
        $categories = Category::with('parent')->latest()->get();
        return view('admin.categories.index', compact('categories'));
    }

    public function create()
    {
        // Use our recursive helper to get the hierarchical list
        $categoriesTree = Category::buildTreeList();
        return view('admin.categories.create', compact('categoriesTree'));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255|unique:categories,name',
            'parent_id' => 'nullable|exists:categories,id',
        ]);

        Category::create($validated);
        return redirect()->route('admin.categories.index')->with('success', 'Category mapped successfully.');
    }

    public function destroy(Category $category)
    {
        $category->delete(); // Products linked will have their category_id set to null (due to nullOnDelete constraint)
        return redirect()->route('admin.categories.index')->with('success', 'Category removed.');
    }
}