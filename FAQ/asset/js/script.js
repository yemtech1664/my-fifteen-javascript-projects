let questionBtn = document.querySelectorAll(".question-btn")
let question = document.querySelector(".question");

questionBtn.forEach((btn)=>{
	//console.log(btn)
	btn.addEventListener("click", function(e){
		//console.log(e.currentTarget.parentElement.parentElement.classList);
		let showQuestion = e.currentTarget.parentElement.parentElement.classList;
		showQuestion.toggle("show-text")
	})
})

//console.log(questionBtn)