@extends('admin.layouts.app')

@section('header_title', 'Corporate Inquiries')

@section('content')
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden w-full">
        <div class="p-6 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
            <h3 class="font-bold text-gray-900">Received Inquiries</h3>
            <span class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                Total: {{ $inquiries->count() }}
            </span>
        </div>

        <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
                <thead>
                    <tr class="bg-gray-50/80 border-b border-gray-100">
                        <th class="py-4 px-6 text-xs font-bold text-gray-500 uppercase tracking-widest">Contact Details</th>
                        <th class="py-4 px-6 text-xs font-bold text-gray-500 uppercase tracking-widest">Company & Region
                        </th>
                        <th class="py-4 px-6 text-xs font-bold text-gray-500 uppercase tracking-widest">Date</th>
                        <th class="py-4 px-6 text-xs font-bold text-gray-500 uppercase tracking-widest text-right">Actions
                        </th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-100">
                    @forelse($inquiries as $inquiry)
                        <tr class="hover:bg-blue-50/50 transition-colors group">
                            <td class="py-4 px-6">
                                <p class="font-bold text-gray-900">{{ $inquiry->name }}</p>
                                <p class="text-xs font-medium text-gray-500 flex items-center gap-1 mt-0.5">
                                    <i data-lucide="mail" class="w-3 h-3"></i> {{ $inquiry->email }}
                                </p>
                            </td>
                            <td class="py-4 px-6">
                                <p class="font-bold text-gray-900 flex items-center gap-1.5">
                                    <i data-lucide="building-2" class="w-4 h-4 text-gray-400"></i> {{ $inquiry->company }}
                                </p>
                                <p class="text-xs font-bold text-blue-600 uppercase tracking-wider mt-0.5">
                                    {{ strtoupper($inquiry->region) }}
                                </p>
                            </td>
                            <td class="py-4 px-6 text-sm font-medium text-gray-600">
                                {{ $inquiry->created_at->format('M d, Y h:i A') }}
                            </td>
                            <td class="py-4 px-6 text-right">
                                <div
                                    class="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <a href="{{ route('admin.inquiries.show', $inquiry->id) }}"
                                        class="text-blue-600 hover:text-blue-800 transition-colors bg-blue-50 p-2 rounded-lg"
                                        title="Read Message">
                                        <i data-lucide="eye" class="w-4 h-4"></i>
                                    </a>

                                    <form method="POST" action="{{ route('admin.inquiries.destroy', $inquiry->id) }}"
                                        onsubmit="return confirm('Permanently delete this inquiry?');" class="inline-block">
                                        @csrf @method('DELETE')
                                        <button type="submit"
                                            class="text-red-500 hover:text-red-700 transition-colors bg-red-50 p-2 rounded-lg"
                                            title="Delete Inquiry">
                                            <i data-lucide="trash-2" class="w-4 h-4"></i>
                                        </button>
                                    </form>
                                </div>
                            </td>
                        </tr>
                    @empty
                        <tr>
                            <td colspan="4" class="py-12 text-center text-gray-500 font-medium">
                                <i data-lucide="inbox" class="w-8 h-8 mx-auto mb-3 text-gray-300"></i>
                                No inquiries received yet.
                            </td>
                        </tr>
                    @endforelse
                </tbody>
            </table>
        </div>
    </div>
@endsection