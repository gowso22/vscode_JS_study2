// 생성자 함수(붕어빵틀, 와플팬)

function User(name, age){ // 생성자 함수 첫글자는 대문자
        this.name = name; 
        this.age = age;
        this.sayName = function(){
                console.log(this.name);
        }
}

// new 연산자를 통해서 호출
let user1 = new User('Mikd', 30)
let user2 = new User('Jaye', 27)
let user3 = new User('Tam', 22)

user3.sayName(); // 해당함수를 호출할때 User생성자함수에 this는 user3를 가리킴

// 상품 객체 생성

function Item(title, price){
         this.title = title;
         this.price = price;

         this.showPrice = function(){
                console.log(`가격은 ${price}원 입니다`);
         }
}

const item1 = new Item('인형', 3000);
const item2 = Item('가방', 5000); // new 연산자가 없다면 undefined 호출, 해당 생성자 함수의 return값이 없으므로
const item3 = new Item('지갑', 9000);

console.log(item1, item2, item3);

item3.showPrice();