// Generator >> 함수 실행을 중간에 멈췄다가 재개할 수 있는 기능

//              다른 작업을 하다가 다시 돌아와서 next() 해주면 멈췄던 부분부터 이어서 실행함.
//              next(), return(), throw()를 가짐

// function 옆에 * 붙임
// 내부에 yield 키워드 사용
function* fn(){
    yield 1;
    yield 2;
    yield 3;

    return "finish";
}

const a = fn();