var fvkvn = fvkvn || {};

fvkvn.progressBars = function() {
    var init;

    var $hook = $('.js-progress-bar');

    init = (function() {
        $hook.each(function() {
            var $element = $(this),
                toValue = $element.attr('data-to');

            window.inView($element, function() {
                $element.css('width', toValue + '%');
            });
        });
    })();
};
