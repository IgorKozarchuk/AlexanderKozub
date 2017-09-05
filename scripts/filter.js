/*
Filter categories using isotope
http://isotope.metafizzy.co/index.html
*/

var $grid = $('.grid').imagesLoaded(function() { // runs when images loaded (prevents images from overlapping)
	// Initialize
	$grid.isotope({
		itemSelector: '.grid-item',
		layoutMode: 'fitRows'
	});
	$grid.isotope(); // FIX to remove whitespace between elements until resize
	$('.grid-item-image').animate({opacity: 1}, 'slow');
});

// Filtering
$('.filter-button-group').on('click', 'button', function(event) {
	// toggle active button
	event.preventDefault();
	$(this).addClass('active-cat').siblings().removeClass('active-cat');
	// filter
	var filterValue = $(this).attr('data-filter');
	$grid.isotope({ filter: filterValue });
	$grid.isotope(); // FIX to remove whitespace between elements until resize
});

// http://stackoverflow.com/questions/26549051/isotope-whitespace-between-elements-until-resize