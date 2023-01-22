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
    debugger
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
    debugger
    let projectObj = stringToObject(fetchProjects());

    delete projectObj[projectId]["tasks"][taskId]

    updateLocalStroageProjectDict(projectObj)
}

// this code is to convert string to obj and obj to string

function objToString(value) {
    return JSON.stringify(value);
}

export function stringToObject(value) {
    return JSON.parse(value);
}