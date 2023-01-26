import { divComponent, dropDownMenuDiv, getCurrentProjectId, headComponent, radioBtnDiv, StarBtnDiv } from "./additional";
import { eventListeners, replaceDomElements } from "./displayController";
import { fetchProjects, getTaskById, stringToObject } from "./manageLocalStorage";
import option_dots from './static/svg/3_dots.svg';

import { format } from "date-fns";


let task = ( project, title, detail, important, date, completed) => {

    return {
        
        project,
        title,
        detail,
        completed:completed,
        important: important,
        date:(date == "")?"":createDate(date)

    }

}

export function createTask ( project = "default", title, detail, important, date, completed) {
    return task(project, title, detail, important, date, completed);
}

export function appendTask(task, taskId) {
    
    let tasksDiv = document.getElementById("task-details");

    if (taskId) {
        let taskComponent = createTaskComponent(task, taskId)
        tasksDiv.appendChild(taskComponent);
    } else {
        let taskComponent = createTaskComponent(task)
        tasksDiv.appendChild(taskComponent);
    }
    
    eventListeners()
    
    
}
export function populateTasks(projectId) {
    let projectObj = stringToObject(fetchProjects());

    // let selectedProject = projectObj[projectName];

    let taskListDiv = new divComponent();
    let projectTaskObj = projectObj[projectId]["tasks"]

    let projectTaskListOfKeys = Object.keys(projectTaskObj)

    
    projectTaskListOfKeys.forEach(element => {
        let task = projectTaskObj[element];
        const taskComponent = createTaskComponent(task, element);
        taskListDiv.appendChild(taskComponent);
    });

    taskListDiv.id = "task-details";

    let parentNode = document.querySelector("#task-details").parentNode;
    let newItem = taskListDiv;
    let oldItem = document.querySelector("#task-details")

    

    replaceDomElements(parentNode, newItem, oldItem);

}



function createTaskComponent(task, taskIdNum) {
    let taskComponent = new divComponent();
    taskComponent.dataset.taskId = taskIdNum
    taskComponent.classList.add("task");

    let radioBtn = radioBtnDiv();
    let taskTitle = new headComponent("h5");
    let taskDetail = new headComponent("p");
    let dueDate = new headComponent("p");
    let important = StarBtnDiv(task.important);

    let optionsBtn = new Image();
    optionsBtn.src = option_dots;

    optionsBtn.classList.add("project-icon-small");
    optionsBtn.classList.add("svg-btn-cancel");

    let dropDownDivElement = dropDownMenuDiv(optionsBtn);

    
    
    
    radioBtn.textContent = task.completed == "true"?"✓":""
    taskTitle.textContent = task.title;
    taskDetail.textContent = task.detail;
    
    important.textContent = task.important == "true"?"⭐":"☆" 

    
    
    
    
    taskDetail.classList.add("detail");

    taskComponent.appendChild(radioBtn);
    taskComponent.appendChild(taskTitle);
    taskComponent.appendChild(taskDetail);

    if (task.date == "") {
        let noDueDateComponent = noDueDateDiv();
        taskComponent.appendChild(noDueDateComponent);
    } else {

        dueDate.textContent = createDate(task.date);
        taskComponent.appendChild(dueDate);
    }

    taskComponent.appendChild(important);
    taskComponent.appendChild(dropDownDivElement);

    return taskComponent;
}

function noDueDateDiv() {
    let noDueDateComponent = new divComponent();

    noDueDateComponent.classList.add("no-due-date");

    noDueDateComponent.textContent = "No Due Date";

    return noDueDateComponent;
}

function createDate(dateDue) {
    let dueDate = (dateDue).split("-")
    dueDate = format(new Date(dueDate[2], dueDate[1], dueDate[0]), 'dd-MM-yyyy');
    return dueDate;
}