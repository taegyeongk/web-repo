//array5.js

const arr1 = ['펭수','라이언','춘식이']
arr1.sort();
console.log(arr1);  // 배열 자체를 변경.

const arr2 = [4,8,1,12,23,9]
arr2.sort(function(a,b){
	if(a < b){  //오름차순으로 정렬
		return -1;
	}else{  //그렇지 않으면 역순으로 정렬
		return 1;
	}
});
console.log(arr2);

const json = `
[{"id":1,"first_name":"Brooks","email":"bkremer0@sfgate.com"},
{"id":2,"first_name":"Shalne","email":"smitcheson1@pagesperso-orange.fr"},
{"id":8,"first_name":"Tuesday","email":"tguerrieri7@tmall.com"},
{"id":9,"first_name":"Malia","email":"mysson8@sfgate.com"},
{"id":10,"first_name":"Alfie","email":"akitchenman9@e-recht24.de"}]

`;
let members = JSON.parse(json);
members.sort(function(a,b){
	if(a.first_name < b.first_name){
		return -1
	}else{
		return 1
	}
}).reverse();

console.log(members);




















