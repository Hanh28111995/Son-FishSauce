$(function ($) {
  let url = window.location.href;
  $('li a').each(function () {
    if (this.href === url) {
      $(this).closest('li').addClass('active');
    }
  });
});


$('.news-item-larger').click(function (ev) {
  document.location.href = "News_detail.html";
})
$('.news-item-smaller').click(function (ev) {
  document.location.href = "News_detail.html";
})



// const videoElement = document.querySelector('.video-bg');
// const playPauseButton = document.querySelector('.video-icon');
// const playPauseZone = document.querySelector('.video-zone');

// playPauseZone.addEventListener('click', () => {
//   playPauseButton.classList.toggle('playing');
//   if (playPauseButton.classList.contains('playing')) {
//     videoElement.play();
//     playPauseButton.style.opacity = '0';
//   }
//   else {
//     videoElement.pause();
//     playPauseButton.style.opacity = '1';
//   }
// });

// videoElement.addEventListener('ended', () => {
//   playPauseButton.classList.remove('playing');
//   playPauseButton.style.opacity = '1';
// });

