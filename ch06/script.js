// String

// length : 문자열의 길이

// 특정 위치에 접근
let desc = "안녕하세요.";

console.log(desc[2]); // '하'

desc[4] = '용'; // 허용되지 않음
console.log(desc);

//toUpperCase() / toLowerCase() >> 영문자 대/소문자로만 표기

// indexOf(text) >> 문자를 인수로 받아 몇 번째 위치에 있는지 확인

let hi = "Hi guys, Nice to meet you";

console.log(hi.indexOf('to'));
console.log(hi.indexOf('welcome')); // 찾는 문자열이 없다면 -1로 반환


// hi.indexOf('Hi') >> 0값을 반환하므로 문장 안에 Hi가 있음에도 false가 찍힌다. 

if(hi.indexOf('Hi') > -1){
    console.log('Hi가 포함된 문장입니다.');
}

// str.slice
let alpha = 'abcdefg';

console.log(alpha.slice(2));  // 2번째인 c부터 출력
console.log(alpha.slice(0, 5)); // 0번째인 a부터 5개 출력
console.log(alpha.slice(2, -2)); // 끝에서 c부터 끝에서 2개 뺌

// str.substring

//3~4번째 사이의 값을 출력하므로 자리를 바꿔도 값은 같게 나옴
console.log(alpha.substring(3,5));
console.log(alpha.substring(5,3));
 
//str.substr
// 2번째 자리에서 시작하여 4개를 가져옴
console.log(alpha.substr(2,4));
// 끝에서 4번째 자리에서 시작하여 2개를 가져옴
console.log(alpha.substr(-4,2));

//str.trim() 공백제거
//str.repeat(n) 문자열을 n번 반복


// 문자열 비교(아스키코드표를 이용하여)

// 예시

let list = [
    "01. 들어가며",
    "02. JS의 역사",
    "03. 자료형",
    "04. 함수",
    "05. 배열",
]

let newList = [];

for(let i = 0; i<list.length ; i++){
    newList.push(
        list[i].slice(4)
    );
}

console.log(newList); //list의 숫자부분을 제외하고 출력이 된다.


// 금칙어 : 콜라

function hasCola(str){
    if(str.indexOf("콜라") > -1){
        console.log('금칙어가 있습니다.');
    }else{
        console.log('통과');
    }
}

hasCola('와 사이다가 짱이야!'); // -1 true 값 반환하여 '금칙어가 있다'는 문장이 나옴
hasCola('무슨소리, 콜라가 최고');
hasCola('콜라'); // 0 false값을 반환하여 '통과'라는 문장이 나옴

// str.indexOf("콜라") >> str.indexOf("콜라") > -1 고쳐야 원하는 기능 구현

// includes를 사용하면 해당 문자열이 있는지 없는지 판단해줌
function hasCider(str){
    if(str.includes("사이다")){
        console.log('금칙어가 있습니다.');
    }else{
        console.log('통과');
    }
}

hasCider('와 콜라가 짱이야!'); 
hasCider('무슨소리, 사이다가 최고');
hasCider('사이다'); 