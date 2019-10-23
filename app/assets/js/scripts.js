$("document").ready(function() {
	
	$('#header').load('../../partials/header.html');
	$('#footer').load('../../partials/footer.html');

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
	
	var checkboxSelected = [];
	$('.grid-item .item input').click(function () {
		var value = $(this).data('value');
		if (value){
			if (checkboxSelected.length < 1 || !checkboxSelected.includes(value)){
				checkboxSelected.push(value);
				$(this).siblings("span").text(checkboxSelected.indexOf(value) + 1);
				$(this).parent().addClass('selected')
			}else if (checkboxSelected.includes(value)){
				checkboxSelected.splice(checkboxSelected.indexOf(value), 1);
				$(this).parent().removeClass('selected');
				$('.grid-item .item input').each(function () {
					if (checkboxSelected.includes($(this).data('value'))){
						$(this).siblings("span").text(checkboxSelected.indexOf($(this).data('value')) + 1);
					}
				})
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
		var procentStartEndAnim = scrollT * 100 / maxScrollTop;
		if (imgAnimated){
			initialw = imgAnimated.dataset.initialw;
			expectedw = imgAnimated.dataset.expectedw;
			difference = (initialw - expectedw) * procentStartEndAnim / 100;
		}
		
		console.log(difference);
		
		if (body.clientWidth < 425 && window.innerHeight > 450 ) {
			if (scrollT < maxScrollTop) {
				background_mobile(`calc(100vh - ${scrollT}px`,initialw - difference)
			}else{
				background_mobile( `calc(100vh - ${maxScrollTop}px)`,initialw - (initialw - expectedw))
			}
		}else{
			background_mobile( '', '')
		}
	});
	
	function background_mobile( height, imgW) {
		$('img.animated-img').css({'width': `${imgW}px`});
		$('.fixed-content.background_mobile').css({
			'height': height,
		});
	}
});