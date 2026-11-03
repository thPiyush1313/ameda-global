import MainLayout from '@/Layouts/MainLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, Shield, Key, UserX, UserCircle } from 'lucide-react';

export default function Edit({ auth, mustVerifyEmail, status }) {
    return (
        <MainLayout forceSolidNav={true}>
            <Head title="Profile Settings | Ameda Global" />

            <div className="min-h-screen bg-gray-50 pt-32 pb-24">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-8">

                    {/* Page Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                        <div>
                            <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-blue-600 mb-2">
                                <Shield className="w-4 h-4" /> Account Management
                            </div>
                            <h2 className="text-3xl font-black text-gray-900 tracking-tight">Profile Settings</h2>
                        </div>
                        <Link href={route('dashboard')} className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm border border-gray-200">
                            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
                        </Link>
                    </div>

                    {/* Profile Information Section */}
                    <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm relative overflow-hidden">
                        <div className="flex items-start gap-4 mb-8 border-b border-gray-100 pb-6">
                            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                                <UserCircle className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-gray-900">Personal Information</h3>
                                <p className="text-sm font-medium text-gray-500 mt-1">Update your account's profile information and email address.</p>
                            </div>
                        </div>
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    {/* Update Password Section */}
                    <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm relative overflow-hidden">
                        <div className="flex items-start gap-4 mb-8 border-b border-gray-100 pb-6">
                            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                                <Key className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-gray-900">Update Password</h3>
                                <p className="text-sm font-medium text-gray-500 mt-1">Ensure your account is using a long, random password to stay secure.</p>
                            </div>
                        </div>
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    {/* Delete Account Section */}
                    <div className="bg-white p-8 rounded-[2rem] border border-red-100 shadow-sm relative overflow-hidden">
                        <div className="flex items-start gap-4 mb-8 border-b border-red-50 pb-6">
                            <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center shrink-0">
                                <UserX className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-red-600">Danger Zone</h3>
                                <p className="text-sm font-medium text-gray-500 mt-1">Once your account is deleted, all of its resources and data will be permanently deleted.</p>
                            </div>
                        </div>
                        <DeleteUserForm className="max-w-xl" />
                    </div>

                </div>
            </div>
        </MainLayout>
    );
}