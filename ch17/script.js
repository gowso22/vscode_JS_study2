// async await
// Promise의 then 메소드를 chain 형식으로 쓰는 것보다 가독성이 더 좋아짐



// 함수 앞에 async를 붙이면 Promise를 반환함
// async function getName(){
//     return 'Mike';
// }

// console.log(getName()); // Promise를 반환 확인

// getName().then((name) => {
// console.log(name);
// }
// )


function getName(name){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(name)
        }, 1000);
    })
}


async function showName(){
    //await키워드 async 함수 내부에서만 사용가능
    // await 키워드 옆엔 Promise가 오고 Promise가 처리될 때까지 기다림
    const result = await getName('Mario');
    console.log(result)
}

console.log('시작');
// '시작'이 찍힌 후 1초 후에 실행됨
showName();