var fvkvn = fvkvn || {};

fvkvn.navToggle = function() {
    var init;


    init = (function() {
        $('.js-nav-button').on('click', function() {
            var $element = $(this);

            $element.toggleClass('btn--toggle-nav--active');
        });
    })();
};
