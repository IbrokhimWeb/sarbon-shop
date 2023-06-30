<template>
    <a :data-owl-id="'#' + id" class="ps-carousel__prev mr-2">
        <i class="lnr lnr-chevron-left"></i>
    </a>
    <a :data-owl-id="'#' + id" class="ps-carousel__next">
        <i class="lnr lnr-chevron-right"></i>
    </a>
</template>
<script>
    export default {
        props: {
            id: String
        }
    };
</script>
