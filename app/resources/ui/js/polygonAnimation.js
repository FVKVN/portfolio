var fvkvn = fvkvn || {};

fvkvn.polygonAnimation = function() {
    var init, animationDone;

    animationDone = function() {
        $('html').addClass('polygon-animation-done');
        sessionStorage.setItem('secondVisit', true);
    };

    init = (function() {
        var _options = {
                delay: 0.3, // init pause time
                onComplete: animationDone
            },
            _tmaxTl = new TimelineMax(_options),
            _shapes = $('svg.hero__visual > g polygon'),
            _stagger = 0.00475,
            _duration = 1.5;

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

        _tmaxTl.staggerFromTo(_shapes, _duration, polygon_staggerFrom, polygon_staggerTo, _stagger, 0);
    })();
};
