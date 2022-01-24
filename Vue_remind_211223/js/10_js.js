const app = Vue.createApp({})

// button-counter 이라는 새로운 전역 컴포넌트 정의
app.component('button-counter', {
    data () {
        return {
            count : 0
        }
    },
    template : `
        <button v-on:click="count++">
            You clicked me {{ count }} times.
        </button>`
}).mount("#example1")

const app2 = Vue.createApp({
    
})
app2.component('button-counter', {
    data () {
        return {
            count : 0
        }
    },
    template : `
        <button v-on:click="count++">
            You clicked me {{ count }} times.
        </button>`
}).mount("#example2")

const app3 = Vue.createApp({})
app3.component('blog-post', {
    props:['title'],
    template:`<h4>{{title}}</h4>`
}).mount("#example3")



const App ={
    data() {
        return {
            posts : [
                {id : 1, title : "go1"},
                {id : 2, title : "go2"},
                {id : 3, title : "go3"}
            ]
        }
    }
}

const app4 = Vue.createApp(App)
app4.component('blog-post', {
    props : ['title'],
    template:`<h4>{{title}}</h4>`
}).mount("#example4")

const App2 = {
    data() {
        return {
            posts : [
                
            ],
            postFontSize : 1
        }
    }
}

app5.component('blog-post', {
    props : ['title'],
    template : `
        <div class="blog-post">
        <h4>{{ title }}</h4>
        <button>
            Enlarge text
        </button>
        </div>
        `
})