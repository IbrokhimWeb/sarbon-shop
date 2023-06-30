<template>
    <div class="ps-layout__left-container">
        <div class="ps-filter__header d-block d-xl-none">
            <h3>
                Filter Products
            </h3>
            <a class="ps-btn--close ps-btn--no-boder" href="#"></a>
        </div>
        <div class="ps-layout__left-content">
            <form action="#" method="GET" id="products-filter-form">
                <aside class="widget widget_shop">
                    <h4 class="widget-title">
                        Product Categories
                    </h4>
                    <ul class="ps-list--categories">
                        <li>
                            <a href="#">
                                Hot Promotions
                            </a>
                        </li>
                        <li class="menu-item-has-children">
                            <a href="#">
                                Electronics
                            </a>
                            <span class="sub-toggle"><i class="lnr lnr-angle"></i></span>
                            <ul class="sub-menu" style="display:block">
                                <li class="current-menu-item">
                                    <a href="#">
                                        Consumer Electronic
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Accessories &amp; Parts
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </aside>
                <aside class="widget widget_shop">
                    <h4 class="widget-title">By Brands</h4>
                    <figure class="ps-custom-scrollbar" data-height="250">
                        <div class="ps-checkbox">
                            <input class="form-control product-filter-item" type="checkbox" name="brands[]" id="brand-1" value="1">
                            <label for="brand-1">
                                <span>
                                    Fashion live
                                    <span class="d-inline-block">(2)</span>
                                </span>
                            </label>
                        </div>
                        <div class="ps-checkbox">
                            <input class="form-control product-filter-item" type="checkbox" name="brands[]" id="brand-2" value="2">
                            <label for="brand-2">
                                <span>
                                    Hand crafted
                                    <span class="d-inline-block">(5)</span>
                                </span>
                            </label>
                        </div>
                    </figure>
                </aside>
                <aside class="widget widget_shop">
                    <h4 class="widget-title">By Price</h4>
                    <div class="widget__content nonlinear-wrapper">
                        <div class="nonlinear" data-min="0" data-max="100000"></div>
                        <div class="ps-slider__meta">
                            <div data-current-exchange-rate="1"></div>
                            <input class="product-filter-item product-filter-item-price-0" name="min_price" data-min="0" value="0" type="hidden">
                            <input class="product-filter-item product-filter-item-price-1" name="max_price" data-max="100000" value="100000" type="hidden">
                            <span class="ps-slider__value">
                                <span class="ps-slider__min">
                                    0
                                </span>
                                USD
                            </span>-
                            <span class="ps-slider__value">
                                <span class="ps-slider__max">
                                    100,000
                                </span>
                                USD
                            </span>
                        </div>
                    </div>
                </aside>
                <input type="hidden" name="sort-by" class="product-filter-item" value="">
                <input type="hidden" name="layout" class="product-filter-item" value="">
            </form>
        </div>
    </div>
</template>
<script>
    export default {
        mounted() {
            this.setupNoUISliders();
        }
    };
</script>
