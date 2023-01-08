import headerTemplate from "./header";
import sidebarTemplate, { addProjectBtn } from "./sidebar";
import genericMain from "./genericMainComponent";

import addTaskBox from "./addTaskBox";
import { appendTask, createTask } from "./task";
import { divComponent, headComponent, heading1, svg, validateForm } from "./additional";
import addNewProjectBox from "./addNewProjectBox";
import { appendToProjectsDict, createProject, deleteProjectItem, fetchProjects, getProjectListObj } from "./manageLocalStorage";
import project_icon  from './static/svg/project-icon.svg';
import delete_svg from './static/svg/trash-fill.svg';
import edit_svg from './static/svg/pencil-square.svg';



export function generateUi(parent, tab_name) {

    parent.appendChild(headerTemplate());
    parent.appendChild(sidebarTemplate());
    parent.appendChild(genericMain(tab_name));


    eventListeners();

    return parent;
}

function updateContentBar(tab_name) {
    let content = document.querySelector(".content");

    let main_content = document.querySelector(".main-content")

    content.removeChild(main_content);
    content.appendChild(genericMain(tab_name));
}

export function eventListeners() {
    document.querySelector("#mode-switch").addEventListener("click", (event)=>{
        event.stopPropagation();
        alert("someone clicked me and i didnt like it");
    });

    [... document.querySelectorAll(".sidebar-home-tab")].forEach(element => {

        element.addEventListener("click", (event) => {

            updateContentBar(event.target.dataset.value);
            
        })
        
    }); 

    document.querySelector(".addNewProject").addEventListener("click", () => {
        let addNewProject = addNewProjectBox();
        document.body.appendChild(addNewProject);
        document.querySelector(".cancel-btn").addEventListener("click", (event)=>{
            document.querySelector(".outside-box").remove() 
        }); 

        document.querySelector(".add-project-2-btn").addEventListener("click", ()=>{
            let projectNameField = document.querySelector("#projectName");

            validateForm("#projectName");
            document.querySelector("#projectName").addEventListener("blur", () => {validateForm("#projectName");}) 
            if ([... projectNameField.classList].includes("error")){
                // do nothing
            } else {
                createProject(projectNameField.value);
                document.querySelector(".outside-box").remove()
                console.log(populateProjectsTab());
                populateProjectsTab();
            }
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


export function populateProjectsTab(){
    let projectListDiv = new divComponent();
    projectListDiv.classList.add("project-list");

    let projectList = getProjectListObj();

    for (let i = 0; i < projectList.length; i ++) {
        let projectItemDiv = new divComponent()
        projectItemDiv.classList.add("full-tab");
        
        // let projectItemDivPart1 = new divComponent();

        let menuIcon = new svg(project_icon);
        menuIcon.classList.add("project-icon-small");

        // projectItemDivPart1.appendChild(menuIcon);

        let projectItemDivPart2 = new divComponent();


        const projectItem = new headComponent("h3");
        projectItem.textContent = projectList[i];
        projectItem.classList.add("all-task");
        projectItem.classList.add("sidebar-home-tab");
        projectItem.dataset.keyID = projectList[i];
        projectItemDivPart2.appendChild(projectItem);

        let editSvg = new svg(edit_svg);
        
        editSvg.dataset.keyID = projectList[i];
        editSvg.classList.add("project-icon-small");
        editSvg.classList.add("svg-btn-edit");
        editSvg.style = "cursor: pointer;";

        let deleteSvg = new svg(delete_svg);
        
        deleteSvg.dataset.keyID = projectList[i];
        deleteSvg.classList.add("project-icon-small");
        deleteSvg.classList.add("svg-btn-delete");

        deleteSvg.addEventListener("click", ()=> {
            alert("clicked");
        })

        let projectItemDivPart2_2 = new divComponent();
        projectItemDivPart2_2.classList.add("project-icons");

        projectItemDivPart2_2.appendChild(editSvg);
        projectItemDivPart2_2.appendChild(deleteSvg);

        projectItemDivPart2.appendChild(projectItem);
        projectItemDivPart2.appendChild(projectItemDivPart2_2);
        projectItemDivPart2.classList.add("project-item-part-2")

        projectItemDiv.appendChild(menuIcon);
        projectItemDiv.appendChild(projectItemDivPart2);


        projectListDiv.appendChild(projectItemDiv);
    }
    let projectSideBarDiv = document.querySelector(".project");
    projectSideBarDiv.removeChild(projectSideBarDiv.lastChild)

    if (document.querySelector(".project-list")!= null) {
        projectSideBarDiv.removeChild(document.querySelector(".project-list"));
    }
    
    projectSideBarDiv.appendChild(projectListDiv);
    projectSideBarDiv.appendChild(addProjectBtn());
    eventListeners();
}