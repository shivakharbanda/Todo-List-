import { divComponent, headComponent, radioBtnDiv, StarBtnDiv } from "./additional";

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

export function appendTask(task) {
    let tasksDiv = document.getElementById("task-details");

    let taskComponent = new divComponent();
    taskComponent.dataset.taskId = task.id
    taskComponent.classList.add("task");

    let radioBtn = radioBtnDiv();
    let taskTitle = new headComponent("h5");
    let taskDetail = new headComponent("p");
    let dueDate = new headComponent("p");
    let important = StarBtnDiv(task.important);

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

    tasksDiv.appendChild(taskComponent);
    
}