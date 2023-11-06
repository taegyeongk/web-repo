/**
 *  js.student.js
 */

import svc from './service.js';
//페이지가 로딩되면서 바로 실행되는 코드

//비동기방식코드 -> 순차적배치하여 가독성 높이기위한 방식(async, await)
//async 함수(
// await 처리.  (promise객체)
// await 처리.
// await 처리.
//)
//async function studentList() {  //순차적으로 처리를 하겠다는 뜻
//	let req = await fetch('../studentList.do');
//	let json = await req.json();  //{"retCode"":"OK""} -> {retCode:"OK"}
//	let tbody = document.querySelector('#list');
//	try {
//	json.forEach(student => {
//		tbody.append(makeTr(student));
//		})
//	} catch (err) {
//		console.log('error=> ', err);
//	}
//}

//위에랑 같은 코드
svc.studentList(
	//성공하면 실행하는 함수
	result => {
		console.log(result);
		let tbody = document.querySelector('#list');
		result.forEach(student => {
			tbody.append(makeTr(student));
		})
	},
	//실패하면 실행하는 함수
	err => console.log('error => ', err)
);

//등록버튼 이벤트
document.querySelector('#addBtn').addEventListener('click', addCallback);

//수정버튼 이벤트.서블릿(db변경) -> 화면에서 출력되는 정보를 변경.
document.querySelector('#modBtn').addEventListener('click', modCallback);

//fetch('../studentList.do')
//	.then(resolve => resolve.json())
//	.then(result => {
//		console.log(result);
//		let tbody = document.querySelector('#list'); //id값이 list = tbody
//		result.forEach(student => {
//			tbody.append(makeTr(student));
//		})
//	})
//	.catch(err => console.log('error => ', err));


//callback 함수
function addCallback(e) {
	//학생아이디 입력값.
	let sid = document.querySelector('input[name=sid]').value;
	let sname = document.querySelector('#sname').value;    //input 태그에서 id 로 줬으면 #으로, name으로 줬으면 input[]
	let pass = document.querySelector('#pass').value;
	let dept = document.querySelector('#dept').value;
	let bir = document.querySelector('#bir').value;

	let param = `id=${sid}&name=${sname}&password=${pass}&dept=${dept}&bir=${bir}`;
	console.log(param);
	//ajax 호출
	//get: url패턴. 값의 제한이 존재함.
	//post: 파라미터 표현X, 값의 제한이 없음, content-type지정.
	//fetch('../addStudent.do?' + param)랑 같은 구문 아래참조(패턴 기억해놓기!!)
	svc.addStudent(  //첫번째 파라메터가 실행할 함수
		//optObj =>
		{
			method: 'post',  // *GET, POST, PUT, DELETE 등 방식 존재
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: param
		},
		//successCallback =>
		result => {
			if (result.retCode == 'OK') {
				alert('성공');
				let tr = makeTr({ studentId: sid, studentName: sname, studentBirthday: bir });
				document.querySelector('#list').append(tr);
			} else {
				alert('실패');
			}
		},
		//errorCallback =>
		err => console.log('error: ', err)
	);

	//fetch('../addStudent.do', {
	//		method: 'post',  // *GET, POST, PUT, DELETE 등 방식 존재
	//		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
	//		body: param  // body의 데이터 유형은 반드시 "Content-Type" 헤더와 일치해야 함
	//	})
	//	.then(resolve => resolve.json())
	//		.then(result => {
	//		if (result.retCode == 'OK') {
	//				alert('성공');
	//				let tr = makeTr({ studentId: sid, studentName: sname, studentBirthday: bir });
	//				document.querySelector('#list').append(tr);
	//			} else {
	//				alert('실패');
	//			}
	//		})
	//		.catch(err => console.log('error: ', err));
}

function modCallback(e) {
	let sid = document.querySelector('.modal-body input[name=sid]').value;
	let sname = document.querySelector('.modal-body input[name=name]').value;
	let pass = document.querySelector('.modal-body input[name=pass]').value;
	let bir = document.querySelector('.modal-body input[name=bir]').value;
	let param = `id=${sid}&name=${sname}&pass=${pass}&bir=${bir}`;
	console.log(param);

	svc.editStudent(
		//1) optObj
		{
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: param
		},
		//2) successCall
		result => {
			console.log(result);
			if (result.retCode == 'OK') {
				alert('성공');
				result.vo.studentId;
				let targetTr = document.querySelector('tr[data-sid=' + result.vo.studentId + ']');
				let newTr = makeTr(result.vo);
				let parentElement = document.querySelector('#list');
				parentElement.replaceChild(newTr, targetTr);   //replaceChild: 부모요소에서 자식요소로 변경할때 쓰는 메소드
				document.getElementById("myModal").style.display = 'none';  //변경 성공하면 모달창 닫는 기능.
			} else {
				alert('실패');
			}
		},
		//3) errorCall
		err => console.log('error=> ', err)
	);


	//fetch('../editStudent.do', {
	//		method: 'post',
	//		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
	//		body: param
	//	})
	//		.then(resolve => resolve.json())
	//	.then(result => {
	//		console.log(result);
	//		if (result.retCode == 'OK') {
	//			alert('성공');
	//			result.vo.studentId;
	//			let targetTr = document.querySelector('tr[data-sid=' + result.vo.studentId + ']');
	//			let newTr = makeTr(result.vo);
	//			let parentElement = document.querySelector('#list');
	//			parentElement.replaceChild(newTr, targetTr);   //replaceChild: 부모요소에서 자식요소로 변경할때 쓰는 메소드
	//			document.getElementById("myModal").style.display = 'none';  //변경 성공하면 모달창 닫는 기능.
	//		} else {
	//			alert('실패');
	//		}
	//	})

	//	.catch(err => console.log('error: ', err));
}


//tr생성함수
function makeTr(obj) {
	let showFields = ['studentId', 'studentName', 'studentBirthday'];
	let tr = document.createElement('tr');
	tr.setAttribute('data-sid', obj.studentId);
	tr.addEventListener('dblclick', showModal);

	for (let prop of showFields) {
		let td = document.createElement('td');
		td.innerHTML = obj[prop];
		tr.append(td);
	}
	//삭제버튼
	let td = document.createElement('td');
	let btn = document.createElement('button');
	btn.setAttribute('data-sid', obj.studentId);
	btn.innerHTML = '삭제';
	btn.addEventListener('click', function(e) {

		svc.removeStudent(
			obj.studentId,
			result => {
				if (result.retCode == 'OK') {
					alert('삭제성공');
					tr.remove();
				} else {
					alert('삭제실패');
				}
			}, err => console.log('error: ', err)
		)
		//ajax 호출  -> 서블릿 실행
		//				fetch('../delStudent.do?sid=' + obj.studentId)
		//					.then(resolve => resolve.json())
		//					.then(result => {
		//						console.log(result);
		//						//정상적으로 잘 받아지면 서버에서도 지워짐
		//						if (result.retCode == 'OK') {
		//							alert('삭제성공');
		//							tr.remove();
		//						} else {
		//							alert('삭제실패');
		//						}
		//					})
		//					.catch(err => console.log('error: ', err));
	})
	td.append(btn);
	tr.append(td);
	return tr;
} //end of


//모달 보여주기
function showModal(e) {
	console.log(e.target.parentElement, this);
	let id = this.children[0].innerHTML;
	id = this.dataset.sid;  //'data-sid':std1
	console.log(id);

	var modal = document.getElementById("myModal");

	var span = document.getElementsByClassName("close")[0];


	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
		modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
	svc.getStudent(
		id,
		result => {
			modal.style.display = "block";

			modal.querySelector('h2').innerHTML = result.studentName;
			modal.querySelector('input[name=pass]').value = result.studentPassword;
			modal.querySelector('input[name=name]').value = result.studentName;
			modal.querySelector('input[name=bir]').value = result.studentBirthday;
			modal.querySelector('input[name=sid]').value = result.studentId;
			// Get the <span> element that closes the modal
		},
		err => console.log('error: ', err)
	)

	//			fetch("../getStudent.do?sid=" + id)
	//				.then(resolve => resolve.json())
	//				.then(result => {
	//					// Get the modal
	//					modal.style.display = "block";
	//					//let data = { id: "std1", name: "홍길동", pass: "1234", bir: "2001-01-14" }
	//
	//					modal.querySelector('h2').innerHTML = result.studentName;
	//					modal.querySelector('input[name=pass]').value = result.studentPassword;
	//					modal.querySelector('input[name=name]').value = result.studentName;
	//					modal.querySelector('input[name=bir]').value = result.studentBirthday;
	//					modal.querySelector('input[name=sid]').value = result.studentId;
	//					// Get the <span> element that closes the modal
	//				})
	//
} //end of function