// JavaScript Document
var hamburger = document.querySelector('#hamburger');
var mediacontainer = document.querySelectorAll(".media-wrapper");
var videos = document.querySelectorAll('video');

function maakActief() {
	document.body.classList.toggle ('actief');
}

[].forEach.call(videos, function (video){
	video.addEventListener('mouseover', function(){
		video.play();
		video.classList.remove('hidden');
	})
	video.addEventListener('mouseout', function(){
		video.pause();
		video.currentTime = 0;
		video.classList.add('hidden');
	})
});

hamburger.addEventListener('click', maakActief);
