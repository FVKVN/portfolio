var fvkvn = fvkvn || {};

fvkvn = (function($, window, undefined) {

    var init;

    init = function() {
        fvkvn.navToggle();
    };

    return {
        init: init
    };

}(jQuery, window));

$(function() {
    fvkvn.init();
});
