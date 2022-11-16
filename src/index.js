console.log("working!!!!!!11")

import './style.css';
import headerTemplate from "./header";
import sidebarTemplate from "./sidebar";
import genericMain from "./genericMainComponent";



let content = document.querySelector(".content");

content.appendChild(headerTemplate());
content.appendChild(sidebarTemplate());
content.appendChild(genericMain());
