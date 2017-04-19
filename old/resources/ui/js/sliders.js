var fvkvn = fvkvn || {};

fvkvn.sliders = function() {
    var init;

    init = (function() {
        $('.js-slider').slick({
            infinite: true,
            prevArrow: '<button class="btn--slider-direction btn--slider-direction--prev"><i class="btn--slider-direction__icon icon--chevron-left"></i></button>',
            nextArrow: '<button class="btn--slider-direction btn--slider-direction--next"><i class="btn--slider-direction__icon icon--chevron-right"></i></button>'
        });
    })();
};
