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

// 컴포넌트란 요소로써 <todo-item></todo-item>이 요소를 이제 사용이 가능하다.
app.component('todo-item', {            //컴포넌트명을 지정하고,
    props : ['todo'],
    template : `<li>{{todo.text}}</li>`
})

app.mount('#todo-list-app')


// const app = Vue.createApp({
//     /* options */
// })



// const app2 = Vue.createApp({
//     data() {
//         return { count : 5 }
//     }
// })

// const vm = app2.mount('#app2');

// console.log(vm.count);

/*--------------------------------------------------*/

// const app2 = Vue.createApp({
//     data() {
//       return { count: 4 }
//     }
//   })
  
//   const vm = app2.mount('#app2')
  
//   console.log(vm.count) // => 4

/*--------------------------------------------------*/

var test2 = Vue.createApp({
    data() {
        return { count : 1 }
    },
    created() {
        console.log('count is: ' + this.count / 3)
    }
})

var vm2 = test2.mount("#test2");
