// text
Vue.createApp({
    data () {
        return {
            message : ''
        }
    }
}).mount('#example1')

// textarea
Vue.createApp({
    data() {
        return { 
            message : ''
        }
    }
}).mount('#example2')

// checkbox
Vue.createApp({
    data() {
        return { 
            checked: false
        }
    }
}).mount('#example3')

// checkbox multi
Vue.createApp({
    data() {
        return {
            checkedNames : []
        }
    }
}).mount("#example4")

//radiobox
Vue.createApp({
    data() {
        return { 
            picked : ''
        }
    }
}).mount("#example5")

//selected
Vue.createApp({
    data() {
        return {
            selected : ''
        }
    }
}).mount("#example6")

//multi selected
Vue.createApp({
    data() { 
        return {
            selected : ''
        }
    }
}).mount("#example7")

//v-for dynamic option rendering
Vue.createApp({
    data() {
        return {
            selected : 'A',
            options : [
                {text : 'One', value:'A'},
                {text : 'Two', value:'B'},
                {text : 'Three', value:'C'}
            ]
        }
    }
}).mount("#example8")