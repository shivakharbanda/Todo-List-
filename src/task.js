import { divComponent, dropDownMenuDiv, headComponent, radioBtnDiv, StarBtnDiv } from "./additional";
import { eventListeners, replaceDomElements } from "./displayController";
import { fetchProjects, stringToObject } from "./manageLocalStorage";
import option_dots from './static/svg/3_dots.svg';

let task = (id, project, title, detail, important, date, completed) => {
    return {
        id,
        project,
        title,
        detail,
        completed:completed,
        important: important,
        date:date

    }

}

export function createTask (id, project = "default", title, detail, important, date, completed) {
    return task(id, project, title, detail, important, date, completed);
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
    dueDate.textContent = task.date;
    important.textContent = task.important == "true"?"⭐":"☆" 
    
    taskDetail.classList.add("detail");

    taskComponent.appendChild(radioBtn);
    taskComponent.appendChild(taskTitle);
    taskComponent.appendChild(taskDetail);
    taskComponent.appendChild(dueDate);
    taskComponent.appendChild(important);
    taskComponent.appendChild(dropDownDivElement);

    return taskComponent;
}

