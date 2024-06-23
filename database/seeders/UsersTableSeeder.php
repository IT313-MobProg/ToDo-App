<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;


class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = User::create([
            'name' => 'Will Smith', 
            'email' => 'smith@gmail.com',
            'password' => Hash::make('2024')
        ]);
    }
} // e run ang "php artisan db:seed --class=UsersTableSeeder" para ma insert na sa database