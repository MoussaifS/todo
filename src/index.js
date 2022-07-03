import addcard from "./module/additon"
import cardCreated from "./module/card"

import project from "./module/projects"








let body = document.querySelector('body')
let contentBorde = document.querySelector('.contentBorde')
let addbtn = document.getElementById('add');
let donebtn = document.getElementById('DONE');
let onGoing = document.getElementById('ONGOING');
let allBtn = document.querySelectorAll('.btn');
let nav = document.querySelector('nav');


nav.appendChild(project());

let temp = contentBorde

// donebtn.addEventListener('click', () => {
//     let doneCards = document.querySelectorAll('.cardisDone')
//     contentBorde.textContent=temp
//     contentBorde.textContent = '';
//     doneCards.forEach(done => { 
//         contentBorde.appendChild(done);
//      })  
// })

addbtn.addEventListener('click', () => {
      contentBorde.appendChild(addcard()); 
})


onGoing.addEventListener('click', () => {
    let Cards = document.querySelectorAll('.card')
    contentBorde.textContent=temp
    contentBorde.textContent = '';

    Cards.forEach(card => { 
        contentBorde.appendChild(card);
     })  
})



