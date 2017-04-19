var fvkvn = fvkvn || {};

fvkvn.disabledLinks = function() {
    var init;

    var $hook = $('.js-link-disabled');

    init = (function() {
        $hook.on('click', function(e) {
            e.preventDefault();
        });
    })();
};
