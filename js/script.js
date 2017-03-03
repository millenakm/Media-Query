$(document).ready(function(){

	// window.location = "#titulo";

		var scrollPos = $(window).scrollTop();
		navbar = $('.navbar');

		if (scrollPos > 50) {
			navbar.addClass('alt-color');
		} else {
			navbar.removeClass('alt-color');
		}

	$(window).scroll(function() {
		var scrollPos = $(window).scrollTop();
		navbar = $('.navbar');

		if (scrollPos > 50) {
			navbar.addClass('alt-color');
		} else {
			navbar.removeClass('alt-color');
		}
	});
	

	$(document).on("scroll", onScroll);

	$('a[href^="#"]').on('click', function (e) {
		e.preventDefault();
		$(document).off("scroll");
		$('a').each(function () {
			$(this).removeClass('active');
		});
		$(this).addClass('active');
		var target = this.hash,
		$target = $(target);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 1000, 'swing', function () {
			window.location.hash = target;
			$(document).on("scroll", onScroll);
		});
	});
});

function onScroll(event){
	var scrollPos = $(document).scrollTop();
	$('nav a').each(function () {
		var currLink = $(this);
		var refElement = $(currLink.attr("href"));
		if (refElement.position().top-66 <= scrollPos && refElement.position().top -66+ refElement.height() >= scrollPos) {
			$('nav ul li a').removeClass("active");
			currLink.addClass("active");
		}
		else{
			currLink.removeClass("active");
		}
	});
}