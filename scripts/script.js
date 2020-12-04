// JavaScript Document
var hamburgerKnop = document.querySelector('#hamburgerknop');
var navigatie = document.querySelector('#navigatie');
var section = document.querySelector('section');

hamburgerKnop.addEventListener('click', uitklappen);

function uitklappen() {
	document.body.classList.toggle ('actief');
}

