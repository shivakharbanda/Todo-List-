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


export class heading1 extends headComponent {
    constructor () {
        return document.createElement("h1");
    }
}


export function radioBtnDiv() {
    let radioBtn = new divComponent();
    radioBtn.classList.add("radio-btn");
    return radioBtn
    
}
export function StarBtnDiv(important) {
    let starBtn = new divComponent();
    important?starBtn.classList.add("important-star"):starBtn.classList.add("star-white");
    starBtn.classList.add("star");
     
    return starBtn 
}

export class svg {
    constructor (src, id= null) {
        this.svg =  document.createElement("object");

        this.svg.setAttribute("type", "image/svg+xml");
        this.svg.setAttribute("data", src);
        if (id != null) {
            this.svg.setAttribute("id", id);
        }

        return this.svg;
        
    }
}

export function switchElement() {
    let switchEle = document.createElement("label");
    let switchEleInput = document.createElement("input");
    let switcheleSpan = document.createElement("span");

    switchEle.classList.add("switch");
    switchEleInput.setAttribute("type", "checkbox");

    switchEleInput.checked = true;

    switcheleSpan.classList.add("slider");
    switcheleSpan.classList.add("round")

    switchEle.appendChild(switchEleInput);
    switchEle.appendChild(switcheleSpan);

    return switchEle;

}