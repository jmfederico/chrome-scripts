/* configure jshint globals */
/* globals numeral */
(function ($) {
    'use strict';

    // Set langauge for Numeral library.
    numeral.language('es');

    $('.pesetas').each(function () {
        var $this = $(this);

        numeral.language('en');
        var valor = numeral($this.html());

        numeral.language('es');
        $this.html(valor.format('0,0.00'));
    });

})(jQuery);
