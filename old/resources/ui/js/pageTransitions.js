var fvkvn = fvkvn || {};

fvkvn.pageTransitions = function() {
    var init, _animateSvg, _animateSvgIn, _animateSvgOut, _clickHandler;

    //svg config
    var $svgHolder = $('.js-trans-overlay-container'),
        _shapes = $('.js-trans-overlay > g polygon'),
        _stagger = 0.00475,
        _duration = 2;

    //ajax setup
    var _isAnimating = false;

    _animateSvgIn = function() {
        _isAnimating = true;

        var _options = {
                delay: 0,
                onComplete: function() {
                    _isAnimating = false;
                }
            },
            _tmaxTl = new TimelineMax(_options);

        var polygon_staggerFrom = {
            scale: 0,
            opacity: 0,
            transformOrigin: 'center center'
        };

        var polygon_staggerTo = {
            opacity: 1,
            scale: 1,
            ease: Elastic.easeInOut
        };

        $svgHolder.css('z-index', 900);

        _animateSvg(_tmaxTl, polygon_staggerFrom, polygon_staggerTo);
    };

    _animateSvgOut = function() {
        _isAnimating = true;

        var _options = {
                delay: 0, // init pause time
                onComplete: function() {
                    $svgHolder.css('z-index', -1);
                    _isAnimating = false;
                }
            },
            _tmaxTl = new TimelineMax(_options);

        var polygon_staggerTo = {
            scale: 0,
            opacity: 0,
            ease: Elastic.easeInOut
        };

        var polygon_staggerFrom = {
            opacity: 1,
            scale: 1,
            transformOrigin: 'center center'
        };

        _animateSvg(_tmaxTl, polygon_staggerFrom, polygon_staggerTo);
    };

    _animateSvg = function(timeline, from, to) {
        timeline.staggerFromTo(_shapes, _duration, from, to, _stagger, 0);
    };

    init = (function() {
        var options = {
                prefetch: true,
                cacheLength: 2,
                scroll: false,
                onStart: {
                    duration: 2000, // Duration of our animation
                    render: function($container) {
                        _animateSvgIn();
                    }
                },
                onReady: {
                    duration: 0,
                    render: function($container, $newContent) {
                        $container.html($newContent);

                        var $body = $('body');

                        if ($body.hasClass('homepage')) {
                            $body.removeClass('homepage')
                        } else {
                            $body.addClass('homepage')
                        }
                    }

                },
                onAfter: function() {
                    fvkvn.init();

                    _animateSvgOut();
                }
            },
            smoothState = $('#js-ajax-content-wrapper').smoothState(options).data('smoothState');
    })();
};
