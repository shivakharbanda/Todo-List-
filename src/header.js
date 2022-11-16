export default function headerTemplate() {
    let header = document.createElement("header");

    let headerHeading = document.createElement("h1");
    headerHeading.textContent = "To-Do List"
    headerHeading.classList.add("left-heading");

    header.appendChild(headerHeading);

    return header;

};