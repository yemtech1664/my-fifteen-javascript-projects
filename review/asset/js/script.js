const reviews = [
{
	id:1,
	name: "Susan Smith",
	job: "Web Developer",
	img: "asset/img/susan.jpg",
	text: 
	"I'm baby meggings twee health goth +1. Bicycle rights tumeric chart reuse before they sold out chamberry pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four  dollar toast everyday carry",
},
{
	id: 2,
	name: "anna johnson",
	job: "web designer",
	img: "asset/img/ann.jpg",
	text: "The JavaScript console is an essential tool for web development. Learn new and fun ways to use the console to display data and debug your code."
},
{
	id: 3,
	name: "Peter jones",
	job: "intern",
	img: "asset/img/peter.jpg",
	text: "Learn how to deploy a Node.js application on Vultr using PM2 to create persistent services. This guide shows how to efficiently use resources via PM2 cluster mode. It also covers Nginx server setup and SSL security."
},
{
	id: 4,
	name: "yemtech developer",
	job: "software engineer",
	img: "asset/img/yemtech.jpg",
	text: "Discover essential tips and tricks for using Visual Studio Code (VS Code), a powerful IDE. Learn how to leverage its integrated editing features and Git support, and explore a few extensions"
}
];

// get necessary element
let personImg = document.querySelector("#person-img");
let author = document.querySelector("#author");
let job = document.querySelector("#job");
let info = document.querySelector("#info");


let prev = document.querySelector("#prev-btn");
let next = document.querySelector("#next-btn");
let randomBtn = document.querySelector("#random")

let currentNum = 0;


window.addEventListener("DOMContentLoaded", function(){
	
	getPerson(currentNum)
	
})

function getPerson(n){
	let person =  reviews[n];

	personImg.src = person.img;
	author.textContent = person.name;
	job.textContent = person.job;
	info.textContent = person.text;
}




//next
next.addEventListener("click", function(){
	currentNum++;
	
	if(currentNum > reviews.length-1){
		currentNum = 0;
	}
	getPerson(currentNum);
})

//prev
prev.addEventListener("click", function(){
	currentNum--;
	
	if(currentNum < 0){
		currentNum = reviews.length-1
	}
	getPerson(currentNum);
})
randomBtn.addEventListener("click", function(){
	let randomNumber = Math.floor(Math.random() * reviews.length);
	
	getPerson(randomNumber)
})


