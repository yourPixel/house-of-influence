$("document").ready(function() {
	
	$('#header').load('../../partials/header.html');
	$('#footer').load('../../partials/footer.html');
	
	$('.grid').masonry({
		itemSelector: '.grid-item',
		columnWidth: '.grid-sizer'
	});
	
	// $('.grid').masonry('destroy');

	$('a[href*="#"]')
	.not('[href="#"]')
	.not('[href="s#0"]').click(function(event) {
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
	
	$(window).scroll(function(e){
		var body = e.target.body,
			scrollT = $(this).scrollTop(),
		    maxScrollTop = body.dataset.scroll ? body.dataset.scroll : 140,
			imgAnimated = $('.animated-img')[0], difference = 0, initialw = 0, expectedw = 0;
		if (imgAnimated){
			var procentStartEndAnim = scrollT * 100 / maxScrollTop;
			initialw = imgAnimated.dataset.initialw;
			expectedw = imgAnimated.dataset.expectedw;
			difference = (initialw - expectedw) * procentStartEndAnim / 100;
		}
		
		if (body.clientWidth < 425 && window.innerHeight > 450 ) {
			if (scrollT < maxScrollTop) {
				background_mobile(scrollT === 0 ? "" : `${scrollT}px`, `calc(100vh - ${scrollT}px`, `center ${scrollT}px`, initialw - difference)
			}else{
				background_mobile(`${maxScrollTop}px`, `calc(100vh - ${maxScrollTop}px)`, `center ${maxScrollTop}px`, initialw - (initialw - expectedw))
			}
		}else{
			background_mobile('', '', '', '')
		}
	});
	
	function background_mobile( pt, height, bgp, imgW) {
		$('img.animated-img').css({'width': `${imgW}px`});
		$('.animated.background_mobile').css({
			'padding-top': pt,
			'height': height,
			'background-position': bgp
		});
		$('.fixed-content.background_mobile').css({
			'height': height,
		});
	}
});