var json={
	"paises": [
	    { "classe": "a", "nome": "África do Sul", "classeimg": 'africa', "url": "africa.jpg" },
	    { "classe": "a", "nome": "Alemanha", "classeimg": 'alemanha', "url": "alemanha.jpg" },
	    { "classe": "a", "nome": "Argentina", "classeimg": 'argentina', "url": "argentina.jpg" },
	    { "classe": "a", "nome": 'Austrália', "classeimg": 'australia', "url": "australia.jpg" },
	    { "classe": "b", "nome": 'Barbados', "classeimg": 'barbados', "url": "barbados.jpg" },
	    { "classe": "b", "nome": 'Bélgica', "classeimg": 'belgica', "url": "belgica.jpg" },
	    { "classe": "b", "nome": 'Bermudas', "classeimg": 'bermudas', "url": "bermudas.jpg" },
	    { "classe": "b", "nome": 'Bielorrússia', "classeimg": 'bielorrussia', "url": "bielorrussia.jpg" },
	    { "classe": "b", "nome": 'Bolívia', "classeimg": 'bolivia', "url": "bolivia.jpg" },
	    { "classe": "b", "nome": 'Bósnia e Hezergovina', "classeimg": 'bosnia', "url": "bosnia.jpg" },
	    { "classe": "b", "nome": 'Brasil', "classeimg": 'brasil', "url": "brasil.jpg" }, 
	    { "classe": "b", "nome": 'Bulgária', "classeimg": 'bulgaria', "url": "bulgaria.jpg" },
	    { "classe": "c", "nome": 'Cabo Verde', "classeimg": 'caboverde', "url": "caboverde.jpg" }, 
	    { "classe": "c", "nome": 'Canadá', "classeimg": 'canada', "url": "canada.jpg" },
	    { "classe": "c", "nome": 'Chile', "classeimg": 'chile', "url": "chile.jpg" },
	    { "classe": "c", "nome": 'China', "classeimg": 'china', "url": "china.jpg" },    
	    { "classe": "d", "nome": 'Dinamarca', "classeimg": 'dinamarca', "url": "dinamarca.jpg" },    
	    { "classe": "e", "nome": 'Egito', "classeimg": 'egito', "url": "egito.jpg" },  
	    { "classe": "e", "nome": 'Espanha', "classeimg": 'espanha', "url": "espanha.jpg" },  
	    { "classe": "e", "nome": 'Estados Unidos', "classeimg": 'eua', "url": "eua.jpg" },   
	    { "classe": "f", "nome": 'Filipinas', "classeimg": 'filipinas', "url": "filipinas.jpg" },   
	    { "classe": "f", "nome": 'França', "classeimg": 'frança', "url": "frança.jpg" },   
	    { "classe": "g", "nome": 'Grécia', "classeimg": 'grecia', "url": "grecia.jpg" },  
	    { "classe": "i", "nome": 'Índia', "classeimg": 'india', "url": "india.png" },   
	    { "classe": "i", "nome": 'Irlanda', "classeimg": 'irlanda', "url": "irlanda.jpg" },
	    { "classe": "i", "nome": 'Itália', "classeimg": 'italia', "url": "italia.jpg" },
	    { "classe": "j", "nome": 'Japão', "classeimg": 'japao', "url": "japao.jpg" },   
	    { "classe": "l", "nome": 'Luxemburgo', "classeimg": 'luxemburgo', "url": "luxemburgo.jpg" },
	    { "classe": "m", "nome": 'Maldivas', "classeimg": 'maldivas', "url": "maldivas.jpg" },
	    { "classe": "m", "nome": 'Marrocos', "classeimg": 'marrocos', "url": "marrocos.jpg" },
	    { "classe": "m", "nome": 'México', "classeimg": 'mexico', "url": "mexico.jpg" },
	    { "classe": "n", "nome": 'Noruega', "classeimg": 'noruega', "url": "noruega.jpg" },  
	    { "classe": "p", "nome": 'Peru', "classeimg": 'peru', "url": "peru.png" },  
	    { "classe": "p", "nome": 'Polônia', "classeimg": 'polonia', "url": "polonia.jpg" },  
	    { "classe": "p", "nome": 'Portugal', "classeimg": 'portugal', "url": "portugal.jpg" },  
	    { "classe": "r", "nome": 'Reino Unido', "classeimg": 'reinounido', "url": "reinounido.png" },  
	    { "classe": "r", "nome": 'Rússia', "classeimg": 'russia', "url": "russia.jpg" },  
	    { "classe": "s", "nome": 'Sérvia', "classeimg": 'servia', "url": "servia.jpg" },  
	    { "classe": "s", "nome": 'Suíça', "classeimg": 'suiça', "url": "suiça.jpg" },  
	    { "classe": "t", "nome": 'Turquia', "classeimg": 'turquia', "url": "turquia.jpg" } 
    ],
    "letras":
    [
    	{ "valor": "a"},{ "valor": "b"},{ "valor": "c"},{ "valor": "d"},{ "valor": "e"},{ "valor": "f"},{ "valor": "g"},{ "valor": "i"},{ "valor": "j"},{ "valor": "l"},{ "valor": "m"},{ "valor": "n"},{ "valor": "p"},{ "valor": "r"},{ "valor": "s"},{ "valor": "t"}
    ]
}

var paises = json.paises;
var letras = json.letras;

function criaMenuLetras(){
	for(var i=0; i<letras.length; i++){
		$(".menu-letras").append('<button class="letras" value="'+letras[i].valor+'">'+letras[i].valor.toUpperCase()+'</button>');
	}
}

function imagens(){	
	for(var i=0; i<paises.length; i++){
		$("#corpoPaises").append('<div class="box '+paises[i].classe+'"><a id="btn-modal"><div class="titulo-img">'+paises[i].nome+'</div><div class="fotos-paises '+paises[i].classeimg+'"></div></a></div>');
		$("."+paises[i].classeimg).css({'background-image':'url(img/'+paises[i].url+')'});
	}
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

function corNavbar(){
	var scrollPos = $(window).scrollTop();
	navbar = $('.navbar');
	if (scrollPos > 50) {
		navbar.addClass('alt-color');
	} else {
		navbar.removeClass('alt-color');
	}
}

function icone() {
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
		icone();
	})
	$(".letras").on("click", function(){
		menuLetras(this);
	});
	$('#btn-modal').on('click', function(){    
	    $('#modal-paises').fadeIn('slow');
	});
	$('#fecha-modal').click(function(){
		$('#modal-paises').fadeOut(500);
	})
}

$(document).ready(function(){
	criaMenuLetras();
	imagens();
	window.location = "#titulo";
	corNavbar();
	actions();
	$('section').fadeIn(1500);
});