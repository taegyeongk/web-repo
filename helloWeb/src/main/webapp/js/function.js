// function.js
// //함수선언
        // function myFunc(std,score = 60){
        //     // if(score == undefined){
        //     //     score = 0;
        //     // }
        //     console.log(`${std} 점수는 ${score}`);
        //     return score; //undefined 값 리턴
        // }
        //함수 표현식
        var myFunc = function myFunc(std,score = 60){
            console.log(`${std} 점수는 ${score}`);
            return score;
        }
        // let myFunc = myFunc('홍길동'); //myfunc 을 선언한 적이 없음.에러발생
        console.log(myFunc('홍길동'));
