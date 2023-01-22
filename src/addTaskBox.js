import { divComponent, headComponent, heading1, validateForm } from "./additional";
import { getTaskById } from "./manageLocalStorage";



export default function addTaskBox(projectNameValue) {

    let outsideBox = new divComponent();
    outsideBox.classList.add("outside-box");

    let taskBox = new divComponent();
    taskBox.classList.add("add-task-box");
    taskBox.dataset.projectName = projectNameValue;

    let fields = [
        {
            name: "title",
            type: "text",
            id: "title",
            placeholder: "Title",
            minLength: 3,
            maxLength: 30,
            required: true
        },
        {
            name: "detail",
            type: "text",
            id: "detail",
            placeholder: "Detail...",
            minLength: 3,
            maxLength: 350,
            required: false
        },  
    ];

    let div1 = new divComponent();
    let div2 = new divComponent();
    let div3 = new divComponent();

    let label = document.createElement("label");
    label.textContent = `${fields[0].name}`;
    label.for = fields[0].name;
    let input0 = document.createElement("input");
    input0.id = fields[0].id;
    input0.classList.add(fields[0].id);
    input0.placeholder = fields[0].placeholder;
    input0.minLength = fields[0].minLength;
    input0.maxLength = fields[0].maxLength;
    input0.setAttribute('required', '')

    let label1 = document.createElement("label");
    label1.textContent = `${fields[1].name}`;
    label1.for = fields[1].name;
    let input1 = document.createElement("textarea");
    input1.id = fields[1].id;
    input1.placeholder = fields[1].placeholder;
    input1.classList.add(fields[1].id)
    input1.minLength = fields[1].minLength;
    input1.maxLength = fields[1].maxLength;
    input1.setAttribute('required', '')


    let label2 = document.createElement("label");
    label2.textContent = `Date`;
    label2.for = "date";
    let input2 = document.createElement("input");
    input2.classList.add(label2.for);
    input2.id = "date";
    input2.type = "date";

    //div1.appendChild(label);
    div1.appendChild(input0);
    //div2.appendChild(label1);
    div2.appendChild(input1);
    //div3.appendChild(label2);
    div3.appendChild(input2);

    let head = new heading1();
    head.textContent = "Task";

    let impBtn = document.createElement("div");
    impBtn.textContent = "☆"
    impBtn.classList.add("star-white");
    impBtn.classList.add("star")
    impBtn.setAttribute("id", "impBtn");
    impBtn.dataset.value = "false";

    let taskBoxHeader = new divComponent();

    impBtn.classList.add("form-field-validate");
    input0.classList.add("form-field-validate");
    input2.classList.add("form-field-validate");
    input1.classList.add("form-field-validate");

    impBtn.addEventListener("blur", () => {
        validateForm(`.${impBtn.classList[0]}`);
    });
    input0.addEventListener("blur", () => {
        validateForm(`.${input0.classList[0]}`);
    });
    input2.addEventListener("blur", () => {
        validateForm(`.${input2.classList[0]}`);
    });
    input1.addEventListener("blur", () => {
        validateForm(`.${input1.classList[0]}`);
    });

    taskBoxHeader.appendChild(head);
    taskBoxHeader.appendChild(impBtn);
    taskBoxHeader.classList.add("task-box-header");

    

    taskBox.appendChild(taskBoxHeader);
    taskBox.appendChild(input0);
    taskBox.appendChild(input2);
    taskBox.appendChild(input1);

    
   
    let cancelBtn = document.createElement("button");
    let addtaskBtn = document.createElement("button");

    cancelBtn.classList.add("cancel-btn");
    addtaskBtn.classList.add("add-task-2-btn");

    cancelBtn.textContent = "Cancel";
    addtaskBtn.textContent = "Add Task";

    taskBox.appendChild(addtaskBtn);
    taskBox.appendChild(cancelBtn);

    outsideBox.appendChild(taskBox);
    
    return outsideBox;
    
}

export function editTaskBox(projectID, taskID) {
    let taskBox = addTaskBox();
    let task = getTaskById(projectID, taskID);

    if (taskBox.querySelector("#impBtn").dataset.value == true) {
        taskBox.querySelector("#impBtn").textContent = "⭐";
        taskBox.querySelector("#impBtn").removeAttribute("class");
        taskBox.querySelector("#impBtn").classList.add("star");
        taskBox.querySelector("#impBtn").classList.add("form-field-validate");
        
    } else {
        taskBox.querySelector("#impBtn").textContent = "☆";
        taskBox.querySelector("#impBtn").removeAttribute("class");
        taskBox.querySelector("#impBtn").classList.add("star"); 
        taskBox.querySelector("#impBtn").classList.add("star-white");
        taskBox.querySelector("#impBtn").classList.add("form-field-validate");
    }
    taskBox.querySelector("#title").value = task.title;
    taskBox.querySelector("#date").value = task.date;
    taskBox.querySelector("#detail").value = task.detail;

    taskBox.id = "edit-box";
    taskBox.dataset.projectId = projectID;
    taskBox.dataset.taskId = taskID

    let editBtn = taskBox.querySelector(".add-task-2-btn")
    editBtn.id = "editBtn";
    editBtn.removeAttribute("class");
    editBtn.textContent = "Edit Task";


    return taskBox;
}