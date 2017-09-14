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
	$(this).siblings().removeClass('active-cat');
	$(this).addClass('active-cat');
	
	var activeIndex = $(this).index() + 1; // +1 because nth-child indexes start from 1
	sessionStorage.setItem('selected', activeIndex); // save active index to session storage

	// filter
	var filterValue = $(this).attr('data-filter');
	$grid.isotope({ filter: filterValue });
	$grid.isotope(); // FIX to remove whitespace between elements until resize
});

// on document load add active-cat class to the element with a stored index
$(document).ready(function() {
	var activeIndex = sessionStorage.getItem('selected'); // get active index from session storage
	
	if (!activeIndex) { // if storage is empty
		$('.filter-button-group button:nth-child(' + 1 + ')').addClass('active-cat');
	} else {
		$('.filter-button-group button:nth-child(' + activeIndex + ')').addClass('active-cat');
 	}
 	
 	// filter
 	var filterVal = $('.active-cat').attr('data-filter');
 	$grid.isotope({ filter: filterVal });
});


// http://stackoverflow.com/questions/26549051/isotope-whitespace-between-elements-until-resize

// https://stackoverflow.com/questions/20595982/how-to-use-local-storage-for-active-class
