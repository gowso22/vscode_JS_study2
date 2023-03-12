// call, apply, bind
// 함수 호출 방식과 관계없이 this를 지정할 수 있음

// call : 모든 함수에서 사용할 수 있으며, this를 특정값으로 지정

const mike = {
    name : "Mike"
}

const tom = {
    name : "Tom"
}

function showName(){
    console.log(this.name);
}

function update(birthYear, occupation){
    this.birthYear = birthYear; //생년
    this.occupation = occupation; //직업
}

showName(); // 해당함수 실행하면 this는 window객체를 가리킴 >> window.name : ''
showName.call(mike); // this가 mike를 가리킴

//1번째 매개변수는 this로 사용될 값, 2번째 매개변수부터는 call에 선언한 함수의 매개변수들을 순서대로 적용
update.call(mike, 1999, 'singer'); 

console.log(mike);



// apply : 함수 매개변수 처리하는 방법을 제외하면 call과 같음
//          call은 일반적인 함수와 마찬가지로 매개변수를 직접 받지만
//          apply는 매개변수를 배열로 받습니다.
update.apply(tom, [2002, 'student']); 
console.log(tom);


const nums = [3,10,1,6,4];
// const minNum = Math.min(...nums);
// const maxNum = Math.max(...nums);

const minNum = Math.min.apply(null, nums); // 1번째 매개변수 >> this가 가리키는 값 null
// = Math.min.apply(null, [3,10,1,6,4]);
const maxNum = Math.max.call(null, ...nums);


console.log(minNum);
console.log(maxNum);


// bind는 함수의 this값을 영구히 바꿈

const updateMike = update.bind(mike);
updateMike(1980, 'police')

console.log(mike);

// 정리
const user = {
    name : 'Mike',
    seeName : function(){
        console.log(`hello, ${this.name}`);
    }

}

user.seeName(); // this >> user

let fn = user.seeName; // fn 할당시 this 잃어버림
fn(); // 호출 시 fn만 있으니 this에 넣을 값이 없음

fn.call(user);
fn.apply(user);

let boundFn = fn.bind(user);

boundFn();






































