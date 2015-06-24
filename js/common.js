$(document).ready(function() {

	$('.single-item').slick({
		dots: true,
		speed: 300,
		autoplay: true,
		autoplaySpeed: 5000,
		draggable: false,
		arrows: false,
		fade: true,
		pauseOnHover: false
	});

	$("#prices .square").animated("fadeInUp", "fadeOutDown");

	$("input, select, textarea").not("[type=submit]").jqBootstrapValidation();

	$(".top_menu ul a").mPageScroll2id();
	$(".btn-group ul a").mPageScroll2id();
	$(".main_head a").mPageScroll2id();

});