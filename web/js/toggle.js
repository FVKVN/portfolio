var fvkvn = fvkvn || {};

fvkvn.toggle = function() {
    var init, _toggle;

    var toggle = document.getElementById('js-toggle-nav'),
        target = toggle.getAttribute('data-target'),
        body = document.getElementsByTagName('body')[0],
        overlay = document.getElementById(target),
        s = Snap(overlay.querySelector('svg')),
        path = s.select('.main-nav__wrapper__overlay-path'),
        pathConfig = {
            from : path.attr('d'),
            to : overlay.getAttribute('data-path-to')
        };

    _toggle = function() {
        if(overlay.classList.contains('open')) {
            toggle.classList.remove('toggle--active');
            overlay.classList.remove('open');
            overlay.classList.add('close');
            body.classList.remove('overflow');

            var onEndTransition = function() {
                overlay.classList.remove('close');
            };

            path.animate( { 'path' : pathConfig.from }, 400, mina.linear, onEndTransition);
        }
        else if(!overlay.classList.contains('close')) {
            toggle.classList.add('toggle--active');
            overlay.classList.add('open');
            body.classList.add('overflow');
            path.animate( { 'path' : pathConfig.to }, 400, mina.linear );
        }
    };

    init = (function() {
        toggle.addEventListener('click', _toggle);
    })();
};
