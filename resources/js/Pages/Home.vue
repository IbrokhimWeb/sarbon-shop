<template>
    <div id="home">
        <div class="ps-home-banner ps-home-banner--1">
            <div class="ps-container">
                <div class="ps-section__left">
                    <OwlCarousel
                        :owl-items=1 owl-loop
                        :owl-responsive="false"
                        class="ps-carousel--nav-inside"
                    >
                        <div class="owl-item" v-for="n in 3" style="width: 1200px">
                            <div class="ps-banner bg--cover" style="background-image: url('/storage/sliders/2.jpg')">
                                <a class="ps-banner__overlay"></a>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
                <div class="ps-section__right">
                    <div class="ps-collection" v-for="n in 2">
                        <div>
                            <a href="#" target="_blank">
                                <img src="/storage/promotion/1.jpg" alt="Top Slider Image 1" style="max-width: 100%;">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="ps-site-features">
            <div class="ps-container">
                <div class="ps-block--site-features">
                    <SiteFeature iconClass="fal fa-rocket-launch" title="Free Delivery" description="For all orders over $99" />
                    <SiteFeature iconClass="fal fa-sync" title="90 Days Return" description="If goods have problems" />
                    <SiteFeature iconClass="fal fa-shield" title="Secure Payment" description="100% secure payment" />
                    <SiteFeature iconClass="fal fa-history" title="24/7 Support" description="Dedicated support" />
                    <SiteFeature iconClass="fal fa-gift" title="Gift Service" description="Support gift service" />
                </div>
            </div>
        </div>
        <div class="ps-deal-of-day">
            <div class="ps-container">
                <div class="ps-section__header">
                    <div class="ps-block--countdown-deal">
                        <div class="ps-block__left">
                            <h3 class="mb-2">Deal of the day</h3>
                            <Countdown :tillEpoch=1653518710000 />
                        </div>
                    </div>
                    <div class="ps-block__navigation">
                        <inertia-link class="mr-4" href="/products">
                            View All
                        </inertia-link>
                        <OwlCarouselNavs id="deal-of-the-day" />
                    </div>
                </div>
                <div class="ps-section__content">
                    <OwlCarousel :owl-nav=false :owl-item-xxl=6 id="deal-of-the-day">
                        <Product v-for="n in 15"
                            image="/storage/products/1-300x300.jpg"
                            title="Dual Camera 20MP"
                            discountPrice="$36.92"
                            originalPrice="$80.25"
                            badgeColor="#f14705"
                            badgeInfo="-52%"
                            soldCount="192"
                            link="/products/dual-camera-20mp"
                            vendorLink="/stores/shaun-predovic"
                            vendor="Shaun Predovic"
                            class="owl-item ps-product--inner"
                        ></Product>
                    </OwlCarousel>
                </div>
            </div>
        </div>
        <div class="ps-top-categories mb-40">
            <div class="ps-container">
                <h3>Top Categories</h3>
                <div class="row">
                    <div class="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6" v-for="n in 8">
                        <div class="ps-block--category">
                            <a class="ps-block__overlay"></a>
                            <img src="/storage/product-categories/8-300x300.jpg" alt="Phones">
                            <p>Phones</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="ps-home-ads mt-40 mb-40">
            <div class="ps-container">
                <div class="row">
                    <div class="col-lg-4" v-for="n in 3">
                        <div class="ps-collection">
                            <div>
                                <a href="#" target="_blank">
                                    <img src="/storage/promotion/3.jpg" alt="Homepage middle 1" style="max-width: 100%">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="ps-product-list mt-40 mb-40">
            <div class="ps-container">
                <div class="ps-section__header">
                    <h3>Featured products</h3>
                    <div>
                        <a class="mr-4" href="#">
                            View All
                        </a>
                        <OwlCarouselNavs id="featured-products" />
                    </div>
                </div>
                <div class="ps-section__content">
                    <OwlCarousel :owl-nav=false owl-autoplay owl-loop id="featured-products">
                        <Product v-for="n in 12"
                            image="/storage/products/1-300x300.jpg"
                            title="Dual Camera 20MP"
                            discountPrice="$36.92"
                            originalPrice="$80.25"
                            badgeColor="#0f0"
                            badgeInfo="-54%"
                            soldCount="192"
                            link="/products/dual-camera-20mp"
                            vendorLink="/stores/shaun-predovic"
                            vendor="Shaun Predovic"
                            class="owl-item"
                        ></Product>
                    </OwlCarousel>
                </div>
            </div>
        </div>
        <div class="ps-home-ads mt-40 mb-40">
            <div class="ps-container">
                <div class="row">
                    <div class="col-lg-6" v-for="n in 2">
                        <div class="ps-collection">
                            <div>
                                <a href="#" target="_blank">
                                    <img src="/storage/promotion/6.jpg" alt="Homepage big 1" style="max-width: 100%">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="ps-product-list mb-60">
            <div class="ps-container">
                <div class="ps-section__header">
                    <h3>Exclusive Products</h3>
                    <div>
                        <a class="mr-4" href="#">
                            View All
                        </a>
                        <OwlCarouselNavs id="exclusive-products" />
                    </div>
                </div>
                <div class="ps-section__content">
                    <OwlCarousel :owl-nav=false owl-autoplay owl-loop :owl-duration=10000 id="exclusive-products">
                        <Product v-for="n in 20"
                            image="/storage/products/1-300x300.jpg"
                            title="Dual Camera 20MP"
                            discountPrice="$36.92"
                            originalPrice="$80.25"
                            badgeColor="#0f0"
                            badgeInfo="-54%"
                            soldCount="192"
                            link="/products/dual-camera-20mp"
                            vendorLink="/stores/shaun-predovic"
                            vendor="Shaun Predovic"
                            class="owl-item"
                        ></Product>
                    </OwlCarousel>
                </div>
            </div>
        </div>
        <div class="ps-newsletter mt-40">
            <div class="ps-container newsletter-form">
                <form method="POST" class="ps-form--newsletter">
                    <div class="row">
                        <div class="col-xl-5">
                            <div class="ps-form__left">
                                <h3>Join Our Newsletter Now</h3>
                                <p>Subscribe to get information about products and coupons</p>
                            </div>
                        </div>
                        <div class="col-xl-7">
                            <div class="ps-form__right">
                                <div class="form-group--nest">
                                    <input name="email" type="email" placeholder="Email address" class="form-control">
                                    <button type="submit" class="ps-btn">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
    import Product from "../Shared/Product";
    import Countdown from "../Shared/Components/Countdown";
    import SiteFeature from "../Shared/Components/SiteFeature";
    import OwlCarousel from "../Shared/Components/OwlCarousel";
    import OwlCarouselNavs from "../Shared/Components/OwlCarouselNavs";

    export default {
        name: "Home",
        components: {
            OwlCarouselNavs,
            OwlCarousel,
            SiteFeature,
            Product,
            Countdown,
        },
        mounted() {
            this.setupOwlCarousels();
        }
    };
</script>
