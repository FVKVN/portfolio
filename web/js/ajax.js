var fvkvn = fvkvn || {};

fvkvn.ajax = function() {
    var init, _clickHandler;

    var $hook = $('.js-ajax-link'),
        $target = $('.ajax-section');

    _clickHandler = function(e) {
        e.preventDefault();

        var $this = $(e.currentTarget),
            dest = $this.attr('href');

        $target.load(dest, function(e) {

        });
    };

    init = (function() {
        $hook.on('click', _clickHandler);
    })();
};
