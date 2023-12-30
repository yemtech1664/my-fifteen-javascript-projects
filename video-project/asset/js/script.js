const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
let switchbtn = document.querySelector(".switch")
btn.addEventListener("click", function(){
	if(!switchbtn.classList.contains("slide")){
		video.pause();
		switchbtn.classList.add("slide");
	}else{
		video.play();
		switchbtn.classList.remove("slide");
	}

})
let preloader = document.querySelector(".preloader");

window.addEventListener("load", function(){
	preloader.classList.add("hide-preloader")
})

console.log(preloader)