<template>
    <div class="ps-breadcrumb">
        <div class="ps-container">
            <ul class="breadcrumb">
                <li><a :href="route('home')">Home</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/product-categories/sport-outdoor">Sport &amp; Outdoor</a></li>
                <li>Beat Headphone</li>
            </ul>
        </div>
    </div>
    <div class="ps-container">
        <div class="mt-40 mb-40">
            <div class="ps-page--product">
                <div class="ps-container">
                    <div class="ps-page__container">
                        <div class="ps-page__left">
                            <div class="ps-product--detail ps-product--fullwidth">
                                <div class="ps-product__header">
                                    <div class="ps-product__thumbnail px-5">
                                        <figure>
                                            <div class="d-flex mb-2 justify-content-end">
                                                <OwlCarouselNavs id="product-images" />
                                            </div>
                                            <OwlCarousel id="product-images" :owl-items=1 :owl-responsive=false owl-autoplay owl-loop :owl-nav=false :owl-duration=3000>
                                                <div class="owl-item" v-for="n in 3">
                                                    <div class="item">
                                                        <a href="/storage/products/3.jpg" target="_blank">
                                                            <img src="/storage/products/3.jpg" alt="Beat Headphone">
                                                        </a>
                                                    </div>
                                                </div>
                                            </OwlCarousel>
                                        </figure>
                                    </div>
                                    <div class="ps-product__info">
                                        <h1>Beat Headphone</h1>
                                        <div class="ps-product__meta">
                                            <p>Brand: <a href="/brands/pure">Pure</a></p>
                                        </div>
                                        <h4 class="ps-product__price sale">
                                            <span>$13.80</span>
                                            <del>$20.00</del>
                                        </h4>
                                        <div class="ps-product__desc">
                                            <div class="ps-list--dot">
                                                <ul>
                                                    <li> Unrestrained and portable active stereo speaker</li>
                                                    <li> Free from the confines of wires and chords</li>
                                                    <li> 20 hours of portable capabilities</li>
                                                    <li> Double-ended Coil Cord with 3.5mm Stereo Plugs Included</li>
                                                    <li> 3/4″ Dome Tweeters: 2X and 4″ Woofer: 1X</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="number-items-available mb-3">
                                            <span class="text-success">
                                                (18 products available)
                                            </span>
                                        </div>
                                        <form class="add-to-cart-form" method="POST" action="/cart/add-to-cart">
                                            <div class="ps-product__shopping">
                                                <figure>
                                                    <figcaption>Quantity</figcaption>
                                                    <div class="form-group--number product__qty">
                                                        <button class="up" type="button">
                                                            <i class="fal fa-plus"></i>
                                                        </button>
                                                        <button class="down" type="button">
                                                            <i class="fal fa-minus"></i>
                                                        </button>
                                                        <input class="form-control qty-input" type="text" name="qty" value="1" placeholder="1" readonly>
                                                    </div>
                                                </figure>
                                                <input type="hidden" name="id" class="hidden-product-id" value="28">
                                                <button class="ps-btn ps-btn--black" type="submit">Add to cart</button>
                                                <button class="ps-btn" type="submit" name="checkout">Buy Now</button>
                                                <div class="ps-product__actions">
                                                    <a class="js-add-to-wishlist-button" href="#">
                                                        <i class="lnr lnr-heart"></i>
                                                    </a>
                                                    <a class="js-add-to-compare-button" href="#">
                                                        <i class="lnr lnr-chart-bars"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </form>
                                        <div class="ps-product__specification">
                                            <p class="categories">
                                                <strong> Categories:</strong>
                                                <a href="/product-categories/sport-outdoor">
                                                    Sport &amp; Outdoor
                                                </a>,
                                                <a href="/product-categories/security-protection">
                                                    Security &amp; Protection
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="ps-product__content ps-tab-root">
                                    <ul class="ps-tab-list">
                                        <li class="active">
                                            <a href="#tab-description">Description</a>
                                        </li>
                                        <li>
                                            <a href="#tab-reviews">Reviews (0)</a>
                                        </li>
                                    </ul>
                                    <div class="ps-tabs">
                                        <div class="ps-tab active" id="tab-description">
                                            <div class="ps-document">
                                                <div>
                                                    <p>Short Hooded Coat features a straight body, large pockets with button
                                                        flaps, ventilation air holes, and a string detail along the hemline.
                                                        The style is completed with a drawstring hood, featuring Rains’
                                                        signature built-in cap. Made from waterproof, matte PU, this
                                                        lightweight unisex rain jacket is an ode to nostalgia through its
                                                        classic silhouette and utilitarian design details.
                                                    </p>
                                                    <p>This is a unisex item, please check our clothing &amp; footwear
                                                        sizing guide for specific Rains jacket sizing information. RAINS
                                                        comes from the rainy nation of Denmark at the edge of the European
                                                        continent, close to the ocean and with prevailing westerly winds;
                                                        all factors that contribute to an average of 121 rain days each
                                                        year.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ps-tab" id="tab-reviews">
                                            <div class="row">
                                                <div class="col-lg-5">
                                                    <div class="ps-block--average-rating">
                                                        <div class="ps-block__header">
                                                            <h3>0.00</h3>
                                                        </div>
                                                        <div class="ps-block__star" v-for="n in [5, 4, 3, 2, 1]">
                                                            <span>{{ n }} Star</span>
                                                            <div class="ps-progress" data-value="0">
                                                                <span style="width: 0"></span>
                                                            </div>
                                                            <span>0%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-7">
                                                    <form method="POST" action="/review/create" accept-charset="UTF-8" class="ps-form--review form-review-product">
                                                        <input type="hidden" name="product_id" value="3">
                                                        <h4>Submit Your Review</h4>
                                                        <p class="text-danger">Please <a href="/login">login</a>
                                                            to write review!</p>
                                                        <div class="form-group form-group__rating">
                                                            <label for="review-star">Your rating of this product</label>
                                                            <div class="br-wrapper br-theme-fontawesome-stars">
                                                                <select name="star" class="ps-rating" data-read-only="false" id="review-star" style="display: none">
                                                                    <option value="0">0</option>
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3">3</option>
                                                                    <option value="4">4</option>
                                                                    <option value="5">5</option>
                                                                </select>
                                                                <div class="br-widget">
                                                                    <a href="#" data-rating-value="1" data-rating-text="1"></a>
                                                                    <a href="#" data-rating-value="2" data-rating-text="2"></a>
                                                                    <a href="#" data-rating-value="3" data-rating-text="3"></a>
                                                                    <a href="#" data-rating-value="4" data-rating-text="4"></a>
                                                                    <a href="#" data-rating-value="5" data-rating-text="5"></a>
                                                                    <div class="br-current-rating"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="form-group">
                                                            <textarea class="form-control" name="comment" id="txt-comment" rows="6" placeholder="Write your review" disabled></textarea>
                                                        </div>
                                                        <div class="form-group submit">
                                                            <button class="ps-btn btn-disabled" type="submit" disabled>
                                                                Submit Review
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="block--product-reviews">
                                                        <div class="block__header">
                                                            <h2>0 reviews for "Beat Headphone"</h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ps-page__right">
                            <aside class="widget" v-for="n in 2">
                                <div>
                                    <a href="/ads-click/54IAIOENJHV4" target="_blank">
                                        <img src="/storage/promotion/8.jpg" style="max-width: 100%" alt="Product sidebar">
                                    </a>
                                </div>
                            </aside>
                        </div>
                    </div>
                    <div class="ps-section--default ps-customer-bought mt-60">
                        <div class="ps-section__header text-left pb-0 mb-4">
                            <h3 class="mb-2">Customers who bought this item also bought</h3>
                        </div>
                        <div class="ps-section__content">
                            <div class="row">
                                <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6" v-for="n in 6">
                                    <Product
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
                                        class="ps-product--inner"
                                    ></Product>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="products" class="ps-section--default">
                        <div class="ps-section__header d-flex justify-content-between">
                            <h3>Related products</h3>
                            <div>
                                <OwlCarouselNavs id="related-products"/>
                            </div>
                        </div>
                        <div class="ps-section__content">
                            <OwlCarousel :owl-nav=false id="related-products">
                                <Product v-for="n in 10"
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
            </div>
        </div>
    </div>
</template>
<script>
    import Product from "../Shared/Product";
    import OwlCarousel from "../Shared/Components/OwlCarousel";
    import OwlCarouselNavs from "../Shared/Components/OwlCarouselNavs";

    export default {
        name: "Product Single",
        components: {
            OwlCarouselNavs,
            OwlCarousel,
            Product
        },
        mounted() {
            this.setupOwlCarousels();
            this.setupNoUISliders();
            $('.ps-tab-list li a').click(function(e) {
                e.preventDefault();
                $('.ps-tabs .ps-tab').removeClass('active');
                $('.ps-tab-list li').removeClass('active')
                $(this).parent().addClass('active');
                $($(this).attr('href')).addClass('active');
            });
        }
    }
</script>
