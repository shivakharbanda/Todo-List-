import list from "./clipboard-check.svg";

export default function sidebarTemplate () {
    let sidebar = new divComponent();;
    let homeDiv = new divComponent();;
    let projectDiv = new divComponent();;

    let homeh1 = new headComponent("h1");
    homeh1.textContent = "Home";
    homeDiv.classList.add("home");

    let hr = document.createElement("hr");

    homeDiv.appendChild(homeh1);
   

    let homeAllTasks = new headComponent("h3");
    let homeToday = new headComponent("h3");
    let homeNext7 = new headComponent("h3");
    let homeImp = new headComponent("h3");

    homeAllTasks.classList.add("all-task");
    homeToday.classList.add("today");
    homeNext7.classList.add("next-7");
    homeImp.classList.add("imp");

    homeAllTasks.textContent = "All Tasks";
    homeToday.textContent = "Today";
    homeNext7.textContent = "Next 7 Days";
    homeImp.textContent = "Important";

    homeDiv.appendChild(homeAllTasks)
    homeDiv.appendChild(homeToday)
    homeDiv.appendChild(homeNext7)
    homeDiv.appendChild(homeImp)

    
    sidebar.appendChild(homeDiv);
    sidebar.classList.add("sidebar");


    let projectH1 = new headComponent("h1");
    projectH1.textContent = "Projects";

    projectDiv.appendChild(projectH1);
    
    let hr1 = document.createElement("hr");

    projectDiv.classList.add("project");

    let addNewBtn = document.createElement("button");
    addNewBtn.classList.add("addNew");
    addNewBtn.textContent = "+ Add Project"

    projectDiv.appendChild(addNewBtn);



    sidebar.appendChild(projectDiv);

    return sidebar
}

export class divComponent {
    constructor  () {
        return document.createElement("div");
    }
}

export class headComponent {
    constructor (head) {
        return document.createElement(head);
    }
}