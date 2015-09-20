/* configure jshint globals */
/* globals numeral */
(function ($) {
    'use strict';

    // Set langauge for Numeral library.
    numeral.language('es');

    $('center table table:eq(5) tr:gt(1):lt(-2)').each(function () {
        var $tr = $(this);
        var $total = $tr.find('td:eq(2) .pesetas');
        var $disponible = $tr.find('td:last .pesetas');

        numeral.language('es');
        var saldo = numeral($total.html()).subtract(numeral($disponible.html()));

        $disponible.append(' (' + saldo.format('0,0.00') + ')')

    });

})(jQuery);
