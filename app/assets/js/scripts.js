$("documet").ready(function() {

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
		$(".main-loader .line").addClass("max-width");
		setTimeout(function () {

			$(".main-loader .line").addClass("max-height");
			setTimeout(function () {

				$(".main-loader .load-img").addClass("visible");
				setTimeout(function () {

					$(".main-loader").delay(1350).addClass('loaded');

				}, 500);
			}, 800);
		}, 700);

		$('.open_menu_btn').click(function(){
			if ($('nav').hasClass('opened_menu')) {
				$('nav, body').removeClass('opened_menu');
				$(this).removeClass('opened_btn');
			}else{
				$('nav, body').addClass('opened_menu');
				$(this).addClass('opened_btn');
			}
		})

		$('.open_dropdown').click(function(){
			if ($(this).hasClass('opened')) {
				$(this).removeClass('opened');
			}else{
				$(this).addClass('opened');
			}
		})


		$(window).scroll(function(e){
			var body = e.target.body, scrollT = $(this).scrollTop();
			if (body.clientWidth < 600) {
				if (scrollT > 65) {
					$('.header_bg').css({
						'top': "0",
						'opacity': '1'
					});
					$('.open_menu_btn').addClass('grey');
				}else{
					$('.header_bg').css({
						'top': `-65px`,
					});
					$('.open_menu_btn').removeClass('grey');
				}
			}
			

			if (body.clientWidth < 425 && window.innerHeight > 450 ) {
				if (scrollT < 140) {
					if (scrollT > 65) {
						background_mobile( scrollT === 0 ? "" : `${scrollT}px`, `calc(100vh - ${scrollT}px`, `center ${scrollT}px`)
					}else{
						background_mobile(scrollT === 0 ? "" : `${scrollT}px`, `calc(100vh - ${scrollT}px`, `center ${scrollT}px`)
					}
				}else{
					background_mobile('140px', 'calc(100vh - 140px)', 'center 140px')
				}
			}else{
				background_mobile('', '', '')
			}
		});


		function background_mobile( pt, height, bgp) {
			$('.discover_city .background_mobile').css({
				'padding-top': pt,
				'height': height,
				'background-position': bgp
			});
		}

	})