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


    let addBtn = document.createElement("button");
    let cancelBtn = document.createElement("button")
    
    addBtn.textContent = "✓";
    cancelBtn.textContent = "x";

    addBtn.setAttribute("class", "cardDone");
    cancelBtn.setAttribute("class", "cardCancel");
    
    div3.appendChild(addBtn);
    div3.appendChild(cancelBtn);

    cancelBtn.onclick = function() { 
        card.remove();
    }



    

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

    let doneCards = [];
    addBtn.onclick = function() {
        card.classList.add("cardisDone");
        let c = card.innerHTML
        doneCards.push(c)
        card.classList.remove("card");
        console.log(doneCards)
    };

    
    return card;
} 





