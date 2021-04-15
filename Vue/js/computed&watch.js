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

    computed속성은 목표를 한 데이터의 내용을 정의해주는 방식
    쉽게 말해 watch는 보여지는 결과에 따라 나오는 값이 다르지만 
    computed는 지정된 값을 정의를 통해 변경해주는 것
*/

/*
    computed 와 setter
*/
