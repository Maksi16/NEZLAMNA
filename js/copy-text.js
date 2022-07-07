// function copytext(el) {
//   var $tmp = $('<textarea>');
//   $('body').append($tmp);
//   $tmp.val($(el).text()).select();
//   document.execCommand('copy');
//   $tmp.remove();
// }

// jQuery(document).ready(function ($) {
//   $('.text_copy_link').click(function () {
//     var $text_copy = $(this);
//     var $temp = $('<input>');
//     $('body').append($temp);
//     $temp.val($text_copy.text()).select();
//     document.execCommand('copy');
//     $temp.remove();
//     //$('.copy_link_mess').fadeIn(400);
//     // setTimeout(function () {
//     //   $('.copy_link_mess').fadeOut(400);
//     // }, 5000);
//   });
// });
$('.btn_copy').on('click', function (e) {
  console.log($(this).parent().find('.text_fot_copy').html());

  var $text_copy = $(this);
  var $temp = $('<input>');
  $('body').append($temp);
  $temp.val($(this).parent().find('.text_fot_copy').html()).select();
  document.execCommand('copy');
  $temp.remove();
});
