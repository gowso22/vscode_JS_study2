// 배열 구조 분해

let users =['Mike', 'Tom', 'Jane'];

let [user1, user2, user3] = users;
// let user1 = users[0]; let user2 = users[1]; let user3 = users[2];

let strs = "Mike-Tom-Jane";
let [str1, str2, str3] = strs.split('-');
 

// 배열구조분해 : 기본값

let [a,b,c] = [1,2]; // c >> undefined

// 기본값 세팅
let [a1=3, b1 = 4, c1 = 5] = [1,2]; // a1 = 1, b1=2, c1=5


//일부 반환값 무시

let[user01, , user02] = ['Mike', 'Tom', 'Jane', 'Tony'];
// user01 = Mike, user02 = Jane


// 객체 구조 분해

// 새로운 변수 이름으로 할당
let user = {name : 'Mario', age : 30};

let {name : userName, age : userAge} = user;
console.log(userName); // Mario
console.log(userAge); // 30


