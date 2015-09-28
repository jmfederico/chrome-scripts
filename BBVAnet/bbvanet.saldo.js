/* configure jshint globals */
/* globals numeral */
(function ($) {
    'use strict';

    // Set langauge for Numeral library.
    numeral.language('es');

    // Move main table to the beginning of the page.
    var $main = $('body>div:eq(-1)');
    $main.children('table:eq(-1)').detach().prependTo($main);

    // Add current balance to Credit Cards.
    $('p:contains("Tarjetas de Crédito")').closest('table').find('tr:gt(1):lt(-2)').each(function () {
        var $tr = $(this);
        var $total = $tr.find('td:eq(2) .pesetas');
        var $disponible = $tr.find('td:last .pesetas');

        numeral.language('es');
        var saldo = numeral($total.html()).subtract(numeral($disponible.html()));

        $disponible.append('<span style="display:inline-block; width:80px; color:DarkRed;">' + saldo.format('0,0.00') + '</span>');
    });

})(jQuery);
