//object5.js

const obj1 = {  //참조변수
	name: "Hong",
	age: 20,
	weight: 66.8
	
	//bloodType  
}
console.log(obj1);
const obj3 = obj1;

const obj2 = Object.assign({name:"Hwang", age:20, height: 123.4},obj1);  //클래스이나 인스턴스라고 얘기한다.assign 은 기존에 있는 값은 그대로 두고, 없는 값들은 새롭게 추가시킨다.
console.log(obj2);

// 상속

const obj4 = Object.create(obj1);
//상속을 통해서 자식 객체를 생성하면 부모객체를 참조.

obj4.name = "kim";   // 자식속성이 변경이 되면 부모값과 다른 다른 값을 유지한다.
obj4.age = 23; 
obj1.name = "Hwang";
console.log(obj4);
console.log(obj4.name);
console.log(obj4.age);

//객체의 속성을 정의. 객체의 속성기술자 활용하여 없는 값이 나올때
obj1.bloodType = "o";  //라고 정의했을때는 값이 o로 지정됨.
Object.defineProperty(obj1, 'bloodType', {  //defineProperty는 속성을 정의하고 싶은 객체를 넣고 추가하고싶은 값을 추가
	set: function(bt){   //set : 값을 정의하는 속성임. 
		if(bt == "A" || bt == "B" || bt =="AB" || bt =="O"){
			this._bloodType = bt;  //bt를 블러드타입에 넣어주는 뜻  _가 없으면 자기자신을 계속 호출됨.
		}		
		else{
			console.log('잘못된 유형입니다.');
			this._bloodType = "A";
		}
	},
	get: function(){  //겟셋 메소드 사용
		return this._bloodType;
	}
})

obj1.bloodType = "AB"; //set 을 통해서 가져옴
console.log(obj1.bloodType);  // get 을 통해서 가져옴


//속성정의시 속성값과 this객체의 속성을 달리하는 이유???
//객체의 속성 정의시 get/set을 어디서 확인하는지???







