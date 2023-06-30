<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return inertia('Home');
})->name('home');
Route::get('/about-us', function () {
    return inertia('About-Us');
});
Route::get('/category-products', function () {
    return inertia('Category-Products');
});
Route::get('/contact', function () {
    return inertia('Contact');
});
Route::get('/faq', function () {
    return inertia('FAQ');
});
Route::get('/products', function () {
    return inertia('Products');
});
Route::get('/product-single', function () {
    return inertia('Product-Single');
});
