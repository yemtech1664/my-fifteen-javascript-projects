let color = ["blue", "red", "green", "teal"];
let colorSpace = document.getElementById("color");
let btn = document.getElementById("btn");
btn.addEventListener("click", function(){
	let randomNumber = getRandom();
	document.body.style.backgroundColor = color[randomNumber]
	colorSpace.textContent = color[randomNumber]
})

function getRandom(){
	return Math.floor(Math.random() * color.length)
}

console.log(randomNumber)