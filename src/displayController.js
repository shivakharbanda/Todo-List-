import headerTemplate from "./header";
import sidebarTemplate, { addProjectBtn } from "./sidebar";
import genericMain from "./genericMainComponent";

import addTaskBox from "./addTaskBox";
import { appendTask, createTask, populateTasks } from "./task";
import { divComponent, headComponent, heading1, svg, validateForm } from "./additional";
import addNewProjectBox from "./addNewProjectBox";
import { addTaskToProject, appendToProjectsDict, createProject, deleteProjectItem, editKey, fetchProjects, getProjectListObj } from "./manageLocalStorage";
import project_icon  from './static/svg/project-icon.svg';
import delete_svg from './static/svg/trash-fill.svg';
import edit_svg from './static/svg/pencil-square.svg'; 
import enter_svg from './static/svg/enter_svg.svg'; 
import cancel_svg from './static/svg/cancel_svg.svg';


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
            if (event.target.dataset.type == "project"){
                
                populateTasks(event.target.dataset.value)
                document.querySelector(".add-task-btn").addEventListener("click", (event)=>{
                        let projectName = event.target.parentNode.firstChild.textContent;
                        
                        let taskBox = addTaskBox(projectName);
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
                        document.querySelector(".add-task-2-btn").addEventListener("click", (event)=>{
                            let projectName = event.target.parentNode.dataset.projectName;
                            let title = document.querySelector("#title").value;
                            let date = document.querySelector("#date").value;
                            let detail = document.querySelector("#detail").value;
                            let important = document.querySelector("#impBtn").dataset.value;
                            let id = document.querySelector(".content").dataset.count;
                            let project="default";
                
                            validateForm(".form-field-validate");
                            document.querySelector("#title").reportValidity();
                            document.querySelector("#detail").reportValidity();
                            if ([... document.querySelectorAll(".error")].length > 0) {
                                document.querySelectorAll(".error")[0].focus();
                                return;
                            }
                                                
                            let task = createTask(id, project, title, detail, important, date, "false");
                            addTaskToProject(projectName, task)

                            document.querySelector(".content").dataset.count = Number(id) + 1;
                            
                            appendTask(task)
                            document.querySelector(".outside-box").remove()
                  
                    }); 
            
                }); 
            };
            
        })
        
    }); 

    document.querySelector(".addNewProject").addEventListener("click", () => {
        let addNewProject = addNewProjectBox();
        document.body.appendChild(addNewProject);
        document.querySelector(".cancel-btn").addEventListener("click", (event)=>{
            document.querySelector(".outside-box").remove() 
        }); 

        document.querySelector(".add-project-2-btn").addEventListener("click", (event)=>{
            let projectNameField = document.querySelector("#projectName");
            console.log(event.target)

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
    
    // 
}


export function updateTaskInProject(projectName, taskName) {
    return
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
        projectItem.dataset.value = projectList[i];
        projectItem.dataset.type = "project";
        projectItemDivPart2.appendChild(projectItem);

        let editSvg = new Image;

        editSvg.src = edit_svg;
        
        editSvg.dataset.keyID = projectList[i];
        editSvg.classList.add("project-icon-small");
        editSvg.classList.add("svg-btn-edit");
        editSvg.style = "cursor: pointer;";


        editSvg.addEventListener("click", (event)=> {
            
            let divToBeReplaced = event.target.parentNode.parentNode;

            let oldKey = event.target.dataset.keyID;

            let editInput = editBox(oldKey);
            console.log(editInput);

            divToBeReplaced.parentNode.replaceChild(editInput, divToBeReplaced);
            
        })


        let deleteSvg = new Image;
        
        deleteSvg.dataset.keyID = projectList[i];
        deleteSvg.classList.add("project-icon-small");
        deleteSvg.classList.add("svg-btn-delete");

        deleteSvg.src = delete_svg;

        deleteSvg.addEventListener("click", (event)=> {
            let confirmationBox = areYouSureBox(event.target.dataset.keyID)

            console.log(confirmationBox);

            document.body.appendChild(confirmationBox)
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


function areYouSureBox(projectName) {
    let outsideBox = new divComponent();
    outsideBox.classList.add("outside-box");

    let taskBox = new divComponent();
    taskBox.classList.add("add-task-box");
    taskBox.classList.add("confirmation-box");

    let sureBoxHeading = new headComponent("h2");

    sureBoxHeading.textContent = `Are you sure you want to delete "${projectName}"? This action can't be reversed.`

    taskBox.appendChild(sureBoxHeading);
    
    let cancelBtn = document.createElement("button");
    let yesBtn = document.createElement("button");

    yesBtn.addEventListener("click", ()=> {
        deleteProjectItem(projectName);
        document.querySelector(".outside-box").remove()
        populateProjectsTab();

    })
    cancelBtn.addEventListener("click", ()=> {
        document.querySelector(".outside-box").remove();
    })
    

    cancelBtn.classList.add("cancel-btn");
    yesBtn.classList.add("add-task-2-btn");

    cancelBtn.textContent = "Cancel";
    yesBtn.textContent = "Yes";

    taskBox.appendChild(yesBtn);
    taskBox.appendChild(cancelBtn);

    outsideBox.appendChild(taskBox);


    return outsideBox;
}

function editBox(oldKey) {
    let editDiv = new divComponent();
    editDiv.classList.add("project-item-part-2");

    let editInput = document.createElement("input");

    editInput.placeholder = oldKey;
    editInput.classList.add("sidebar-home-tab");
    editInput.classList.add("edit-input");
    editInput.maxLength = 20;
    editInput.minLength = 3;

    let enterSvg = new Image();
    enterSvg.src = enter_svg;
    enterSvg.classList.add("project-icon-small");
    enterSvg.classList.add("svg-btn-enter");

    let cancelSvg = new Image();
    cancelSvg.src = cancel_svg;
    cancelSvg.classList.add("project-icon-small");
    cancelSvg.classList.add("svg-btn-cancel");

    enterSvg.addEventListener("click", (event)=>{
        let newKey = event.target.parentNode.parentNode.firstChild.value;
        if (newKey.length >=3 && newKey.length <= 20) {
            editKey(oldKey, newKey);
            populateProjectsTab();
        }
    })

    cancelSvg.addEventListener("click", ()=>{
        populateProjectsTab();
    })
    let svgDiv = new divComponent();
    svgDiv.classList.add("project-icons");

    svgDiv.appendChild(enterSvg);
    svgDiv.appendChild(cancelSvg);

    editDiv.appendChild(editInput);
    editDiv.appendChild(svgDiv);

    return editDiv;

}

export function replaceDomElements(parent, newItem, oldItem){
    parent.replaceChild(newItem, oldItem);

}