<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Traits\HasDiscount;
class Product extends Model
{
    use HasFactory,HasDiscount;
    //
    protected $fillable = ['name', 'description', 'price','sale_price'];

    public function setNameAttribute($value)
    {
        $this->attributes['name'] = ucfirst($value);
    }

    public function setDescriptionAttribute($value)
    {
        $this->attributes['description'] = ucfirst($value);
    }

    public function setPriceAttribute($value)
    {
        $this->attributes['price'] = $value * 100;
    }

    public function getPriceAttribute($value)
    {
        return $value / 100;
    }

    public function scopePriceGreaterThan($query, $price)
    {
        return $query->where('price', '>', $price);
    }

    public function scopePriceLessThan($query, $price)
    {
        return $query->where('price', '<', $price);
    }

    public function scopeName($query, $name)
    {
        return $query->where('name', 'like', '%' . $name . '%');
    }

    
}
