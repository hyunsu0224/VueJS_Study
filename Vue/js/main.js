let fact = document.querySelector('#fact'); 
let factText = document.querySelector('#factText'); 
let numberInput = document.querySelector('#numberInput') 
numberInput.addEventListener('input', getFactAjax); 
function getFactAjax() { let number = numberInput.value; //input 입력 값
let xhr = new XMLHttpRequest(); // XHR 생성자 생성 
xhr.open("GET", "http://numbersapi.com/" + number); // GET방식, API 요청 
xhr.onload = function () {
    // 요청이 성공적으로 완료되면 
    if (this.status == 200 && number != "") { 
        // 요청상태 확인 및 입력한 값이 있다면 
        fact.style.display = 'block'; 
        factText.innerText = xhr.responseText; 
        } 
    }; 
    xhr.send(); 
}