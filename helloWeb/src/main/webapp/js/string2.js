//string2.js

const words = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi cum provident vitae corrupti nostrum expedita neque est odio maxime eligendi natus temporibus, doloribus qui officia ex soluta tempore exercitationem ab!';
//1. 각각 단어를 공백 기준으로 가져온 단어의 크기가 5보다 큰 문장을 콘솔에 출력  -->slice
let str = words.split(" ");
	
	for(let i= 1; i<str.length; i++){
		if(str[i].length > 5){
			console.log(str[i]);
		}
}
	

//2. 생년월일을 입력받아 그 값이 남자인지 또는 여자인지 구분하는 함수 
function checkGender(ssn){
	
	num = ssn.replace('-', '');  //replace로 -,공백을 없애줘야한다.
	num = ssn.replace(' ', '');
	
	if(num.charAt(7) == 1 || num.charAt(7) == 3){
		return('남자');
	}
	else if(num.charAt(7) == 2 || num.charAt(7) == 4){
		return('여자');
	}
}
	let ssn = ('950305-1678532');
	console.log(checkGender(ssn));
	
	//950305-1678532 , 950305 1678532, 9503051678532에 상관없이 입력받은값 출력 1이면 남자, 2이면 여자
		



//3. 파일명과 파일의 확장자.
let file = "d:/temp/sample/book.xlsx";  //이라는 값을 넣으면 


	console.log(file.indexOf('.'));  //결과값 : 19

	let fileExt = file.substr(0, 2); 
	console.log('확장자는' , fileExt);



    // let f2 =file.split('.');
    // console.log(f2);
     //let ext=f2[1];
  	// console.log(ext);

   
   
   // let x =file.split('/')
   // console.log(x);
 	
 	//let name = x[3];
 	//console.log(name);
 	
 	//let name2 = name.split('.');
 	
 	//let filename =name2[0];
 	//console.log('파일명은', filename); 

















