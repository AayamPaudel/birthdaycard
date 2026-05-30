# birthdaycard
This is a birthday card template which wishes the user by their name after entering it. 

This section receives the name entered
```javascript

form.addEventListener("submit", function(event){
    event.preventDefault()

    form.style.display = "none"
    let first = firstinput.value
    let middle = middleinput.value
    let last = lastinput.value
    p.innerText = first + " " + middle + " " + last
    div.style.display = "block"
    firstinput.value = ""
    middleinput.value = ""
    lastinput.value = ""
})
