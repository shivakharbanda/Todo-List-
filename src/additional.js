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
    console.log(important);
    important == "true"?"":starBtn.classList.add("star-white");
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

export function validateForm(formId){
    let fieldList = [... document.querySelectorAll(formId)];

    let valueObjects = {};

    fieldList.every(field => {
        if (field.tagName != "DIV") {
            if (field.required) {
                if ((field.value).length == 0){
                    field.setCustomValidity(`this field can't be empty`);
                    field.classList.add("error");
                    return;
                } else {
                    if (field.minLength != "-1") {
                        if ((field.value).length < field.minLength) {
                            field.setCustomValidity(`Too short! length should be greater than ${field.minLength}`)
                            field.classList.add("error");
                            return;
                        } else {
                            field.classList.remove("error");
                            field.classList.add("valid");
                            return;
                        }
                    } 
                    if (field.maxLength != "-1") {
                        if ((field.value).length > field.maxLength) {
                            field.setCustomValidity(`Too Long! length should be greater than ${field.maxLength}`)
                            field.classList.add("error");
                            field.classList.remove("valid");
                            return;
                        }else {
                            field.classList.remove("error");
                            field.classList.add("valid");
                            return;
                        }
                    }
                }
                

            } 
        } else { return }
    });

    return valueObjects;
}


export function idGenerator() {
    
}