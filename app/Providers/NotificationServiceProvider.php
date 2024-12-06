<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Services\NotificationService;

class NotificationServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->singleton(NotificationService::class, function ($app) {
            return new NotificationService();
        });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Initialisation code that depends on other services
    }
}