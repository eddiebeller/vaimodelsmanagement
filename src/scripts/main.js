document.querySelector('#nav-icon').addEventListener('click', () => {
	document.body.classList.toggle('menu-expanded');
	document.querySelector('#nav-icon').classList.toggle('open');
	document.querySelector('.mobile-nav').classList.toggle('menu-opened');
});

$(document).ready(function () {
	$('.init').slick({
		slidesToScroll: 1,
		centerMode: false,
		slidesToShow: 3,
		arrows: true,
	});
});
