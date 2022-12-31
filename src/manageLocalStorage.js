// this code is to create and edit projects in local stroage

function setupProjectDict() {
    if (fetchProjects() == null) {
        localStorage.setItem("projects", "{}");
    }
}

function createProject(projectName) {
    if (checkIfProjectExist()) {
        projectsObj = appendToProjectsDict(projectName)
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


// code to append todos inside their respective projects

// this code is to convert string to obj and obj to string

function objToString(value) {
    return JSON.stringify(value);
}

function stringToObject(value) {
    return JSON.parse(value);
}