// setTimeout >> 일정 시간이 지난 후 함수를 실행,
// setInterval >> 일정 시간 간격으로 함수를 반복

let num = 0;

function showTime(){
    console.log(`안녕하세요. 접속하신지 ${num++}초가 지났습니다.`);
    if(num > 5){ // 5초가 지나면
        clearInterval(tId); // tId 종료
    }

}

const tId = setInterval(showTime, 1000); // 1000 >> 1초 1초마다 showTime함수 반복


function showName(name){
    console.log(name)
}
const tId00 = setTimeout(showName,3000,'Mike')
clearTimeout(tId00) //setTimeout 실행x