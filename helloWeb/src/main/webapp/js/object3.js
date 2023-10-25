//object3.js

const member = {  //this의 속성은 member
	name: "홍길동",  //정의가 아닌 실제 값
	age: 20,
	height: 123.4,
	showInfo: function(){
		return `이름은 ${this.name}이고 나이는 ${this.age} 입니다.`;
	},
	makeTr: function(student = { sno, sname, engScore, mathScore }){
		let html = '';
		html += '<tr>';
		for(let prop in student){
			html += '<td>' + student[prop] + '</td>';
		}
		html += '<td><button onclick="this.parentElement.parentElement.remove()">삭제</button></td>';
		html += '</tr>';
		return html;
	},
	html:'',
	
	makeHtml(studAry){
		let table = '<table border = "1"><tbody>';
		let obj = this;
		table += studAry.reduce(function(acc, stud){
		return acc + obj.makeTr(stud);
		}, '');
		table += '</tbody></table>';
		this.html = table;
	},
	showPage(dom){
		dom.innerHTML += this.html;
	}
}
	
	//객체의 속성. for ..in
	for (let prop in member){
		//member.name/ member['age']
		//console.log(typeof member[prop]);
		if((typeof member[prop]) != 'function'){
		console.log(typeof member[prop]);
		}
	}
	
	
	
	const students = [
		{sno : '001', sname : "최해주", engScore: 80, mathScore: 85},
		{sno : '002', sname : "김채민", engScore: 82, mathScore: 83},
		{sno : '003', sname : "최다예", engScore: 84, mathScore: 88}
	]
	
	member.makeHtml(students);
	member.showPage(document.getElementById('show'));
	
	
	