var fvkvn = fvkvn || {};

fvkvn.spyScroll = function() {
    var init,
        $body = $('body'),
        $main = $('.js-main-content'),
        $filterIcon = $('.js-filter-icon');

    init = (function() {
        if ($body.hasClass('homepage')) {
            $body.scrollspy({
                target: '#main-nav',
                offset: 500
            });

            $body.on('activate.bs.scrollspy', function(d) {
                var $navItem = $(d.target);

                if ($navItem.hasClass('js-nav-list-item-work')) {
                    $filterIcon.addClass('inview');
                } else {
                    $filterIcon.removeClass('inview');
                }
            });

            $main.scrollspy({
                target: '#js-filter-btn'
            })
        } else {
            $('.nav__list__item').removeClass('active');
        }

    })();
};
