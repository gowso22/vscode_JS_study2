// 프로미스


// new Promise로 생성(state, result를 프로퍼티로 가짐)
// resolve : 성공한 경우 실행되는 함수
// reject : 실패한 경우 실행되는 함수

// 어떤 일이 완료되고 실행되는 함수(callback 함수)

const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Ok')
       //reject(new Error('error...'))
    }, 3000);
}) 
// >> 초기상태 state : pending(대기), result : undefined
// >> 3초 후 state : fulfilled(이행됨), result : 'Ok' 

// reject 예시문

// const ErrPr = new Promise((resolve, reject) => {
//     setTimeout(() => {
//        reject(new Error('Error...'))
//     }, 3000);
// }) 

// >> 초기상태 state : pending(대기), result : undefined
// >> 3초 후 state : rejected(거부됨), result : error 

// then을 이용하여 resolve, reject 처리
// pr.then(
//     function(result){}, // 이행 되었을 때 실행
//     function(err){} //  거부 되었을 때 실행
// )

// catch >> reject인 경우에 실행
pr.then(
    function(result){
        console.log(result)
    }
).catch(
    function(err){
        console.log(err)
    }
).finally(
    function(){
        console.log('---주문 끝---')
    }
)// finally 이행이든 거부든 처리가 끝나고 무조건 실행됨








