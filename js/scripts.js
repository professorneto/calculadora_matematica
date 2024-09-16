$(document).ready(function() {

    // $('#txt_display').mask('000\'000\'000\'000\'000', {reverse: true});

    var bt_nr = '';

    $('.bt-nr').click(function() {
        var n = $(this).text();

        if( n == '0' || n == '00' ) {

            if( bt_nr.length > 0 ) {

                bt_nr = bt_nr.concat(n);

            }

        } else {

            bt_nr = bt_nr.concat(n);

        }

        $('#txt_display').val(bt_nr);
    });

});