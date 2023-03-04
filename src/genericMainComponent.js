import {divComponent, headComponent, radioBtnDiv, StarBtnDiv, heading1} from "./additional";
import addTaskBox from "./addTaskBox";
import { populateAllTasksOfProject } from "./displayController";
import { appendTask, createTask } from "./task";


export default function genericMain (project_name) {
    let content = new divComponent;
    content.classList.add("main-content");

    let contentHeader = new divComponent();
    let headDiv = new heading1();

    headDiv.textContent = project_name;

    headDiv.id = "content-heading";

    contentHeader.appendChild(headDiv);
    contentHeader.classList.add("content-header");

    if (project_name == "All Tasks" || project_name == "Today" || project_name == "Next 7 Days" || project_name == "Important") {
        //do nothing
    } else {
        let addTaskBtn = new headComponent("button");

        addTaskBtn.classList.add("add-task-btn");
        addTaskBtn.textContent = "+ Add Task"

        contentHeader.appendChild(addTaskBtn);
    }
    content.appendChild(contentHeader);
    let taskBox = genericTasksDetailComponent(project_name);
    taskBox.id = "task-details";


    content.appendChild(taskBox);
    return content;

}

function genericTasksDetailComponent(project_name) {
    if (project_name == "All Tasks") {
        return populateAllTasksOfProject()
    }

    let taskComponent = new divComponent();

    taskComponent.id = "task-details";
    taskComponent.classList.add("tasks-div");

    return taskComponent

}
