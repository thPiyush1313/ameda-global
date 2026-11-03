@extends('admin.layouts.app')

@section('header_title', 'System Settings')

@section('content')
    @if(session('success'))
        <div class="mb-6 bg-emerald-50 border border-emerald-200 text-emerald-700 px-6 py-4 rounded-xl flex items-center gap-3">
            <i data-lucide="check-circle-2" class="w-5 h-5 shrink-0"></i>
            <span class="font-bold text-sm">{{ session('success') }}</span>
        </div>
    @endif

    <div class="flex flex-col md:flex-row gap-8">

        <!-- SIDEBAR TABS -->
        <div class="w-full md:w-64 shrink-0">
            <nav class="flex flex-col space-y-2">
                <button onclick="switchTab('general')" id="btn-general"
                    class="tab-btn flex items-center gap-3 px-4 py-3 text-sm font-bold rounded-xl bg-blue-50 text-blue-700 transition-colors text-left w-full">
                    <i data-lucide="building-2" class="w-5 h-5"></i> Global Profile
                </button>
                <button onclick="switchTab('seo')" id="btn-seo"
                    class="tab-btn flex items-center gap-3 px-4 py-3 text-sm font-bold rounded-xl text-gray-500 hover:bg-gray-50 transition-colors text-left w-full">
                    <i data-lucide="globe" class="w-5 h-5"></i> SEO & Meta
                </button>
                <button onclick="switchTab('smtp')" id="btn-smtp"
                    class="tab-btn flex items-center gap-3 px-4 py-3 text-sm font-bold rounded-xl text-gray-500 hover:bg-gray-50 transition-colors text-left w-full">
                    <i data-lucide="mail" class="w-5 h-5"></i> SMTP & Email
                </button>
                <button onclick="switchTab('security')" id="btn-security"
                    class="tab-btn flex items-center gap-3 px-4 py-3 text-sm font-bold rounded-xl text-gray-500 hover:bg-gray-50 transition-colors text-left w-full">
                    <i data-lucide="shield-check" class="w-5 h-5"></i> Security Policy
                </button>
            </nav>
        </div>

        <!-- MAIN FORM AREA -->
        <div class="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 min-h-[500px]">
            <form action="{{ route('admin.settings.update') }}" method="POST">
                @csrf

                <!-- TAB 1: GENERAL -->
                <div id="tab-general" class="tab-content block">
                    <div class="border-b border-gray-100 pb-6 mb-8">
                        <h2 class="text-xl font-black text-gray-900 tracking-tight">Global Profile Configuration</h2>
                        <p class="text-sm font-medium text-gray-500 mt-1">Manage public-facing corporate details and contact
                            routing.</p>
                    </div>

                    <div class="space-y-8">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-xs font-bold text-gray-700 mb-2">Company Name</label>
                                <input type="text" name="company_name"
                                    value="{{ $settings['company_name'] ?? 'Ameda Global Pvt. Ltd.' }}"
                                    class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none">
                            </div>
                            <div>
                                <label class="block text-xs font-bold text-gray-700 mb-2">Support Email</label>
                                <input type="email" name="support_email"
                                    value="{{ $settings['support_email'] ?? 'operations@amedaglobal.com' }}"
                                    class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none">
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-xs font-bold text-gray-700 mb-2">Primary Phone</label>
                                <input type="text" name="primary_phone"
                                    value="{{ $settings['primary_phone'] ?? '+91-11-4567-8900' }}"
                                    class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none">
                            </div>
                            <div>
                                <label class="block text-xs font-bold text-gray-700 mb-2">Global HQ City</label>
                                <input type="text" name="hq_city" value="{{ $settings['hq_city'] ?? 'Mumbai, India' }}"
                                    class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none">
                            </div>
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-gray-700 mb-2">Corporate Address</label>
                            <textarea name="corporate_address" rows="3"
                                class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none resize-none">{{ $settings['corporate_address'] ?? 'Ameda Global Tower, Business District, Mumbai, India' }}</textarea>
                        </div>
                    </div>
                </div>

                <!-- TAB 2: SEO -->
                <div id="tab-seo" class="tab-content hidden">
                    <div class="border-b border-gray-100 pb-6 mb-8">
                        <h2 class="text-xl font-black text-gray-900 tracking-tight">SEO & Meta Configuration</h2>
                        <p class="text-sm font-medium text-gray-500 mt-1">Optimize how your portal appears on search
                            engines.</p>
                    </div>

                    <div class="space-y-6">
                        <div>
                            <label class="block text-xs font-bold text-gray-700 mb-2">Meta Title</label>
                            <input type="text" name="seo_title"
                                value="{{ $settings['seo_title'] ?? 'Ameda Global | Enterprise Materials' }}"
                                class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none">
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-gray-700 mb-2">Meta Keywords (Comma
                                separated)</label>
                            <input type="text" name="seo_keywords"
                                value="{{ $settings['seo_keywords'] ?? 'global trade, procurement, chemicals, alloys' }}"
                                class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none">
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-gray-700 mb-2">Meta Description</label>
                            <textarea name="seo_description" rows="3"
                                class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none resize-none">{{ $settings['seo_description'] ?? 'Setting the global standard in high-performance material sourcing.' }}</textarea>
                        </div>
                    </div>
                </div>

                <!-- TAB 3: SMTP -->
                <div id="tab-smtp" class="tab-content hidden">
                    <div class="border-b border-gray-100 pb-6 mb-8">
                        <h2 class="text-xl font-black text-gray-900 tracking-tight">SMTP & Email Transport</h2>
                        <p class="text-sm font-medium text-gray-500 mt-1">Configure outgoing email delivery settings for the
                            application.</p>
                    </div>

                    <div class="space-y-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-xs font-bold text-gray-700 mb-2">Mail Host</label>
                                <input type="text" name="mail_host"
                                    value="{{ $settings['mail_host'] ?? 'smtp.mailtrap.io' }}"
                                    class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none">
                            </div>
                            <div>
                                <label class="block text-xs font-bold text-gray-700 mb-2">Mail Port</label>
                                <input type="text" name="mail_port" value="{{ $settings['mail_port'] ?? '2525' }}"
                                    class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none">
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-xs font-bold text-gray-700 mb-2">Mail Username</label>
                                <input type="text" name="mail_username" value="{{ $settings['mail_username'] ?? '' }}"
                                    class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none">
                            </div>
                            <div>
                                <label class="block text-xs font-bold text-gray-700 mb-2">Mail Password</label>
                                <input type="password" name="mail_password" value="{{ $settings['mail_password'] ?? '' }}"
                                    class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none">
                            </div>
                        </div>
                    </div>
                </div>

                <!-- TAB 4: SECURITY -->
                <div id="tab-security" class="tab-content hidden">
                    <div class="border-b border-gray-100 pb-6 mb-8">
                        <h2 class="text-xl font-black text-gray-900 tracking-tight">System Security</h2>
                        <p class="text-sm font-medium text-gray-500 mt-1">Manage global security policies for admin and
                            client accounts.</p>
                    </div>

                    <div class="space-y-6">
                        <div>
                            <label class="block text-xs font-bold text-gray-700 mb-2">Enforce Two-Factor Authentication
                                (2FA)</label>
                            <select name="enforce_2fa"
                                class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-gray-700">
                                <option value="off" {{ ($settings['enforce_2fa'] ?? '') == 'off' ? 'selected' : '' }}>Disabled
                                    (Optional for users)</option>
                                <option value="admin_only" {{ ($settings['enforce_2fa'] ?? '') == 'admin_only' ? 'selected' : '' }}>Admins Only</option>
                                <option value="all_users" {{ ($settings['enforce_2fa'] ?? '') == 'all_users' ? 'selected' : '' }}>Enforce for All Users</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-gray-700 mb-2">Password Expiry Policy</label>
                            <select name="password_expiry"
                                class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-gray-700">
                                <option value="never" {{ ($settings['password_expiry'] ?? '') == 'never' ? 'selected' : '' }}>
                                    Never Expire</option>
                                <option value="90_days" {{ ($settings['password_expiry'] ?? '') == '90_days' ? 'selected' : '' }}>Every 90 Days</option>
                                <option value="180_days" {{ ($settings['password_expiry'] ?? '') == '180_days' ? 'selected' : '' }}>Every 180 Days</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- GLOBAL SAVE BUTTON -->
                <div class="pt-8 mt-8 border-t border-gray-100 flex justify-end">
                    <button type="submit"
                        class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold uppercase tracking-wider transition-colors shadow-lg shadow-blue-600/20 flex items-center gap-2">
                        <i data-lucide="save" class="w-4 h-4"></i> Save All Configurations
                    </button>
                </div>
            </form>
        </div>
    </div>

    <!-- SIMPLE TAB SWITCHING LOGIC -->
    <script>
        function switchTab(tabId) {
            // Hide all tab contents
            document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));

            // Reset all buttons to unselected state
            document.querySelectorAll('.tab-btn').forEach(el => {
                el.classList.remove('bg-blue-50', 'text-blue-700');
                el.classList.add('text-gray-500', 'hover:bg-gray-50');
            });

            // Show the selected tab content
            document.getElementById('tab-' + tabId).classList.remove('hidden');

            // Highlight the selected button
            const btn = document.getElementById('btn-' + tabId);
            btn.classList.add('bg-blue-50', 'text-blue-700');
            btn.classList.remove('text-gray-500', 'hover:bg-gray-50');
        }
    </script>
@endsection