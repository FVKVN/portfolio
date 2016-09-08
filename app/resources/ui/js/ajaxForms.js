var fvkvn = fvkvn || {};

fvkvn.ajaxForms = function() {
    var init;

    var $form = $('.js-ajax-form');

    init = (function() {
        $form.on('submit', function(e) {
            e.preventDefault();

            var $element = $(this),
                url = $element.attr('action'),
                $parent = $element.parent();

            var formData = {
                'name': $element.find('input[name="name"]').val(),
                'email': $element.find('input[name="_replyto"]').val(),
                'message': $element.find('textarea[name="message"]').val()
            };

            $.ajax({
                method: 'POST',
                url: url,
                data: formData,
                dataType: 'json'
            }).done(function (data) {
                console.log(data);

                if (!data.success) {

                } else {
                    $parent.append('<h3>Thank you, you\'re message has been sent. I\'ll get back to you as soon as possible.</h3>');
                    $element.hide();
                }
            });

        });
    })();
};
