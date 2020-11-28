// JavaScript Document
var hamburgerKnop = document.querySelector('#hamburgerknop');
var navigatie = document.querySelector('#navigatie');
var section = document.querySelector('section');

hamburgerKnop.addEventListener('click', uitklappen);

function uitklappen() {
	if (navigatie.style.opacity === '1'){
		navigatie.style.opacity = '0';
	} else {
		navigatie.style.opacity = '1';
	}
	navigatie.classList.toggle ('actief');
	section.classList.toggle ('donker');
}

