import { svg, switchElement } from "./additional";
import menu_list  from './static/svg/menu_list.svg';

export default function headerTemplate() {
    let header = document.createElement("header");

    let headerHeading = document.createElement("h1");
    headerHeading.textContent = "To-Do List1"
    headerHeading.classList.add("left-heading");


    let menuIcon = new svg(menu_list);
    menuIcon.classList.add("menu-list-svg");

    let modeSwitch = switchElement();
    modeSwitch.classList.add("color-mode");
    modeSwitch.setAttribute("id", "mode-switch");

    header.appendChild(menuIcon);
    header.appendChild(headerHeading);
    header.appendChild(modeSwitch);

    return header;

};
