//module.js


import {friendInfo} from './friend.js'; //import 도 객체 타입으로 반환하겠습니다.
import {cal} from '../todo/calendarObj.js';

const friend = {
	name: 'Hwang',
	phone: '010-1111-2222',
	address: '대구 중구 200',
	showInfo: function(){
		return `${this.name}`;
	}
}
console.log(friend.showInfo());

console.log(friendInfo(friend));

cal.showCalendar();
