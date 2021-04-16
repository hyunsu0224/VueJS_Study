/*
    async & await란,
    자바스크립트의 비동기 처리 패턴 중 가장 최근에 나오 문법
    기존의 비동기 처리 방식인 콜백 함수와 프로미스의 단점을 보완하고 개발자가 읽기좋은 코드를 작성할 수 있게 도와준다.

    예를 들어 초창기에 배운 코드
    var user = {
        id : 1,
        name : 'Josh'
    };
    if (user.id === 1) {
        console.log(user.name); // Josh
    }
-----------------------------------------------------
    var user = fetchUser('domain.com/users/1');
    if (user.id === 1) {
        console.log(user.name);
    }
    >> fetchUser()라는 메서드를 호출하면 앞에 있는 코드를 호출한다고 할때 서버에서 사용자 정보를 가져오는 HTTP 통신 코드라고 가정한다면
    위 코드는 async & await 문법이 적용된 형태라고 생각하면 된다.

-------------------------------------------------------위와 달라진점은 함수로 감쌌다는것과 asyne&await를 추가했다는것
    async function logName() {
        var user = await fetchUser('domain.com/users.1');
        if (user.id === 1) {
            console.log(user.name);
        }
    }

    적용된 코드와 적용되지 않은 코드의 차이점은
    function logName() {
        var user = fetchUser('domain.com/user/1');
        if(user.id === 1) {
            console.log(user.name);
        }
    } 

    function logName() {
        var user = fetchuser('domain.com/users/1', function(user) {
            if (user.id === 1) {
                console.log(user.name);
            }
        });
    }

    // 비동기 처리를 콜백으로 안해도 된다면...
    function logname() {
        var user = fetchUser('domain.com/users/1');
        if (user.id === 1) {
            console.log(user.name);
        }
    }
    서버에서 사용자 데이터를 불러와서 변수에 담고, 사용자의 아이디가 1이면 사용자의 이름을 출력한다.
    라고 이용을 하고싶다면 async&await를 붙히면 된다.

    async function logName() {
        var user = await fetchuser('domain.com/users.1');
        if (user.id === 1) {
            console.log(user.name);
        }
    }
*/

/*
    async & await의 기본 문법
    -----------------------------------
    async function 함수명() {
        await 비동기_처리_메서드_명();
    }

    먼저 함수의 앞에 async라는 예약어를 붙입니다.
    그리고 나서 함수의 내부 로직중 HTTP　통신을 하는 비동기 처리 코드 앞에 await를 붙인다.
    여기서 주의할 점은 비동기 처리 메서드가 꼭 프로미스 객체를 반환해야 await가 의도한대로 동작한다.

    일반적으로 await의 대상이 되는 비동기 처리 코드는 axios등 프로미스를 반환하는 API 호출 함수이다.
*/

/*
    async & await의 간단한 예제
    -------------------------------------
    function fetchItems(){
        return new Promise(fuction(resolve, reject) {
            var items = [1,2,3];
            resolve(items)
        });
    }

    async function logItems() {
        var resultItems = await fetchItems();
        console.log(resultItems); //[1,2,3]
    }
    fetchItems() 함수는 프로미스 객체를 반환하는 함수이다.
    프로미스는 "자바스크립트 비동기 처리를 위한 객체"
    fetchItems() 함수를 실행하면 프로미스가 이행(resolved)되며 결과 값은 items배열이 된다.

    logItems() 함수를 보면, logItems() 함수를 실행하면 fetchItems()함수의 결과 값인 items 배열이 resultItems 변수에 담깁니다.

    await를 사용하지 않았다면 데이터를 받아온 시점에 콘솔을 출력할 수 있게 콜백 함수나 .then() 등을 사용해야 했을것이다.

*/

/*
    async&await실용예제
    비동기 처리 코드를 다룰때 가장!! 좋다
    예를 들어 각각 사용자와 할일 목록을 받아오는 HTTP 통신 코드가 있다고 할때

    function fetchUser() {
        var url = 'https://jsonplaceholder.typicode.com/users/'
        return fetch(url).then(function(response) {
            return response.json();
        });
    }

    function fetchTodo(){
        var url = 'https://jsonplaceholder.typicode.com/todos/1';
        return fetch(url).then(function(response) {
            return response.json();
        });
    }

    1. fetchUser()를 이용하여 사용자 정보 호출
    2. 받아온 사용자 아이디가 1이면 할일 정보 호출
    3. 받아온 할 일 정보의 제목을 콘솔에 호출

    async function logTodoTitle() {
        var user = await fetchUser();
        if (user.id === 1) {
            var todo = await fetchTodo();
            console.log(todo.title);
        }
    }

    logTodoTitle()를 실행하면 콘솔에 deletus aut autem가 출력될것이다.
    위 코드를 콜백이나 프로미스로도 만든다면 굉장히 길어졌을것이다.
*/

/*
    예외처리
    async&await에서 예외를 처리하는 방법은 바로 try catch이다.
    Promise 처리를 위해서 .catch()를 썼던것처럼
    async에서는 catch{}를 써주면 된다.

    async function logTodoTitle() {
        try {
            var user = await fetchUser();
            if (user.id === 1) {
                var todo = await fetchTodo();
                console.log(todo.title);    //delectus aut autem
            }
        } catch(error) {
            console.log(error);
        }
    }
*/