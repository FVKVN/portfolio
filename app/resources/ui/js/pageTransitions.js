var fvkvn = fvkvn || {};

fvkvn.pageTransitions = function() {
    var init, _animateSvg;

    //svg config
    var $svgHolder = $('.js-trans-overlay'),
        _shapes = $('.js-trans-overlay svg > g polygon'),
        _stagger = 0.00475,
        _duration = 1.5;

    _animateSvgIn = function() {
        var _options = {
                delay: 0.2, // init pause time
                onComplete: _animateSvgOut
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

        _tmaxTl.staggerFromTo(_shapes, _duration, polygon_staggerFrom, polygon_staggerTo, _stagger, 0);
    };

    _animateSvgOut = function() {
        var _options = {
                delay: 0.2, // init pause time
                onComplete: function() {
                    $svgHolder.css('z-index', -1);
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

        _tmaxTl.staggerFromTo(_shapes, _duration, polygon_staggerFrom, polygon_staggerTo, _stagger, 0);
    };

    init = (function() {
        _animateSvgIn();
    })();
};
