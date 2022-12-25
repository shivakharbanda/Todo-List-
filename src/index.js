'use strict';
console.log("working!!!!!!11")
import './style.css';

import { generateUi, eventListeners } from './displayController';


let content = document.querySelector(".content");

content = generateUi(content);

eventListeners();
