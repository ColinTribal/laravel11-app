@extends('layouts.app')

@section('content')
    <div class="container mx-auto px-4 bg-white pt-4 pb-4">
        <h1 class="text-2xl font-bold mb-4">{{ $product->name }}</h1>
        <p class="text-gray-700 mb-4">{{ $product->description }}</p>
        <p class="text-gray-700 mb-4"><strong>Price:</strong> ${{ $product->price }}</p>
        <a href="{{ route('products.index') }}" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Back</a>
    </div>
@endsection

