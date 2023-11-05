$("#sidebar_list li").on('click', function () {
  $("#sidebar_list li.active").removeClass('active');
  $(this).addClass('active');
});

$("#light_mode").on('click', function () {
  $("html").attr('data-bs-theme', 'light');
  console.log("Light Mode");
  $(this).toggleClass('d-none');
  $("#dark_mode").toggleClass('d-none');
});

$("#dark_mode").on('click', function () {
  $("html").attr('data-bs-theme', 'dark');
  console.log("Dark Mode");
  $(this).toggleClass('d-none');
  $("#light_mode").toggleClass('d-none');
});