//단방향 데이터 바인딩
//v-once, v-on, v-html, v-bind

new Vue({
    el : "#app",
    data : {
        count : 0
    },
    methods : {
        isLargerThanTen : function() {
            return this.count * 3 >10 ? "10보다 큽니다." : "10보다 작습니다."
        }
    }
    // computed : {
    //     isLargerThanTen : function() {
    //         return this.count * 3 >10 ? "10보다 큽니다." : "10보다 작습니다."
    //     }
    // }
 })


 /*
    methods와 computed의 차이점
    예문
    new Vue({ 
        el: "#app", 
        data: {
            count: 0,
            secondCount: 0
        },
        computed: {
            double: function () {
            console.log('Computed double')
            return this.count * 2
            }
        },
        methods: {
            triple: function () {
            console.log('methods triple')
            return this.count * 3
            }
        }
    })
    <html>문은
    <div id="app">
        <p>count: {{ count }}</p>
        <p>second count: {{ secondCount }}</p>
        <p>computed: {{ double }}</p>
        <p>methods: {{ triple() }}</p>
        <button v-on:click="count ++">클릭</button>
        <button v-on:click="secondCount ++">클릭</button>
    </div>                   
    
    이 상황일 때,
    methods triple 콘솔은 계속해서 출력이 되지만
    computed 콘솔은 초기 한번만 출력된다.
    
    !!!!!!!!!!!!!!!
    method는 계속해서 반복이 되는 반면에-------------------------------------------------(재실행되기를 원한다면)
    computed와 같이 특정 한가지만 지속적으로 입력이 가능하도록 만든다는 점이 차이점이다.-----(재실행되길 원치않을때)
    !!!!!!!!!!!!!!!


 
 */