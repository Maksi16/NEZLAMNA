$('.btn_copy').on('click', function (e) {
    console.log($(this).parent().find('.text_fot_copy').html());

    var $text_copy = $(this);
    var $temp = $('<input>');
    $('body').append($temp);
    $temp.val($(this).parent().find('.text_fot_copy').html()).select();
    document.execCommand('copy');
    $temp.remove();
});
