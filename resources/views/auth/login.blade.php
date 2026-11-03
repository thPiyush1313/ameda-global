<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Enterprise Portal Login | Ameda Global</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <script src="https://unpkg.com/lucide@latest"></script>
</head>

<body
    class="bg-gray-50 font-sans antialiased text-gray-900 selection:bg-blue-600 selection:text-white flex h-screen overflow-hidden">

    <!-- LEFT SIDE: Immersive Branding (Hidden on mobile) -->
    <div class="hidden lg:flex lg:w-1/2 relative bg-gray-950 items-center justify-center overflow-hidden">
        <!-- Background Image -->
        <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop"
            class="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity"
            alt="Industrial Facility">

        <!-- Gradient Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-gray-950 via-blue-900/60 to-transparent"></div>

        <!-- Content -->
        <div class="relative z-10 p-16 max-w-2xl flex flex-col justify-end h-full w-full pb-24">
            <div
                class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-400/30 text-sky-300 w-max mb-6 shadow-xl">
                <i data-lucide="shield-check" class="w-4 h-4"></i>
                <span class="text-xs font-bold tracking-widest uppercase">Secure Enterprise Gateway</span>
            </div>

            <h1 class="text-5xl font-black text-white leading-tight mb-6 tracking-tight">
                Global Operations <br>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">Command
                    Center</span>
            </h1>

            <p class="text-lg text-gray-300 font-light leading-relaxed border-l-4 border-blue-500 pl-6">
                Authorized access only. This system is actively monitored. All procurement, inventory, and logistics
                modifications are logged.
            </p>
        </div>
    </div>

    <!-- RIGHT SIDE: Login Form -->
    <div class="w-full lg:w-1/2 flex flex-col items-center justify-center p-8 sm:p-12 md:p-24 bg-white relative">

        <div class="w-full max-w-md">
            <!-- Brand Logo -->
            <div class="flex items-center gap-3 mb-12">
                <div class="w-12 h-12">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="w-full h-full drop-shadow-md">
                        <defs>
                            <linearGradient id="globe-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#1d4ed8" />
                                <stop offset="100%" stopColor="#10b981" />
                            </linearGradient>
                        </defs>
                        <circle cx="12" cy="12" r="10" stroke="url(#globe-gradient)" stroke-width="2" />
                        <path d="M12 2v20" stroke="url(#globe-gradient)" stroke-width="2" />
                        <ellipse cx="12" cy="12" rx="4.5" ry="10" stroke="url(#globe-gradient)" stroke-width="2" />
                        <path d="M2 12h20" stroke="url(#globe-gradient)" stroke-width="2" />
                        <path d="M3.34 7 C 8 10 16 10 20.66 7" stroke="url(#globe-gradient)" stroke-width="2"
                            stroke-linecap="round" />
                        <path d="M3.34 17 C 8 14 16 14 20.66 17" stroke="url(#globe-gradient)" stroke-width="2"
                            stroke-linecap="round" />
                    </svg>
                </div>
                <div class="flex flex-col justify-center">
                    <span
                        class="text-2xl font-black tracking-[0.15em] leading-none uppercase text-gray-900">Ameda</span>
                    <span
                        class="text-[0.65rem] font-bold tracking-[0.4em] leading-none mt-1 uppercase text-emerald-600">Global</span>
                </div>
            </div>

            <div class="mb-10">
                <h2 class="text-3xl font-black text-gray-900 tracking-tight mb-2">Welcome Back</h2>
                <p class="text-gray-500 font-medium">Please enter your corporate credentials to proceed.</p>
            </div>

            <!-- Error Messages -->
            @if ($errors->any())
                <div
                    class="mb-6 bg-red-50 border border-red-200 text-red-600 px-5 py-4 rounded-xl text-sm font-medium flex items-center gap-3">
                    <i data-lucide="alert-circle" class="w-5 h-5 shrink-0"></i>
                    <span>{{ $errors->first() }}</span>
                </div>
            @endif

            <form method="POST" action="{{ route('login') }}" class="space-y-6">
                @csrf

                <!-- Email -->
                <div class="space-y-2">
                    <label for="email" class="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Corporate
                        Email</label>
                    <div class="relative">
                        <input id="email" type="email" name="email" value="{{ old('email') }}" required autofocus
                            class="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all font-medium text-gray-900 placeholder-gray-400"
                            placeholder="admin@amedaglobal.com">
                        <i data-lucide="mail"
                            class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"></i>
                    </div>
                </div>

                <!-- Password -->
                <div class="space-y-2">
                    <div class="flex items-center justify-between ml-1">
                        <label for="password"
                            class="text-xs font-bold text-gray-500 uppercase tracking-widest">Password</label>
                        <a href="#" class="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors">Forgot
                            Password?</a>
                    </div>
                    <div class="relative">
                        <input id="password" type="password" name="password" required
                            class="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all font-medium text-gray-900 placeholder-gray-400"
                            placeholder="••••••••">
                        <i data-lucide="lock"
                            class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"></i>
                    </div>
                </div>

                <!-- Remember Me -->
                <div class="flex items-center">
                    <input id="remember" type="checkbox" name="remember"
                        class="w-4 h-4 text-blue-600 bg-gray-50 border-gray-300 rounded focus:ring-blue-500 cursor-pointer">
                    <label for="remember" class="ml-2 block text-sm text-gray-600 font-medium cursor-pointer">
                        Keep me signed in
                    </label>
                </div>

                <!-- Submit Button -->
                <button type="submit"
                    class="w-full bg-blue-700 hover:bg-blue-800 text-white font-black text-sm uppercase tracking-widest py-4 rounded-2xl transition-all shadow-[0_10px_20px_rgba(29,78,216,0.2)] hover:shadow-[0_15px_30px_rgba(29,78,216,0.3)] flex items-center justify-center gap-3">
                    Authenticate Session <i data-lucide="arrow-right" class="w-5 h-5"></i>
                </button>
            </form>

            <div class="mt-12 text-center">
                <p class="text-xs text-gray-400 font-medium uppercase tracking-wider">
                    &copy; {{ date('Y') }} Ameda Global Pvt. Ltd.
                </p>
            </div>
        </div>

    </div>

    <script>
        lucide.createIcons();
    </script>
</body>

</html>