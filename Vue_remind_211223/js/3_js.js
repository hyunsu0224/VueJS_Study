/* second-title */
    // 데이터 객체
    var data = { a : 1 }

    // Vue 인스턴스에 데이터 객체를 추가한다.
    var vm = new Vue({
        el : '#app-2',
        data : data
    })

    // 인스턴스에 있는 속성은
    // 원본 데이터에 있는 값을 반환한다.
    vm.a === data.a // => true를 반환

    // 인스턴스에 있는 속성값을 변경하면
    // 원본 데이터에도 영향을 미친다.
    vm.a = 2
    data.a // => 2

    //반대로 하여도 마찬가지이다
    data.a = 3
    vm.a // => 3

    // 새로운 속성을 추가하더라도 이건 화면이 갱신되지 않는다.

    
    
    // 빈 값이거나 존재하지 않은 상태로 시작한다면 아래와 가팅 초기값을 지정할 필요가 있다.
    var vm = new Vue({
        data :{
            newTodoText : '',
            visitCount : 0,
            hideCompletedTodos : false,
            todos : [],
            error : null
        }
    })
    vm.b = 'hi'
    data.b = 4

/* third-title */    
    // 여기에서 유일한 예외는 Object.freeze() 를 사용하는 경우입니다. 이는 기존 속성이 변경되는것을 막아줘서
    // 반응성 시스템이 추적할 수 없다는 것을 의미합니다. 
    var obj = {
        foo : 'bar'
    }
    Object.freeze(obj)
    new Vue({
        el : "#app-3",
        data : obj
    })

/* fourth-title */
    new Vue({
        data : {
            a : 1
        },
        created : function(){
            // this 는 vm 인스턴스를 가리킨다.
            console.log('a is: ' + this.a)
        }
    })
    // => "a is : 1"