//bookmodule.js

const table = {

    makeHead(titleAray = ['도서코드', '도서명', '저자', '출판사', '가격', '삭제']) {
        let headTag = "<thead><tr>";
        titleAray.forEach(title => {
            headTag += "<th>" + title + "</th>";
        })
        headTag += "</tr></thead>";
        return headTag;
    },
    
    makeBody(dataAry = []) {
        let bodyTag = "<tbody id = 'list'>";
        dataAry.forEach(item => {
            bodyTag += this.makeTr(item);
        })
        bodyTag += "</tbody>";
        return bodyTag;
    },
    
    makeTable(titleAray, dataAry) {
        let tableTag = "<table border = '1'>"
        tableTag += this.makeHead(titleAray) + this.makeBody(dataAry);
        tableTag += "</table>";
        return tableTag;
    },
    
    makeTr(member = {}) {
        let trTag = "<tr onclick='showInfo(event,this)'>";
        for (let prop in member) {
            trTag += "<td>" + member[prop] + "</td>";
        }
        trTag += "</tr>";
        return trTag;
    }
}

export { table };