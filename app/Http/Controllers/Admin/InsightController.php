<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Insight;
use Illuminate\Http\Request;

class InsightController extends Controller
{
    public function index()
    {
        $insights = Insight::latest()->get();
        return view('admin.insights.index', compact('insights'));
    }

    public function create()
    {
        return view('admin.insights.create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'content' => 'required|string',
        ]);

        Insight::create($validated);
        return redirect()->route('admin.insights.index')->with('success', 'Insight published successfully.');
    }

    public function destroy(Insight $insight)
    {
        $insight->delete();
        return redirect()->route('admin.insights.index')->with('success', 'Insight deleted.');
    }

    public function show(Insight $insight)
    {
        return view('admin.insights.show', compact('insight'));
    }

    public function edit(Insight $insight)
    {
        return view('admin.insights.edit', compact('insight'));
    }

    public function update(Request $request, Insight $insight)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'content' => 'required|string',
        ]);

        $insight->update($validated);

        return redirect()->route('admin.insights.index')->with('success', 'Article updated successfully.');
    }
}