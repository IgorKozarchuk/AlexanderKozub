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
	var slideImages = document.querySelectorAll(".mySlides img")
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

	slides[slideIndex-1].style.display = "block";
	captionText.innerHTML = slideImages[slideIndex-1].alt;
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

showSlides(slideIndex);

// use Esc to exit full screen mode
document.onkeydown = function(event) {
	event = event || window.event;
	if (event.keyCode == "27") { // Esc pressed
		closeModal();
	}
}
