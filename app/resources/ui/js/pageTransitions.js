var fvkvn = fvkvn || {};

fvkvn.pageTransitions = function() {
    var init, _animateSvg, _animateSvgIn, _animateSvgOut, _clickHandler, _changePage, _popState;

    //svg config
    var $svgHolder = $('.js-trans-overlay-container'),
        _shapes = $('.js-trans-overlay > g polygon'),
        _stagger = 0.00475,
        _duration = 2;

    //ajax setup
    var $hook = $('.js-ajax-link'),
        _isAnimating = false,
        _popEventListnerAdded = false;

    _animateSvgIn = function(target) {
        _isAnimating = true;

        var _options = {
                delay: 0,
                onComplete: function() {
                    _isAnimating = false;
                    _changePage(target, true);
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

    _popState = function() {
        var targetUrl;

        if (location.hash !==  '') {
            targetUrl = location.origin + '#' + location.hash;
        } else {
            targetUrl = location.origin;
        }

        if(!_isAnimating) {
            _animateSvgIn(targetUrl);
        }
    };

    _changePage = function(url, bool) {
        var newSectionName = 'ajax-content-' + url.replace('.html', ''),
            newSection = $('<div class="' + newSectionName + '"> </div>');

        newSection.load(url + ' .js-ajax-content-wrapper > *', function(e) {
            var $body = $('body');

            $('.js-ajax-content-wrapper').html(newSection);

            if ($body.hasClass('homepage')) {
                $body.removeClass('homepage')
            } else {
                $body.addClass('homepage')
            }

            fvkvn.inview();
            fvkvn.header();
            fvkvn.anchorLinks();
            fvkvn.spyScroll();
            fvkvn.progressBars();
            fvkvn.sliders();
            fvkvn.pageTransitions();

            var hash = url.split('#');

            //handle anchor back
            if (hash[1] !== undefined) {
                $('html,body').animate({
                    scrollTop: $('#' + hash[1]).offset().top
                });

                $('html, body').stop().animate({
                    'scrollTop': $('#' + hash[1]).offset().top
                });
            } else {
                $('html,body').animate({
                    scrollTop: 0
                });
            }

            _animateSvgOut();

            if(url !== window.location) {
               window.history.pushState({path: url}, '', url);
            }

            if(!_popEventListnerAdded) {
                window.addEventListener("popstate", _popState);
                _popEventListnerAdded = true;
            };

            window.location.hash = '';
        });
    };

    _clickHandler = function(e) {
        e.preventDefault();

        var $element = $(this),
            target = $element.attr('href');

        if(!_isAnimating) {
            _animateSvgIn(target);
        }

    };



    init = (function() {
        $hook.on('click', _clickHandler);

    })();
};
