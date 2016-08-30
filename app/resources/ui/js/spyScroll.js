var fvkvn = fvkvn || {};

fvkvn.spyScroll = function() {
    var init,
        $body = $('body');

    init = (function() {
        if ($body.hasClass('homepage')) {
            $body.scrollspy({
                target: '#main-nav'
            });
        } else {
            $('.nav__list__item').removeClass('active');
        }

    })();
};
