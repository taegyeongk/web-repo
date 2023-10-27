//ajax1.js
//Asynchronous Javascript And XML:
import {table} from "./ajaxModule.js";
//비동기 vs. 동기
let friends = [];
setTimeout(function(){
friends.push('홍길동');},1000);   //1000ms 지연 후에 실행 -- 끝나는 시점 처리 시간상으로 가장 빠른 시간이 먼저 실행되는것이 비동기 처리방식
								//비동기 방식으로 실행하면 시간을 단축할 수 있음
setTimeout(function(){
friends.push('김길동');},500); 
setTimeout(function(){
friends.push('최길동');},2000); 

console.log(friends);   //입력한 순서대로 출력이 되는 것이 동기 처리방식


//보류.
let newMember = {mid: "M009", pass: "9999", name:"민식이", phone: "010-9999-9999"}
let xhtp = new XMLHttpRequest();   //XMLHttpRequest -객체
xhtp.open('get', '../MemberListServ2');  //http://localhost:8080/helloWeb/js/ajax.html
										//http://localhost:8080/helloWeb/MemberListServ
xhtp.send();
xhtp.onload = loadJson;

function loadJson(){
	console.log(xhtp.responseText);
	let doc2 = xhtp.responseJson;
	let records2 = doc2.getElementsByTagName('record2')
	console.log(records2);
	
	let result = JSON.parse(xhtp.responseText);
	console.log(result);
	document.getElementById('show').innerHTML = result;
}

function loadXML(){
	console.log(xhtp.responseXML);  //실행 결과값 : XMLHttpRequest
	let doc = xhtp.responseXML;
	let records = doc.getElementsByTagName('record')
	console.log(records);  //실행 결과값: HTMLCollection(5) [record, record, record, record, record]
	console.log(records[0].children[0].innerHTML);
	let titles = ["회원번호", "비번", "이름", "연락처"];
	let dataAry = [];
	for(let record of records){
		let obj = {
			mid: record.children[0].textContent,  //mid.
			pass: record.children[1].textContent,  //pass
			name: record.children[2].textContent,  //name
			phone: record.children[3].textContent  //phone
	}
	dataAry.push(obj);
}
	let result = table.makeTable(titles, dataAry);
	console.log(result);
	document.getElementById('show').innerHTML = result;

//newMember 값을 활용해서 tbody="list" 추가.
let tr = '<tr><td>' + newMember.mid + 
'</td><td>' + newMember.pass + 
'</td><td>' + newMember.name + 
'</td><td>' + newMember.phone + '</td></tr>';
document.getElementById('list').innerHTML += tr;
//dataset, record 는 부모 자식관계

}