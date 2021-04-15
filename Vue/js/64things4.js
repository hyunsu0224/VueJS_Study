/*
    구조 분해와 확장 문법
    Vue에 있어서 객체는 중요한 요소이다.
    새로운 객체 속성을 더욱 쉽게 정의가 가능하다
*/

//  할당 구조 분해 (destructurng assignment)
let myObj = {
    prop1: 'Hello',
    prop2: 'World',
};
const prop1 = myObj.prop1;
const prop2 = myObj.prod2;

// 할당구조 분해를 이용하여 다시 작성을 해보자면
// 이 문법은 Vuex를 다룰때 유용하게 사용가능
let myObj = {
    prop1 : 'Hello',
    prop2 : 'World'
};

const { prop1, prop2 } = myObj;

console.log(prop1); //Hello

// 액션에서 state, commit()을 접근할 수 있는 context객체를 받을때에는
actions: {
    increment (context) {
        context.state
        context.commit(...)
    }
}

// 이때 구조 분해 문법을 이용하면 action에서 STATE속성을 사용할 필요가 없다.
// commit() 메서드만 정의하면 된다
actions: {
    increment({ commit }) {
        commit(...);
    }
}



//확장 문법,, 객체에 키, 값이 많을 때 해당 객체의 값을 특정 객체의 값으로 쉽게 복사할 수 있다.
//예전 방식
let myObj = {
    prop1 : 'Hello',
    prop2 : 'World'
};

let newObj = {
    name : 'George',
    prop1: myObj.prop1,
    prop2 : myObj.prop2
};

console.log(newObj.prop1); //Hello

//확장 연산자 ... 을 적용해보면 객체의 값을 쉽게 복사할 수있다.
let newObj = {
    name : 'George',
    ...myObj
};

console.log(newObj.prop1); //Hello

//Vuex에 이 문법을 적용시켜보자, 먼저 기존 자바스크립트 방식에서 state 속성 선언하는 부분을 보자
//store.js
new Vuex.Store({
    state : {
        prop1: ...,
        prop2: ...,
        prop3: ...
    }
});

//app.js
new Vue({
    computed: {
        prop1() {
            return store.state.prop1;
        },
        prop2() {
            return store.state.prop2;
        }
        ...
    }
});


//이번엔 Vuex를 적용 / mpaState　함수를 이용하면 위 코드처럼 state에 일일이 접근하지 않아도 됩니다.
import { mapState} from 'vuex';

var state = mapState(['prop1', 'prop2', 'prop3']);
console.log(state.prop1) // {...}

//또는 아래와 같이 mapState에 ... 연산자를 붙여 computed 속성에서 쉽게 뷰엑스의 state에 접근할수 있습니다.
import {mapState} from 'vuex';

new Vue({
    computed: {
        someLocalComputedProp() {...},
        ...mapState(['prop1', 'prop2', 'prop3'])
    }
});