//dom1.js

const fruits = ['수박', '복숭아', '사과', '포도']

//#show>ul>li:수박+li:사과+...
//createElement, appendChild, innerHTML 속성


//ul생성
const ul = document.createElement('ul');

//li생성
//fruits.forEach(fruit => {
//	const li = document.createElement('li');
//	li.innerHTML = fruit;  //<li>수박</li>
//	ul.appendChild(li);  //<ul><li>수박</ul></li>
//})
//document.getElementById('show').appendChild(ul);



document.getElementById('show').innerHTML = '<ul>';

let li1 = document.createAttribute('li');
li1.innerHTML = "수박";
document.querySelector('ul').appendChild(li1);

let li2 = document.createAttribute('li');
li2.innerHTML = "복숭아";
document.querySelector('ul').appendChild(li2);

let li3 = document.createAttribute('li');
li3.innerHTML = "사과";
document.querySelector('ul').appendChild(li3);

let li4 = document.createAttribute('li');
li4.innerHTML = "포도";
document.querySelector('ul').appendChild(li4);




















