import headerTemplate from "./header";
import sidebarTemplate from "./sidebar";
import genericMain from "./genericMainComponent";

import addTaskBox from "./addTaskBox";
import { appendTask, createTask } from "./task";
import { validateForm } from "./additional";



export function generateUi(parent, tab_name) {

    parent.appendChild(headerTemplate());
    parent.appendChild(sidebarTemplate());
    parent.appendChild(genericMain(tab_name));


    eventListeners();

    return parent;
}

function updateContentBar(tab_name) {
    let content = document.querySelector(".content");

    content.removeChild(document.querySelector(".main-content"));
    content.appendChild(genericMain(tab_name));
}

export function eventListeners() {
    document.querySelector("#mode-switch").addEventListener("click", (event)=>{
        event.stopPropagation();
        alert("someone clicked me and i didnt like it");
    });

    [... document.querySelectorAll(".sidebar-home-tab")].forEach(element => {

        element.addEventListener("click", (event) => {
            document.querySelector(".content").textContent = "";

            let content = document.querySelector(".content");
            content = generateUi(content, event.target.dataset.value);
            
        })
        
    }); 


    // document.querySelector(".add-task-btn").addEventListener("click", (event)=>{
    //     let taskBox = addTaskBox();
    //     document.body.appendChild(taskBox);
    //     document.querySelector(".cancel-btn").addEventListener("click", (event)=>{
    //         document.querySelector(".outside-box").remove() 
    //     }); 
    //     let impBtn = document.querySelector("#impBtn");
    //     document.querySelector("#impBtn").addEventListener("click", (event)=>{
           
    //         if (impBtn.dataset.value == "true") {
    //             impBtn.dataset.value = "false";
    //             impBtn.textContent = "☆";
                
    //         } else {
    //             impBtn.dataset.value = "true";
    //             impBtn.textContent = "⭐";
    //         }

    //         impBtn.classList.toggle("star-white");
    //     }); 
    //     document.querySelector(".add-task-2-btn").addEventListener("click", (event)=>{
    //         let title = document.querySelector("#title").value;
    //         let date = document.querySelector("#date").value;
    //         let detail = document.querySelector("#detail").value;
    //         let important = document.querySelector("#impBtn").dataset.value;
    //         let id = document.querySelector(".content").dataset.count;
    //         let project="default";

    //         validateForm(".form-field-validate");
    //         document.querySelector("#title").reportValidity();
    //         document.querySelector("#detail").reportValidity();
    //         if ([... document.querySelectorAll(".error")].length > 0) {
    //             document.querySelectorAll(".error")[0].focus();
    //             return;
    //         }
                                
    //         let task = createTask(id, project, title, detail, important, date, "false");
    //         console.log(task);
    //         document.querySelector(".content").dataset.count = Number(id) + 1;
    //         appendTask(task)
    //         document.querySelector(".outside-box").remove()

            
            
            
    //     }); 

        
    // }); 
}