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
