//array1.js

const arr1 = []
arr1.push(10);      //배열을 담기위한 메소드
arr1.push('ten');
arr1.push({name: "Hong", age: 20});

arr1.unshift(20);   //배열의 앞쪽에 추가하는 것으로 인덱스값이 0이 된다.

console.log('크기: ', arr1.length);
// arr1.length = 3;  //결과값 : 제일 마지막 값은 사라지고 앞에서부터 3개만 출력된다. 다만 마지막값에 지정하지 않고 배열 length보다 큰 크기로 지정할 경우 undefined로 출력됨

arr1.pop();  //배열의 뒤에서부터 하나씩 제거

//arr.shift(); //배열의 앞에서부터 하나씩 제거

arr1.splice(1, 2, 50,60); //배열을 추가, 삭제, 수정 다 가능함. 매개값 이용(시작값, 삭제할값, 새롭게 추가할 값:무한정으로 가능)



for(let ary of arr1){
	console.log(ary);
}






