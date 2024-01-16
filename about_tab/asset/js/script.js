const btn_group = document.querySelectorAll(".btn-tab");
const contents = document.querySelectorAll(".about-content");
const about = document.querySelector(".about");
about.addEventListener("click", function(e){
	let id = e.target.dataset.id;
	if(id){
		btn_group.forEach((btn) => {
			btn.classList.remove("active")
			e.target.classList.add("active")
		})
		//contents
		contents.forEach((content)=>{
			content.classList.remove("active")
		})
		document.getElementById(id).classList.add("active")
	}
})