//양방향 데이터 바인딩
//v-model tag
//v-if, v-else 조건부 랜더링

new Vue ({
    el : "#bpp",
    data : {
        dog : true
    }
})

/*
        
    v-if 와 v-show의 차이
    둘다 조건 상태인데 어떤 차이점이 있을까

    <html>예문------------------------------------
    <div id="app">
        <p v-if="dog">반려동물은 강아지지!</p>
        <p v-show="dog">귀여운 댕댕이</p>
    </div>

    new Vue({
        el: "#app", 
        data: {
            dog: false
        }
    })
    ----------------------------------------------
    v-if의 경우에는 아예 해당하지 않으면 라인이 렌더링이 되지않고(코드를 완전히 지우고 싶을때),
    v-show는 실제 코드가 렌더링은 되지만 display:none처리 되어진다(코드를 블라인드로만 처리하고 싶을때).


*/