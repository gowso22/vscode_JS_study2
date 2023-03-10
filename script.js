// 변수 var, let, const 비교

// var는 한번 선언된 변수를 다시 선언할 수 있다.
// var는 선언하기 전에 사용할 수 있다.

// 호이스팅 : 스코프(변수에 접근할 수 있는 범위:전역/지역) 내부 
//              어디서든 변수 선언은 최상위에 선언된 것처럼 행동

// 변수 생성과정 : 선언 > 초기화 > 할당

// var : 선언 및 초기화(동시에 일어남) > 할당
// let : 선언 > 초기화 >할당
// const : 선언,초기화,할당(동시)

// var : 함수 스코프 >> 함수 내부에서만 선언된 변수만 그 지역변수가 되는 것임.

// let, const : 
//          블록 스코프 >> 코드 블록(함수, if문, while문, try/catch문 등..) 내에서 선언된 변수(지역 변수)는 코드 블록 내에서만 유효하면 외부에서 접근을 하지 못함

//var보다는 let과 const 사용 권장 : 예측 가능한 결과를 내고 버그를 줄일 수 있다