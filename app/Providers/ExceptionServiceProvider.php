<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Contracts\Debug\ExceptionHandler;
use App\Exceptions\Handler;

class ExceptionServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->singleton(ExceptionHandler::class, Handler::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}