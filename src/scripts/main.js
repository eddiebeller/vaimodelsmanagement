$(document).ready(function () {
  $('.init').slick({
    slidesToScroll: 1,
    slidesToShow: 3,
    arrows: true,
    infinite: true,
    cssEase: 'linear',
    speed: 550,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          arrows: false,
        },
      },

      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerPadding: '60px',
          centerMode: true,
        },
      },
    ],
  });
});

document.querySelector('#nav-icon').addEventListener('click', () => {
  document.body.classList.toggle('menu-expanded');
  document.querySelector('#nav-icon').classList.toggle('open');
  document.querySelector('.mobile-nav').classList.toggle('menu-opened');
});
