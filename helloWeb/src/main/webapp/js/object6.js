//Map, Set

const map = new Map();
map.set("홍길동", 80);
map.set("김길동", 85);
map.set("김길동", 90);


//map.delete("김길동");
const refval = [12];  //[12]와 [12]는 서로 객체로써 다른 주소값을 가지고있음. 그렇기때문에 refval이라는 객체의 주소를 참조하겠다는 변수를 선언하여 변수안에 담고 사용해야 같은 값으로 인식된다.
map.set(refval,88);
console.log(map.get(refval));


console.log(map.get("홍길동"))
for(let ent of map.entries()){  //키 : 값  entries함수 : 키와 값을 반환해줌
	console.log('이름', ent[0], ',점수: ', ent[1]);
}


map.forEach(function(val, key, map){  //value 가 배열보다 먼저온다. value, key 값 순서대로 나타나짐 : 80,'홍길동'
	if(key == "홍길동")
	console.log(val, key, map);
})


//맵 <-> 배열. 
const ary = [['프로도',3],['라이언', 5], ['어피치',4] ];  //배열안에 배열로 생성해야함
const fmap = new Map(ary);   //Map(생성자:배열);


for(let ent of fmap.entries()){
	console.log('키: ', ent[0], ', 값: ', ent[1]);
}

const entries = fmap.entries();  //entries : MapIterator 타입
console.log(entries);

console.log(Array.from(fmap));   //맵을 배열로 변환


console.clear();
//set 은 중복값 허용하지 않는다.

const set1 = new Set();
set1.add("라이언");
set1.add("프로도");
set1.add("어피치");
set1.add(["어피치",4]);  //배열은 각각 다른 참조값을 가짐으로 같은 문자열이어도 다르게 인식한다.

console.log(set1.size); //4개로 추가하였으나 중복된 값이기때문에 size 값은 3이된다.

set1.forEach(function(val, item, set){
	console.log(val, item, set);
})

//셋 <-> 배열
const setAry = ['라이언', '프로도', '무지', '무지']
const set2 = new Set(setAry);
console.log(set2.size);

console.log(Array.from(set2));  //set 컬렉션이 배열로 다시 변경






