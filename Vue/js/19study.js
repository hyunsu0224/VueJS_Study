var app1 = new Vue({
    el : '#app1',
    data : {
        message : '안녕'
    }
})

var app2 = new Vue({
    el : '#app2',
    data : {
        memo : '이 페이지는 ' + new Date() + ' 에 로드 되었습니다.'
    }
})

var app3 = new Vue({
    el : '#app3',
    data : {
        seen : true
    }
})

var app4 = new  Vue({
    el : '#app4',
    data : {
        todos : [
            { text : 'JavaScript 배우기'},
            { text : 'Vue배우기'},
            { text : '무언가 멋진 것을 만들기'}
        ]
    }
})

var app5 = new Vue({
    el : '#app5',
    data : {
        mojo : '안녕하세요 Vue.js'
    },
    methods : {
        reverseMessage : function() {
            this.mojo = this.mojo.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el : '#app6',
    data : {
        momo : '안녕하시오우오우오'
    }
})

//todo-item 이름을 가진 컴포넌트를 정의합니다.
Vue.component('todo-item', {
    // 이제 todo-item 컴포넌트는 "prop" 이라고 하는
    // 사용자 정의 속성 같은 것을 입력받을 수 있습니다.
    // 이 prop은 todo라는 이름으로 정의했습니다.
    props : ['todo'],
    template : '<li>{{ todo.text }}</li>'
})



var app7 = new Vue({
    el: '#app7',
    data: {
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    }
})


//Vue component 전역등록하는 방법
Vue.component('text-to', {
    template : '<p>asd</p>'
})

var app8 = new Vue({
    el: '#app8'
})


//Vue component 지역등록하는 방법 <
// 20일부터 공부내용에 기록>