// Document Object Model

// getElementById()

// const doc = document.getElementById('doc');

// const lists = document.getElementsByClassName('list');

// console.log(lists);  // HTML Collection
// console.log(lists.length)

// // console.log(document.getElementsByClassName('intro'));

// const para = document.getElementsByTagName('li');

// console.log(para);


//Query Selector

// const docDiv = document.querySelector('#doc');
// console.log(docDiv);

// const lists = document.querySelectorAll('.list');
// console.log(lists);

// lists.forEach(list => console.log(list));

// const paraDiv = document.querySelector('#doc p');
// console.log(paraDiv)


// const para = document.querySelectorAll('p');
// console.log(para);


// para.forEach( paragraph => {
//     paragraph.innerText += " New Text";
// })

// // console.log(document.getElementsByTagName('div'));

// const content = document.querySelector('.content');
// console.log(content.innerHTML);
// console.log(content.innerText);

// content.innerHTML += `<h2>Content</h2>`;

// console.log(content);


// const content = document.querySelector('.content');
// const people = ['John', 'Jake', 'Ron', 'Harry'];

// people.forEach( person => {
//     content.innerHTML += `<p>${person}</p>`;
// })


// Getting and setting Atrributes

// const link = document.querySelector('a');
// console.log(link.getAttribute('href'));

// link.setAttribute('href', 'https://www.google.com');
// link.innerText = 'New Link';

// const message = document.querySelector('p.example');
// console.log(message.getAttribute('class'));

// // if(!message.hasAttribute('class')){
// //     message.setAttribute('class', 'success');
// // }else{
// //     message.setAttribute('class', 'fail');
// // }
// message.setAttribute('class', 'title');

// const title = document.querySelector('h1');

// // title.setAttribute('style', 'margin: 50px;')

// // console.log(title.style.color);

// title.style.margin = '50px';
// title.style.color = 'green';

// // css font-size
// title.style.fontSize = '20px';
// title.style.margin = '';

// console.log(title.style);

// const content = document.querySelector('.content')

// content.classList.add('go');
// content.classList.remove('go');

// console.log(content.classList);

const paras = document.querySelectorAll('p');

paras.forEach( para => {
    if(para.innerText.includes('Stop')){
        para.classList.add('stop');
    }else if (para.innerText.includes('Go')){
        para.classList.add('go');
    }else if (para.innerText.includes('Stay')){
        para.classList.add('stay');
    }
});

// const title = document.querySelector('.title');
// // title.classList.toggle('title-text');
// const firstPara = document.querySelector('h1 ~ p');

// console.log(firstPara.innerText);
// console.log(firstPara.textContent);



// Events

// Examples - click, mouseover, scroll, keypress(up-down), copy


// function toggleClass(){
//     const firstPara = document.querySelector('h1 ~ p');
//     firstPara.classList.toggle('go');
// }

// function captureChange(){
//     const headingThree = document.createElement('h3');
//     headingThree.innerText = 'Harry';
//     document.querySelector('body').appendChild(headingThree);
//     console.log(headingThree);
// }

// Event Listeners

const btn = document.querySelector('#add-button');
const colorArray = ['green', 'red', 'blue', 'yellow', 'orange'];

// parameters - event name, callback function
btn.addEventListener('click', function(e){
    // console.log(e.target);
    // if(e.shiftKey){
    //     console.log('Pressed Shift')
    // }else{
    //     console.log("Didn't press shift")
    // }
    // const inputBoxValue = document.querySelector('#inputName').value;
    // console.log(inputBoxValue);
    // const newElement = document.createElement('p');
    // newElement.textContent = inputBoxValue;
    // newElement.classList.add('success');
    // console.log(newElement);
    // document.querySelector("#new-names").appendChild(newElement);
    let clr = colorArray[Math.floor(Math.random()*5)];
    console.log(clr);

    document.querySelector('body').style.background = clr;
});