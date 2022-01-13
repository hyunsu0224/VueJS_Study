/* first-title */
var app = new Vue({
    el : '#app',
    data : {
        message : 'hello Vue!',
        message1 : 'word come'
    }
})

var test = new Vue({
    el : '.test',
    data : {
        message : 'this is test',
        message2 : 'this is test2'
    }
})

/* second-title */
var app2 = new Vue({
    el : "#app-2",
    data : {
        message : 'this pages are ' + new Date() + 'for load'
    }
})

/* third-title */
var app3 = new Vue({
    el : "#app-3",
    data : {
        seen : false
    }
})

/* fourth-title */
var app4 = new Vue({
    el : "#app-4",
    data : {
        todos : [
            {text : 'javascript 1'},
            {text : 'javascript 2'},
            {text : 'javascript 3'}
        ]
    }
})

/* fifth-title */
var app5 = new Vue({
    el : "#app-5",
    data : {
        message : 'hello Vue Js!'
    },
    methods : {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

/* sixth-title */
var app6 = new Vue({
    el : "#app-6",
    data : {
        message : 'hello Vue model'
    }
})

/* seventh-title */
Vue.component('todo-item', {
    // 이제 todo-item 컴포넌트는 "prop"라는 
    // 사용자 정의 속성 같은 것을 입력 받을수 있다.
    // 이 prop은 todo라는 이름으로 정의했다.
    props : ['todo'],
    template : '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
    el : '#app-7',
    data : {
        groceryList : [
            { id : 0, text : 'Vegetables' },
            { id : 1, text : 'Cheese' },
            { id : 2, text : 'Whatever else humans are supposed to eat' }
        ],
        groceryList2 : [
            { id : 0, text : '0000'},
            { id : 1, text : '1111'},
            { id : 2, text : '2222'}
        ]
    }
})
