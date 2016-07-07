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
        fvkvn.polygonAnimation();
        fvkvn.parallaxHeader();
        fvkvn.filter();
        fvkvn.ajax();
        fvkvn.progressBars();
    };

    return _buildReturnObject();

}(jQuery, window));

$(function() {
    fvkvn.init();
});
