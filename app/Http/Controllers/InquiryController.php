<?php

namespace App\Http\Controllers;

use App\Models\Inquiry;
use Illuminate\Http\Request;

class InquiryController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'company' => 'required|string|max:255',
            'region' => 'required|in:na,latam,emea,apac',
            'message' => 'required|string',
        ]);

        Inquiry::create($validated);

        // Inertia will automatically handle this redirect without reloading the page
        return back()->with('success', 'Inquiry sent successfully.');
    }
}