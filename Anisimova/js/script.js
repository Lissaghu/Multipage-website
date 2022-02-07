$('.sliders').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	dots: false,
	swipe: false,
	fade: true,
	autoplay: true,
	speed: 900,
	autoplaySpeed: 12000,
	infinite: false,
	cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
	pauseOnHover: false,
	pauseOnFocus: false
});

if (document.querySelectorAll(".hamb").length > 0) {
	document.querySelector(".hamb").onclick = toggleMobileMenu;
  }
  function toggleMobileMenu() {
	document.querySelector("html").classList.toggle("menu_open");
  }
  
