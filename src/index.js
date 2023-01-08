'use strict';
console.log("working!!!!!!11")
import './style.css';

import { generateUi, eventListeners, populateProjectsTab } from './displayController';
import { setupProjectDict } from './manageLocalStorage';


let content = document.querySelector(".content");
content.dataset.count = 0

content = generateUi(content, "All Tasks");

setupProjectDict()
populateProjectsTab();
