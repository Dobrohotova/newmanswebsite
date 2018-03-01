var firstclick = true;
$('#nasa').hide();
$('#esa').hide();
$(document).ready(function () {

	$(window).scroll(function () {
		if ($(window).scrollTop() >= 550) {
			$('.buttons').addClass('navbar-fixed-top')
			&& $('.top_button').addClass('shrink');
		}
		else {
			$('.buttons').removeClass('navbar-fixed-top')
			&& $('.top_button').removeClass('shrink');
		}
		if ($(window).scrollTop() >= 550) {
			$('.navbar').addClass('navbar-default');
		} else {
			$('.navbar').removeClass('navbar-default');
		}
	});

	$('.top_button').on('click', function () {
		$('.top_button').removeClass('activeButton');
		$(this).toggleClass('activeButton');
	});


	$('#nasa_button').on("click", function () {
		$('#nasa_nav').addClass('show').removeClass('hide');
		$('#esa_nav').addClass('hide').removeClass('show');
		$('#nasa').fadeIn();
		$('#esa').hide();
		if(firstclick){
			firstclick = false;
			$('html, body').animate({
				scrollTop: $('#nasa').offset().top - 200
			}, 1000);
		}
	});

	$('#esa_button').on("click", function () {
		$('#esa_nav').addClass('show').removeClass('hide');
		$('#nasa_nav').addClass('hide').removeClass('show');
		$('#esa').fadeIn();
		$('#nasa').hide();
		if(firstclick){
			firstclick = false;
			$('html, body').animate({
				scrollTop: $('#esa').offset().top - 200
			}, 1000);
		}
	});

	function scrollNav() {
		$('.nav a').click(function () {
			//Toggle Class
			$(".active").removeClass("active");
			$(this).closest('li').addClass("active");
			var theClass = $(this).attr("class");
			$('.' + theClass).parent('li').addClass('active');
			//Animate
			$('html, body').stop().animate({
				scrollTop: $($(this).attr('href')).offset().top - 160
			}, 400);
			return false;
		});
		$('.scrollTop a').scrollTop();
	}

	scrollNav();
});