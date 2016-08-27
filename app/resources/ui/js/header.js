var fvkvn = fvkvn || {};

fvkvn.header = function() {
    var init, _update;

    var $element = $('.js-header'),
        $window = $(window),
        _lastKnownScrollY = 0;

    _update = function() {
        if (_lastKnownScrollY >= 100) {
            $element.addClass('main-header--solid');
        } else {
            $element.removeClass('main-header--solid');
        }
    };

    init = (function() {
            _lastKnownScrollY = document.documentElement.scrollTop || document.body.scrollTop;

            $window.on('scroll touchmove touchstart', function() {
                _lastKnownScrollY = document.documentElement.scrollTop || document.body.scrollTop;

                requestAnimationFrame(_update);
            });

            _update();


    })();
};
