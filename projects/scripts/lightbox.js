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
		dots[i].className = dots[i].className.replace(" active", "");
	}

	slides[slideIndex-1].style.display = "block";
	numbers[slideIndex-1].innerHTML = slideIndex + "/" + numbers.length;
	dots[slideIndex-1].className += " active";
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
