$(document).on('click','#myTab button', function (e) {
  e.preventDefault();
  $(this).tab('show');
});

$(document).on('show.bs.modal','#galleryModal', function (e) {
  $('.modal-footer').text('');
  $('#galleryImage').attr("src",$(e.relatedTarget).data("large-src"));
  if($(e.relatedTarget).data("text")) {
    $('.modal-footer').text($(e.relatedTarget).data("text"));
  }
});