export default addcard;

import cardCreated from "./card"


function addcard(){
    let addcard= document.createElement("div");
    let form = document.createElement("div");
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    
    form.setAttribute("id", "form");


    let taskName = document.createElement("INPUT");
    taskName.setAttribute("type", "text");
    taskName.setAttribute("placeholder", "task info");
    taskName.setAttribute("name", "task");
    taskName.setAttribute("id", "task");
    
    let date = document.createElement("INPUT");
    date.setAttribute("type", "date");
    date.setAttribute("name", "date");
    date.setAttribute("id", "date");

    div1.appendChild(taskName);
    div1.appendChild(date);

    let text = document.createElement('span');

    let priority= document.createElement("select");
    priority.setAttribute("name", "priority");
    priority.setAttribute("id", "priority");
    priority.innerHTML = `<option value="high" selected>high</option>
    <option value="meduim">meduim</option>
    <option value="low">low</option>`

    let project= document.createElement("select");
    project.setAttribute("name", "project");
    
    let b = document.querySelector("#index");
    let temp = b
    project.appendChild(temp);


    let options = document.createElement("option")
    let projectNames = document.querySelectorAll("#projectName")
    
    
    console.log(b.innerHTML);
    // projectNames.forEach( e => {
    //     let temp = e.innerHTML
    //     options.innerHTML = temp
    
    //     project.appendChild();
    // })
    


    text.textContent = "Select priority: ";
    div2.appendChild(text);
    div2.appendChild(priority);
    div2.appendChild(project);
    
    let addBtn = document.createElement("button");
    let cancelBtn = document.createElement("button")
    
    addBtn.textContent = "✓";
    cancelBtn.textContent = "x";
    cancelBtn.setAttribute("class", "cardDone");
    cancelBtn.setAttribute("class", "cardCancel");

    div3.appendChild(addBtn);
    div3.appendChild(cancelBtn);
    form.appendChild(div1)
    form.appendChild(div2)
    form.appendChild(div3)
    
    addcard.classList.add('cardCreator');
    addcard.appendChild(form)

    addBtn.onclick = function() {
        let a = document.getElementById('task').value;
        let b = document.getElementById('date').value;
        let c = document.getElementsByName('priority')[0].value;
        let d = document.getElementsByName('project')[0].value;
        let contentBorde = document.querySelector('.contentBorde')
        contentBorde.appendChild(cardCreated(a,c))
        addcard.remove();
    };

    cancelBtn.onclick = function() { 
        addcard.remove();
    }
    return addcard;
}



