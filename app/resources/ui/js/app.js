var fvkvn = fvkvn || {};

fvkvn = (function($, window, undefined) {

    var init;

    var _buildReturnObject;

    _buildReturnObject = function() {
        var r = {
            'init': init
        };

        for (var key in fvkvn) {
            r[key] = fvkvn[key];
        }

        return r;
    };

    init = function() {
        fvkvn.toggle();
        // fvkvn.ajax();

        if ($('.js-parallax').length > 0) {
            fvkvn.parallaxHeader();
        }

        if ($('.js-filter').length > 0) {
            fvkvn.filter();
        }

        if ($('.js-progress-bar').length > 0) {
            fvkvn.progressBars();
        }

        if($('.polygon-animation-done').length === 0) {
            fvkvn.polygonAnimation();
        }
    };

    return _buildReturnObject();

}(jQuery, window));

$(function() {
    fvkvn.init();
});
