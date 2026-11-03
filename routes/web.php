<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\InsightController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\InquiryController;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


// --- AMEDA GLOBAL ENTERPRISE & SECTOR FRONTEND ROUTES ---
Route::prefix('enterprise')->group(function () {
    Route::get('/overview', fn() => Inertia::render('Enterprise/About'))->name('enterprise.overview');
    Route::get('/governance', fn() => Inertia::render('Enterprise/Governance'))->name('enterprise.governance');
    Route::get('/sustainability', fn() => Inertia::render('Enterprise/Sustainability'))->name('enterprise.sustainability');
    Route::get('/careers', fn() => Inertia::render('Enterprise/Careers'))->name('enterprise.careers');
});

Route::prefix('sectors')->group(function () {
    Route::get('/industrial', fn() => Inertia::render('Sectors/Industrial'))->name('sectors.industrial');
    Route::get('/pharmaceuticals', fn() => Inertia::render('Sectors/Pharmaceuticals'))->name('sectors.pharmaceuticals');
    Route::get('/agrochemicals', fn() => Inertia::render('Sectors/Agrochemicals'))->name('sectors.agrochemicals');
    Route::get('/tech-energy', fn() => Inertia::render('Sectors/TechEnergy'))->name('sectors.tech-energy');
});
// --------------------------------------------------------

Route::get('/about', function () {
    return Inertia::render('About');
});

Route::get('/products', function () {
    return Inertia::render('Products');
});

Route::get('/markets', function () {
    return Inertia::render('Markets');
});

Route::get('/insights', function () {
    return Inertia::render('Insights');
});

Route::get('/contact', function () {
    return Inertia::render('Contact');
});

Route::get('/products/{id}', function ($id) {
    return Inertia::render('ProductDetail', [
        'id' => $id
    ]);
});

Route::post('/contact', [InquiryController::class, 'store'])->name('contact.store');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::prefix('admin')->name('admin.')->middleware(['auth', 'admin'])->group(function () {
    Route::get('/dashboard', function () {
        return view('admin.dashboard');
    })->name('dashboard');

    Route::resource('products', ProductController::class);
    Route::resource('insights', InsightController::class);
    Route::resource('categories', CategoryController::class);
    Route::resource('inquiries', App\Http\Controllers\Admin\InquiryController::class)->only(['index', 'show', 'destroy']);

    Route::get('/settings', [App\Http\Controllers\Admin\SettingController::class, 'index'])->name('settings.index');
    Route::post('/settings', [App\Http\Controllers\Admin\SettingController::class, 'update'])->name('settings.update');
});
require __DIR__ . '/auth.php';
