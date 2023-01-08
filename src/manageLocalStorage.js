// this code is to create and edit projects in local stroage

export function setupProjectDict() {
    if (fetchProjects() == null) {
        localStorage.setItem("projects", "{}");
    }
}

export function createProject(projectName) {
    if (checkIfProjectExist()) {
        let projectsObj = appendToProjectsDict(projectName)
        updateLocalStroageProjectDict(projectsObj)

    } else {
        return 
    }

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

    projectsObj[projectName] = {};

    return projectsObj;
}

function fetchProjects() {
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

// code to append todos inside their respective projects

// this code is to convert string to obj and obj to string

function objToString(value) {
    return JSON.stringify(value);
}

function stringToObject(value) {
    return JSON.parse(value);
}