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

$(document).ready(function () {
  $('#toggleSidebar').on('click', function () {
    $('#sidebar').toggleClass('d-none');
  });

  // Add additional logic if you want to close the sidebar when clicking outside
  // $('#main-content').on('click', function () {
  //   $('#sidebar').addClass('d-none');
  // });
});

$(document).ready(function() {
  $('#theme_switch').change(function() {
    if ($(this).is(':checked')) {
      $('#light_mode').removeClass('d-none');
      $('#dark_mode').addClass('d-none');
    } else {
      $('#light_mode').addClass('d-none');
      $('#dark_mode').removeClass('d-none');
    }
  });
});