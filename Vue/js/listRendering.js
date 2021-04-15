//v-for 디렉티브 (반복문)
// 비슷한 내용을 반복적으로 보여줘야하는 경우

// new Vue({
//     el : "#cpp",
//     data : {
//         list : ['소갈비', '라면', '뭐사지', '대충']
//     }
// })

new Vue({
    el : "#cpp",
    data : {
        travelList : [
            {name: '강릉', distance: '차로 3시간'},
            {name: '부산', distance: '차로 5시간'},
            {name: '춘천', distance: '차로 2시간'},
            {name: '대만', distance: '비행기로 3시간'},
            {name: '필리핀', distance: '비행기로 5시간'},
            {name: '스페인', distance: '비행기로 17시간'},
            {name: '부산', distance: '차로 5시간'}
        ]
    }
})