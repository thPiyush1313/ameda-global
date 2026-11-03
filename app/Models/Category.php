<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = ['name', 'parent_id'];

    public function parent()
    {
        return $this->belongsTo(Category::class, 'parent_id');
    }

    public function children()
    {
        return $this->hasMany(Category::class, 'parent_id');
    }

    public function products()
    {
        return $this->hasMany(Product::class);
    }

    // Recursive helper to build an infinite-depth flat array for select dropdowns
    public static function buildTreeList()
    {
        $allCategories = self::all();
        $rootCategories = $allCategories->whereNull('parent_id');
        $treeList = [];

        self::formatTree($rootCategories, $allCategories, $treeList);

        return $treeList;
    }

    private static function formatTree($categories, $allCategories, &$treeList, $prefix = '')
    {
        foreach ($categories as $category) {
            $treeList[$category->id] = $prefix . $category->name;
            $children = $allCategories->where('parent_id', $category->id);
            if ($children->isNotEmpty()) {
                self::formatTree($children, $allCategories, $treeList, $prefix . '— ');
            }
        }
    }
}