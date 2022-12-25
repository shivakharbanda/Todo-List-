import headerTemplate from "./header";
import sidebarTemplate from "./sidebar";
import genericMain from "./genericMainComponent";

import addTaskBox from "./addTaskBox";

export function generateUi(parent) {

    parent.appendChild(headerTemplate());
    parent.appendChild(sidebarTemplate());
    parent.appendChild(genericMain());

    return parent;
}

export function eventListeners() {
    document.querySelector("#mode-switch").addEventListener("click", (event)=>{
        event.stopPropagation();
        alert("someone clicked me and i didnt like it");
    });

    document.querySelector(".add-task-btn").addEventListener("click", (event)=>{
        let taskBox = addTaskBox();
        document.body.appendChild(taskBox);
        document.querySelector(".cancel-btn").addEventListener("click", (event)=>{
            document.querySelector(".outside-box").remove() 
        }); 
        let impBtn = document.querySelector("#impBtn");
        document.querySelector("#impBtn").addEventListener("click", (event)=>{
           
            if (impBtn.dataset.value == "true") {
                impBtn.dataset.value = "false";
                impBtn.textContent = "☆";
                
            } else {
                impBtn.dataset.value = "true";
                impBtn.textContent = "⭐";
            }

            impBtn.classList.toggle("star-white");
        }); 
    }); 
}