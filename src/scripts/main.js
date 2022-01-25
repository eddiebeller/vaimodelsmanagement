$(document).ready(function () {
  $(".init").slick({
    slidesToScroll: 1,
    slidesToShow: 3,
    arrows: true,
    infinite: true,
    cssEase: "linear",
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
          centerPadding: "60px",
          centerMode: true,
        },
      },
    ],
  });
});
$(window).scroll(function () {
  let scroll = $(window).scrollTop();

  if (scroll >= 1) {
    $(".header").addClass("scrolled");
  } else {
    $(".header").removeClass("scrolled");
  }
});

$(".js-filter").on("click", function () {
  let $gender = $(this).attr("data-gender");
  if ($gender == "all") {
    $(".js-filterable").removeClass("is-hidden");
  } else {
    $(".js-filterable").addClass("is-hidden");
    $(".js-filterable[data-gender=" + $gender + "]").removeClass("is-hidden");
  }
});

document.querySelector("#nav-icon").addEventListener("click", () => {
  document.body.classList.toggle("menu-expanded");
  document.querySelector("#nav-icon").classList.toggle("open");
  document.querySelector(".mobile-nav").classList.toggle("menu-opened");
});

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [45.03547, 38.975313],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 12,
    controls: ["zoomControl"],
  });
}
