//array4.js

const json = `
[{"id":1,"first_name":"Brooks","email":"bkremer0@sfgate.com"},
{"id":2,"first_name":"Shalne","email":"smitcheson1@pagesperso-orange.fr"},
{"id":8,"first_name":"Tuesday","email":"tguerrieri7@tmall.com"},
{"id":9,"first_name":"Malia","email":"mysson8@sfgate.com"},
{"id":10,"first_name":"Alfie","email":"akitchenman9@e-recht24.de"}]

`;  

let members = JSON.parse(json);  //문자열로 반환하겠음

let result = members.find(function(item, idx, ary){  //find: 배열에서 조건에 만족하는 요소들을 반환 받고싶을때 사용
	if(item.id > 5){   //조건에 해당하는 제일 첫번째 값 출력
		return true;
	}
	return false;
})
result = members.filter(function(item, idx, ary){  //item, idx, ary 의미 파악 잘하기
	
	return item.id>5;  //조건에 해당하는 것들 전체 출력
})

result = members.filter((item, idx) =>{  
	
	return idx >= 1 && idx < 3;  //true 값을 반환;
	
})

result = members.reduce((acc, item, idx) =>{
	if(idx >=1 && idx <3){
		acc.push(item);
	}
	return acc;
},[])
	console.log(result);

//some : 결과값 true 
//현재 name 이 6글자 이상인 경우 1가지 있음

//하나만 true 일 경우 반환
result = members.some((member) => {  
	return member.first_name.length > 5;
})

console.log(result);

//every : 결과값 false
//조건 전체가 true 여야 true 로 반환
result = members.every((member) => {   
	return member.first_name.length > 5;
})

console.log(result);


// *) map : A -> B

result = members.map(member =>{
	let obj = {id: member.id, name: member.first_name, email: member.email, grade: 'C'}
	return obj;
})

console.log(result);


















