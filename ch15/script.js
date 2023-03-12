// Class >> ES6에 추가된 스펙

// 생성자 함수
const User = function (name, age){
    this.name = name;
    this.age = age;

    // this.showName = function(){
    //     console.log(this.name);
    // }
}

User.prototype.showName = function(){
    console.log(this.name);
}

const mike = new User('Mike', 30); 
// new 없이 실행하면 return 값이 없어 undefined를 반환함. (에러는 표시 되지 않음)



console.log(mike);




// 클래스
class User2 {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }// 객체 만들어주는 생성자 메서드
    showName(){
        console.log(this.name);
    }
}

const mario = new User2('Mario', 30)
// new 없이 실행한다면 error메세지가 표시되므로 반드시 new연산자를 붙인다.

mike.showName();
mario.showName();




// class 상속
// extends 키워드 사용
class Car{
    constructor(color){
        this.color = color;
        this.wheels = 4
    }
    
    drive(){
        console.log('drive...')
    }

    stop(){
        console.log('stop!')
    }

}

class Bmw extends Car {
    //생성자 오버라이딩
    constructor(color){
        // super 키워드를 사용해야 한다.
        super(color);
        
        this.navigation =1;
    }

    park(){
        console.log('PARK');
    }
    // 메소드 오버라이딩
    stop(){ // Car 클래스와 같은 stop메서드가 있다면 덮어쓰게 된다.
        
        // Car 클래스의 stop 메서드를 사용하고 싶다면 super 사용
        super.stop();

        console.log("OFF")
    }
}
// z4는 Bmw상속 받고 Bmw가 상속 받은 Car도 상속 받는다.
const z4 = new Bmw('blue');



// 'blue'라고 선언해도 color는 undefined로 나온다
// console.log(z4);
// Bmw 클래스 생성자에 매개변수로 color를 넣어야 값을 받음
console.log(z4.color);