import { divComponent, headComponent } from "./additional";



export function addTaskBox() {

    let taskBox = new divComponent();

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
    let input = document.createElement("input");
    input.id = fields[0].id;
    input.placeholder = fields[0].placeholder;
    input.minLength = fields[0].minLength;
    input.maxLength = fields[0].maxLength;
    input.setAttribute('required', '')

    let label1 = document.createElement("label");
    label1.textContent = `${fields[1].name}`;
    label1.for = fields[1].name;
    let input1 = document.createElement("textarea");
    input1.id = fields[1].id;
    input1.placeholder = fields[1].placeholder;
    input1.minLength = fields[1].minLength;
    input1.maxLength = fields[1].maxLength;
    input1.setAttribute('required', '')


    let label2 = document.createElement("label");
    label2.textContent = `Date`;
    label2.for = "date";
    let input2 = document.createElement("input");
    input2.id = "date";
    input2.type = "date";

    //div1.appendChild(label);
    div1.appendChild(input);
    //div2.appendChild(label1);
    div2.appendChild(input1);
    //div3.appendChild(label2);
    div3.appendChild(input2);

    let head = new heading1();
    head.textContent = "Task";

    let impBtn = document.createElement("button");
    impBtn.classList.add("impBtn");
    impBtn.textContent = "Importent";

    let taskBoxHeader = new divComponent();

    taskBoxHeader.appendChild(head);
    taskBoxHeader.appendChild(impBtn);
    taskBoxHeader.classList.add("task-box-header");

    taskBox.appendChild(taskBoxHeader);
    taskBox.appendChild(input);
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

    return taskBox;
    
}