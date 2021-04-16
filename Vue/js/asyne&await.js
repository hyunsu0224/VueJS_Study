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
    


*/