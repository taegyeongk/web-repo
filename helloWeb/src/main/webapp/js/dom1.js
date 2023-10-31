//dom1.js

const fruits = ['수박', '복숭아', '사과', '포도']

//#show>ul>li:수박+li:사과+...
//createElement : 요소 만들기 , appendChild : 하위요소에 추가, innerHTML : html 에 출력


//ul을 생성하겠습니다.
const ul = document.createElement('ul');

//li를 생성하겠습니다. forEach 문 사용 가능, 혹은 let 으로 일일히 다 선언해줘도 된다. 다만 코드는 최대한 간략하게
fruits.forEach(fruit => {
const li = document.createElement('li');
li.innerHTML = fruit;  //<li>수박</li>
ul.appendChild(li);  //<ul><li>수박</ul></li>
})
document.getElementById('show').appendChild(ul);



//document.getElementById('show').innerHTML = '<ul>';

//let li1 = document.createAttribute('li');
//li1.innerHTML = "수박";
//document.querySelector('ul').appendChild(li1);

//let li2 = document.createAttribute('li');
//li2.innerHTML = "복숭아";
//document.querySelector('ul').appendChild(li2);

//let li3 = document.createAttribute('li');
//li3.innerHTML = "사과";
//document.querySelector('ul').appendChild(li3);

//let li4 = document.createAttribute('li');
//li4.innerHTML = "포도";
//document.querySelector('ul').appendChild(li4);




















