$(function ($) {
  let url = window.location.href;
  $('li a').each(function () {
    if (this.href === url) {
      $(this).closest('li').addClass('active');
    }
  });
});


// $('.news-item-larger').click(function (ev) {
//   document.location.href = "News_detail.html";
// })
// $('.news-item-smaller').click(function (ev) {
//   document.location.href = "News_detail.html";
// })



