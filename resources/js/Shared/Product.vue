<template>
    <div class="ps-product" :class=class>
        <div class="ps-product__thumbnail">
            <a href="#">
                <img :src="image" :alt="title">
            </a>
            <div v-if="badgeInfo" class="ps-product__badge" :style="{backgroundColor: badgeColor}">
                {{ badgeInfo }}
            </div>
            <ul class="ps-product__actions">
                <li>
                    <a class="add-to-cart-button" title="Add To Cart">
                        <i class="lnr lnr-cart"></i>
                    </a>
                </li>
                <li>
                    <a class="quick-view-button" title="View">
                        <i class="lnr lnr-eye"></i>
                    </a>
                </li>
                <li>
                    <a class="add-to-wishlist-button" title="Add To Wishlist">
                        <i class="lnr lnr-heart"></i>
                    </a>
                </li>
                <li>
                    <a class="add-to-compare-button" title="Compare">
                        <i class="lnr lnr-chart-bars"></i>
                    </a>
                </li>
            </ul>
        </div>
        <div class="ps-product__container">
            <p class="ps-product__price sale">
                <div v-if="discountPrice !== null">
                    {{ discountPrice }}
                    <del>{{ originalPrice }}</del>
                </div>
                <div v-else>
                    {{ originalPrice }}
                </div>
            </p>
            <div class="ps-product__content">
                <p class="ps-product__vendor">
                    <span>Sold by:</span>
                    <a :href="vendorLink" class="text-uppercase">
                        {{ vendor }}
                    </a>
                </p>
                <a class="ps-product__title" :href="link">
                    {{ title }}
                </a>
                <div class="rating_wrap mb-2">
                    <i class="fas fa-star" style="color: #e4e4e4"></i>
                    <i class="fas fa-star" style="color: #e4e4e4"></i>
                    <i class="fas fa-star" style="color: #e4e4e4"></i>
                    <i class="fas fa-star" style="color: #e4e4e4"></i>
                    <i class="fas fa-star" style="color: #e4e4e4"></i>
                </div>
                <div class="ps-product__progress-bar ps-progress">
                    <div class="ps-progress__value">
                        <span style="width: 70%"></span>
                    </div>
                    <p>Sold: {{ soldCount }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            class: {default: '', type: String},
            image: {default: '', type: String},
            title: {default: '', type: String},
            discountPrice: {default: null, type: String},
            originalPrice: {default: null, type: String},
            badgeColor: {default: '#3bcc5f', type: String},
            badgeInfo: {default: '', type: String},
            soldCount: {default: 0, type: String},
            link: {default: '', type: String},
            vendor: {default: '', type: String},
            vendorLink: {default: '', type: String},
        },
    };
</script>
