$("#sidebar_list li").on('click', function () {
  $("#sidebar_list li.active").removeClass('active');
  $(this).addClass('active');
});