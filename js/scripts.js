$(document).ready(function() {
    
    $('.bt-nr').click(function() {
        var bt_nr = $(this).text();

        $('#txt_display').val(bt_nr);
    });

});