<template>
    <div class="ps-breadcrumb">
        <div class="ps-container">
            <ul class="breadcrumb">
                <li>
                    <a :href="route('home')">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#">
                        Products
                    </a>
                </li>
                <li>
                    Electronics
                </li>
            </ul>
        </div>
    </div>
    <div class="ps-container">
        <div class="mt-40 mb-40">
            <div class="ps-page--shop">
                <div class="ps-container">
                    <div class="ps-layout--shop">
                        <div class="ps-layout__left">
                            <div class="screen-darken"></div>
                            <FilterProducts/>
                        </div>
                        <div class="ps-layout__right">
                            <div class="ps-shopping ps-tab-root">
                                <div class="row bg-light py-2 mx-1 mb-3">
                                    <div class="col-12 col-md-6 col-xl-6 mb-2">
                                        <div class="products-found pt-2">
                                            <strong>5</strong>
                                            <span class="ml-2">
                                                Products found
                                            </span>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 d-xl-none px-2 px-sm-3">
                                        <div class="header__filter d-xl-none mx-auto mb-3 mb-sm-0">
                                            <button id="products-filter-sidebar" type="button">
                                                <i class="lnr lnr-equalizer"></i>
                                                <span class="ml-2">Filter</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="ps-tabs ps-products-listing">
                                    <div class="loading">
                                        <div class="half-circle-spinner">
                                            <div class="circle circle-1"></div>
                                            <div class="circle circle-2"></div>
                                        </div>
                                    </div>
                                    <input type="hidden" name="page" data-value="1">
                                    <div class="ps-shopping-product">
                                        <div class="row">
                                            <div class="col-xl-2 col-lg-4 col-md-4 col-sm-6 col-6" v-for="n in 5">
                                                <Product
                                                    image="/storage/products/1-300x300.jpg"
                                                    title="Dual Camera 20MP"
                                                    discountPrice="$36.92"
                                                    originalPrice="$80.25"
                                                    badgeColor="#f00"
                                                    badgeInfo="-54%"
                                                    soldCount="192"
                                                    link="/products/dual-camera-20mp"
                                                    vendorLink="/stores/shaun-predovic"
                                                    vendor="Shaun Predovic"
                                                ></Product>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="ps-pagination"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import FilterProducts from "../Shared/FilterProducts";
    import Product from "../Shared/Product";

    export default {
        name: "Category Products",
        components: {
            FilterProducts, Product
        },
        mounted() {
            $('#products-filter-sidebar').click(function() {
                $('.ps-layout--shop').find('.ps-layout__left').toggleClass('active');
            });
            $('.ps-layout__left .ps-filter__header .ps-btn--close').click(function () {
                $('.ps-layout--shop').find('.ps-layout__left').toggleClass('active');
            });
        }
    };
</script>
