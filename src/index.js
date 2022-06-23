import addcard from "./module/additon"
import cardCreated from "./module/card"




let body = document.querySelector('body');


let addbtn = document.getElementById('add');




addbtn.addEventListener('click', () => {
    
    let a = document.getElementById('task').value;
    let b = document.getElementById('date').value;
    let c = document.getElementsByName('priority')[0].value;
    let d = document.getElementsByName('project')[0].value;
    
    body.appendChild(cardCreated (a , c))


})

      

body.appendChild(addcard());





