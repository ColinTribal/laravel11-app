<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Services\Logger;

class CustomServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
        $this->app->singleton(Logger::class, function ($app) {
            return new Logger();
        });

    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        // You can perform actions after all other service providers have been registered
    }
}
