// const header = document.querySelector("header");
 console.log(window.pageYOffset)

let menuIcon = document.querySelector(".menu-icon")
const close = document.querySelector(".close")
const menu = document.querySelector(".menu");
const nav_bar = document.querySelector("nav")
const header = document.querySelector("header");
//console.log(menuIcon)
const height = nav_bar.getBoundingClientRect().height;
let windowHeight = window.pageYOffset;

const arrow = document.querySelector(".arrow-div");
let link_tag = document.querySelectorAll(".link-tag");
console.log(link_tag)
menuIcon.addEventListener("click", function(){
	menu.classList.add("open")
})

close.addEventListener("click", function(){
	menu.classList.remove("open")
})

window.addEventListener("scroll", function(){
	let windowHeight = window.pageYOffset;
	// let height = nav_bar.height
	if(windowHeight > height){
		header.classList.add("nav-fixed"); 
		
	}else{
		header.classList.remove("nav-fixed");
		
	}

	if(windowHeight > 500){
	arrow.classList.add("open-arrow")
}else{
	arrow.classList.remove("open-arrow")
}

})

link_tag.forEach((link) => {
	link.addEventListener("click", function(e){
		let id = e.currentTarget.getAttribute("href").slice(1);
		let element = document.getElementById(id);
		
		//calculate the height
		const navHeight = header.getBoundingClientRect().height;
		const menuContainerHeight = menu.getBoundingClientRect().height;
		let fixedCheck = header.classList.contains("nav-fixed");
		console.log(navHeight)
		let position = element.offsetTop - navHeight;
		if(!fixedCheck){
			position = position - navHeight;
		}
		if(navHeight >82){
			position = position+menuContainerHeight
		}
		window.scrollTo({
			left: 0,
			top: position
		})
		//menu.style.left = "-100%";
	})
})