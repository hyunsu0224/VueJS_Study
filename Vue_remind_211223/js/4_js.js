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

/* first_4-title */
// 이 코드는 명령형이고 또 코드를 반복한다.(watch 속성)
var vm4 = new Vue({
    el : '#example4',
    data : {
        firstName : 'Foo',
        lastName : 'Bar',
        fullName : 'Foo Bar'
    },
    watch : {
        firstName : function (val) {
            this.fullName = val + ' ' + this.lastName
        },
        lastName : function(val) {
            this.fullName = this.firstName + ' ' + val
        }
    }
})

//이 속성은 computed
var vm5 = new Vue({
    el : '#example5',
    data : {
        firstName : 'Foo',
        lastName : 'Bar'
    },
    computed : {
        fullName : function() {
            return this.firstName + ' ' + this.lastName
        }
    }
})

var vm6 = new Vue({
    el : "#example6",
    data : {
        firstName : "jeong",
        lastName : "hyeon"
    },
    computed : {
        fullName : {
            //getter
            get : function () {
                return this.firstName + ' ' + this.lastName
            },
            // setter
            set : function (newValue) {
                var names = newValue.split(' ')
                this.firstName = names[0]
                this.lastName = names[names.length - 1]
            }
        }
    }
})

/* second-title */
var watchExampleVM = new Vue({
    el : "#example7",
    data : {
        question : '',
        answer : '질문을 하기 전까지는 대답을 할 수가 없습니다.'
    },
    watch : {
        //질문이 변경될 때 마다 이 기능이 실행됩니다.
        question : function (newQuestion) {
            this.answer = "입력을 기다리는중..."
            this.debouncedGetAnswer()
        }
    },
    //created는 html 문서에서 마운트 되기 이전에 데이터를 어떤 식으로 처리할지에 대해서 지정하는 단계
    created : function() {
        // _.debounce는 lodash가 제공하는 기능으로
        // 특히 시간이 많이 소요되는 작업을 실행할 수 있는 빈도를 제한한다.
        // 이 경우, 우리는 yesno.wtf/api에 액세스 하는 빈도를 제한하고
        // 사용자가 ajax 요청을 하기 전에 타이핑을 완전히 마칠 때까지 기다리길 바란다.
        // _.debounce 함수 (또는 이와 유사한 _.throttle)에 대한 자세한 내용은
        // https://lodash.com/docs#debounce
        // debounce는 지연함수로써 settimeout과 같이 시간을 지연시키는 기능을 한다. 밀리초 단위가 경과하도록
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
    },
    methods : {
        getAnswer: function () {
            if (this.question.indexOf("?") === -1) {
                this.answer = "질문에는 일반적으로 물음표가 포함됩니다. :-)"
                return
            }
            this.answer = "생각중..."
            var vm = this
            axios.get("https://yesno.wtf/api")
            .then(function (response) {
                vm.answer = _.capitalize(response.data.answer)
            })
            .catch(function (error) {
                vm.answer = '에러! API 요청에 오류가 있습니다. ' + error
            })
        } 
    }
})

var watchExampleVm = new Vue({
    el : "example7",
    data : {
        question : '',
        answer : '질문전엔 대답이 없다.'
    },
    watch : {
        question : function(newQuestion) {
            this.answer = "입력을 기다리는 중"
            this.debouncedGetAnswer()
        }
    }
})