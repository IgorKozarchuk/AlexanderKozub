jQuery(document).ready(function($) {
	// scroll offset (px) after which the button is shown
	var offset = 150;
	// scroll speed (ms)
	var scrollSpeed = 500;
	// link element
	$backToTopElem = $("#top");
	$backToTopElemSmall = $("#top-small");

	// hide or show button
	$(window).scroll(function() {
		if ($(this).scrollTop() > offset) {
			$backToTopElem.addClass("is-visible");
			$backToTopElemSmall.addClass("is-visible");
		} else {
			$backToTopElem.removeClass("is-visible");
			$backToTopElemSmall.removeClass("is-visible");
		}
	});

	// smooth scroll
	$("#up-btn, #up-btn-s, a[href='#']").click(function(event) {
		event.preventDefault();
		$("html, body").animate({ scrollTop: 0 }, scrollSpeed);
	});

	// scroll to contact
	$("a[href='#footer']").click(function(event) {
		event.preventDefault();
		$("html, body").animate({ scrollTop: $("#footer").offset().top }, scrollSpeed);
	});
});

