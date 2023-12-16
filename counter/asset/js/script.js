let count = 0;
let value = document.querySelector("#value");
let button = document.querySelectorAll(".btn");
//console.log(value, button)
button.forEach((btn)=>{
	//console.log(btn)
	btn.addEventListener("click", function(e){
		//console.log(e.currentTarget.classList)
		let att = e.currentTarget.classList;
		if(att.contains("decrease")){
			--count;
		}else if(att.contains("reset")){
			count = 0;
		}else{
			++count;
		}
		value.textContent = count;
		if(count > 0){
			value.style.color = "green";
		}else if(count < 0){
			value.style.color = "red";
		}else{
			value.style.color = "#000"
		}
	})
})