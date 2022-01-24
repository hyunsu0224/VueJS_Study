/* first-title */
// basic-event
Vue.createApp({
    data() {
        return {
            counter : 1
        }
    }
}).mount('#basic-event')

/* second-title */
Vue.createApp({
    data() {
        return {
            name : 'Vue.js'
        }
    },
    methods : {
        greet(event) {
            // 메소드 안에서 사용하는 'this'는 Vue 인스턴스를 가리킨다.
            alert('Hello' + this.name + '!')
            // event는 네이티브 DOM 이벤트이다.
            if(event) {
                alert(event.target.tagName)
            }
        }
    }
}).mount('#event-with-method')

/* third-title */
Vue.createApp({
    methods : {
        say(message) {
            alert(message)
        }
    }
}).mount('#inline-handler')

//example4
var vm4 = Vue.createApp({
    methods : {
        warn(message, event) {
            // 네이티브 이벤트에 접근 할 수 있다.
            if(event) {
                event.preventDefault()
            }
            alert(message)
        }
    }
}).mount('#example4')

//example5
var vm5 = Vue.createApp({
    methods : {
        one(message, event) {
            if(event) {
                event.preventDefault()
            }
            alert(message)
        },
        two(message2, event) {
            if(event) {
                event.preventDefault()
            }
            alert(message2)
        }
    }
}).mount('#example5')