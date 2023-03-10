// computed property : 계산된 프로퍼티
// 객체에서 사용할 method

let a= 'age';

const user = {
        name : 'Mike',
        [a] : 30 // [a] = age >> computed property
}

console.log(user);


function makeObj(key, val){ // key, val를 받아 객체를 리턴하는 함수
        return{
                [key] : val
        }
}

const obj = makeObj("나이", 33)
console.log(obj)


// 객체 method

const customer = {
        name : 'Mario',
        age : 30
}

//const custom1 = customer; // 객체를 복사한 것이 아님, 둘 다 하나의 객체로
//custom1.name = 'Tom'

// 이름이 Tom으로 똑같이 출력됨
console.log(customer); 
//console.log(custom1);


const custom2 = Object.assign({}, customer); // 객체 복사 method : {} >>초기값 설정
custom2.name = 'Toto'
console.log(custom2);

const result = Object.keys(customer); // customer의 객체의 키를 배열로 반환
console.log(result);

const vresult = Object.values(customer); // customer의 객체의 value값을 배열로 반환
console.log(vresult);

const enresult = Object.entries(customer); // customer의 객체의 키와 value값 둘 다 배열로 반환
console.log(enresult);


// 배열을 객체화
let arr = [
        ['mon', '월'], // key : mon, value : 월
        ['tue', '화'],
]

const resu = Object.fromEntries(arr); // 배열을 fromEntries를 통해 객체로 
console.log(resu);


































