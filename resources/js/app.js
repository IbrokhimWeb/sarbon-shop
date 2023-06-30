import { createApp, h } from 'vue'
import { createInertiaApp, Link } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'
import './plugins/fontawesome_pro_all.min'
import 'owl.carousel'
import noUiSlider from 'nouislider';
import route from "ziggy-js";
import DefaultLayout from './Shared/Layouts/DefaultLayout'

createInertiaApp({
    resolve: async name => {
        let page = (await import(`./Pages/${name}`)).default;
        page.layout ??= DefaultLayout;
        return page;
    },
    setup({ el, App, props, plugin }) {
        createApp({
            render: () => h(App, props),
        })
        .use(plugin).mixin(GlobalMixin)
        .component('inertia-link', Link)
        .mount(el)
    },
})
InertiaProgress.init({color: '#fff'});
window.noUiSlider = noUiSlider;
function removeLoader() {
    $('#website-loader-wrapper').fadeOut('slow');
    $('body').removeClass('overflow-hidden');
}

$(document).ready(function() {
    removeLoader();
});

let GlobalMixin = {
    methods: {
        route,
        setupOwlCarousels() {
            $(".owl-carousel").each(function() {
                let items = $(this).data('owl-items') ?? 1;
                let autoplay = $(this).data('owl-autoplay') ?? false;
                let nav = $(this).data('owl-nav') ?? true;
                let loop = $(this).data('owl-loop') ?? false;
                let autowidth = $(this).data('owl-autowidth') ?? false;
                let duration = $(this).data('owl-duration') ?? 3000;
                $(this).owlCarousel({
                    navText: ['<i class="lnr lnr-chevron-left"></i>', '<i class="lnr lnr-chevron-right"></i>'],
                    autoplayHoverPause: true,
                    margin: 10,
                    items: items,
                    autoplay: autoplay,
                    nav: nav,
                    loop: loop,
                    autoWidth: autowidth,
                    autoplayTimeout: duration,
                    responsive: {
                        0: {items: $(this).data('owl-item-xs')},
                        576: {items: $(this).data('owl-item-sm')},
                        768: {items: $(this).data('owl-item-md')},
                        992: {items: $(this).data('owl-item-lg')},
                        1200: {items: $(this).data('owl-item-xl')},
                        1400: {items: $(this).data('owl-item-xxl')}
                    }
                });
            });
            let prevBtn = $('.ps-carousel__prev'),  nextBtn = $('.ps-carousel__next');
            prevBtn.click(function (e) {
                e.preventDefault();
                let target = $(this).data('owl-id');
                $(target).trigger('prev.owl.carousel', [1000]);
            });
            nextBtn.click(function (e) {
                e.preventDefault();
                let target = $(this).data('owl-id');
                $(target).trigger('next.owl.carousel', [1000]);
            });
        },
        setupNoUISliders() {
            $('.nonlinear').each(function (index, element) {
                let $element = $(element);
                let min = $element.data('min');
                let max = $element.data('max');
                let $wrapper = $(element).closest('.nonlinear-wrapper');
                let currentExchangeRate = parseFloat($('div[data-current-exchange-rate]').data('current-exchange-rate'));
                window.noUiSlider.create(element, {
                    start: [$wrapper.find('.product-filter-item-price-0').val(), $wrapper.find('.product-filter-item-price-1').val()],
                    connect: true,
                    range: {
                        min: min,
                        '10%': max * 0.1,
                        '20%': max * 0.2,
                        '30%': max * 0.3,
                        '40%': max * 0.4,
                        '50%': max * 0.5,
                        '60%': max * 0.6,
                        '70%': max * 0.7,
                        '80%': max * 0.8,
                        '90%': max * 0.9,
                        max: max
                    }
                });
                element.noUiSlider.on('change', function (values, handle) {
                    $wrapper.find('.product-filter-item-price-' + handle).val(Math.round(values[handle] * currentExchangeRate)).trigger('change');
                });
            });
        }
    }
}
