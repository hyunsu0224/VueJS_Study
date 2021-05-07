const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    let myDate;
    for(let i = 0; i < 10000000; i++) {
        let date = new Date();
        
        myDate = date
        
    }

    console.log(myDate);


    let pElem = document.createElement('p');
    pElem.textContent = 'This is text';
    document.body.appendChild(pElem);
});

btn.addEventListener('click', (asd) => {
    let myList = document.createElement('li');
    let a = 1;
    myList.textContent = a++;
    
    document.body.appendChild(myList);
})