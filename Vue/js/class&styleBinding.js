//클래스와 스타일 바인딩
//

new Vue({
    el : '#dpp',
    data : {
        attachRed: false,
        color : 'green'
    },
    computed : {
        divClasses : function() {
            return {
                red : this.attachRed,
                green : !this.attachRed
            }
        },
        myHeight : function() {
            return this.attachRed ? '50px' : '200px'
        }
    }

})



// new Vue({
//     el:'#dpp',
//     data: {
//         attachRed:false,
//         color:'green'
//     },
//     computed:{
//         divClasses: function() {
//             return {
//                     red:this.attachRed,
//                     green:!this.attachRed
//             }
//         }
//     }
// })


//v-on:clock 디렉티브의 약어>>@click<<을 사용해서 true/false로 값을 변경이 가능하다.
//v-bind의 약어는 : <<이거 대부분 링크를 걸거나 할때 사용한다. boolean속성처럼 사용할 경우
//                  2개의 값중 true면 1번 false면 2번