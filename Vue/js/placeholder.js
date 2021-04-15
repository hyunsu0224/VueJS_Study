var test = document.querySelector('#test');
let go = element.get

function testfile() {
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method : "PUT",
    headers: {
        "Content-Type" : "application/json",
    },
    body : JSON.stringify({
        title : "Test",
        body : "I am testing!",
        userId : 1,
    }),
})// .then((response) => console.log(response))
.then((response) => response.json())
.then((data) => console.log(data))
}