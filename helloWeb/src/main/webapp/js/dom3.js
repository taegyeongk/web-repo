//dom3.js
//table>(thead>tr>th*5)+(tbody>tr>td*5)*건수

import table from "./domTable.js";;
let url = 'https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&serviceKey=S9FL6G%2Bl2zOMJwIdNZOl8V5VVkCF6dl7OsKEvVRKLxCfD5%2Bz2m0fgDnT0s%2Fc4zxBqSH66StChzR7wX7C2ECJlg%3D%3D';
let titles = ['센터id', '센터명', '의료원', '연락처', "위도값", "경도값"]

fetch(url)
	.then(resolve => resolve.json())  //원래구문 : function(resolve) {return resolve.json()}를 화살표함수로 줄인것.
	.then(fetchCallback)
	.catch(err => console.log('error => ', err));


//fetch 호출되는 함수 = callback함수
function fetchCallback(result) {
	let rawData = result.data;  //원래 데이터
	console.log(rawData);
	let sidoAry = [];   //sidoAry에 sido 정보를 중복된 값제거.
	rawData.forEach(center => {
		if (sidoAry.indexOf(center.sido) == -1) {  //indexOf 사용할때는 -1 해줘야한다.
			sidoAry.push(center.sido);
		}
	})
	console.log(sidoAry);
	let sidoSel = document.querySelector('#sidoList');
	sidoAry.forEach(sido => {
		let opt = document.createElement('option');  //option 태그 생성
		opt.innerHTML = sido;
		sidoSel.append(opt);
	})
	// select태그에 change 이벤트 생성
	sidoSel.addEventListener('change', function(e) {
		console.log(e.target.value);
		//선택된 sido 값에 맞는 center명만 출력하고싶을때
		let searchSido = e.target.value;
		let filterAry = rawData.filter(center => center.sido == searchSido);  //10개만 보이고싶을때는 filter((center, idx) => idx <10 );
		console.log(filterAry);
		genTable(filterAry);  //이벤트 선택시 출력
	})
	let filterAry = rawData.filter((center, idx) => idx <10 );
	genTable(filterAry);
	//genTable(rawData);  //초기데이터 화면출력
}



//-->위에 이벤트생성과 같은 구문
//sidoSel.addEventListener('change', changeCallback);
//function changeCallback(e) {
//	console.log(e.target.value);

//let searchSido = e.target.value;
//let filterAry = rawData.filter(center => center.sido == searchSido);
//genTable(filterAry);
//}


function genTable(rawData = []) {
	//초기화
	document.querySelector('#show').innerHTML = '';
	//전체 rawData로 출력.
	let thead = table.makeHead(titles); //헤더정보
	let mapData = rawData.reduce((acc, center) => {  //매핑정보 출력
		let newCenter = {
			id: center.id,
			centerName: center.centerName.replace('코로나19', ''),
			org: center.org,
			phoneNumber: center.phoneNumber,
			lat: center.lat,
			lng: center.lng
		}
		acc.push(newCenter);
		return acc;
		
	},[]);
	
	
	let tbody = table.makeBody(mapData);  //[{},{},{}] : 배열안에 객체를 리턴해주는 값을 tbody로 선언
	let tbl = document.createElement('table');
	tbl.setAttribute('border', '1');
	tbl.append(thead, tbody);
	document.querySelector('#show').append(tbl);  //getElementById 여도 상관없음.

	//tr 클릭 이벤트 등록
	let targetTr = document.querySelectorAll('tbody tr');
	targetTr.forEach(tr => {
		tr.addEventListener('click', function(e) {
			console.log(tr);
			console.log(tr.children[4].innerHTML, tr.children[5].innerHTML);
			let lat = tr.children[4].innerHTML;
			let lng = tr.children[5].innerHTML;
			//location.href ='daumapi.html?x='+lat+'&y='+lng;
			window.open('daumapi.html?x=' + lat + '&y=' + lng);

		})
	})

}