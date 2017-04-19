var fvkvn = fvkvn || {};

fvkvn.inview = function() {

    var init;

    init = (function() {
        window.inView = function($child, callback) {
            var doc = document.documentElement;

            var _isInview, _timeout, _scrollHandler;

            _isInview = function() {
                var childRect = $child[0].getBoundingClientRect();

                if (childRect.bottom >= 0 && childRect.top <= (window.innerHeight || doc.clientHeight)) {
                    callback();
                    window.removeEventListener('scroll', _scrollHandler);
                } else {
                    return false;
                }
            };

            _scrollHandler = function() {
                if (_timeout !== null) {
                    clearTimeout(_timeout);
                }

                _timeout = setTimeout(_isInview, 100);
            };

            window.addEventListener('scroll', _scrollHandler);

            _isInview();
        };
    })();
};
