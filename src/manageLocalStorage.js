// this code is to create and edit projects in local stroage



export function setupProjectDict() {
    if (fetchProjects() == null) {
        localStorage.setItem("projects", "{}");
        localStorage.setItem("projectId", "0");
    }
}

export function createProject(projectName) {
    if (checkIfProjectExist()) {
        let projectsObj = appendToProjectsDict(projectName)
        updateLocalStroageProjectDict(projectsObj)
        updateProjectId()

    } else {
        return 
    }

}
export function getProjectNameById(projectId) {
    let projectObj = stringToObject(fetchProjects());

    return projectObj[projectId]["projectName"];
}

function getProjectId() {
   
    let projectId = Number(localStorage.getItem("projectId"));
    return projectId

}

function updateProjectId() {
   let projectIdNum =  Number(localStorage.getItem("projectId")) + 1;
   localStorage.setItem("projectId", `${projectIdNum}`);
}

function updateLocalStroageProjectDict(project_obj) {
    localStorage.setItem("projects", objToString(project_obj));

}

function checkIfProjectExist() {
    let projectsObj = stringToObject(fetchProjects());
    
    if (projectsObj[projectName] == undefined) {
        return true;
    } else {
        return false;
    }


}

function appendToProjectsDict(projectName) {
    let projectsObj = stringToObject(fetchProjects());
    let projectIdNum = getProjectId() + 1;

    projectsObj[projectIdNum] = {
        projectName : projectName, 
        taskId : 0,
        tasks : {}
    };

    return projectsObj;
}

export function fetchProjects() {
    return localStorage.getItem("projects");
}

export function getProjectIdByName(projectName) {
    let projectObj = stringToObject(fetchProjects());
    
    return projectObj[projectName]["projectId"];

}

export function getProjectListObj() {
    return Object.keys(stringToObject(fetchProjects()));
}

export function deleteProjectItem(itemName) {
    let projectsObj = stringToObject(fetchProjects());

    if (projectsObj[itemName] != undefined) {
        delete projectsObj[itemName];
        updateLocalStroageProjectDict(projectsObj);
    }
}

export function editKey(projectId, newProjectName) {
    let projectObj = stringToObject(fetchProjects());

    (projectObj[projectId])["projectName"] = `${newProjectName}`;

    updateLocalStroageProjectDict(projectObj);
}

// code to append todos inside their respective projects

function getCurrentTaskId(projectId) {
    let projectsObj = stringToObject(fetchProjects());
    return (projectsObj[projectId])["taskId"];

}

export function addTaskToProject(projectId, task) {
    let projectObj = stringToObject(fetchProjects());

    let taskId = getCurrentTaskId(projectId)

    let taskList = (projectObj[projectId])["tasks"]
    
    taskList[taskId] = task;

    updateLocalStroageProjectDict(projectObj);

    projectObj = updatetaskId(projectId);

    updateLocalStroageProjectDict(projectObj);

    return taskId
}

function updatetaskId(projectId) {
    let currentTaskId = getCurrentTaskId(projectId);
    let projectObj = stringToObject(fetchProjects());

    (projectObj[projectId])["taskId"] = currentTaskId + 1;

    return projectObj
}

export function deleteTask(taskId, projectId) {
    let projectObj = stringToObject(fetchProjects());

    delete projectObj[projectId]["tasks"][taskId]

    updateLocalStroageProjectDict(projectObj)
}

export function getTaskById(projectID, taskID) {
    let projectObj = stringToObject(fetchProjects());

    let project = projectObj[projectID];
    let task = project["tasks"][taskID];

    return task
}

export function updateTaskById(projectID, taskID, task){
    let projectObj = stringToObject(fetchProjects());

    projectObj[projectID]["tasks"][taskID] = task;
    updateLocalStroageProjectDict(projectObj);
}

export function toggleCompleted(projectID, taskID) {
    let projectObj = stringToObject(fetchProjects());
    if (projectObj[projectID]["tasks"][taskID]["completed"] == "false") {
        projectObj[projectID]["tasks"][taskID]["completed"] = "true";
    } else if (projectObj[projectID]["tasks"][taskID]["completed"] == "true") {
        projectObj[projectID]["tasks"][taskID]["completed"] = "false"
    }
    updateLocalStroageProjectDict(projectObj);
    return true
}
export function toggleImportant(projectID, taskID) {
    let projectObj = stringToObject(fetchProjects());
    if (projectObj[projectID]["tasks"][taskID]["important"] == "false") {
        projectObj[projectID]["tasks"][taskID]["important"] = "true";
    } else if (projectObj[projectID]["tasks"][taskID]["important"] == "true") {
        projectObj[projectID]["tasks"][taskID]["important"] = "false"
    }
    updateLocalStroageProjectDict(projectObj);
    return true
}

export function getAllTasks() {
    debugger
    let taskList = [];
    let projectObj = stringToObject(fetchProjects());

    Object.keys(projectObj).forEach(project => {
        console.log(project)
        Object.keys(projectObj[project]["tasks"]).forEach(task => {
            taskList.push();
        })
    })

    return taskList;
}
// this code is to convert string to obj and obj to string

function objToString(value) {
    return JSON.stringify(value);
}

export function stringToObject(value) {
    return JSON.parse(value);
}
