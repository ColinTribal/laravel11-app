<?php 
// app/Services/Logger.php
namespace App\Services;

class Logger
{
    public function log($message)
    {
        // Simple log to a file
        file_put_contents(storage_path('logs/custom.log'), $message . PHP_EOL, FILE_APPEND);
    }
}
