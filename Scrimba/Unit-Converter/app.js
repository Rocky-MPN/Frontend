/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let userInput = document.getElementById("user-input")
let convertBtn = document.getElementById("convert-btn")
let initialValue = document.getElementsByClassName("initial-value")
let convertedValue = document.getElementsByClassName("converted-value")
let length = document.getElementById("length")
const meter = 3.281
const liter = 0.264
const kilogram = 2.204



function convert() {
    length.innerHTML = `${userInput} meters = ${userInput * meter} feet | ${userInput} feet = ${parseFloat(userInput / meter).toFixed(2)} meters`
}

userInput.addEventListener("input", function () {
    document.getElementById("gfg")
    .addEventListener("input", (event) => alert("Changed!"));
})

convertBtn.addEventListener("click", function () {
    console.log("hello")
    console.log(userInput)
    convert()
})


