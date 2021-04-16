/*
    자바스크립트에서 비동기 처리란 특정 코드의 실행이 완료될때까지 기다리지 않고 다음 코드를 먼저 수행하는 자바스크립트의 특성이다
    
    !!Promise란,  주로 서버에서 받아온 데이터를 화면에 표시할때 사용한다.
                일반적으로 웹 어플리케이션을 구현할 때 서버에서 데이터를 요청하고 받아오기 위해서
    $.get('url 주소/products/1', function(response) {
        //... 내용을 넣는다.
    })
    위 API가 실행되면 서버에다가 '데이터 하나 보내주세요' 라는 요청을 보낸다.
    그런데 여기서 데이터를 받아오기도 전에 마치 데이터를 다 받아온 것 마냥 화면에 데이터를 표시하려고하면
    오류가 발생하거나 빈 화면이 뜬다.
    이러한 것을 해결하기 위한 것이 Promise이다.

    Promise코드의 기초!!!!!!!!!!!!!!
    ajax통신 코드를 간단하게 만들면
    function getData(callbackFunc) {
        $.get('url 주소/products/1', function(response) {
            callbackFunc(response); // 서버에서 받은 데이터 response를 callbackFunc() 함수에 넘겨줌
        });
    }

    getData(function(tabelData) {
        console.log(tabledata); // $.get()의 response 값이 tableData에 전달됨
    });

    위 코드는 제이쿼리의 ajax 통신API를 이용하여 지정된  URI에서 1번 상품 데이터를 받아오는 코드입니다.
    비동기 처리를 위해 프로미스 대신에 콜백 함수를 사용했습니다.
    ↓아래 코드는 프로미스를 적용한 코드이다
    function getData(callback) {
        //new Promise() 추가
        return new Promise(function(resolve, reject){
            $.get('url address/products/1', function(response) {
                //데이터를 받으면 resolve() 호출
                resolve(response);
            });
        });
    }
    //getData()의 실행이 끝나면 호출되는 then()
    getData().then(function(tableData){
        //resolve()의 결과 값이 여기로 전달됨
        console.log(tableData); //$.get()의 response값이 tableData에 전달됨
    });


    promise의 상태 3가지
    **********************************************************************************
    1. Pending (대기)
    new Promise();라는 메서드를 호출하면 대기 상태가 됩니다.
    위 메서드를 호출할때 콜백 함수를 선언할수 있고, 
    이때의 콜백 함수의 인자가 resolve, reject이다.

    new Promise(function(resolve, reject) {
        // ...내용
    });

    2. Fulfilled (이행)
    여기서 콜백 함수의 인자 resolve를 ↓와 같이 실행하면 이행상태가 됩니다.
    new Promise(function(resolve, reject) {
        resolve();
    });

    이행 상태가 되면 then()을 이용하여 처리 결과 값을 받을 수 있다.
    function getData(){
        return new Promise(function(resolve, reject) {
            var data = 100;
            resolve(data);
        });
    }

    //resolve()의 결과 값 data를 resolvedData로 받음
    getData().then(function(resolvedData) {
        console.log(resolvedData); //100
    });

    3. Rejected(실패)
    new promise()로 프로미스 객체를 생성하면 콜백 함수 인자로 resolve와 reject를 사용할 수 있다.
    여기에서 reject를 호출하면 실패 상태가 된다.
    new Promise(function(resolve, reject) {
        reject();
    });

    실패 상태가 되면 실패한 이유(실패 처리의 결과값)를 catch()로 받을 수 있다.
    function getdata() {
        return new Promise(function(resolve, reject) {
            reject(new Error("request is failed"));
        });
    }

    // reject()의 결과 값  Error를 err에 받음
    getData().then().catch(function(err) {
        console.log(err);
    })

    연결 성공과 실패의 경우 두개 모두 들어있는 프로미스 코드
    function getData() {
        return new Promise(function(resolve, reject){
            if (response) {
                resolve(response);
            }
            reject(new Error("Request is failed"));
            });
        });
    } 

    // 위 $.get() 호출 결과에 따라 'response' 'Error' 출력
    getData().then(function(data){
        console.log(data);
    }).catch(function(err) {
        console.error(err);         Error 출력
    });

    위에 코드는 서버에서 제대로 응답을 받아오면 resolve()  메서드를 호출하고, 응답이 없으면 reject()메서드를 호출하는 예제입니다.
    호출된 메서드에 따라서 then()이냐 catch()로 분기하여 응답 경과 또는 오류를 출력합니다.

*/

/*
    여러 개의 프로미스 연결하기(promise chaining)
    대표적인 형태
    function getData() {
        return new Promise({
            ~~~~~~
        });
    }

    //then() 으로 여러 개의 프로미스를 연결한 형식
    getData()
        .then(function(data){
        })
        .then(function(){
        })
        .then(function(){
        });

    가장 자주 사용되는 setTimeout() API를 이용해보자
    new Promise(function(resolve, reject){
        setTimeout(function() {
            resolve(1);
        }, 2000);
    })
    .then(function(result) {
        console.log(result);  //1
        return result + 10;
    })
    .then(function(result) {
        console.log(reuslt);    //11
        return result + 20;
    })
    .then(function(result){
        console.log(result);    //31
    });

    위 코드는 프로미스 객체를 하나 생성하고 setTimeout()을 이용해 2초 후에 resolve()를 호출하는 예제

    resolve()가 호출되면 프로미스가 대기상태에서 이행상태로 넘어가기 때문에 첫번재 .then()의 로직으로 넘어간다.
    첫번재 .then()에서는 이행된 결과 값 1을 받아서 10을 더한 후 그 다음 .then()으로 넘겨줍니다.
    두번째와 마지막 3번째도 이와 같은 방식으로 진행된다.
*/

/*
    실무에 있을 법한 프로미스 연결 사례
    실제 웹서비스에 있을법한 사용자 로그인 인증 로직에 프로미스 여러개를 연결해보자
    getData(userInfo)
        .then(parseValue)
        .then(auth)
        .then(display)

    var userInfo = {
        id : 'test@abc.com',
        pw : '****'
    };
    function parsevalue() {
        return new Promise({

        }):
    }
    function auth() {
        return new Promise({

        });
    }
    function display() {
        return new Promise({

        });
    }

*/

/*
    Promiseの에러 처리方法
    　前に調べたPromiseの例題はコードがいつでも正常に動作すると仮定し、実装した例題です。
    実際にサービスを実装しながらネットワーク連結、サーバーの問題などのエラーが発せ出来ます。
    したがって（따라서) 프로미스의 에러 처리 방법에 대해서도 알고 있어야합니다.

    二つの処理方法があります。
    １．then()의 두번째 인자로 처리하는 방법***************
    getData().then(
        handleSuccess,
        handleError
    );

    2. catch()를 이용하는 방법***************
    getData().then().catch();

    2가지의 방법 모두 프로미스의 reject() 메서드가 호추로디어 실패 상태가 된 경우에 실행됩니다.
    간단하게 말해서 프로미스의 로직이 정상적으로 돌아가지 않는 경우 호출되는 것입니다.
    function getData() {
        return new Promise(function(resolve, reject){
            reject('failed');
        });
    }
//1. then()의 두번째 인자로 에러를 처리하는 방법
    getData().then(function() {

    },  function(err) {
        console.log(err);
    });

//2. catch()로 에러를 처리하는 코드************** 이 방법이 주로 사용되고있다.
    getData().then().catch(function(err) {
        console.log(err);
    });

    *************프로미스 에러 처리는 가급적 catch()를 사용하고있다.***************
    그 이유는
    *******************then()으로 처리를 한다고 했을때*************************
    function getData() {
        return new Promise(function(resolve, reject) {
            resolve('hi');
        });
    }    

    getData().then(function(result) {
        console.log(result);
        throw new Error("Error in then()"); // Uncaught (in promise) Error : Error in then()    잘못된 출력
    },  function(err) {
        console.log('then error :', err);
    });
    getData() 함수의 프로미스에서 resolve()메서드를 호출하여 정상적으로 로직을 처리했지만, then()의 첫번재 콜백 함수 내부에서 오류가 나는 경우 오류를 제대로 잡아 내지를 못한다.

    **************catch()으로 처리를 한다고 했을때*************************
    function getData() {
        return new Promise(function(resolve, reject) {
            resolve('hi');
        });
    }

    getData().then(function(result) {
        console.log(result);    //hi
        throw new Error("Error in then()");
    }).catch(function(err) {
        console.log('then error : ', err); // then error : Error: Error in then() 이게 오류없는 정상 출력
    });



*/