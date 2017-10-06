// Lightbox (Modal Image Gallery)

var modal = document.getElementById("myModal");

function openModal() {
	modal.style.display = "block";
}

function closeModal() {
	modal.style.display = "none";
}

window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}

var slideIndex = 1;

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var numbers = document.getElementsByClassName("slideNumber");
	var slideImages = document.querySelectorAll(".mySlides img")
	var dots = document.getElementsByClassName("dot");
	var captionText = document.getElementById("caption");

	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (var i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active-slide", "");
	}

	slides[slideIndex-1].style.display = "block";
	numbers[slideIndex-1].innerHTML = slideIndex + "/" + numbers.length;
	dots[slideIndex-1].className += " active-slide";
	captionText.innerHTML = slideImages[slideIndex-1].alt;
}

function plusSlide(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

showSlides(slideIndex);

// use arrow keys to change image and Esc to exit full screen mode
document.onkeydown = function(event) {
	event = event || window.event;
	if (event.keyCode == "37") { // left key pressed
		plusSlide(-1); // show previous image
	} else if (event.keyCode == "39") {
		plusSlide(1); // show next image
	} else if (event.keyCode == "27") { // Esc pressed
		closeModal();
	}
}

// TOUCH-EVENTS SINGLE-FINGER SWIPE-SENSING JAVASCRIPT
// https://stackoverflow.com/questions/2264072/detect-a-finger-swipe-through-javascript-on-the-iphone-and-android/23230280#23230280

var targetElemArray = document.querySelectorAll(".mySlides img");

targetElemArray.forEach(function (elem) {
	elem.addEventListener('touchstart', handleTouchStart, false);        
	elem.addEventListener('touchmove', handleTouchMove, false);
});

// document.addEventListener('touchstart', handleTouchStart, false);       
// document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;                                                        

function handleTouchStart(evt) {                                         
    xDown = evt.touches[0].clientX;                                      
    yDown = evt.touches[0].clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) { /* left swipe */ 
            plusSlide(1);
        } else { /* right swipe */
            plusSlide(-1);
        }                       
    } else {
        if ( yDiff > 0 ) { /* up swipe */ 
            
        } else { /* down swipe */
           
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};