// 지역등록하는 방법
/*
    모든 컴포넌트를 전역으로 등록 할 필요는 없습니다.
    컴포넌트를 components 인스턴스 옵션으로 등록함으로써
    다른 인스턴스/ 컴포넌트의 범위에서만 사용할수 있는 컴포넌트를 만들 수 있습니다.
*/
var Child = {
    template : '<div> 사용자 정의 컴포넌트 입니다! </div>'
}

new Vue({
    components : {
        'my-component' : Child
    }
})


//data는 반드시 함수여야합니다.
/*
    Vue생성자에 사용할수 있는 대부분의 옵션은 컴포넌트에서 사용할 수 있습니다.
    한가지 특별한 경우는 data함수여아 한다는 것입니다.
*/
Vue.component('my-component', {
    template : '<span> {{ message }}</span>',
    data : {
        message : 'hello'
    }
})

//example의 예문
var data = {counter : 0}

Vue.component('simple-counter', {
    template : '<button v-on:click = "counter += 1">{{ counter }}</button>',
    data : function() {
        return {            //이것과 return data의 차이를 이해하자
            counter : 0     //전은 전체 후는 하나만
        }
    }
})

new Vue({
    el : '#example'
})

//컴포넌트 작성
/*
    component는 부모-자식 관계에서 가장 일반적으로 함께 사용하기 위한것입니다.
    컴포넌트 A는 자체 템플릿에서 컴포넌트 B를 사용할 수 있다.
    

*/