let menuIcon = document.querySelector(".menu-icon");
let closeIcon = document.querySelector(".close-icon");
let sideBar = document.querySelector(".side-bar");
menuIcon.addEventListener("click", function(){
	sideBar.classList.add("toggle-class");
	//console.log(sideBar.classList)
})

closeIcon.addEventListener("click", function(){
	sideBar.classList.remove("toggle-class");
})

//console.log(closeIcon)