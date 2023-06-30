<template>
    <div class="ps-breadcrumb">
        <div class="ps-container">
            <ul class="breadcrumb">
                <li>
                    <a :href="route('home')">Home</a>
                </li>
                <li>About us</li>
            </ul>
        </div>
    </div>
    <div class="ps-container">
        <div class="mt-40 mb-40">
            About us
        </div>
    </div>
</template>
<script>
    export default {
        name: "About us",
    }
</script>
