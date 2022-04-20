const Counter = {
    data() {
        return {
            counter : 0
        }
    }
}

Vue.createApp(Counter).mount('#counter')



const AttributeBinding = {
    data () {
        return {
            message : '이 페이지는 다음 시간에 열렸습니다.' + new Date().toLocaleString()
        }
    }
}

Vue.createApp(AttributeBinding).mount('#bind-attribute')

const bind_attribute = {
    data () {
        return {
            message : 'now time' + new Date().toLocaleString()
        }
    }
}

Vue.createApp(bind_attribute).mount('#bind-attribute_remind');

const count_number = {
    data () {
        return {
            counter : 0
        }
    },
    mounted() {
        setInterval(() => {
            this.counter++
        }, 5000)
    }
}
Vue.createApp(count_number).mount('#count_num');


const EventHandling = {
    data() {
        return {
            message : 'Hello Vue.js!'
        }
    },
    methods : {
        reverseMessage() {
            this.message = this.message
                .split('')
                .reverse()
                .join('')
        }
    }
}
Vue.createApp(EventHandling).mount('#event-handling');

const ConditionalRendering = {
    data() {
        return {
            go : true
        }
    }
}
Vue.createApp(ConditionalRendering).mount("#conditional-rendering");

const ListRendering = {
    data() {
        return {
            todos : [
                { text : 'Learn JS'},
                { text : 'Learn Vue'},
                { text : 'Build something awesome'}
            ]
        }
    }
}
Vue.createApp(ListRendering).mount('#list-rendering');


const TodoList = {
   data() {
       return {
           groceryList : [
               { id : 0, text:'a'},
               { id : 1, text:'b'},
               { id : 2, text:'cdefg'}
           ]
       }
   } 
}
const app = Vue.createApp(TodoList);

app.component('todo-item', {
    props : ['todo'],
    template : `<li>{{todo.text}}</li>`
})

app.mount('#todo-list-app')


// const app = Vue.createApp({
//     /* options */
// })

const app_1 = Vue.createApp({})
app_1.component('SearchInput', SearchInputComponent)
app_1.directive('focus', FocusDirective)
app_1.use(LocalPlugin)

Vue.createApp({})
   .component('SearchInput', SearchInputComponent)
   .directive('focus', FocusDirective)
   .use(LocalePlugin)