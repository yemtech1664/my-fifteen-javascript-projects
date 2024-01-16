let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
"November", "December"];
let days = ["Sunday", "Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "Saturday"];

const deadlineSet = document.querySelector(".time-set");
const deadline = document.querySelector(".time");
const dateSet = document.querySelectorAll(".time-box h4")

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate() 
//console.log(tempDay)
let futureDate = new Date(tempYear, tempMonth, tempDay+10, 11, 30, 0);
//console.log(futureDate)
let year = futureDate.getFullYear();
let month = months[futureDate.getMonth()];
let day = days[futureDate.getDay()];
let date = futureDate.getDate()
let hour = futureDate.getHours();
let minute = futureDate.getMinutes();
let second = futureDate.getSeconds()
let t = futureDate.getTime();
//console.log(day)
deadlineSet.innerHTML = `Giveaway Ends on ${day}, ${date} ${month} ${year}, ${hour}:${minute}
`;
function remainTime(){
	let currentTime = new Date().getTime();
	let tt = t - currentTime;
	//console.log(tt)
	//cal each of the time range
	const oneDay = 24*60*60*1000;
	const oneHour = 60*60*1000;
	const oneMinute = 60*1000;
	//console.log(oneMinute)
	let days = Math.floor(tt/oneDay);
	let hours = Math.floor((tt % oneDay)/oneHour);
	let minutes = Math.floor((tt%oneHour)/oneMinute);
	let seconds = Math.floor((tt%oneMinute)/1000);

	//format
	function format(item){
		if(item < 10){
			return `0${item}`;
		}else{
			return item;
		}
	}
	if(tt < 0){
		clearInterval(countdown);
		deadline.innerHTML = `Sorry, This Giveaway has expired!!!`;
	}

	//console.log(seconds)
	let values = [days, hours, minutes, seconds];
	dateSet.forEach((item,index)=>{
		item.innerHTML = format(values[index])
	})
}
remainTime()
let countdown = setInterval(remainTime, 1000)