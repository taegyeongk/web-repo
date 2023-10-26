//string3.js

let today = new Date();
today.getFullYear();
today.getMonth();
today.getDate();


today.setFullYear(2022);
today.setMonth(9);
today.setDate(1);
today.setHours(20);

console.log(today.toString());


function dateFormat(today){
	today.getFullYear() + "-" + "0" + (today.getMonth()+1) + 
	"-" + "0" + today.getDate()+" "+today.getHours()+
	":"+ today.getMinutes()+":"+today.getSeconds();
	
}

dateFormat(today);