//array2.js  : MOCK_DATA.json 파일의 데이터 활용

const json = `
[{"id":1,"first_name":"Brooks","email":"bkremer0@sfgate.com"},
{"id":2,"first_name":"Shalne","email":"smitcheson1@pagesperso-orange.fr"},
{"id":3,"first_name":"Dorrie","email":"dhanscombe2@goo.ne.jp"},
{"id":4,"first_name":"Spencer","email":"sivanchikov3@unc.edu"},
{"id":5,"first_name":"Tailor","email":"thort4@about.com"},
{"id":6,"first_name":"Bastien","email":"bsingers5@comcast.net"},
{"id":7,"first_name":"Carline","email":"clumsden6@msn.com"},
{"id":8,"first_name":"Tuesday","email":"tguerrieri7@tmall.com"},
{"id":9,"first_name":"Malia","email":"mysson8@sfgate.com"},
{"id":10,"first_name":"Alfie","email":"akitchenman9@e-recht24.de"}]

`;   //json(문자열) -> object. JSON.parse() 사용

let members = JSON.parse(json);
let yourinfo = {name: "Hong", email: "hong@email.com"}

// console.log(members);

//특정 사람 찾아서 지우기

let delMember = "Tailor";

//splice 활용하여 삭제
//members.forEach((member, idx) =>{
//	if(member.first_name == delMember){
	//members.splice(idx,1);
//	}
//})
//console.log(members);


//splice 활용하여 추가
//members.forEach((member, idx) =>{
	//if(member.first_name == delMember){
	//	members.splice(idx,1,{id:member.id, first_name: yourinfo.name , email: yourinfo.email});
	//}
//})
//console.log(members);

//let inpVal = window.prompt("이름과 이메일 입력하세요 예)홍길동, hong@email.com");

//console.log(inpVal);  // 홍길동, hong@email.com


//const infoAry =inpVal.split(',');
//let nid = members[members.length -1].id +1;
//let newMember = {id: nid, first_name: infoAry[0], email: infoAry[1].trim() };

//배열에 추가
//members.push(newMember);
//members.splice(members.length,0, newMember);
//console.log(members);


const dupAry = [["라이언", 5], ["어피치", 3], ["콘", 2], ["무지",4]];
console.log(dupAry);
console.table(dupAry);

