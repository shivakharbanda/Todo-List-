import {divComponent, headComponent, svg} from "./additional";
import house  from './static/svg/house.svg';

import all_task_svg  from './static/svg/all_task_svg.svg';
import today_svg  from './static/svg/today_svg.svg';
import next_7_days_svg  from './static/svg/next_7_days_svg.png';
import important_svg  from './static/svg/important_svg.png';


export default function sidebarTemplate () {
    let sidebar = new divComponent();
    let homeDiv = new divComponent();
    let projectDiv = new divComponent();

    let homeh1 = new headComponent("h1");
    homeh1.textContent = "Home";
    homeDiv.classList.add("home");

    let homeHeadDiv = new divComponent();
    homeHeadDiv.classList.add("menu-item");

    let homeIcon = new svg(house);
    homeIcon.classList.add("menu-list-svg-small");

    homeHeadDiv.appendChild(homeIcon);
    homeHeadDiv.appendChild(homeh1);


    let hr = document.createElement("hr");

    homeDiv.appendChild(homeHeadDiv);
    homeDiv.appendChild(hr);


    let homeAllTasks = new headComponent("h3");
    let homeToday = new headComponent("h3");
    let homeNext7 = new headComponent("h3");
    let homeImp = new headComponent("h3");

    let homeChildLabels = [
        homeAllTasks,
        homeToday,
        homeNext7,
        homeImp
    ];

    homeAllTasks.classList.add("all-task");
    homeToday.classList.add("today");
    homeNext7.classList.add("next-7");
    homeImp.classList.add("imp");

    homeAllTasks.classList.add("sidebar-home-tab");
    homeToday.classList.add("sidebar-home-tab");
    homeNext7.classList.add("sidebar-home-tab");
    homeImp.classList.add("sidebar-home-tab");

    homeAllTasks.textContent = "All Tasks";
    homeToday.textContent = "Today";
    homeNext7.textContent = "Next 7 Days";
    homeImp.textContent = "Important";
    
    homeAllTasks.dataset.value = "All Tasks";
    homeToday.dataset.value= "Today";
    homeNext7.dataset.value= "Next 7 Days";
    homeImp.dataset.value= "Important";

    let svgIcons = [
        all_task_svg,
        today_svg,
        next_7_days_svg,
        important_svg,
    ];

    homeDiv = createListItemDiv(homeDiv, svgIcons, homeChildLabels);

    

    // homeDiv.appendChild(homeAllTasks)
    // homeDiv.appendChild(homeToday)
    // homeDiv.appendChild(homeNext7)
    // homeDiv.appendChild(homeImp)

    
    sidebar.appendChild(homeDiv);
    sidebar.classList.add("sidebar");


    let projectH1 = new headComponent("h1");
    projectH1.textContent = "Projects";

    projectDiv.appendChild(projectH1);
    
    let hr1 = document.createElement("hr");

    projectDiv.appendChild(hr1);

    projectDiv.classList.add("project");

    let addNewBtn = document.createElement("button");
    addNewBtn.classList.add("addNew");
    addNewBtn.textContent = "+ Add Project"

    projectDiv.appendChild(addNewBtn);



    sidebar.appendChild(projectDiv);

    return sidebar
};

function createListItemDiv(parent, svgList, listItem) {
    for(let i = 0; i < svgList.length; i ++) {
        const divItem = new divComponent();
        divItem.classList.add("menu-item");

        let menuIcon = new svg(svgList[i]);
        menuIcon.classList.add("menu-list-svg-small");
        
        divItem.appendChild(menuIcon);
        divItem.appendChild(listItem[i]);
        
        parent.appendChild(divItem);

    };

    return parent;
};