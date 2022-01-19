/* first-title */
var vm1 = new Vue({
    el : "#example1",
    data : {
        isActive : true,
        hasError : false
    }
})

//example2
var vm2 = new Vue({
    el : "#example2",
    data : {
        classObject : {
            isActive : true,
            'text-danger' : false
        }
    }
})

//example3
var vm3 = new Vue({
    el : "#example3",
    data() {
        return {
            classObject : {
                active : true,
                'text-danger' : true
            }
        }
    }
})

//example4
var vm4 = new Vue({
    el : "#example4",
    data() {
        return {
            isActive : true,
            error : null
        }
    },
    computed: {
        classObject() {
            return {
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type === 'fatal'
            }
        }
    }
})

//example5
var vm5 = new Vue({
    el : "#example5",
    data () {
        return {
            activeClass : 'active',
            errorClass : 'text-danger',
            testClass : ''
        }
    }
})

var vm6 = new Vue({
    el : "#example6",
    data () {
        return {
            isActive : false,
            activeClass : 'active',
            errorClass : 'text-danger'
        }
    }
})

var vm7 = new Vue({
    el : "#example7",
    data () {
        return {
            isActive : true,
            errorClass : 'text-danger'
        }
    }
})

/* second-title */
var vm8 = new Vue({
    el : "#example8",
    data () {
        return {
            activeColor : 'red',
            fontSize : 30
        }
    }
})

var vm9 = new Vue({
    el : "#example9",
    data () {
        return {
            styleObject : {
                color : 'red',
                fontSize : '30px'
            }
        }
    }
})

var vm10 = new Vue({
    el : "#example10",
    data () {
        return {
            baseStyle : {
                color : 'blue',
                fontSize : '30px'
            },
            overridingStyle : {
                textDecoration : 'underline',
                fontSize : '50px'
            }
        }
    }
})