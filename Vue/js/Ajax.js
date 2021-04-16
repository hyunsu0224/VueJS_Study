/*
    비동기 처리란?
    특정 코드의 연산이 끝날 때까지 코드의 실행을 멈추지 않고 다음 코드를 먼저 실행하는
    자바스크립트의 특성을 의미한다.

    비동기에서 가장 흔한 사례는 Jquery의 ajax이다.
    보통 화면에 표시할 이미지나 데이터를 서버에서 불러와 표시해야하는데 이때 ajax통신으로 해당 데이터를 서버로부터 가져올 수 있기 때문이다.
    
    -------------------------------------------------------
    function getData() {
        var tableData;
        $.get('https://domain.com/products/1', function(response) {
            tableData = response;
        });
        return tableData;
    }

    console.log(getData()); //undefined

    $.get이 ajax 통신을 하는 부분이다. https://domain.com에다가 HTTP GET 요청을 날려 1번 상품(product) 정보를 요청하는 코드

*/

/*
    콜백 함수로 비동기 처리 방식의 문제점 해결하기
    function getData(callbackFunc) {
        $.get('https://domain.com/products/1', function(response) {
            callbackFunc(response); //서버에서 받은 데이터 response를 callbackFunc() 함수에 넘겨줌
        });
    }

    getData(function(tableData) {
        console.log(tableData); //$.get()의 response값이 tableData에 전달됨
    });
*/

/*
    비유로 쉽게 설명
    콜백 함수의 동작 방식은 일종의 식당 자리 예약과 같다.
    맛집을 가면 사람이 많아 자리가 없다
    그래서 대기자 명단에 이름을 쓴 다음ㅁ에 자리가 날때까지 주변 식당들을 돌아다닌다
    만약 식당에 자리가 났다고하면 전화로 자리가 났다고 연락이 온다.
    그 전화를 받는 시점이 여기서의 콜백 함수가 호출되는 시점과 같다.
    손님의 입장에서는 자리가 날때까지 식당에서 기다리지 않고 근처 가게에서 쇼핑을 할수도 다른 일을 할 수도 있는 것이다.

    자리가 났을 때만 연락이 오기 대문에 미리가서 기다릴 필요 없고, 직접 식당에 가서 자리가 비었는지 확인할 필요도 없다.
    자리가 준비된 시점, 즉 데이터가 준비된 시점에서만 원하는 동작(자리에 앉거나 특정값을 출력한다거나) 할수 있는것이다.
*/

/*
    콜백 지옥(callback hell)
    콜백 지옥은 비동기 처리 로직을 위해 콜백 함수를 연속해서 사용할 때 발생하는 문제입니다.

    $.get('url', function(response) {
        parseValue(response, function(id) {
            auth(id, function(result) {
                display(result, function(text) {
                    console.log(text);
                });
            });
        });
    });
    서버에서 데이터를 받아와 화면에 표시하기까지 인코딩, 사용자 인증을 처리해야하는 경우가 있는데
    만약 이 모든 과정을 비동기로 처리한다면 콜백에 콜백을 무는 형태가 될것인데 이건 굉장히 보기 불편하다.

    ***********************************해결방법
    이때 사용되는 것이 Promise와 Async이다
    function parsevalue(id){
        auth(id,authDone);
    }
    function authDone(result) {
        display(result, displayDone);
    }
    function displayDone(text) {
        console.log(text);
    }
    $.get('url', function(response) {
        parseValue(response, parseValueDone);
    });
*/