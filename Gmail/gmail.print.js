setTimeout(function () {
    // Deferred onload
}, 2000);

(function ($) {
    'use strict';

    var $mc = $('.maincontent');
    var $el;

    $el = $mc.children('table').first();
    $el = $el.add($mc.children('hr').first());
    $mc.find('> .message > tbody').each(function () {
        $el = $el.add($(this).children('tr').slice(0, 2));
    });

    $el.addClass('gmail-hide');

    var $toggle = $('<button>');
    $toggle.html('Extra info - mostrar');
    $toggle.addClass('gmail-toggle');
    var $body = $('body');
    $body.append($toggle);

    var toggle = true;
    $toggle.click(function () {
        if (toggle) {
            $el.removeClass('gmail-hide');
            $toggle.html('Extra info - ocultar');
        } else {
            $el.addClass('gmail-hide');
            $toggle.html('Extra info - mostrar');
        }
        toggle = !toggle;
    });

})(jQuery);
