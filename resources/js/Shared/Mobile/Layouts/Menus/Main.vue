<template>
    <div class="ps-site-overlay"></div>
    <Menu/>
    <Categories/>
    <Search/>
    <Cart/>
    <div class="navigation--list">
        <div class="navigation__content">
            <a class="navigation__item ps-toggle--sidebar" href="#menu-mobile">
                <i class="fal fa-bars"></i>
                <span>Menu</span>
            </a>
            <a class="navigation__item ps-toggle--sidebar" href="#categories-mobile">
                <i class="fal fa-th-list"></i>
                <span>Categories</span>
            </a>
            <a class="navigation__item ps-toggle--sidebar" href="#search-mobile">
                <i class="fal fa-search"></i>
                <span>Search</span>
            </a>
            <a class="navigation__item ps-toggle--sidebar" href="#cart-mobile">
                <i class="fal fa-shopping-cart"></i>
                <span>Cart</span>
            </a>
        </div>
    </div>
</template>
<script>
    import Menu from "./Menu";
    import Categories from "./Cateogies";
    import Search from "./Search";
    import Cart from "./Cart";

    export default {
        components: {
            Menu, Categories, Search, Cart
        },
        methods: {
            subToggles: function() {
                $('.menu--mobile .menu-item-has-children > .sub-toggle').click(function (e) {
                    e.preventDefault();
                    let current = $(this).parent('.menu-item-has-children');
                    $(this).toggleClass('active');
                    current.siblings().find('.sub-toggle').removeClass('active');
                    current.children('.sub-menu').slideToggle(350);
                    current.siblings().find('.sub-menu').slideUp(350);

                    if (current.hasClass('has-mega-menu')) {
                        current.children('.mega-menu').slideToggle(350);
                        current.siblings('.has-mega-menu').find('.mega-menu').slideUp(350);
                    }
                });
                $('.menu--mobile .has-mega-menu .mega-menu__column .sub-toggle').click(function (e) {
                    e.preventDefault();
                    let current = $(this).closest('.mega-menu__column');
                    $(this).toggleClass('active');
                    current.siblings().find('.sub-toggle').removeClass('active');
                    current.children('.mega-menu__list').slideToggle(350);
                    current.siblings().find('.mega-menu__list').slideUp(350);
                });
                let listCategories = $('.ps-list--categories');

                if (listCategories.length > 0) {
                    $('.ps-list--categories .menu-item-has-children > .sub-toggle').click(function (e) {
                        e.preventDefault();
                        var current = $(this).parent('.menu-item-has-children');
                        $(this).toggleClass('active');
                        current.siblings().find('.sub-toggle').removeClass('active');
                        current.children('.sub-menu').slideToggle(350);
                        current.siblings().find('.sub-menu').slideUp(350);

                        if (current.hasClass('has-mega-menu')) {
                            current.children('.mega-menu').slideToggle(350);
                            current.siblings('.has-mega-menu').find('.mega-menu').slideUp(350);
                        }
                    });
                }
            }
        },
        mounted() {
            $('.ps-toggle--sidebar').click(function (e) {
                e.preventDefault();
                let url = $(this).attr('href');
                $(this).toggleClass('active');
                $(this).siblings('a').removeClass('active');
                $(url).toggleClass('active');
                $(url).siblings('.ps-panel--sidebar').removeClass('active');
                if ($(this).hasClass('active'))
                    $('.ps-site-overlay').addClass('active');
                else
                    $('.ps-site-overlay').removeClass('active');
            });

            $('body').click(function (e) {
                if ($(e.target).siblings('.ps-panel--sidebar').hasClass('active')) {
                    $('.ps-panel--sidebar').removeClass('active');
                    $('.ps-site-overlay').removeClass('active');
                }
            });

            this.subToggles();
        }
    }
</script>
