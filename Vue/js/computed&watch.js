/*
    computed속성
    템플릿 내에 표현식을 넣거나 간단한 연산을 위해 넣는다
    예문
    <div id = "example" >
        {{ message.split('').reverse().join('')}}
    </div>
    위 템플릿은 message를 역순으로 표시한다는 것을 알려줄 뿐이지 표기하기는 굉장히 별로임

    <div id="example">
        <p>원본 메시지: "{{ message }}"</p>
        <p>역순으로 표시한 메시지: "{{ reversedMessage }}"</p>
    </div>

    var vm = new Vue ({
        el : example,
        data : {
            message : '안녕하세요'
        },
        computed : {
            reversedMessage : function() {
                return this.message.split('').reverse(),join('')
            }
        }
    })
    console.log(vm.reversedMessage) ==> '요세하녕안' 이라고 표기된다.
    vm.message = 'Goodbye'
    console.log(vm.reversedMessage) ==> 'eybdooG'

    물론  computed 말고 methods로도 정의가 가능하다.
    computed는 종속 대상을 따라 저장(캐싱)이 되기때문에 지정된 값이 변경되지 않는다.
    하지만 methods는 저장되지 않기때문에 값이 계속해서 업데이트 된다.
*/

/*
    computed와 watch
    <div id="demo">{{ fullName }}</div>

    var vm = new Vue({
        el: '#demo',
    data: {
            firstName: 'Foo',
            lastName: 'Bar',
            fullName: 'Foo Bar'
        },
        watch: {
            firstName: function (val) {
            this.fullName = val + ' ' + this.lastName
            },
            lastName: function (val) {
            this.fullName = this.firstName + ' ' + val
            }
        }
    })

    watch속성은 명령형 프로그래밍 방식이라고도 칭하는데, 감시할 데이터를 지정하고 그 데이터가
    변경되면 이러이러한 함수를 실행해라!! 라는 방식이고
    입력값을 토대로 해서 다음 결과를 표기(답이 정해져있음)

    computed속성은 목표를 한 데이터의 내용을 정의해주는 방식(입력값을 토대로 하지만 함수에 따라서 최종 결과가 변경이 됨)
    쉽게 말해 watch는 보여지는 결과에 따라 나오는 값이 다르지만 
    computed는 지정된 값을 정의를 통해 변경해주는 것
*/

/*
    computed속성의 setter함수

    computed속성에는 기본적으로 getter함수만 가지고 있지만, 필요에 따라서 setter 함수를 만들어 쓸수 있다.

    var vm = new Vue({
        el : '#demo',
        data : {
            firstName: 'Foo',
            lastName: 'Bar',
            fullName: 'Foo Bar'
        }
        computed: {
            fullName: {
                // getter
                get: function () {
                return this.firstName + ' ' + this.lastName
                },
                // setter
                set: function (newValue) {
                var names = newValue.split(' ')
                this.firstName = names[0]
                this.lastName = names[names.length - 1]
                }
            }
        }
    })

    이제 vm.fullName = 'John Doe'를 실행하면 설정자가 호출되고 vm.firstName과 vm.lastName이 그에 따라 업데이트 됩니다.

*/

/*
    watch 속성
    대부분의 경우 computed 속성이 더 적합하지만 사용자가 만든 감시자가 필요한 경우가 있습니다. 
    그래서 Vue는 watch 옵션을 통해 데이터 변경에 반응하는 보다 일반적인 방법을 제공합니다. 
    이는 데이터 변경에 대한 응답으로 비동기식 또는 시간이 많이 소요되는 조작을 수행하려는 경우에 가장 유용합니다.

    <div id="watch-example">
        <p>
            yes/no give question :
            <input v-model="question">                          v-model은 뷰에서 양방향 바인딩을 가능하게 하는 것을 의미한다
        </p>                                                    양방향 바인딩은 화면에서 입력을 받아 데이터로 다시 전달하는 과정이 추가되는 것
        <p>{{ answer }}</p>                                     예를 들어서 question에 내용을 입력하면 그 내용이 뷰에 전달되어서 answer결과가
    </div>                                                      도출되는데 영향을 미친다.

    var watchExampleVM = new Vue ({
        el : '#watch-example',
        data : {
            question : '',
            answer : '질문전까지는 대답할 수 없습니다.'
        },
        watch : {
            question : function (newQuestion) {
                this.answer = '입력을 기다리는중'
                this.debouncedGetAnswer()
            }
        },
        created : function() {
            this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
        },
        methods : {
            getAnswer : function(){
                if (this.question.indexOf('?') === -1) {
                    this.answer = '질문에는 일반적으로 물음표가 포함됩니다.')
                    return
                }
                this.answer = '생각중...'
                var vm = this
                axios.get('http://yesno.wtf/api')                               axios란, 브라우저와 node.js를 위한 promiseAPI를
                .then(function (response){                                      활용하는HTTP비동기 통신 라이브러리
                    vm.answer = _.capitalize(response.data.answer)              promise란, 객체로써 비동기 작업이 맞이할 미래의 완료 또는 실패의 결과값
                })
                .catch(function (error) {
                    vm.answer = '에러! API 요청에 오류가 있습니다. ' + error
                })
            }
        }
    })





*/
