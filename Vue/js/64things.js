//es6문법 4가지
//화살표함수(Arrow Functions), 템플릿 리터럴(Template literals), 모듈(Modules), 구조 분해와 확장 문법 (Destructuring and spread syntax)

//1.화살표 함수는 자바스크립트로 함수를 선언할 때 사용하는 새로운 함수 정의 방식
//  기존에 알고있던 자바스크립트 함수 선언방시과는 다르게 더 짧은 코드로 선언할 수 있다는 장점이 있다.

/*
    function (인자){        일반적인 자바스크립트 함수
        함수 로직
    }

    (인자) => {             화살표 함수(ES6)
        함수 로직
    }

    가장큰 특성은 this에 바인딩 하지 않는 특성이다.
    대신에, 화살표 함수 안에서 선언한 this는 해당 함수가 수행되는 컨텐스트를 가리킵니다.
    
    콜백함수를 인자로 받는 자바스크립트 배열 api도 알아보자
    예를 들어 array.filter()를 들자면 filter()`SMS는 콜백함수에서 정의한 조건 값에 따라 기존 배열의 요소들을 걸러내어 새로운 배열을 반환해줍니다.

    VUE.JS의 장점은 데이터 속성, COMPUTED속성, 메서드 속성들을 같은 뷰 객체 내부에서 쉽게 접근할 수 있다는 점이다.
    만약 콜백 함수를 es5　방식을 정의한다면 콜백 함수 내부에서 선언한 this는 뷰 컴포넌트 내부를 가리키지 않습니다. 따라서, 콜백 함수 안에서 뷰 컴포넌트의 데이터를 접근하려면 유효 범위를 이어주는 추가 코딩이 필요하다.
*/


new Vue({
    data: {
        size : 'large',
        items: [ {size : 'samll'}, {size : 'large'}]
    },
    computed : { 
        filterBySize() {
            let size = this.size;
            return this.items.filter(function(item) {
                return item.size === size;
            });
        }
    }
});

//  위의 내용과 같은 내용을 화살표 함수로 표현을 변경한것
new Vue({
    data: {
        size : 'large',
        items: [{size:'small'},{size : 'large'}]
    },
    computed : {
        filterBySize() {
            return this.items.filter((item) => {
                return item.size ===this.size;
            });
        }
    }
})


//시사점///////////////
// 화살표 함수를 여러 곳에서 유용하게 사용할 수 잇지만 뷰로 개발할 때 무조건 화살표 함수만 사용하라는 것은 아니다. 뷰 인스턴스의 속성들을 정의할 때는 화살표 함수를 사용하면 안된다.
var regular = new Vue({
    data : {
        val: 'Hello world'
    },
    computed : {
        upperCase : function() {
            return this.val.toUpperCase();
        }
    }
});
console.log(regular.upperCase);


//화살표 함수로 사용시
var arrow = new Vue({
    data : {
        val : 'Hello world'
    },
    computed : {
        uppercase : () => {
            return this.val.toUpperCase();
        }
    }
});
console.log(arrow.uppercase);