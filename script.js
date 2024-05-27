const notecontainer = document.querySelector(".note-container");
const createbtn = document.querySelector(".btn");
let note = document.querySelectorAll(".input");

function shownotes() {
    notecontainer.innerHTML = localStorage.getItem("note")
}
shownotes()
function updateStorage() {
    localStorage.setItem("note", notecontainer.innerHTML)
}

createbtn.addEventListener("click", () => {
    let input = document.createElement("p")
    let img = document.createElement("img")
    input.className = "input"
    input.setAttribute("contenteditable", "true")
    img.src = "images/delete.png"
    notecontainer.appendChild(input).appendChild(img)
})
notecontainer.addEventListener("click", function (e) {
    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
        updateStorage()
    }
    else if (e.target.tagName === "p") {
        note = document.querySelectorAll(".input")
        note.forEach(nt => {
            nt.onkeyup = function () {
                updateStorage()
            }
        })
    }
})

document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak")
        event.preventDefault();
    }
})