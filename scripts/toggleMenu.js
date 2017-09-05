// Toggle Navbar Menu

var navElem = document.getElementById("topnav");
var iconElem = document.getElementById("hamburger-icon");
iconElem.addEventListener("click", toggleMenu);

function toggleMenu() {
	if (navElem.className === "navbar") {
		navElem.className += " responsive";
		iconElem.children[0].className = "fa fa-times";
	} else {
		navElem.className = "navbar";
		iconElem.children[0].className = "fa fa-bars";
	}
}

var contactElem = document.getElementById("contact-link");
contactElem.addEventListener("click", toggleMenuOnLink); // close menu when Contact clicked

var homeElem = document.getElementById("home-link");
homeElem.addEventListener("click", toggleMenuOnLink); // close menu when Home clicked

var topElem = document.getElementById("up-btn-s");
topElem.addEventListener("click", toggleMenuOnLink); // close menu when Top button clicked

function toggleMenuOnLink() {
	if (iconElem.children[0].className === "fa fa-times") {
		navElem.className = "navbar";
		iconElem.children[0].className = "fa fa-bars";
	}
}

