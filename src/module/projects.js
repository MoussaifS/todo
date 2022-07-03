export default project ;




function project () {
    let projectSpace = document.createElement("div");
    let proName = document.createElement("main");
    let form = document.createElement("div");
    let name = document.createElement("input");
    let addBtn = document.createElement("button");
    let index = document.createElement("option");
    
    projectSpace.classList.add('proSpace');
    projectSpace.innerText += "Project"

    name.setAttribute("type", "text");
    name.setAttribute("id", "proName");
    name.setAttribute("placeholder", "add a project");
    name.setAttribute("title", "Project Name");
    name.setAttribute("name", "proName");
    
    addBtn.textContent = "add";
    addBtn.setAttribute("class", "cardDone");

    form.appendChild(name);
    form.appendChild(addBtn);

    index.textContent = "index";
    index.setAttribute("id", "index");
    proName.appendChild (index);
    
    addBtn.onclick = function() { 
        let a = document.getElementById('proName').value;
        let name = document.createElement("option");
        name.textContent = a;
        name.setAttribute("id", "projectName");
        proName.appendChild (name);
    }

    projectSpace.appendChild(form);
    projectSpace.appendChild(proName);

    return projectSpace;
} 