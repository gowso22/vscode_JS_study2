//클로저 Closure 
// : 함수와 Lexical Environment의 조합, 함수가 생성될 당시의 외부 변수를 기억,
//   생성 이후에도 계속 접근이 가능

// 내부함수에서 외부함수의 변수에 접근

// 어휘적 환경(Lexical Environment)

let one;
one = 1;

function addOne(num){
    console.log(one + num);
}

addOne(5);

// 위 코드 실행시 스크립트 내 선언한 변수들(one, addOne)
// Lexical 환경(전역 lexical 환경)에 올라감
// 1. one : 초기화 x, addOne : function
// 2. one : undefined(초기화는 되었어도 할당이 아직 되지 않았음), addOne : function
// 3. one : 1, addOne : function


// 4. 새로운 Lexical환경(내부 lexical환경)에서 addOne실행 >> num : 5
// 내부 Lexical환경은 외부Lexical 환경에 참조를 받음
// 코드에서 변수를 찾을 때 내부 > 외부 >전역 Lexcial 환경 순서로 찾음







// 예시
function makeAdder(x){
    return function(y){ // y를 가지고 있고 상위함수인 makeAdder의 x에 접근 가능
        return x + y;
    }
}


const add3 = makeAdder(3);
console.log(add3(2)); // add3 함수가 생성된 후에도 상위함수인 makeAdder의 x에 접근 가능

// 1. 전역 Lexical환경에서
// makeAdder : function, add3:초기화 x 상태

// makeAdder Lexical 환경에서 x : 3인 상태

// 2.makeAdder : function, add3: function
// 3. 익명함수 Lexical 환경에서 y : 2인 상태

