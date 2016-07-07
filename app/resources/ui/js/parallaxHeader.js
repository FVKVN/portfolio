    var fvkvn = fvkvn || {};

// @TODO: optimize

fvkvn.parallaxHeader = function() {
    var init, _scrollHandler, _parallaxHandler, scrolling;

    var $element = $('.js-parallax'),
        elementHeight = $element.height(),
        containerHeight = $element.parent().height();
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
        }
    };

    init = (function() {
        _parallaxHandler();

        $(window).on('scroll', function() {
            _scrollHandler();
        });
    })();
};

    //
    //var KbcMatchItWebsiteBundle = KbcMatchItWebsiteBundle || {};
    //
    //KbcMatchItWebsiteBundle.sticky = function() {
    //
    //    var init, _scrollHandler, _requestTick, _update;
    //
    //    var $hook = $('.js-sticky-element'),
    //        $parent = $hook.parent(),
    //        elementHeight = $hook.outerHeight(),
    //        offsetElement = $('<div></div>').css('height', elementHeight),
    //        parentOffset = $parent.offset().top;
    //
    //    var lastKnownScrollY = 0,
    //        lastKnownDistance = 0,
    //        ticking = false;
    //
    //    _scrollHandler = function() {
    //        lastKnownScrollY = window.scrollY;
    //        lastKnownDistance = parentOffset - lastKnownScrollY;
    //
    //        _requestTick();
    //    };
    //
    //    _requestTick = function() {
    //        if(!ticking) {
    //            requestAnimationFrame(_update);
    //        }
    //        ticking = true;
    //    };
    //
    //    _update = function() {
    //        ticking = false;
    //
    //        var currentDistance = lastKnownDistance;
    //
    //        if(currentDistance < 0) {
    //            $hook.addClass('sticky-element--fixed-top');
    //            $parent.prepend(offsetElement);
    //        } else {
    //            $hook.removeClass('sticky-element--fixed-top');
    //
    //            if (offsetElement) {
    //                offsetElement.remove();
    //            }
    //        }
    //    };
    //
    //    init = (function() {
    //        $parent.addClass('sticky-container');
    //
    //        $(window).bind('scroll', _scrollHandler);
    //
    //    }());
    //
    //};
