let img = document.getElementById("img");
let page = document.getElementById("page");
console.log(page)
function phoneChange (event) {
    img.src = event;
}
function bgChange(color) {
    page.style.background = color; 
}