//fetch1.js

import { table } from './ajaxModule.js';

fetch('../MemberListServ2')  //뒤에 세미콜론 오면 안돼ㅠㅠ
	.then((resolve) => {
		console.log(resolve);
		return resolve.json(); //json --> object
	})

	.then((result) => {
		console.log(result);
		let titles = ["회원번호", "비번", "이름", "연락처"];
		let dataAry = result;

		result = table.makeTable(titles, dataAry);
		document.getElementById('show').innerHTML = result;
	})
	.catch((err) => {
		console.log('error => ', err);
	})



















