//function4.js

//생성자함수 ..Member

function Member(name, age, height) {
	console.log(this);
	this.name = name;
	this.age = age;
	this.height = height;
	this.showInfo = function () {
		return `이름은 ${this.name}이고 나이는 ${this.age} 입니다.`;
	}
}
//makeTr 함수.

function makeTr(member) { //member 에서 넘어오는 object 타입으로 들어옴
	let str = '';
	str += '<tr>';
	str += '<td>' + member.name + '</td>';
	str += '<td>' + member.age + '</td>';
	str += '<td>' + member.height + '</td>';
	str += '<td>' + member.showInfo() + '</td>';
	str += '<td><button onclick="this.parentElement.parentElement.remove()">삭제</button></td>';
	str += '</tr>';
	
	if(member.height == null){
		window.alert("입력된 값이 없습니다.");
		return str;
	}
	return str;
	
}


document.getElementById('saveBtn').onclick = function (e) {
	console.log(e.target); //event 줄여서 e 
	let name = document.getElementById('name').value;
	let age = document.getElementById('age').value;
	let height = document.getElementById('height').value;

	//function Member()..., makeTr(member),
	const mem = new Member(name, age, height); //인스턴스생성
	let str = makeTr(mem); //<tr>...</tr> 태그 생성
	//document.getElementById('saveBtn') -> DOM요소
	document.getElementById('list').innerHTML += str;

	//입력값 초기화 & 포커스 생성
	document.getElementById('name').value = "";
	document.getElementById('age').value = "";
	document.getElementById('height').value = "";
	document.getElementById('name').focus();


	
	
}