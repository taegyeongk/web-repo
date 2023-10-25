//funciton2.js
console.log('function2.js');
// Member member = new Memeber() 와 같은 의미
const member = {
	name: "홍길동", //name 은 자바에서 속성, field
	age: 18,
	height: 180.5,
	showInfo: function() {
		return (`이름은 ${this.name} 나이는 ${this.age} 키는 ${this.height} 입니다.`)  //메소드 정의
	}
}

const member1 = {
	name: "고길동", //name 은 자바에서 속성, field
	age: 24,
	height: 160,
	showInfo: function() {
		return (`이름은 ${this.name} 나이는 ${this.age} 키는 ${this.height} 입니다.`)  //메소드 정의
	}
}

const member2 = {
	name: "강길동", //name 은 자바에서 속성, field
	age: 19,
	height: 190,
	showInfo: function() {
		return (`이름은 ${this.name} 나이는 ${this.age} 키는 ${this.height} 입니다.`)  //메소드 정의
	}
}

//위 메소드 정의 실행문
member.showInfo(); //메소드 호출
const members = [member, member1, member2];
// DOM: Document Object Model

let show = document.getElementById('show');   //getelement = 태그 , table>(thead>tr>th*2)+(tbody>tr>td*2)
// show.innerHTML = "<ul><li>Apple</li><li>Banana</li></ul>"; //html 창에 왼쪽에 리스트 생성 속성
// show.innerText = "<ul><li>Apple</li><li>Banana</li></ul>"; //text 속성
let str = "";

str += '<table border = "1">';
str += '<tbody>';
members.forEach(function(item) {
	str += makeTr(item);
});

str += '</tbody>';
str += '</table>';

console.log(str);
show.innerHTML = str;
//table>tbody>(tr>td*4)*3

function makeTr(member = { name, age, height, showInfo }) {  //member 에서 넘어오는 object 타입으로 들어옴
	let html = '';
	html += '<tr>';
	html += '<td>' + member.name + '</td>';
	html += '<td>' + member.age + '</td>';
	html += '<td>' + member.height + '</td>';
	html += '<td>' + member.showInfo() + '</td>';
	html += '</tr>';

	return html;

}

console.log(makeTr(member));

