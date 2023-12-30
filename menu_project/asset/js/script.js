const menu = [

{
	id: 1,
	title: "Buttermilk Pancake",
	category: "breakfast",
	price: 15.99,
	img: "asset/img/1.jpg",
	desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`
},
{
	id: 2,
	title: "Dinner Double",
	category: "lunch",
	price: 13.99,
	img: "asset/img/2.jpg",
	desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`
},
{
	id: 3,
	title: "Sunder Klafe",
	category: "breakfast",
	price: 10.99,
	img: "asset/img/3.jpg",
	desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`
},
{
	id: 4,
	title: "Buttermilk Pancake",
	category: "breakfast",
	price: 20.99,
	img: "asset/img/4.jpg",
	desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`
},
{
	id: 5,
	title: "Buttermilk Pancake",
	category: "shakes",
	price: 11.99,
	img: "asset/img/5.jpg",
	desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`
},
{
	id: 6,
	title: "Buttermilk Pancake",
	category: "lunch",
	price: 23.99,
	img: "asset/img/6.jpg",
	desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`
},
{
	id: 7,
	title: "Buttermilk Pancake",
	category: "breakfast",
	price: 12.99,
	img: "asset/img/7.jpg",
	desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`
},
{
	id: 8,
	title: "Buttermilk Pancake",
	category: "breakfast",
	price: 17.99,
	img: "asset/img/8.jpg",
	desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`
},
{
	id: 9,
	title: "Buttermilk Pancake",
	category: "breakfast",
	price: 30.99,
	img: "asset/img/9.jpg",
	desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`
}


]
const sectionCenter = document.querySelector("#product-center");
const filter_btn = document.querySelectorAll(".btn");
//console.log(filter_btn)

// loading items
window.addEventListener("DOMContentLoaded", function(){
	displayMenuProduct(menu)
})
//console.log(sectionCenter)

filter_btn.forEach((btn) => {
	btn.addEventListener("click", function(e){
		let category = e.currentTarget.dataset.id;
		let menuCategory = menu.filter((menuItem)=>{
			if(menuItem.category === category){
				return menuItem;
			}
		})
		if(category === "All"){
			displayMenuProduct(menu); 
		}else{
			displayMenuProduct(menuCategory)
		}
	})
})

function displayMenuProduct(products){
	let displayProduct = products.map((item) => {
		return `
		<div class="flex-item">
							<div class="product-img"><img src="${item.img}"></div>
							<div class="product-info">
								<div class="product-text">
									<p class="name">${item.title}</p>
									<p class="price">$${item.price}</p>
								</div>
								<hr>
								<p class="product-detail">
									${item.desc}
										
								</p>
							</div>
						</div>
		`;
	})
	displayProduct = displayProduct.join("")
	sectionCenter.innerHTML = displayProduct;
}