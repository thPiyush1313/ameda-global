<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Portal | Ameda Global</title>

    <!-- ADD THIS LINE FOR THE FAVICON -->
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    @vite(['resources/css/app.css'])

    <!-- Summernote Rich Text Editor CSS -->
    <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.css" rel="stylesheet">

    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>
</head>

<body class="bg-gray-50 text-gray-900 font-sans antialiased">

    <div class="flex h-screen overflow-hidden">

        <!-- SIDEBAR -->
        <aside class="w-64 bg-gray-900 text-white flex flex-col hidden md:flex shrink-0">
            <div class="h-20 flex items-center px-8 border-b border-gray-800">
                <span class="text-xl font-black tracking-widest uppercase">Ameda<span
                        class="text-blue-500">Global</span></span>
            </div>

            <nav class="flex-1 overflow-y-auto py-6 px-4 space-y-2">
                <p class="px-4 text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Core Modules</p>

                <a href="/admin/dashboard"
                    class="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl {{ request()->is('admin/dashboard') ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-800' }} transition-colors">
                    <i data-lucide="layout-dashboard" class="w-5 h-5"></i> Dashboard
                </a>

                <a href="/admin/categories"
                    class="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl {{ request()->is('admin/categories*') ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-800' }} transition-colors">
                    <i data-lucide="network" class="w-5 h-5"></i> Product Categories
                </a>

                <a href="/admin/products"
                    class="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl {{ request()->is('admin/products*') ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-800' }} transition-colors">
                    <i data-lucide="box" class="w-5 h-5"></i> Products
                </a>

                <a href="/admin/insights"
                    class="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl {{ request()->is('admin/insights*') ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-800' }} transition-colors">
                    <i data-lucide="newspaper" class="w-5 h-5"></i> Insights & News
                </a>

                <!-- DYNAMIC INQUIRIES LINK -->
                <a href="/admin/inquiries"
                    class="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl {{ request()->is('admin/inquiries*') ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-800' }} transition-colors">
                    <i data-lucide="mail" class="w-5 h-5"></i> Inquiries

                    <!-- @php $inquiryCount = \App\Models\Inquiry::count(); @endphp
                    @if($inquiryCount > 0)
                        <span
                            class="ml-auto {{ request()->is('admin/inquiries*') ? 'bg-white text-blue-700' : 'bg-blue-500 text-white' }} text-[0.65rem] font-bold px-2 py-0.5 rounded-full shadow-sm">
                            {{ $inquiryCount }}
                        </span>
                    @endif -->
                </a>

                <p class="px-4 text-xs font-bold text-gray-500 uppercase tracking-wider mt-8 mb-4">System</p>

                <a href="/admin/settings"
                    class="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl {{ request()->is('admin/settings*') ? 'bg-blue-600 text-white shadow-md' : 'text-gray-300 hover:bg-gray-800' }} transition-colors">
                    <i data-lucide="settings" class="w-5 h-5"></i> Settings
                </a>
            </nav>

            <div class="p-4 border-t border-gray-800">
                <form method="POST" action="{{ route('logout') }}">
                    @csrf
                    <button type="submit"
                        class="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl text-red-400 hover:bg-gray-800 w-full transition-colors">
                        <i data-lucide="log-out" class="w-5 h-5"></i> Sign Out
                    </button>
                </form>
            </div>
        </aside>

        <!-- MAIN CONTENT AREA -->
        <div class="flex-1 flex flex-col overflow-hidden">

            <!-- TOP HEADER -->
            <header
                class="h-20 bg-white/80 backdrop-blur-md border-b border-gray-200 flex items-center justify-between px-8 shrink-0 sticky top-0 z-40">

                <!-- Left Side: Page Title & Context -->
                <div class="flex flex-col justify-center">
                    <h2 class="text-xl font-black text-gray-900 tracking-tight">@yield('header_title', 'Dashboard')</h2>
                    <p class="text-[0.65rem] font-bold text-gray-400 uppercase tracking-widest mt-0.5">Ameda Global
                        Command Center</p>
                </div>

                <!-- Right Side: Tools & User Profile -->
                <div class="flex items-center gap-5">

                    <!-- Global Search (Visual Placeholder) -->
                    <!-- <div class="hidden md:flex items-center relative">
                        <i data-lucide="search" class="w-4 h-4 text-gray-400 absolute left-3"></i>
                        <input type="text" placeholder="Search system..."
                            class="bg-gray-50 border border-gray-200 text-sm font-medium rounded-full pl-9 pr-14 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder-gray-400">
                        <div class="absolute right-3 flex items-center gap-1 text-[0.6rem] font-bold text-gray-400">
                            <kbd class="bg-white border border-gray-200 rounded px-1.5 py-0.5 shadow-sm">⌘</kbd>
                            <kbd class="bg-white border border-gray-200 rounded px-1.5 py-0.5 shadow-sm">K</kbd>
                        </div>
                    </div> -->

                    <!-- Notification Bell -->
                    <!-- <button
                        class="relative p-2 text-gray-400 hover:text-blue-600 transition-colors rounded-full hover:bg-blue-50">
                        <i data-lucide="bell" class="w-5 h-5"></i>
                        <span
                            class="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                    </button> -->

                    <!-- Divider -->
                    <div class="h-8 w-px bg-gray-200 hidden sm:block"></div>

                    <!-- User Profile Dropdown -->
                    <div class="relative" id="profileDropdown">
                        <button id="profileDropdownBtn"
                            class="flex items-center gap-3 hover:bg-gray-50 focus:bg-gray-50 p-1.5 pr-3 rounded-2xl transition-colors text-left group outline-none">
                            <div class="flex flex-col justify-center hidden sm:block text-right">
                                <span
                                    class="text-sm font-bold text-gray-900 block leading-none">{{ Auth::user()->name ?? 'Administrator' }}</span>
                                <span
                                    class="text-[0.65rem] font-bold text-gray-500 uppercase tracking-wider mt-1.5 block leading-none">System
                                    Admin</span>
                            </div>

                            <div class="relative">
                                <!-- Gradient Ring -->
                                <div
                                    class="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-sky-400 p-[2px] shadow-sm group-hover:shadow-md transition-all">
                                    <div
                                        class="w-full h-full bg-white rounded-full flex items-center justify-center border-2 border-white">
                                        <span
                                            class="text-blue-700 font-black text-sm">{{ substr(Auth::user()->name ?? 'A', 0, 1) }}</span>
                                    </div>
                                </div>
                                <!-- Online Status Indicator -->
                                <div
                                    class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full">
                                </div>
                            </div>

                            <i data-lucide="chevron-down"
                                class="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors hidden sm:block"></i>
                        </button>

                        <!-- The Dropdown Menu -->
                        <div id="dropdownMenu"
                            class="hidden absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100 py-2 z-50 transform origin-top-right transition-all">

                            <!-- User Info Header -->
                            <div class="px-5 py-3 border-b border-gray-100 mb-2 bg-gray-50/50">
                                <p class="text-sm font-black text-gray-900">{{ Auth::user()->name ?? 'Administrator' }}
                                </p>
                                <p class="text-xs font-bold text-gray-500 mt-1 truncate">{{ Auth::user()->email ??
                                    'admin@amedaglobal.com' }}</p>
                            </div>

                            <!-- Settings Link -->
                            <a href="/admin/settings"
                                class="flex items-center gap-3 px-5 py-2.5 text-sm font-bold text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors">
                                <i data-lucide="settings" class="w-4 h-4"></i> System Settings
                            </a>

                            <div class="h-px bg-gray-100 my-2"></div>

                            <!-- Sign Out Form -->
                            <form method="POST" action="{{ route('logout') }}">
                                @csrf
                                <button type="submit"
                                    class="w-full flex items-center gap-3 px-5 py-2.5 text-sm font-bold text-red-600 hover:bg-red-50 transition-colors text-left">
                                    <i data-lucide="log-out" class="w-4 h-4"></i> Sign Out Securely
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </header>

            <!-- PAGE CONTENT -->
            <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-8">
                @if(session('success'))
                    <div
                        class="mb-6 bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-xl flex items-center gap-3">
                        <i data-lucide="check-circle-2" class="w-5 h-5"></i>
                        <span class="font-bold">{{ session('success') }}</span>
                    </div>
                @endif

                @yield('content')
            </main>
        </div>
    </div>

    <!-- Scripts -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.js"></script>
    <script>
        // Initialize Lucide Icons
        lucide.createIcons();

        // Initialize rich text editors globally
        $(document).ready(function () {
            $('.summernote').summernote({
                height: 250,
                toolbar: [
                    ['style', ['style', 'bold', 'italic', 'underline', 'clear']],
                    ['font', ['strikethrough']],
                    ['para', ['ul', 'ol', 'paragraph']],
                    ['insert', ['link']],
                    ['view', ['codeview']]
                ]
            });
        });
    </script>
    <!-- Bulletproof Dropdown Script -->
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            const btn = document.getElementById('profileDropdownBtn');
            const menu = document.getElementById('dropdownMenu');
            const dropdown = document.getElementById('profileDropdown');

            // Toggle menu on click
            if (btn && menu) {
                btn.addEventListener('click', function (e) {
                    e.stopPropagation();
                    menu.classList.toggle('hidden');
                });
            }

            // Close menu when clicking outside
            document.addEventListener('click', function (event) {
                if (dropdown && !dropdown.contains(event.target) && menu) {
                    menu.classList.add('hidden');
                }
            });
        });
    </script>
    @stack('scripts')
</body>

</html>