// 나머지 매개변수와 전개구문

// arguments
// 함수로 넘어 온 모든 인수에 접근, 함수 내에서 이용 가능한 지역 변수
// length / index
// Array 형태의 객체
// 배열의 내장 메서드 없음(forEach, map 사용 x)

function showName(name){
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
}

showName('Mike');


// ... 나머지 매개변수 : 정해지지 않은 개수의 인수를 배열로 나타냄, q배열 메서드 사용가능

function showName00(...names){
    console.log(names);
}

showName00(); // undefined가 아닌 빈 배열로 출력
showName00('Mike');
showName00('Mike', 'Jane');

// 나머지 매개변수를 이용한 더하기 함수
function add(...numbers){
    let result = 0
    numbers.forEach((num) =>{
        result += num;
    })
    console.log(result);
}

add(1,2,3,4,5);
add(1,2,3,4,5,6,7,8,9,10)


//객체로 예시

// 생성자함수 생성
// skills는 몇 개가 있을지 모르니 나머지매개변수로 지정
// 나머지 매개변수는 마지막에 위치
function User(name, age, ...skills){ 
    this.name = name;
    this.age = age;
    this.skills =skills;
}

const user1 = new User('Mike', 30, "html", "css");
const user2 = new User('Tom', 35, "JS", "React");
const user3 = new User('Jane', 23,  "English");

console.log(user1);
console.log(user2);
console.log(user3);

// 전개 구문 : 복제
let arr = [1,2,3,4,5]
let arr2 = [...arr]; // 1,2,3,4,5 

let user = {name : 'Mickey', age : 25}
let user00 = {...user}

user00.name = "Tom"
console.log(user.name);
console.log(user00.name);

// 전개구문
// arr01을 [4,5,6,1,2,3]

let arr01 = [1,2,3];
let arr02 = [4,5,6];

arr02.reverse().forEach((num)=>{
    arr01.unshift(num); // reverse 해주지 않으면 6,5,4,1,2,3으로 출력
})

console.log(arr01);
// 전개구문 이용
arr1 = [...arr02, ...arr01];
console.log(arr01);

let emp = {name : 'Mario'};
let info = {age : 30};
let fe = ["JS", "React"]
let lang = ["Korean", "English"];

// forEach와 push 이용
    // emp = Object.assign({}, user, info, 
    //     {
    //      SKL : []
    //     });
 
    // fe.forEach((item) =>{ 
    //     emp.SKL.push(item); 
    // })
        
    // lang.forEach((item) =>{  
    //     emp.SKL.push(item); 
    // })

// 전개구문 이용
emp = {...emp, ...info, 
        SKL : [
            ...fe,
            ...lang
    ]}


console.log(emp);