let div = document.getElementById("div")

let middleinput = document.getElementById("middle")

let lastinput = document.getElementById("last")

let h1 = document.getElementById("h1")

let p = document.getElementById("name")

let firstinput = document.getElementById("one")

div.style.display = "none"

h1.style.display = "none"

const form = document.getElementById("form")

form.addEventListener("submit", function(event){
    event.preventDefault()

    first = firstinput.value
    middle = middleinput.value
    last = lastinput.value
    h1.style.dislay = "block"
    div.style.display = "block"
    form.style.display = "none"
    p.innerText = "" + first + " " + middle + " " + last
    firstinput.value = ""
    middleinput.value = ""
    lastinput.value = ""
})