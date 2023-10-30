//ajaxModule.js

const table = {
	
	
	makeHead(titles = ['회원아이디','비밀번호','이름','연락처']){
		let headTag = "<thead><tr>";
		
		titles.forEach(title => {
			headTag += "<th>" + title+ "</th>";
		})
		
		headTag +="</tr></thead>";
		return headTag;
	},
	makeBody(dataAry = [{mid,pass,name,phone}]){
		let bodyTag = "<tbody id = 'list'>";
		dataAry.forEach(item =>{
			bodyTag += this.makeTr(item)
		})
		bodyTag +="</tbody>";
		return bodyTag;
	},
	makeTable(titles, dataAry){
		let tableTag = "<table border='1'>";
		tableTag += this.makeHead(titles) + this.makeBody(dataAry);
		tableTag += "</table>";
		return tableTag;
	},
	
	makeTr(member = {}){
		//tr부분 클릭시 보이는 함수 추가  onclick: event , showInfo() : event handler
		let trTag = "<tr onclick='showInfo(event,this)'>"; 
		for(let prop in member){
				trTag +="<td>" + member[prop] + "</td>";
			}
			trTag += "</tr>";
			return trTag;
		}
}
export { table }









