//string2.js

const words = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi cum provident vitae corrupti nostrum expedita neque est odio maxime eligendi natus temporibus, doloribus qui officia ex soluta tempore exercitationem ab!';
//1. 각각 단어를 공백 기준으로 가져온 단어의 크기가 5보다 큰 문장을 콘솔에 출력  -->slice
let str = words.split(" ");
	
	for(let i= 1; str.length >5; i++){
		str += str.length[i];
}
	console.log(str[i]);



	


//2. 생년월일을 입력받아 그 값이 남자인지 또는 여자인지 구분하는 함수 
function checkGender(ssn){
	
	
	//950305-1678532 , 950305 1678532, 9503051678532에 상관없이 입력받은값 출력 1이면 남자, 2이면 여자
	return  '남자' || '여자'; 
		
}



//3. 파일명과 파일의 확장자.
let file = "d:/temp/sample/book.xlsx";  //이라는 값을 넣으면 
let fileName, fileExt;





















