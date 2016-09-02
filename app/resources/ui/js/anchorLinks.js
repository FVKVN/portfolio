var fvkvn = fvkvn || {};

fvkvn.anchorLinks = function() {
    var init;

    var $hook = $('.js-anchor-link');

    init = (function() {
        $hook.on('click', function(e) {
            e.preventDefault();

            var $target = $($(this).attr('href'));

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 900, 'swing', function () {
                window.location.hash = target;
            });
        });
    })();
};
