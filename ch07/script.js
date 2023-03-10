// 배열 메소드1
// arr.splice(n, m) : 특정 요소 지움
// arr.splice(n, m, x) : 특정요소를 지우고 추가

let arr = [1,2,3,4,5]; 
// arr.splice(1, 2); //배열 1번째 index값인 2부터 2개의 요소를 지움(2,3 지워짐)
arr.splice(1, 3, 100, 200) // 2,3,4 지우고 지워진 자리에 100, 200 추가
let result = arr.splice(1,2);


console.log(arr);
console.log(result); // 삭제된 값 출력

let arr1 = ['나는', '철수', '입니다'];

// 1번째 index 부터 아무값도 지우지 않고 0~1번째 사이에 요소 추가
arr1.splice(1,0, '대한민국', '소방관'); 
console.log(arr1);


//arr.slice(n, m) : index n부터 index m 앞까지 반환 

let arr2 = [1,2,3,4,5]
arr.slice(); // [1,2,3,4,5]
console.log(arr2.slice(1,4));// [2.3.4]

// arr.concat 합쳐서 새배열로 반환(이어 붙임)
let arr3 = [3,4];
console.log(arr3.concat([1,2]));

// arr.forEach() : 배열 반복

let arr4 = ['Mike', 'Tom', 'Jane'];
arr4.forEach((name, index) => {
    console.log(`${index}, ${name}`)
});


//arr.indexOf
//arr.lastIndexOf
let arr5 = [1,2,3,4,5,1,2,3];

arr5.indexOf(3) // 2
arr5.indexOf(3, 3) // 배열의 index 3번째(4)부터 시작해서 3을 찾음 >> 7

arr5.lastIndexOf(3) // 배열 끝에서 시작해 3을 찾으므로 7이 나옴

//arr.includes() : 해당 배열에 값이 포함하는지 확인
let arr6 = [1,2,3];
arr6.includes(2); // true
arr6.includes(8); // false


// arr.find, arr.findIndex

// arr.find : arr 배열 중에 식을 만족하는 값 하나만 반환, 없다면 undefined 반환
let arr7 = [1,2,3,4,5];

const result1 = arr7.find((item) =>{
    return item % 2 === 0;
});

console.log(result1);

let userList = [
    {name : 'Mike', age : 30}, // index 0
    {name : 'Jane', age : 22}, // index 1
    {name : 'Tomy', age : 10} // index 2
];

const result19 = userList.find((user) => {
    if(user.age < 19){
        return true;
    }
    return false;
})
const resultIndex = userList.findIndex((user) => {
    if(user.age < 19){
        return true;
    }
    return false;
})

console.log(result19); // age가 19미만인 Tomy가 출력됨
console.log(resultIndex); // 2

// arr.filter : 식을 만족하는 모든 요스를 반환
const result2 = arr7.filter((item) =>{
    return item % 2 === 0;
});
console.log(result2); // arr7 배열 숫자 중 짝수요소 모두 출력

// arr.reverse() : 역순으로 재정렬
// arr.map() : 함수를 받아 특정 기능을 수행하고 새로운 배열을 반환, 실무에서 많이 사용(중요)

let newUserList = userList.map((user, index) => {
    return Object.assign({}, user, {

        id : index +1,
        isAdult : user.age > 19
    })
})
console.log(newUserList);

//join 배열을 구분자를 통해 합침

let arr8 = ['안녕', '나는', '철수야']
let join = arr8.join(); // 쉼표로 구분하여 표시
let join1 = arr8.join("     "); // 공백으로 구분

console.log(join1);

// split 문자열을 구분자를 통해 나눠서 배열로 만듦
const str = 'Mike, Jane, Tom, Tony'
const strResult = str.split(',') // ,를 구분자로 배열로 만듦
console.log(strResult);

const say = 'Hello, my name is Sally'
const sayResult = say.split(""); // 공백을 포함해서 1글자씩 배열로 만듦
console.log(sayResult);

// Array.isArray();

let user00 = {
    name : 'Mike',
    age : 30,
} // 객체

let userList00 = ['Mike', 'Tom', 'Jain']; // 배열

console.log(typeof user00); // Object
console.log(typeof userList00); //Object
// 배열인지 아닌지 구분 위해 isArray 사용

console.log(Array.isArray(user00));  // 객체이므로 false
console.log(Array.isArray(userList00));  // true

