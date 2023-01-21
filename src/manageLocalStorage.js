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

    projectsObj[projectName] = {
        projectId : projectIdNum, 
        taskId : 0,
        tasks : {}
    };

    return projectsObj;
}

export function fetchProjects() {
    return localStorage.getItem("projects");
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

export function editKey(oldKey, newKey) {
    let projectsStr = fetchProjects();

    let projectsSplit = projectsStr.split(oldKey);

    if (projectsSplit.length == 2) {
        projectsStr = projectsSplit[0] + `${newKey}` + projectsSplit[1];
    }
    
    updateLocalStroageProjectDict(stringToObject(projectsStr));
}

// code to append todos inside their respective projects

export function addTaskToProject(projectName, task) {
    let projectObj = stringToObject(fetchProjects());
    
    let taskId = getCurrentTaskId(projectName)
    
    (projectObj[projectName])["tasks"][taskId] = task;

    updateLocalStroageProjectDict(projectObj);

    projectObj = updatetaskId(projectName);

    updateLocalStroageProjectDict(projectObj);
}

function updatetaskId(projectName) {
    let currentTaskId = getCurrentTaskId(projectName);
    let projectObj = stringToObject(fetchProjects());

    (projectObj[projectName])["taskId"] = currentTaskId + 1;

    return projectObj
}

function getCurrentTaskId(projectName) {
    let projectsObj = stringToObject(fetchProjects());
    return (projectsObj[projectName])["taskId"];

}

// this code is to convert string to obj and obj to string

function objToString(value) {
    return JSON.stringify(value);
}

export function stringToObject(value) {
    return JSON.parse(value);
}