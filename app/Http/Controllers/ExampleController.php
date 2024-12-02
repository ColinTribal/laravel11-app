<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\Logger;
class ExampleController extends Controller
{
     //
     protected $logger;
     public function __construct(Logger $logger){
         $this->logger = $logger;
     }
 
     public function index()
     {
         $this->logger->log('Custom message');
         return view('welcome');
     }
}
