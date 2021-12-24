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