<template>
    <div :data-owl-items=owlItems :data-owl-item-xs=dataOwlItemXs :data-owl-item-sm=dataOwlItemSm
         :data-owl-item-md=dataOwlItemMd :data-owl-item-lg=dataOwlItemLg :data-owl-item-xl=dataOwlItemXl
         :data-owl-item-xxl=dataOwlItemXxl :data-owl-nav=owlNav :data-owl-autoplay=owlAutoplay
         :data-owl-loop=owlLoop :data-owl-autowidth=owlAutoWidth :data-owl-duration=owlDuration
         :id=id :class=class class="owl-slider owl-carousel owl-loaded owl-drag"
    >
        <div class="owl-stage-outer">
            <div class="owl-stage">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            id: {default: '', type: String},
            class: {default: '', type: String},
            owlItems: {default: 1, type: Number},
            owlAutoplay: {default: false, type: Boolean},
            owlNav: {default: true, type: Boolean},
            owlLoop: {default: false, type: Boolean},
            owlAutoWidth: {default: false, type: Boolean},
            owlResponsive: {default: true, type: Boolean},
            owlDuration: {default: 3000, type: Number},
            owlItemXs: {default: 2, type: Number},
            owlItemSm: {default: 3, type: Number},
            owlItemMd: {default: 4, type: Number},
            owlItemLg: {default: 5, type: Number},
            owlItemXl: {default: 6, type: Number},
            owlItemXxl: {default: 7, type:Number},
        },
        data() {
            return {
                dataOwlItemXs: null,
                dataOwlItemSm: null,
                dataOwlItemMd: null,
                dataOwlItemLg: null,
                dataOwlItemXl: null,
                dataOwlItemXxl: null,
            }
        },
        created() {
            if (this.owlResponsive) {
                this.dataOwlItemXs = this.owlItemXs;
                this.dataOwlItemSm = this.owlItemSm;
                this.dataOwlItemMd = this.owlItemMd;
                this.dataOwlItemLg = this.owlItemLg;
                this.dataOwlItemXl = this.owlItemXl;
                this.dataOwlItemXxl = this.owlItemXxl;
            }
        }
    };
</script>
