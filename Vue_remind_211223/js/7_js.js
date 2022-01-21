/* first-title */
//example1
const vm = Vue.createApp({
    data() {
        return {
            items: [{ message: 'Foo' }, { message: 'Bar' }]
        }
    }
})
vm.mount('#array-rendering')

// var vm_test = Vue.createApp({
//     el : '#example_test',
//     data() {
//         return {
//            array : [1,2,3,4]
//         }
//     },
//     methods : {
//         filter() {
//             this.array = this.array.filter(x => x>1);
//         }
//     }
// })
// vm_test.mount("#example_test")
//example2
const vm2 = Vue.createApp({
    data() {
        return {
            parentMessage : 'Parent',
            items : [{ message : 'Foo'}, {message : 'Bar'}]
        }
    }
}).mount("#array-with-index")

/* second-title */
//example3
const vm3 = Vue.createApp({
    data() {
        return {
            myObject : {
                title : 'How to do lists in Vue',
                author : 'Jeong',
                publishedAt : '2022-01-20'
            }
        }
    }
}).mount('#v-for-object')

//second-title
//example4
const vm4 = Vue.createApp({
    data() {
        return {
            myObject2 : {
                title : 'How to do lists in Vue',
                author : 'Jeong',
                publishedAt : '2022-01-20'
            }
        }
    }
}).mount('#v-for-object2')

//example5
const vm5 = Vue.createApp({
    data() {
        return {
            myObject3 : {
                title : 'How to do lists in Vue',
                author : 'Jeong',
                publishedAt : '2022-01-20'
            }
        }
    }
}).mount('#v-for-object3')
//third-title
//example6
var vm6 = Vue.createApp({
    data() {
        return {
            numbers : [1,2,3,4,5]
        }
    },
    computed : {
        evenNumbers() {
            return this.numbers.filter(number => number % 2 === 0)
        }
    }
}).mount('#example6')

//example7
var vm7 = Vue.createApp({
    data() {
        return {
            sets: [[1,2,3,4,5],[6,7,8,9,10]]
        }
    },
    methods : {
        even(numbers) {
            return numbers.filter(number => number % 2 === 0)
        }
    }
}).mount("#example7");

//example8
Vue.createApp({}).mount('#example8')

//example9
var vm9 = Vue.createApp({
    data () {
        return {
            item : [{msg : 'google'}]
        }
    }
}).mount("#example9")

//todo-list-example
// const app = Vue.createApp({
//     data() {
//         return {
//             newTodoText : '',
//             todos : [
//                 {
//                     id : 1,
//                     title : 'Do the dishes'
//                 },
//                 {
//                     id : 2,
//                     title :'Take out the trash'
//                 },
//                 {
//                     id : 3,
//                     title : 'Mow the lawn'
//                 }
//             ],
//             nextTodoId : 4
//         }
//     },
//     methods : {
//         addNewTodo() {
//             this.todos.push({
//                 id:this.nextTodoId++,
//                 title : this.newTodoText
//             })
//             this.newTodoText = ''
//         }
//     }
// })

// app.component('todo-item', {
//     template:`
//     <li>
//         {{title}}
//         <button @click="$emit('remove')">Remove</button>
//     </li>
//     `,
//     props:['title'],
//     emits:['remove']
// })

// app.mount("#todo-list-example")
Vue.component('todo-item', {
    template: '\
      <li>\
        {{ title }}\
        <button v-on:click="$emit(\'remove\')">Remove</button>\
      </li>\
    ',
    props: ['title']
  })
  
  new Vue({
    el: '#todo-list-example',
    data: {
      newTodoText: '',
      todos: [
        {
          id: 1,
          title: 'Do the dishes',
        },
        {
          id: 2,
          title: 'Take out the trash',
        },
        {
          id: 3,
          title: 'Mow the lawn'
        }
      ],
      nextTodoId: 4
    },
    methods: {
      addNewTodo: function () {
        this.todos.push({
          id: this.nextTodoId++,
          title: this.newTodoText
        })
        this.newTodoText = ''
      }
    }
  })
