/* first-title */

var vm = new Vue({
    el : "#example",
    data : {
        message : "안녕하세요"
    },
    computed : {
        //계산된 getter
        reversedMessage : function(){
            // 'this'는 vm 인스턴스를 가리킨다.
            return this.message.split('').reverse().join('');
        }
    }
})

/* first_2-title */
var vm2 = new Vue({
    el : "#example2",
    data : {
        message : "HELLO"
    },
    methods: {
        reversedMessage: function () {
          return this.message.split('').reverse().join('')
        }
      }
})

/* first_3-title */
var data = { a : 1}
var vm3 = new Vue({
    el : "#example3",
    data : {
        message : "dataNow function"
    },
    computed : {
        now : function(){
            return Data.now()
        }
    }
})

vm3.a === data.a

