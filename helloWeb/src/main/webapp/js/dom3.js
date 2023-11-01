//dom3.js
//table>(thead>tr>th*5)+(tbody>tr>td*5)*건수

import table from "./domTable.js";;
let url = 'https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&serviceKey=S9FL6G%2Bl2zOMJwIdNZOl8V5VVkCF6dl7OsKEvVRKLxCfD5%2Bz2m0fgDnT0s%2Fc4zxBqSH66StChzR7wX7C2ECJlg%3D%3D';
let titles = ['센터id', '센터명', '시도', '연락처', '주소']

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
	//genTable(filterAry);
	//let filterAry = rawData.filter((center, idx) => idx < 10);
	genTable(rawData, 1);  //초기데이터 화면출력 뒤에 숫자는 1페이지, 2페이지에 볼 내용표시 1페이지면 1-10번 2페이지면 11-20
}



//-->위에 이벤트생성과 같은 구문
//sidoSel.addEventListener('change', changeCallback);
//function changeCallback(e) {
//	console.log(e.target.value);

//let searchSido = e.target.value;
//let filterAry = rawData.filter(center => center.sido == searchSido);
//genTable(filterAry);
//}

s
function genTable(rawData = [], page = 57) {
	//초기화
	document.querySelector('#show').innerHTML = '';
	//10개 목록담으면 다음 페이지로 만드는법
	//첫번째, 마지막 => 계산
	let startNo = (page - 1) * 5;  //첫페이지 번호가 1,11,21,31... 원래는 +1해야하나 idx 시작값은 0부터라서 맞출려면 10+1에서 +1은 삭제
	let endNo = page * 5;   //마지막 번호가 10,20,30...

	//첫번째, 마지막 페이지 => 계산
	let totalCnt = rawData.length;
	let lastPage = Math.ceil(totalCnt / 5);
	let endPage = Math.ceil(page / 5) * 5;   // Math.ceil : 올림\
	let beginPage = endPage - 4;
	let prevPage = false, nextPage = false;
	if (beginPage > 1) {
		prevPage = true;
	}
	if (endPage < lastPage) {
		nextPage = true;
	}
	if (endPage > lastPage) {
		endPage = lastPage;
	}
	document.querySelector('.pagination').innerHTML = '';

	//이전페이지 존재 여부
	if (prevPage) {
		let aTag = document.createElement('a');
		aTag.setAttribute('href', '#');
		aTag.innerHTML = '&laquo;';
		aTag.addEventListener('click', function(e) {
			genTable(rawData, beginPage - 1);
		})
		document.querySelector('.pagination').append(aTag);
	}



	for (let i = beginPage; i <= endPage; i++) {
		let aTag = document.createElement('a');
		aTag.setAttribute('href', '#');
		aTag.innerHTML = i;
		if (i == page) {
			aTag.setAttribute('class', 'active')
		}
		aTag.addEventListener('click', function(e) {
			genTable(rawData, i);
		})
		document.querySelector('.pagination').append(aTag);
	}


	if (nextPage) {
		let aTag = document.createElement('a');
		aTag.setAttribute('href', '#');
		aTag.innerHTML = '&raquo;';
		aTag.addEventListener('click', function(e) {
			genTable(rawData, endPage + 1);
		})
		document.querySelector('.pagination').append(aTag);
	}
	//숙제 : 5번을 누르면 칸수가 하나씩 밀리는 코드 구현해오기
	
	
	//전체 rawData로 출력.
	let thead = table.makeHead(titles); //헤더정보
	let mapData = rawData.reduce((acc, center, idx) => {  //매핑정보 출력
		if (idx >= startNo && idx < endNo) {
			let newCenter = {
				id: center.id,
				centerName: center.centerName.replace('코로나19', ''),
				sido: center.sido,
				phoneNumber: center.phoneNumber,
				lat: center.lat,
				lng: center.lng,
				address: center.address
			}
			acc.push(newCenter);
		}
		return acc;   //새로 생성된 newCenter를 배열에 담는다.
	}, []);   //추가된 배열을 반환해서 다음 순번의 처리에 acc 사용


	let tbody = table.makeBody(mapData);  //[{},{},{}] : 배열안에 객체를 리턴해주는 값을 tbody로 선언
	let tbl = document.createElement('table');
	tbl.setAttribute('border', '1');
	tbl.append(thead, tbody);
	document.querySelector('#show').append(tbl);  //getElementById 여도 상관없음.

	//tr 클릭 이벤트 등록
	let targetTr = document.querySelectorAll('tbody tr');
	targetTr.forEach(tr => {
		tr.addEventListener('click', function(e) {
			//console.log(tr);
			//console.log(tr.children[4].innerHTML, tr.children[5].innerHTML);
			//let lat = tr.children[4].innerHTML;
			//let lng = tr.children[5].innerHTML;
			let lat = tr.dataset.lat;  //-->tr.children[4].innerHTML;랑 같음
			let lng = tr.dataset.lng;
			//location.href ='daumapi.html?x='+lat+'&y='+lng;
			window.open('daumapi.html?x=' + lat + '&y=' + lng);

		})
	})

}