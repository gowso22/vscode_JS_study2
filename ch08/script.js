// arr.sort() : 배열 재정렬, 배열 자체가 변경되니 주의

let arr = [1,5,4,2,3];
let arr1 = [27, 8, 5, 13];

function fn(a,b){
    return a - b;
}

arr.sort(); 
arr1.sort(fn);

console.log(arr);
// 13숫자에 1이 있어서 순서가 앞에 위치, fn함수 만들어 오름차순으로 정렬하도록 함
console.log(arr1); 

// Lodash 라이브러리의 
// .sortBy(arr); 이용하면 함수 없이 원하는 기준으로 정렬이 가능

// arr.reduce

let arr2 = [1,2,3,4,5];


// prev : 누적계산값, cur : 현재 배열에 있는 값, 0: 초기값
const result = arr2.reduce((prev, cur) => {
    return prev + cur;
}, 0);
console.log(result); // 15(1~5까지 합친 값)


let userList = [
    {name : 'Mike', age : 30},
    {name : 'Mac', age : 10},
    {name : 'Lom', age : 27},
    {name : 'Sue', age : 26},
    {name : 'Harry', age : 3},
    {name : 'Tom', age : 55},
]

let userResult = userList.reduce((prev, cur) =>{
    // 19보다 age가 높다면 빈 배열에 현재 배열의 name값을 추가
    if(cur.age > 19){
        prev.push(cur.name);
    }
        return prev;

}, []); //초기값은 빈 배열

console.log(userResult);

// 나이합
let ageSum = userList.reduce((prev, cur)=>{
    return prev += cur.age;
}, 0);

console.log(ageSum);

// name 길이가 3인 사람
let nameLeng = userList.reduce((prev, cur) => {
    if(cur.name.length === 3){
        prev.push(cur.name);
    }
    return prev
}, [])

console.log(nameLeng);