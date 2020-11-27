// JavaScript Document
var hamburgerKnop = document.querySelector('#hamburgerknop');
var navigatie = document.querySelector('#navigatie');

hamburgerKnop.addEventListener('click', uitklappen);

function uitklappen() {
	navigatie.classList.toggle('actief');
}
