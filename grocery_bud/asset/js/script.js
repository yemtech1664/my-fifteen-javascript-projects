//select needed elements
const showbox = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-item")
const clrbtn = document.querySelector(".clr-btn")
// edit option
let editElement;
let editFlag = false;
let editID = "";
//addeventlistener

form.addEventListener("submit", addItem);

//clear btn
clrbtn.addEventListener("click", clearItem);

//fuunction
function addItem(e){
	e.preventDefault();
	let value = grocery.value;
	let id = new Date().getTime().toString();
	if(value  && !editFlag){
		//creat element
		const element = document.createElement('div');
		// add class
		element.classList.add('grocery-list');
		//create attribute
		const attr = document.createAttribute('data-id');
		attr.value = id;
		element.setAttributeNode(attr)
		element.innerHTML = `<p class="item">${value}</p>
				<div class="btn-group">
					<button class='edit-btn'><img src="asset/icon/edit.svg"></button>
					<button class='del-btn'><img src="asset/icon/delete.svg"></button>
				</div>`;

		list.appendChild(element);

		const delBtn = document.querySelector(".del-btn");
		const editBtn = document.querySelector(".edit-btn");
		
		delBtn.addEventListener("click", deleteItem);
		editBtn.addEventListener("click", editItem);

		displayShowbox("An item is added to the list", "success");
		container.classList.add("show-container")
		//add to local storage
		addToLocalStorage(id, value)
		//set back to default
		backToDefault()
	}else if(value  && editFlag){
		editElement.innerHTML = value;
		displayShowbox("value changed", "success");
		//edit LocalStorage
		editFromLocalStorage(editID, value)

		backToDefault()
	}else{
		displayShowbox("Please Enter value", "danger")
	}
}
//display showbox content
function displayShowbox(text,action){
	showbox.textContent = text;
	showbox.classList.add(`alert-${action}`)
	setTimeout(function(){
	showbox.textContent = "";
	showbox.classList.add(`alert-${action}`)
	}, 1000)
}

//clear function
function clearItem(){
	const items = document.querySelectorAll(".grocery-list");
	items.forEach((item) => {
	list.removeChild(item)
	})
	container.classList.remove("show-container")
	displayShowbox("Empty Item", "danger")
	//localstorage.removeItem('list')
	backToDefault()
}
// delete item
function deleteItem(e){
	const element = e.currentTarget.parentElement.parentElement;
	const id = element.dataset.id
	list.removeChild(element);
	if(list.children.length === 0){
		container.classList.remove("show-container")
	}
	displayShowbox("An Item is deleted", "danger")
	backToDefault()
	removeFromLocalStorage(id)
}

//edit item
function editItem(e){
	const element = e.currentTarget.parentElement.parentElement;
	//set edit item
	editElement = e.currentTarget.parentElement.previousElementSibling;
	grocery.value = editElement.innerHTML;

	editFlag = true;
	editID = element.dataset.id;
	submitBtn.textContent = "Edit"
	editFromLocalStorage(editID, grocery.value)

}

//backToDefault
function backToDefault(){
	grocery.value = "";
	editFlag = false;
	submitBtn.textContent = 'submit';
	editID = "";

}


// add to local storage
function addToLocalStorage(id, value){
	const grocery = {id:id, value: value};
	let items = getFromLocalStorage()
	items.push(grocery);
	localStorage.setItem("list", JSON.stringify(items))
}
//remove from local storage
function removeFromLocalStorage(id){
	let items = getFromLocalStorage();
	items = items.filter((item)=>{
		if(item.id !== id){
			return item;
		}
	})
	localStorage.setItem("list", JSON.stringify(items))
}
// get from localstorage
function getFromLocalStorage(){
	return localStorage.getItem("list")?JSON.parse(localStorage.getItem("list")):[];
}

//edit from local storage
function editFromLocalStorage(id, value){
	items = getFromLocalStorage();
	items = items.map((item) =>{
		if(item.id === id){
		return	item.value = value;
		}
		return items
	})
	localStorage.setItem("list", JSON.stringify(items))
}

/*
let orange = JSON.parse(localStorage.getItem("orange"));
//console.log(orange)
localStorage.setItem("course", JSON.stringify(['html', 'css', 'javascript', 'php', 'mysql']));
const course = JSON.parse(localStorage.getItem("course"))
//console.log(course)
localStorage.removeItem('orange')
localStorage.removeItem('course')
*/