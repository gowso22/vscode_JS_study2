// 예문
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

//Promise.all(배열로 받음) >> 한꺼번에 작업하고 모두 이행되면 출력 시간이 단축됨
//                          f1, f2, f3 중에 거부되면1 어떤 데이터도 얻지 못함
console.time('promiseall 작업시간')
Promise.all([f1(),f2(),f3()]).then(res => {
    console.log(res);
    console.timeEnd('promiseall 작업시간') // 대략 3초
})

// Promise.race >> Promise.all 3개의 작업이 다 끝나고 console.log 출력하지만
//              >> Promise.race 3개 작업 중 하나라도 먼저 끝나면 끝낸 작업만 출력
Promise.race([f1(),f2(),f3()]).then(res => {
    console.log(res);
     // 대략 3초
})



// console.log('시작')
// console.time('promise 작업시간')
// // f1을 실행하고 
// // f1 promise를 반환하고 res 함수 실행한 값을 다시 f2에게 넘김
// f1().then(res => f2(res))
// .then((res) => f3(res))
// .then((res) => console.log(res))
// .catch(console.log)
// .finally(() => {
//     console.timeEnd('promise 작업시간')
// }) 6초의 작업시간

// promise chain