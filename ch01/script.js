// 변수 var, let, const 비교

// var는 한번 선언된 변수를 다시 선언할 수 있다.
var name = 'M'
console.log(name);
var name = 'J'
console.log(name);

let name1 = 'Mike';
console.log(name1);
// let name1 = 'Jane'; // 에러
// console.log(name1);

// var는 선언하기 전에 사용할 수 있다.
console.log(nm); // undefined
var nm = 'Mario'
// 실제 동작
var nm;
console.log(nm); // 선언은 호이스팅되지만 할당은 호이스팅 되지 않음
nm = 'Mario'
// var로 선언한 변수는 코드가 실제로 이동하진 않지만 최상위에서 선언된 것처럼 동작
// 호이스팅 : 스코프(변수에 접근할 수 있는 범위:전역/지역) 내부 
//              어디서든 변수 선언은 최상위에 선언된 것처럼 행동


// Temporal Dead Zone(TDZ) >> 스코프의 시작 지점부터 초기화 시작 지점까지의 구간
// >> let과 const는 TDZ의 영향을 받음

// 변수 생성과정 : 선언 > 초기화 > 할당

// var : 선언 및 초기화(동시) > 할당
// let : 선언 > 초기화 >할당
// const : 선언,초기화,할당(동시)

        // console.log(tdz); // 에러
        // let tdz = 'mike';
// let과 const 호이스팅이 됨, 

// tdz는 선언만 된 것뿐 초기화나 할당이 되지 않은 상태에서 console.log가 실행 되어
// Temporal Dead Zone 영향을 받아 에러가 발생 

// var : 함수 스코프 >> 함수 내부에서만 선언된 변수만 그 지역변수가 되는 것임.
// let, const : 
//          블록 스코프 >> 코드 블록(함수, if문, while문, try/catch문 등..) 내에서 선언된 변수(지역 변수)는 코드 블록 내에서만 유효하면 외부에서 접근을 하지 못함

//var보다는 let과 const 사용 권장 : 예측 가능한 결과를 내고 버그를 줄일 수 있다