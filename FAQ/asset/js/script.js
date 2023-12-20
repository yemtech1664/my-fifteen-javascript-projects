let questionBtn = document.querySelectorAll(".question-btn")
let question = document.querySelectorAll(".question");

question.forEach((item) => {
	//console.log(item.querySelector(".question-btn"))
	let btn = item.querySelector(".question-btn");
	btn.addEventListener("click", function(){

		question.forEach((faq) => {
			if(faq !== item){
				faq.classList.remove("show-text");
			}
		})

		item.classList.toggle("show-text");
	})
})






// questionBtn.forEach((btn)=>{
// 	//console.log(btn)
// 	btn.addEventListener("click", function(e){
// 		//console.log(e.currentTarget.parentElement.parentElement.classList);
// 		let showQuestion = e.currentTarget.parentElement.parentElement.classList;
// 		showQuestion.toggle("show-text")
// 	})
// })

//console.log(questionBtn)