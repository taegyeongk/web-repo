// book.js
let xhtp = new XMLHttpRequest();  
xhtp.open('get', '../BookListServlet');
xhtp.send();
xhtp.onload = loadJson;

function loadJson(){
	console.log(xhtp.responseText);
	let result = JSON.parse(xhtp.responseText);
	console.log(result);
	let titles = ["도서코드","도서명","저자","출판사","가격","삭제"];
	let tr = table.makeTable(titles, result)
	document.getElementById('show').innerHTML = tr;
}
