<template>
    <header class="header header--1" data-sticky="true">
        <div class="header__top">
            <div class="ps-container">
                <div class="header__left">
                    <inertia-link class="ps-logo" :href="route('home')">
                        <img alt="Waremarket" height="40" src="images/logo.png">
                    </inertia-link>
                </div>
                <div class="header__center">
                    <form action="#" class="ps-form--quick-search">
                        <input id="input-search" autocomplete="off" class="form-control rounded-left" name="q" placeholder="I'm shopping for..." type="text">
                        <button>Search</button>
                    </form>
                </div>
                <div class="header__right">
                    <div class="header__actions">
                        <a class="header__extra btn-compare" href="#" title="Compare">
                            <i class="lnr lnr-chart-bars"></i>
                            <span>0</span>
                        </a>
                        <a class="header__extra btn-wishlist" href="#" title="Wishlist">
                            <i class="lnr lnr-heart"></i>
                            <span>0</span>
                        </a>
                        <div class="ps-cart--mini">
                            <a class="header__extra btn-shopping-cart" href="#" title="Cart">
                                <i class="lnr lnr-cart"></i>
                                <span>0</span>
                            </a>
                            <div class="ps-cart--mobile">
                                <div class="ps-cart__content">
                                    <div class="ps-cart__items ps-cart_no_items">
                                        <span class="cart-empty-message">No products in the cart.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ps-block--user-header">
                            <div class="ps-block__left">
                                <i class="lnr lnr-user"></i>
                            </div>
                            <div class="ps-block__right">
                                <a href="#">Login</a>
                                <a href="#">Register</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <nav class="navigation">
            <div class="ps-container">
                <div class="navigation__left">
                    <div class="menu--product-categories">
                        <div class="menu__toggle">
                            <i class="lnr lnr-menu"></i>
                            <span>Categories</span>
                        </div>
                        <div class="menu__content">
                            <ul class="menu--dropdown">
                                <li>
                                    <a href="#">
                                        <i class="lnr lnr-star"></i>
                                        Hot Promotions
                                    </a>
                                </li>
                                <li class="menu-item-has-children has-mega-menu">
                                    <a href="#">
                                        <i class="lnr lnr-laundry"></i>
                                        Electronics
                                    </a>
                                    <span class="sub-toggle"></span>
                                    <div class="mega-menu">
                                        <div class="mega-menu__column">
                                            <a href="#">
                                                <h4>
                                                    Consumer Electronic
                                                    <span class="sub-toggle"></span>
                                                </h4>
                                            </a>
                                            <ul class="mega-menu__list">
                                                <li>
                                                    <a href="#">
                                                        Home Audio &amp; Theaters
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        TV &amp; Videos
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="mega-menu__column">
                                            <a href="#">
                                                <h4>
                                                    Accessories &amp; Parts
                                                    <span class="sub-toggle"></span>
                                                </h4>
                                            </a>
                                            <ul class="mega-menu__list">
                                                <li>
                                                    <a href="#">
                                                        Digital Cables
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        Audio &amp; Video Cables
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="navigation__right">
                    <ul class="menu">
                        <li :class="{'current-menu-item': $page.component === 'Home'}">
                            <inertia-link :href="route('home')">
                                Home
                            </inertia-link>
                        </li>
                        <li class="menu-item-has-children" :class="{'current-menu-item': ['About-Us'].includes($page.component)}">
                            <a>
                                Pages
                            </a>
                            <span class="sub-toggle"></span>
                            <ul class="sub-menu">
                                <li :class="{'current-menu-item': $page.component === 'About-Us'}">
                                    <inertia-link href="/about-us">
                                        About us
                                    </inertia-link>
                                </li>
                            </ul>
                        </li>
                        <li class="menu-item-has-children" :class="{'current-menu-item': ['Products', 'Category-Products', 'Product-Single'].includes($page.component)}">
                            <a>
                                Shop
                            </a>
                            <span class="sub-toggle"></span>
                            <ul class="sub-menu">
                                <li :class="{'current-menu-item': $page.component === 'Products'}">
                                    <inertia-link href="/products">
                                        All products
                                    </inertia-link>
                                </li>
                                <li :class="{'current-menu-item': $page.component === 'Category-Products'}">
                                    <inertia-link href="/category-products">
                                        Products Of Category
                                    </inertia-link>
                                </li>
                                <li :class="{'current-menu-item': $page.component === 'Product-Single'}">
                                    <inertia-link href="/product-single">
                                        Product Single
                                    </inertia-link>
                                </li>
                            </ul>
                        </li>
                        <li :class="{'current-menu-item': $page.component === 'FAQ'}">
                            <inertia-link href="faq" >
                                FAQs
                            </inertia-link>
                        </li>
                        <li :class="{'current-menu-item': $page.component === 'Contact'}">
                            <inertia-link href="contact">
                                Contact
                            </inertia-link>
                        </li>
                    </ul>
                    <ul class="navigation__extra">
                        <li>
                            <a href="#">
                                Track your order
                            </a>
                        </li>
                        <li>
                            <div class="ps-dropdown">
                                <a href="#">
                                    <span>
                                        USD $
                                    </span>
                                </a>
                                <ul class="ps-dropdown-menu">
                                    <li>
                                        <a href="#">
                                            <span>
                                                USD $
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span>
                                                EUR €
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <HeaderMobile />
</template>
<script>
    import HeaderMobile from '../Mobile/Layouts/Header';

    export default {
        components: {
            HeaderMobile
        }
    };
</script>
