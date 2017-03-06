var json={
	"paises": [
	    {
	      "classe": "a",
	      "nome": "África do Sul",
	      "classeimg": 'africa',
	      "url": "../img/africa.jpg"
	    }
    
    ]
}

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

function scrollTarget(){
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
}

function navbarScroll(){
	var scrollPos = $(window).scrollTop();
	navbar = $('.navbar');
	if (scrollPos > 50) {
		navbar.addClass('alt-color');
	} else {
		navbar.removeClass('alt-color');
	}
}

function icon() {
    var navClass = $("#navbar").attr('class');
    if (navClass == "navbar" || navClass == "navbar alt-color") {
        $("#navbar").addClass("responsive");
    } else {
        $("#navbar").removeClass("responsive").addClass("navbar");
    }
}

function menuLetras(elem){
	var letra = $(elem).val();
	$('.'+letra).toggle(800);
	var classe = $(elem).attr('class');
	if(classe == 'letras letras-active'){
		$(elem).removeClass('letras-active');
	}
	else{
		$(elem).addClass('letras-active');
	}	
}

function actions(){
	$(window).scroll(function() {
		navbarScroll();
	});
	scrollTarget();
	$("#icon").on("click",function(){
		icon();
	})
	$(".letras").on("click", function(){
		menuLetras(this);
	});
	$('#btn-modal').click(function(){    
	    $('#modal-paises').fadeIn('slow');
	});
	$('#fecha-modal').click(function(){
		$('#modal-paises').fadeOut(500);
	})
}

$(document).ready(function(){
	window.location = "#titulo";
	navbarScroll();
	actions();

	$('section').fadeIn(1500);
});