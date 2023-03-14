"use strict"

// A method on the document object, to select one of the nodes
// Input an argument
// Will only select one node
// Argument needs to be a string and tends to be similar to css
// You can call IDs, attributes, html tags
    // let myButton = document.getElementsByClassName('btn'); Probably will never use this


let clickMe = document.querySelector('#clickMe');
let allButtons = document.querySelectorAll('#btn-column .btn');
let pageWrapper = document.querySelector('.page-wrapper');

// console.log(clickMe.innerText);

let btnColumn = document.querySelector("#btn-column");
// adding string HTML into the document
    // let newHtml =`
    //     <button class="btn" id="newButton">
    //         New Button
    //     </button>
    // `;

// creating a node on the fly
let buttonNode = document.createElement('button');
buttonNode.classList.add('btn');
buttonNode.innerText = "I am a new button!";
buttonNode.addEventListener(`click`,function(){
    alert(`it workkssss!!!!`);
})

btnColumn.appendChild(buttonNode);

    btnColumn.insertAdjacentHTML("afterbegin", '<p>New Html Element</p>')

// allButtons.forEach(function(button){
//     button.style.backgroundColor= 'red';
// })

// clickMe.addEventListener('click',function(){
//     pageWrapper.style.backgroundColor = 'red';
// })

// clickMe.addEventListener('click',function(){
//     pageWrapper.classList.toggle('red');
// })

clickMe.addEventListener('')