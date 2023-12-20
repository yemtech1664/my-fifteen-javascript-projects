let openBtn = document.querySelector(".open-btn");
let closeIcon = document.querySelector(".close");
let modal = document.querySelector(".modal-box");
openBtn.addEventListener("click", function(){
	modal.classList.add("toggle-class");
})

closeIcon.addEventListener("click", function(){
	modal.classList.remove("toggle-class");
})
//console.log(modal)