// 상속, prototype

const car = {
    wheels : 4,
    drive(){
        console.log('drive...')
    }
}


const bmw = {
    color : 'red',
    //wheels  :4,
    navigation : 1,
    // drive(){
    //     console.log('drive...')
    // }
}
const benz = {
    color : 'black',
   // wheels  :4,
    // drive(){
    //     console.log('drive...')
    // }
}
const audi = {
    color : 'red',
    // wheels  :4,
    // drive(){
    //     console.log('drive...')
    // }
}


// 각 차종은 car를 상속받음
// wheels, drive() 추가하지 않아도 console창에서 확인이 가능하다
bmw.__proto__ = car;
benz.__proto__ = car;
audi.__proto__ = car;


const x5 = {
    color : 'white',
    name : 'x5'
}

// x5는 bmw의 상속을 받고 bmw는 car를 상속받고 있으므로 wheels 요소도 가지고 있다(prototype chain)
x5.__proto__ = bmw;

for(p in x5){
    console.log(p); // x5가 가지고 있는 프로퍼티를 console창에 출력
}

//  Object key, value :상속받은 프로퍼티는 보여주지 않음
const x5Key = Object.keys(x5);
const x5Vlaue = Object.values(x5);
console.log(x5Key); 
console.log(x5Vlaue);


// hasOwnProperty >> 객체가 가지고 있는 프로퍼티만 표시
for(p in x5){
    if(x5.hasOwnProperty(p)){
        console.log('o', p);
    }else{
        console.log('x', p);
    }
}


//생성자 함수 prototype 추가

const Kia = function (color){
    const c= color;
    this.getColor = function(){
        console.log(c);
    }
    // closure 이용
}


// prototype 이용하여 중복코드를 줄일 수 있음
// Kia.prototype.wheels = 4;
// Kia.prototype.navigation = 1;
// Kia.prototype.drive = function(){
//     console.log('drive...')
// }
// Kia.prototype.stop = function(){
//     console.log('stop...')
// } // constructor >> true

// Kia.prototype = {
//     wheels : 4,
//     navigation : 1,
//     drive(){
//         console.log('drive...')
//     },
//     stop(){
//         console.log('stop...')
//     }
// } // constructor >>  false

// 수동으로 constructor를 명시하면 true
Kia.prototype = {
        constructor : Kia,
        wheels : 4,
        navigation : 1,
        drive(){
            console.log('drive...')
        },
        stop(){
            console.log('stop...')
        }
} 

const k5 = new Kia('red') // 계속해서 컬러를 바꿀수 있음
k5.getColor(); // 초기에 선언한 값만 가지고 있고 바꿀수 는 없음


const k9 = new Kia('black')


































