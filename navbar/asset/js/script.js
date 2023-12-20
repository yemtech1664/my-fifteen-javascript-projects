let menuIcon = document.querySelector("#menuIcon");
let menuBar = document.querySelector(".links");
menuIcon.addEventListener("click", function(){
	menuBar.classList.toggle("open")
	//console.log(menuBar.classList)
})
//console.log(menuBar)