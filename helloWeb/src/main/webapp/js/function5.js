//function5.js
let sum1 = 0;
[10, 20, 30].forEach(function(num) { // 반복하면서 foreach 함수 실행하세요
	sum1 += num;   //consumer : 매개값을 소진, 반환값은 없는 타입의 함수

})  
console.log('foreach: ', sum1);  //결과값 : 60

sum1 = 0;
sum1 = [10,20,30].reduce(function(acc, item, idx, ary){   //배열함수로 결과값을 sum 이 반환
	// console.log(acc, item,idx);
	return acc+ item;   //item 은 누적값 , function : 매개값을 소진, 반환값을 생성.
},0);  //acc는 초기값 0
console.log('reduce: ', sum1); //결과값 : 30, 리턴값에 acc를 더해주면 결과값 : 60

//초기값이 있냐 없냐에 따라 누적값이 존재하기때문에 foreach와 reduce 함수의 실행 결과값은 달라질 수 있다.


function sum(a=0 , b=0, ...args){  //parameters. 매개변수 값  [...args는 펼침연산자로 배열의 개수만큼 루핑 돌면서 반환]
	console.log(args);
	let result = 0;
	result = a + b;
	args.forEach(function(num) {result += num});
	return result;
	// return a + b + args.reduce((acc, item) => acc + item)  //리턴구문 생략 가능
}
console.log(sum(10,20,30,40,50,60));  //arguments


//reduce 연습
const numAry = [4,2,6,9,1,7];
let max = 0;
max = numAry.reduce((acc, item) => acc > item ? acc : item);  //acc : 누적값 , item 해당하는 배열의 값 
	// return max;
console.log('최대값 : ', max);


