$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#scroll_to_top').fadeIn();
			} else {
				$('#scroll_to_top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#scroll_to_top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
});