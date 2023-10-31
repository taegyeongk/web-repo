//dom2.js

//#show>table>tbody>(tr>td:사과+td:1000)+(tr>td:복숭아+td:5000)...

const fruits = [
	{ name: "사과", price: 1000, farmer: "홍길동" },
	{ name: "복숭아", price: 5000, farmer: "고길동" },
	{ name: "포도", price: 6000, farmer: "오길동" },
	{ name: "망고", price: 9000, farmer: "유길동" }
]

//table 생성
const tbl = document.createElement('table');  //table 만들겠습니다.
const tbd = document.createElement('tbody');  //tbody 만들겠습니다.
tbl.setAttribute('border','1'); //table 테두리는 1

fruits.forEach(fruit => {  // forEach( 객체=>화살표함수{})console.log(fruit);  결과값: {name: "사과", price: 1000},{name: "복숭아", price: 5000},{name: "포도", price: 6000},{name: "망고", price: 9000}
	const tr = document.createElement('tr');

	//반복문 안할 경우에는 const td 계속 생성해서 만들어 줘야하는 귀찮음 존재. 코드는 최대한 간단하게 줄이기.
	for (let prop in fruit) {  //for in 반복문 : 객체의 모든 열거 가능한 속성에 대해 반복
		const tdl = document.createElement('td');
		tdl.innerHTML = fruit[prop];
		tr.appendChild(tdl);

	}

	tbd.appendChild(tr); //tbody에 tr을 하위요소로 등록.
})
tbl.appendChild(tbd);
document.querySelector('#show').appendChild(tbl);



















