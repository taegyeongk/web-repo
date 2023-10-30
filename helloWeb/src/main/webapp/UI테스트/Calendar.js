//Calendar.js

const today = new Date();

function makeHead() {
	const days = ['일', '월', '화', '수', '목', '금', '토']
	return days.reduce((acc, day) => {
		return acc + '<th>' + day + '</th>';
	}, '<thead><tr>')
}

function makeBody() {
	let tbody = '</thead><tbody><tr>';
	for (let i = 1; i <= 31; i++) {
		console.log(i);   //맞게 나오는중
		if (i % 7 != 4) {
			tbody += '<td>' + i + '</td>';
		}
		else if
			(i % 7 == 4) {
			tbody += '</tr><tr>';
		}
	}
	tbody += '</tr></tbody>';
	return tbody;
}

function makeCalendar() {
	let thead = makeHead();
	let tbody = makeBody();
	let table = '<table border="1">' + thead + tbody + '</table>'
	document.getElementById('show').innerHTML = table;
}
makeCalendar();