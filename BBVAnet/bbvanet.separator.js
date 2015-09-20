/* configure jshint globals */
/* globals numeral */
(function ($) {
    'use strict';

    // Set langauge for Numeral library.
    numeral.language('es');
    numeral.defaultFormat('0,0.00');

    $('.pesetas:not(:has(*)), .pesetas-i:not(:has(*))').each(function () {
        var $this = $(this);

        if ($this.html().match(/[0-9]{1,3}\.[0-9]{2}/) !== null) {
            numeral.language('en');
            var valor = numeral($this.html());
            numeral.language('es');
            $this.html(valor.format());
        }
    });

})(jQuery);
