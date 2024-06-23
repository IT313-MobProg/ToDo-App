<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Login extends Model
{
    use HasFactory;

    protected $table = 'login';

    protected $fillable = [
        'user_id',
        'success',
        'login_timestamp',
    ];

    public $timestamps = false; // Disabling Laravel's timestamps as we use a custom timestamp
}
