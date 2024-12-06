<?php

namespace App\Traits;

trait HasDiscount
{
        /**
     * Calculate the discounted price.
     *
     * @param  float  $discountPercentage
     * @return float
     */
    public function calculateDiscountedPrice(float $discountPercentage): float
    {
        $discountAmount = ($this->price * $discountPercentage) / 100;
        return $this->price - $discountAmount;
    }

    /**
     * Check if the product is on sale.
     *
     * @return bool
     */
    public function isOnSale(): bool
    {
        return $this->sale_price < $this->price;
    }

}
