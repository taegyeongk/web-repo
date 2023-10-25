//object.js
console.log('object start.....');

let obj1 = {
	name: 'Hong',
	age: 20
}

//주소참조
let obj2 = obj1;
console.log(obj1);
obj2.age = 22;
console.log(obj1);

//복사 이클립스 오류뜰 경우 preference - validation - javascript 에 두개 다 체크해제
let obj3 = { ...obj1 } //...은 펼침연산자, obj1을 복사하겠다는 의미
obj3.age = 24;  //참조일 경우에는 같은 객체를 바라보고 있음으로 객체 값이 변경되나, 펼침 연산자는 주소값을 참조하는것이 아닌 복사의 의미로 객체값이 변하지는 않는다.
console.log(obj3);


//클래스
class Member {
	constructor(name, age, height) {
		this.name = name;
		this.age = age;
		this.height = height;
	}
	setWeight(weight) {
		this.weight = weight;
	}

	getWeight() {
		return this.weight;
	}

	showInfo() {
		return `이름은 ${this.name} 나이 ${this.age}세입니다.`;
	}

	//학생의 정보: 학생번호, 이름, 영어, 수학
	makeTr(student = { sno, sname, engScore, mathScore }) {
		//tr>td*4
		let tr = '';
		tr += '<tr>';
		tr += '<td>' + student.sno + '</td>';
		tr += '<td>' + student.sname + '</td>';
		tr += '<td>' + student['engScore'] + '</td>'; //점수 숫자는 [] 으로 쓸 수도 있고 아래처럼 바로 사용할수도 있음
		tr += '<td>' + student.mathScore + '</td>';
		tr += '<td><button onclick="this.parentElement.parentElement.remove()">삭제</button></td>';
		tr += '</tr>';
		return tr;
	}
	
	makeHtml(studAry = []) {
		//html생성 = this.makeTr(std);
		//let table = '<table border = "1"><tbody>';
		//table += studAry.reduce((acc, stud) => acc + this.makeTr(stud), '');
		//table += '</tbody></table>';
		//this.tr = table;


		let table = '<table border = "1"><tbody>';
		let obj = this;
		table += studAry.reduce(function(acc, stud){
		return acc + obj.makeTr(stud);
		}, '');
		table += '</tbody></table>';
		this.tr = table;  // 와 위에 구문 같은 구문
	}
	
	
	showPage(dom) {
		//innerHTML 속성에 html저장
		dom.innerHTML += this.tr;
	}

}

const mem1 = new Member('홍길동', 20, 190);
console.log(mem1.showInfo());
mem1.setWeight(62.5);
console.log('홍길동의 몸무게는 ' + mem1.getWeight() + '입니다');

