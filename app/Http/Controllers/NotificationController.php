<?php

namespace App\Http\Controllers;

use App\Services\NotificationService;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    protected $notificationService;

    public function __construct(NotificationService $notificationService)
    {
        $this->notificationService = $notificationService;
    }

    public function sendNotification(Request $request)
    {
        $this->notificationService->sendEmail(
            $request->input('email'),
            $request->input('subject'),
            $request->input('message')
        );

        return response()->json(['status' => 'Notification sent']);
    }
}
