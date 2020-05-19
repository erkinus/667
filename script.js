$(document).ready(function() {
	var handstart = Cookies.get('hand');
	if(handstart == 'l') {
		$(this).attr('data-handState', handstart);
		$('.button--menu').addClass('lefty');
		$('.categories--menu').addClass('lefty');
		$('.categories--menu ul').addClass('lefty');
		$('#hand-toggle').text('я правша');
		$('.hand--menu').addClass('order-last').removeClass('lag--').addClass('rag--');
		$('.home--menu').addClass('order-first').removeClass('rag--').addClass('lag--');
	}	
	
	$('.button--menu').click(function() {
		if ($(this).attr('data-menuState') === 'closed') {
			$('body').addClass('fixpos');
			$('#drawer').addClass('open');
			$(this).attr('data-menuState', 'opened');
		} else {
			$('body').removeClass('fixpos');
			$('#drawer').removeClass('open')
			$(this).attr('data-menuState', 'closed');
		}
	});
	
	$('#hand-toggle').click(function() {
		if ($(this).attr('data-handState') === 'r') {
			$('.button--menu').addClass('lefty');
			$('.categories--menu').addClass('lefty');
			$('.categories--menu ul').addClass('lefty');
			$('#hand-toggle').text('я правша');
			$('.hand--menu').addClass('order-last').removeClass('lag--').addClass('rag--');
			$('.home--menu').addClass('order-first').removeClass('rag--').addClass('lag--');
			$(this).attr('data-handState', 'l');
			var hand = $(this).attr('data-handState');
			Cookies.set('hand', hand, {expires: 365, secure: true, domain: 'erkinus.github.io'});
		} else {
			$('.button--menu').removeClass('lefty');
			$('.categories--menu').removeClass('lefty');
			$('.categories--menu ul').removeClass('lefty');
			$('#hand-toggle').text('я левша');
			$('.hand--menu').removeClass('order-last').removeClass('rag--').addClass('lag--');
			$('.home--menu').removeClass('order-first').removeClass('lag--').addClass('rag--');
			$(this).attr('data-handState', 'r');
			var hand = $(this).attr('data-handState');
			Cookies.set('hand', hand, {expires: 365, secure: true, domain: 'erkinus.github.io'});
		}
	})
});
			