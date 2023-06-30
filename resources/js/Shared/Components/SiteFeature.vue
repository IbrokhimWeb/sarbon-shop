<template>
    <div class="ps-block__item">
        <div class="ps-block__left">
            <i :class=iconClass />
        </div>
        <div class="ps-block__right">
            <h4>{{ title }}</h4>
            <p>{{ description }}</p>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            title: String,
            description: String,
            iconClass: String
        }
    };
</script>
