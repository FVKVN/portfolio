var fvkvn = fvkvn || {};

fvkvn.header = function() {
    var init, _update;

    var $target = $('.js-main-content'),
        $element = $('.js-header'),
        $window = $(window),
        _lastKnownDistance = 0,
        _lastKnownScrollY = 0;

    _update = function() {
        if (_lastKnownDistance <=0) {
            $element.addClass('main-header--solid');
        } else {
            $element.removeClass('main-header--solid');
        }
    };

    init = (function() {
        if ($target.length > 0) {
            _lastKnownScrollY = document.documentElement.scrollTop || document.body.scrollTop;
            _lastKnownDistance = $target.offset().top - _lastKnownScrollY - $element.height();

            $window.on('scroll touchmove touchstart', function() {
                _lastKnownScrollY = document.documentElement.scrollTop || document.body.scrollTop;
                _lastKnownDistance = $target.offset().top - _lastKnownScrollY - $element.height();

                requestAnimationFrame(_update);
            });

            _update();
        }


    })();
};
