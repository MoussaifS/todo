export default cardCreated ;




function cardCreated (taskName , priority) {
    let card = document.createElement('div');
    let taskTitle = document.createElement('span');
    let taskPrriority= document.createElement("select");
    let btnDone = document.createElement ("button")
    let btnCancel = document.createElement("button");
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");

    card.setAttribute("class", "card");


    btnDone.setAttribute("id", "btn");
    btnDone.textContent= "DONE"; 
    btnCancel.setAttribute("id", "btnX");
    btnCancel.textContent= "X";
    
    div3.appendChild(btnDone);
    div3.appendChild(btnCancel);

    



    

    taskTitle.textContent = taskName
    div1.appendChild(taskTitle)

    switch (priority){
        case 'high':
            card.setAttribute("id", "priorityHigh");
            break;
        case 'meduim':
            card.setAttribute("id", "priorityMeduim");
            break;
        case 'low':
            card.setAttribute("id", "priorityLow");
            break;
    }
    card.appendChild(div1)
    card.appendChild(div3)
    return card;
} 





