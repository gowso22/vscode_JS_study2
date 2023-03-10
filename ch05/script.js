// toString
let num = 10;

const tostr = num.toString();
const tostr1 = num.toString(2);
console.log(tostr); // 문자열로
console.log(tostr1); //2진수로 

let num2 = 255;
const tostr2 = num2.toString(16);
console.log(tostr2); // 16진수로

// Math : 수학관련 프로퍼티, 메소드를 가지고 있는 내장객체

// Math.ceil : 올림
// Math.floor : 내림
// Math.round : 반올림
// .toFixed() >> 숫자를 인수로 받아 그 숫자만큼 소수점 이하 개수에 반영, 
//               문자열로 반환이 되므로 Number를 이용해 숫자로 변환해야 할 수도 있다


// 요구사항 : 소수점 둘째자리까지 표현(셋째자리에서 반올리)

let userRate = 30.1234; 
const needRate = Math.round(userRate*100)/100;
console.log(needRate);

const toFixedRate = Number(userRate.toFixed(2));
console.log(needRate);

// NaN : not a number, isNaN : 숫자인지 아닌지 판별

// parseInt >> 정수값 반환

let margin = '10px'; //  
const mar = parseInt(margin); // 10까지 읽고 그 이후는 문자열이라 10까지만 출력
const gin =Number(margin); // NaN

console.log(mar);
console.log(gin);

let redColor = 'f3';
parseInt(redColor); // 문자열부터 읽어야 하므로 NaN 출력

const ex1 = parseInt(redColor, 16); // 16진수를 10진수로 변환
const ex2 = parseInt('11', 2); // 2진수를 10진수로 반환

console.log(ex1);
console.log(ex2);


//parseFloat >> parseInt와 비슷하게 동작하지만 부동소수점까지 반환


//Math.random() >> 0~1까지 무작위 숫자 생성
// 1~100까지 임의의 숫자를 뽑고 싶다면?
// Math.random으로 0~1 무작위 숫자 생성 > *100으로 1자리~2자리수로 만들어줌
// Math.floor로 소수점 자리는 버림
// 0이 나오거나 100이 안 나올 경우를 위해 +1를 해줌
// 이유 : 0.0012가 나온다면 *100을 하더라도 0.12가 되어 0이 나올수도 있고
//        random()함수는 1를 생성하지 못하기 때문에 100을 나타내지 못하므로
const ran = Math.floor(Math.random()*100)+1;
console.log(ran);

//Math.abs() : 절대값
//Math.pow() : 거듭제곱
//Math.sqrt() : 제곱근

Math.abs(-1) // 1
Math.pow(2,10) // 2의 10승 1024
Math.sqrt(16) // 4












































