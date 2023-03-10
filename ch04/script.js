// Symbol >> 유일한 식별자를 만들때 사용, 유일성 보장

const a = Symbol(); // new를 붙이지 않음

const id = Symbol('id'); // 'id' >>설명

const user = {
        name : 'Mike',
        age : 30,
        [id] : 'myid' // computed property
}
console.log(user); // Symbol로 만든 key를 가진 property 확인

// keys, values, entries
// >> key가 Symbol 형인 것들은 건너뜀 
const ab = Object.keys(user);
// Symbol만 표시
const bc = Object.getOwnPropertySymbols(user);
// Symbol 포함한 key 표시
const cd = Reflect.ownKeys(user);

console.log(ab); 
console.log(bc);
console.log(cd);

// Symbol : 특정 객체의 원본데이터는 건들이지 않고 속성을 추가할 수 있다.
//        다른사람이 만든 객체의 자신만의 속성을 추가해서 덮어쓰면 안되기 때문

//Symbol.for() : 전역 심볼
// 하나의 심볼만 보장 받을 수 있음
// 없으면 만들고, 있으면 가져오기 때문에
// Symbol 함수는 매번 다른 Symbol 값을 생성하지만,
// Symbol.for 메소드는 하나를 생성한 뒤 키를 통해 같은 Symbol을 공유



// 다른 개발자가 만들어 놓은 객체
const custom = {
        name : 'Mario',
        age : 35
}

// 내가 작업
//custom.showName = function(){};
const showName = Symbol('show name');
custom[showName] = function(){
        console.log(this.name);
};

custom[showName]();
// > 다른 개발자가 만들어 놓은 코드에 영향을 미치지 않는 선에서 메소드 추가
// 원래 custom 객체에 showName이라는 메소드라는 이름이 있었는지 고민할 필요없이, 
// 다른 사람이 만들어 놓은 property를 덮어쓰지도 않음


// 사용자가 접속하면 보는 메세지
for(let key in custom){
        console.log(`His ${key} is ${custom[key]}`)
}
















