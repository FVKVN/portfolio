    var fvkvn = fvkvn || {};

// @TODO: optimize

fvkvn.parallaxHeader = function() {
    var init, _scrollHandler, _parallaxHandler, scrolling;

    var $element = $('.js-parallax'),
        elementHeight = $element.height(),
        containerHeight = $element.parent().height(),
        $header = $('.js-header');

    var _scrollTop = 0;

    _parallaxHandler = function() {
        var scrollPercentage = (_scrollTop / containerHeight) * 200,
            animationValue = - Math.round( ((elementHeight / 2) + scrollPercentage));

        $element.attr('style', 'transform:translate3d(-50%,' + animationValue + 'px, 0);' );
    };

    _scrollHandler = function() {
        //set scroll position
       _scrollTop = $(window).scrollTop();

        if (_scrollTop <= containerHeight) {
            window.requestAnimationFrame(_parallaxHandler);

            $header.addClass('color-change');
        } else {
            $header.removeClass('color-change');
        }
    };

    init = (function() {
        _parallaxHandler();

        $(window).on('scroll', function() {
            _scrollHandler();
        });
    })();
};
