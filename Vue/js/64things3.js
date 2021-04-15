/*
    3번째 모듈(Modules)
    모듈이라는 것을 이용하여
    import export문법을 이용해 특정 내용을 로딩할 수 있다.
*/

//file1.js
 export default{
     myval : 'Hello'
 }

//file2.js
 import obj from './file1.js';
 console.log(obj.myVal); //Hello

 //모듈의 이점
 //1. 자바스크립트 어플리케이션을 여러개의 파일로 분할할 수 있다.
 //2. 프로젝트 안에서 재사용이 가능한 코드를 생성할 수 있다.






 //컴포넌트 모듈(Component Modules)
 //vue에서 모듈을 가장 잘 활용할 수 있는 부분은 Vue Componet입니다.

 //app.js
 Vue.component('component1', {...})
 Vue.component('component2', {...})
 Vue.component('component3', {...})
 new Vue({
     ...
 })

// 위와 같은 방식은 앱이 점점 커지면 app.js 파일의 내용도 점점 많아지는 단점이 있습니다.

// component1.js
export default {
    //컴포넌트 내용 정의
}
// component1.js파일에 정의한 컴포넌트 내용을 아래와 같이
//app.js
import component from './component1.js';
Vue.component('component1', component);
...

//싱글 파일 컴포넌트 체계를 활용하면 컴포넌트 기반으로 더 수월하게 프로젝트를 구성할 수 있습니다. 대신에 웹팩이라는 빌드 도구가 필요하다.
