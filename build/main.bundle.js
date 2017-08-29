'use strict';

$(function () {
    var $write = $('#write'),
        shift = false,
        capslock = false;

    $('#keyboard li').click(function () {
        var $this = $(this),
            character = $this.html();

        // Delete
        if ($this.hasClass('delete')) {
            var html = $write.html();

            $write.html(html.substr(0, html.length - 1));
            return false;
        }

        // Special characters
        if ($this.hasClass('symbol')) character = $('span:visible', $this).html();
        if ($this.hasClass('space')) character = ' ';
        if ($this.hasClass('tab')) character = "\t";
        if ($this.hasClass('return')) character = "\n";

        // Add the character
        $write.html($write.html() + character);
    });
});
