<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // 1. Create the Admin Account
        User::create([
            'name' => 'System Administrator',
            'email' => 'admin@amedaglobal.com',
            'password' => Hash::make('password123'),
            'role' => 'admin',
        ]);

        // 2. Create the Standard User Account
        User::create([
            'name' => 'Corporate Client',
            'email' => 'client@amedaglobal.com',
            'password' => Hash::make('password123'),
            'role' => 'user',
        ]);
    }
}