<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Insight extends Model
{
    // Add this property to allow mass assignment
    protected $fillable = [
        'title',
        'category',
        'content',
        'is_published'
    ];
}