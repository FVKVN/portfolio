var fvkvn = fvkvn || {};

fvkvn.filter = function() {
    var init, _removeFilter, _isFiltered, _handleItems;

    var $filter = $('.js-filter'),
        $all = $('.js-filter-all'),
        $filterContainer = $('.js-filters'),
        $item = $('.js-filter-item'),
        selected = [];

    _isFiltered = function(value) {
        return selected.indexOf(value) > -1;
    };

    _removeFilter = function(value) {
        var index = selected.indexOf(value);

        if (index > -1) {
            selected.splice(index, 1);
        }
    };

    _handleItems = function() {
        $item.each(function() {
            var $this = $(this),
                value = $this.attr('data-filter-category');

            if (selected.length > 0) {
                if (_isFiltered(value)) {
                    $this.removeClass('filter-item--hide');
                } else {
                    $this.addClass('filter-item--hide');
                }
            } else {
                $this.removeClass('filter-item--hide');
            }


        })
    };

    init = (function() {
        $filter.each(function() {
            var $this = $(this),
                value = $this.val();

            $this.on('change', function() {
                if (!_isFiltered(value) && $this.is(':checked')) {
                    selected.push(value);
                } else {
                    _removeFilter(value);
                }

                if (selected.length > 0) {
                    $all.prop('checked', false);
                } else {
                    $all.prop('checked', true);
                }

                _handleItems();
            });
        });

        $all.on('change', function() {
            if ($all.is(':checked')) {
                selected = [];

                $filter.prop('checked', false);
            }

            _handleItems();
        })


    })();
};
