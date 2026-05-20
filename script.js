let div = document.getElementById("div")

let firstinput = document.getElementById("first")

let middleinput = document.getElementById("middle")

let lastinput = document.getElementById("last")

let h1 = document.getElementById("h1")

let p = document.getElementById("name")


div.style.display = "none"

h1.style.display = "none"

const form = document.getElementById("form")

form.addEventListener("submit", function(event){
    event.preventDefault()


    h1.style.dislay = "block"
    div.style.display = "block"
    form.style.display = "none"
    p.innerText = "" + first.value + " " + middle.value + " " + last.value
})