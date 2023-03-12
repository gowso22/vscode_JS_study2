// Promise 예문

const f1 = () => {
    
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("1번 주문 완료")
        }, 1000);
    })
}

const f2 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("2번 주문 완료")
           //rej("xxx"); // 거부 되면 추후 작업 없이 작업을 끝냄
        }, 3000);
    })
}
const f3 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("3번 주문 완료")
        }, 2000);
    })
}

// Promise 예문을 async, await로 수정
console.log('시작');
async function order(){
try {
    const result1 = await f1();
    const result2 = await f2(result1);
    const result3 = await f3(result2);
    console.log(result3);

} catch (e) {
    console.log(e); // 에러(거부)가 실행 되면 발생함.
}
    console.log('종료');
}
order();





// console.time('promise 작업시간')
// f1().then(res => f2(res))
// .then((res) => f3(res))
// .then((res) => console.log(res))
// .catch(console.log)
// .finally(() => {
//     console.timeEnd('promise 작업시간')
// }) 

