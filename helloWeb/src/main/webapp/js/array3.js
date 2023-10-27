//array3.js

let pos = "Hello, World".indexOf(".");  //콤마기준으로 찾기. 있으면 반환, 없으면 -1 반환

let names = ["콘","무지", "라이언", "어피치"]
pos = names.indexOf("무지");   //배열에서 무지라는 인덱스값 찾기

if(pos == -1){
console.log("없는 이름입니다.");
		
}else {
console.log("무지는" + (pos+1)+ "번째 위치에 있습니다.");
}


//{name:"", age:20}
//이거 잘 모르겠음
let members =[
	{name:"김민식", age:20},
	{name:"최우식", age:24},
	{name:"강민식", age:29}
]

let search = "민식";
	let cnt = 0;
members.forEach((member)=>{
	if(member.name.indexOf(search)> -1){
		cnt++;
	}
})
		console.log(cnt + "명이 있습니다.");



