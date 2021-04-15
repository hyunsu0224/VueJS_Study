/*
    템플릿 리터럴(Template literals)
    작은 따옴표나 큰 따옴표가 아닌 백틱 ` 을 사용하는 것이다.
    첫번째, 백틱을 사용하면 문자열을 여러 줄에 걸쳐 표시가 가능하다(뷰 컴포넌트의 템플릿 선언시에 유용함.)
    두번째, 문자열과 자바스크립트 표현식을 함께 사용하기에 좋다.(computed 속성 사용이 편함)
*/
//첫번째 이점의 첫번쨰 예
Vue.component({
    template: '<div><h1></h1><p></p></div>'
});
//또는
Vue.component({
    template:   '<div>' +
                '<h1></h1>' +
                '<p></p>' +
                '</div>'
});
//이런식으로 작성이 되면 읽기가 굉장히 불편하다.
//그래서 템플릿 리터럴을 이용하면
Vue.component({
    template:   `<div>
                <h1></h1>
                <p></p>
                </div>`
});
//간단하게 기입이 가능하다.


/*
    변수 삽입 표현식(Embedded Expression)
    템플릿 문법을 동적인 방식으로 표시하고 싶을 경우에 사용한다.
    뷰에서는 computed속성에서 뷰 데이터를 동적으로 표현하는 경우가 많다.

    일반적인 문자열 표현방식을 사용하게되면 +로 문자열과 변수를 조합해주어야한다
*/
new Vue({
    data : {
        name : 'George'
    },
    computed: {
        greeting() {
            return 'Hello,' + this.name + ', how are you?'
        }
    }
});

//　위처럼 코딩을 하면 읽기도 힘들고 편집도 어렵다 하지만
//  템플릿 리터럴의 ${}문법을 활용하면 문자열을 쪼개지 않고도 동적으로도 표현이 가능하다.

new Vue({
    data: {
        name : 'George'
    },
    computed: {
        greeting() {
            return `Hello, ${this.name}, how are you?`
        }
    }
});