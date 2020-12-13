// JavaScript Document
var hamburger = document.querySelector('#hamburger');

var poster = document.querySelector('.poster');
var video = document.querySelector('video');
var timestamp = document.querySelector('.timestamp-container');

function maakActief() {
	document.body.classList.toggle ('actief');
}

function playVideo() {
	poster.classList.add('hidden');
	video.classList.remove('hidden');
	video.play();
	video.loop = true;
	timestamp.classList.add('hidden');
}

function videoReset() {
	poster.classList.remove('hidden');
	video.classList.add('hidden');
	video.pause();
	video.currentTime = 0;
	timestamp.classList.remove('hidden');
}

hamburger.addEventListener('click', maakActief);
poster.addEventListener('mouseover', playVideo);
video.addEventListener('mouseout', videoReset);
