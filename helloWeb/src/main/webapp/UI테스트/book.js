// book.js
let newList = {}
let xhtp = new XMLHttpRequest();  
xhtp.open('get', '../BookListServlet');
xhtp.send();
xhtp.onload = loadJson;

function loadJson(){
	console.log(xhtp.responseText);
	let result = JSON.parse(xhtp.responseText);
	console.log(result);
	let titles = ["도서코드","도서명","저자","출판사","가격"];
	let dataAry = [];
	result.forEach(list => {
		dataAry.push({
			book_code: list.book_code,
			book_title: list.book_title,
			book_author: list.book_author,
			book_press: list.book_press,
			book_price: list.book_price
		})
	})
	result = table.makeTable(titles, dataAry);
	console.log(result);
	document.getElementById('show').innerHTML = result;
}

function loadXML(){
	console.log(xhtp.responseXML); 
	let doc = xhtp.responseXML;
	let records = doc.getElementsByTagName('record')
	console.log(records);  
	console.log(records[0].children[0].innerHTML);
	let titles = ["도서코드","도서명","저자","출판사","가격"];
	let dataAry = [];
	for(let record of records){
		let obj = {
			book_code: record.children[0].textContent,  
			book_title: record.children[1].textContent,
			book_author: record.children[2].textContent, 
			book_press: record.children[3].textContent,  
			book_price: record.children[4].textContent  
	}
	dataAry.push(obj);
}
	let result = table.makeTable(titles, dataAry);
	console.log(result);
	document.getElementById('show').innerHTML = result;

	let tr = '<tr><td>' + newList.book_code + 
	'</td><td>' + newList.book_title + 
	'</td><td>' + newList.book_author + 
	'</td><td>' + newList.book_press + 
	'</td><td>' + newList.book_price + '</td></tr>';
	document.getElementById('list').innerHTML += tr;

}
