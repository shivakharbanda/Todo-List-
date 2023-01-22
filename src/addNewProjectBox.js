import { divComponent, headComponent, heading1, validateForm } from "./additional";

export default function addNewProjectBox() {

    let outsideBox = new divComponent();
    outsideBox.classList.add("outside-box");

    let taskBox = new divComponent();
    taskBox.classList.add("add-project-box");

    let heading = new headComponent("h2");
    heading.textContent = "Project Name:"

    let input1 = document.createElement("input");
    input1.id = "projectName";
    input1.placeholder = "Project Name";
    input1.classList.add(input1.id)
    input1.minLength = 3;
    input1.maxLength = 20;
    input1.required = true;


    taskBox.appendChild(heading);
    taskBox.appendChild(input1);

    let cancelBtn = document.createElement("button");
    let addtaskBtn = document.createElement("button");

    cancelBtn.classList.add("cancel-btn");
    addtaskBtn.classList.add("add-project-2-btn");

    cancelBtn.textContent = "Cancel";
    addtaskBtn.textContent = "Add Project";

    taskBox.appendChild(addtaskBtn);
    taskBox.appendChild(cancelBtn);

    outsideBox.appendChild(taskBox);


    return outsideBox;
    
}
