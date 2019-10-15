$("document").ready(function() {
	
	$('#header').load('../../partials/header.html')

	$('a[href*="#"]')
	.not('[href="#"]')
	.not('[href="#0"]').click(function(event) {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname){
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				event.preventDefault();
				$('html, body').animate({scrollTop: target.offset().top-80 }, 1300);
				return false;
			}
		}
	});

		// preloader
		// $(".main-loader .line").addClass("max-width");
		// setTimeout(function () {
		//
		// 	$(".main-loader .line").addClass("max-height");
		// 	setTimeout(function () {
		//
		// 		$(".main-loader .load-img").addClass("visible");
		// 		setTimeout(function () {
		//
		// 			$(".main-loader").delay(1350).addClass('loaded');
		//
		// 		}, 500);
		// 	}, 800);
		// }, 700);
	
		$(window).scroll(function(e){
			var body = e.target.body, scrollT = $(this).scrollTop();
			var maxScrollTop = body.dataset.scroll ? body.dataset.scroll : 140;
			if (body.clientWidth < 425 && window.innerHeight > 450 ) {
				if (scrollT < maxScrollTop) {
					if (scrollT > 65) {
						background_mobile( scrollT === 0 ? "" : `${scrollT}px`, `calc(100vh - ${scrollT}px`, `center ${scrollT}px`)
					}else{
						background_mobile(scrollT === 0 ? "" : `${scrollT}px`, `calc(100vh - ${scrollT}px`, `center ${scrollT}px`)
					}
				}else{
					background_mobile(`${maxScrollTop}px`, `calc(100vh - ${maxScrollTop}px)`, `center ${maxScrollTop}px`)
				}
			}else{
				background_mobile('', '', '')
			}
		});
		
		function background_mobile( pt, height, bgp) {
			$('.animated.background_mobile').css({
				'padding-top': pt,
				'height': height,
				'background-position': bgp
			});
			$('.fixed-content.background_mobile').css({
				'height': height,
			});
		}

	})