import { divComponent, headComponent } from "./sidebar";
export default function genericMain () {
    let content = new divComponent;
    content.classList.add("main-content");

    let headDiv = new heading1();
    headDiv.textContent = "All Tasks";
    headDiv.id = "content-heading";

    content.appendChild(headDiv);

    let addTaskBtn = new headComponent("button");

    addTaskBtn.classList.add("add-task-btn");
    addTaskBtn.textContent = "+ Add Task"

    content.appendChild(addTaskBtn);


    let addTaskBox = new divComponent();
    addTaskBox.id = "add-task-box";

    content.appendChild(addTaskBox);



    return content;

}

class heading1 extends headComponent {
    constructor () {
        return document.createElement("h1");
    }
}