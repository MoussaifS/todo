export default addcard;


function addcard(){
    let addcard= document.createElement("div");
    let form = document.createElement("form");
    form.setAttribute("action", "");
    form.setAttribute("method", "post");
    form.setAttribute("id", "form");


    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");

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

    let prriority= document.createElement("select");
    prriority.setAttribute("name", "priority");
    prriority.setAttribute("id", "priority");
    prriority.innerHTML = `<option value="high" selected>high</option>
    <option value="meduim">meduim</option>
    <option value="low">low</option>`

    let project= document.createElement("select");
    project.setAttribute("name", "project");
    project.innerHTML = `<option value="index" selected>index</option>`

    text.textContent = "Select priority: ";
    div2.appendChild(text);
    div2.appendChild(prriority);
    div2.appendChild(project);
    
    let addBtn = document.createElement("button");
    let cancelBtn = document.createElement("button")
    addBtn.textContent = "add";
    cancelBtn.textContent = "cancel";
    div3.appendChild(addBtn);
    div3.appendChild(cancelBtn);

    addcard.classList.add('cardCreator');
    
    form.appendChild(div1)
    form.appendChild(div2)
    form.appendChild(div3)

    addcard.appendChild(form)

    return addcard;
}



