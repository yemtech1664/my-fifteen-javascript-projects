let color = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let btn = document.getElementById("btn");
let colorSpace = document.getElementById("color");

btn.addEventListener("click", function(){
	let bgColor = getRandom(6);
	document.body.style.backgroundColor = bgColor;
	colorSpace.textContent = bgColor;

})
function getRandom(n){
	let colorCode = "#";
 for(let i = 0; i < n; i++){
 	let randomNumber = Math.floor(Math.random()*color.length);
 	colorCode += color[randomNumber]
 }
 return colorCode;
}
//console.log();