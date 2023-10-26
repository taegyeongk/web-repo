//string1.js

let str1 = "Hello"; //기본데이터 원시타입
let str2 = new String("Hello");  //객체타입

console.log(typeof str1, typeof str2);   //결과값 : string object
console.log(str1 == str2);    //결과값 : true로 값만 비교를 한다.
console.log(str1 === str2);    //결과값 : false 값 & 타입을 비교하는법

console.log(str1.toUpperCase());   // 결과값 : HELLO  문자열 타입을 대문자로 변경 

let result = "공백 제거 합니다.     ".trim(); //좌우간 공백만 제거함. 문자열 사이사이에 있는 공백은 제거하지 않으며 문자 갯수로 포함된다.
console.log(result, '문자 갯수: ', result.length);

//trim(), trimStart(), trimEnd() --문자열 앞뒤 공백제거, 앞제거, 뒤제거
//replace(), split(), slice(), substring(), substr()  --
//toString(), indexOf(), lastIndexOf(), charAt(), includes()
//concat(),


result = "Hello, World, Nice , World".replace(',', '.');   //,를 .으로 반환 단, 값이 여러개일 경우 제일 첫번째 콤마만 변경된다.
console.log(result);

result = "Hello, World, Nice , World".replace(/,/g , '.');  //global이라는 옵션은전체 콤마를 변경하고싶을때 사용  
console.log(result);
//정규 표현식은 [], {}, 
//   /값/  --> 하나의 객체









