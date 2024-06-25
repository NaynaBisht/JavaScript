
// To capture user input, you can use the built-in prompt() method, like this:
// The prompt() method will display a dialog box with a message and an input field for the user to enter a response.
let answer = prompt("whats your name?")

if(typeof(answer) === "string"){
    var h_1 = document.createElement('h1')
    h_1.innerText = answer
    // document.body.innerText = '' will remove other content of the body
    document.body.appendChild(h_1)
}

var h3 = document.createElement('h3')
h3.innerText = "Type into the input to make this text change"

// html forms 
var input = document.createElement('input')
input.setAttribute('type', 'text')
document.body.appendChild(h3)
document.body.appendChild(input)

input.addEventListener('change', function(){
    console.log(input.value)
})
input.addEventListener('change', function(){
    h3.innerText = input.value
})







