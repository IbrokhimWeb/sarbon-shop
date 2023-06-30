<template>
    <div id="alert-container"></div>
    <Header />
    <MobileMenus />
    <slot></slot>
    <Footer />
</template>
<script>
    import Header from "./Header";
    import Footer from "./Footer";
    import MobileMenus from "../Mobile/Layouts/Menus/Main";

    export default {
        components: {
            Header,
            Footer,
            MobileMenus
        },
        mounted() {
            let header = $('.header'), checkpoint = 50;
            header.each(function () {
                if ($(this).data('sticky') === true) {
                    let el = $(this);
                    $(window).scroll(function () {
                        let currentPosition = $(this).scrollTop();
                        if (currentPosition > checkpoint)
                            el.addClass('header--sticky');
                        else
                            el.removeClass('header--sticky');
                    });
                }
            });
        }
    };
</script>

