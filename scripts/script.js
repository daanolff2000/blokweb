// JavaScript Document
var hamburger = document.querySelector('#hamburger');

function maakActief() {
	document.body.classList.toggle ('actief');
}

hamburger.addEventListener('click', maakActief);
