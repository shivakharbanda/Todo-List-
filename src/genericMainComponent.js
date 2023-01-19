import {divComponent, headComponent, radioBtnDiv, StarBtnDiv, heading1} from "./additional";
import addTaskBox from "./addTaskBox";
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


    let taskBox = genericTasksDetailComponent();
    taskBox.id = "task-details";


    content.appendChild(taskBox);

    return content;

}

function genericTasksDetailComponent() {

    let tasks = {
        0:{
            title: "get a job",
            details: "kitni der laga gi bhai ab job lagna ma",
            dueDate: "12-12-2022",
            important: true,
            checked: true

        },
        1 : {
            title: "lmao",
            details: "lagna ma",
            dueDate: "12-01-2022",
            important: false,
            checked: false

        }
    }
    
    let tasksDiv = new divComponent();
    tasksDiv.classList.add("tasks-div");

    let taskIds = Object.keys(tasks);
    
    for (let i = 0; i < taskIds.length; i ++){
        
        let task = new divComponent();
        task.dataset.taskId = i
        task.classList.add("task");

        let radioBtn = radioBtnDiv();
        let taskTitle = new headComponent("h5");
        let taskDetail = new headComponent("p");
        let dueDate = new headComponent("p");
        let important = StarBtnDiv(tasks[i].important);

        radioBtn.textContent = tasks[i].checked?"✓":""
        taskTitle.textContent = tasks[i].title;
        taskDetail.textContent = tasks[i].details;
        dueDate.textContent = tasks[i].dueDate;
        important.textContent = tasks[i].important?"⭐":"☆"
        
        taskDetail.classList.add("detail");

        task.appendChild(radioBtn);
        task.appendChild(taskTitle);
        task.appendChild(taskDetail);
        task.appendChild(dueDate);
        task.appendChild(important);

        tasksDiv.appendChild(task);
    }
    return tasksDiv;


}
