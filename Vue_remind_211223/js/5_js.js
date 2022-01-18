/* first-title */
var vm1 = new Vue({
    el : "#example1",
    data : {
        isActive : true,
        hasError : false
    }
})

var vm2 = new Vue({
    el : "#example2",
    data : {
        classObject : {
            isActive : true,
            'text-danger' : false
        }
    }
})