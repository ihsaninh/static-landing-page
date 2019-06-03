$(document).ready(function() {

	$(window).scroll(function() {
		const scroll = $(this).scrollTop();

		// image show 
		if(scroll > $('.gallery').offset().top - 400) {
			$('.gallery .thumb').each(function(i) {
				setTimeout(function() {
					$('.gallery .thumb').eq(i).addClass('show');
				}, 100 * (i + 1));
			});
		}

		// discover show
		if(scroll > 200) {
			$('.discover-img, .discover-desc').addClass('show');
		}

		// discover show
		if(scroll > 100) {
			$('.navbar').addClass('fixed-top');
			$('.nav-link, .navbar-brand').attr('style', 'color: #666161 !important');
			$('.nav-link').css('text-transform', 'capitalize');
			$('.navbar-nav, .navbar-brand').css('margin-top', '0');
		} else {
			$('.navbar').removeClass('fixed-top');
			$('.nav-link, .navbar-brand').attr('style', 'color: white !important');
			$('.navbar-nav, .navbar-brand').css('margin-top', '10px');
		}

		// event show
		if (scroll > $('.event').offset().top - 500) {
			$('.event-img, .event-desc').addClass('show');
		}

		// subscribe show
		if (scroll > $('.subscribe').offset().top - 500) {
			$('.subscribe').addClass('show');
		}

		// location show
		if (scroll > $('.location').offset().top - 700) {
			$('.location').addClass('show');
		}

		// desc gallery
		if (scroll > $('.desc-gallery').offset().top - 700) {
			$('.desc-gallery').addClass('show');
		}

	});

	// jumbotron info show
	$(window).on('load', function() {
		$('.jumbotron-info').addClass('show');
	})

});