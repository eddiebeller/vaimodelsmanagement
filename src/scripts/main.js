document.querySelector('#nav-icon').addEventListener('click', () => {
  document.body.classList.toggle('menu-expanded');
  document.querySelector('#nav-icon').classList.toggle('open');
  document.querySelector('.mobile-nav').classList.toggle('menu-opened');
});

$(document).ready(function () {
  $('.init').slick({
    slidesToScroll: 1,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: false,
    arrows: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
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
          centerPadding: '60px',
        },
      },
    ],
  });
});
