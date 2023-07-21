const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let btn = document.querySelector("#generate-button")
let passDisplay1 = document.querySelector("#password-1")
let passDisplay2 = document.querySelector("#password-2")
let copy1 = document.querySelector("#copy-1")
let copy2 = document.querySelector("#copy-2")

let text1 = document.getElementById('copy-1').innerHTML;
let text2 = document.getElementById('copy-2').innerHTML;
let selectedPassLen






//set password length

let value = document.querySelector("#value");
let input = document.querySelector("#pass-max-len");
value.textContent = input.value;
input.addEventListener("input", (event) => {
    value.textContent = event.target.value;
});




//generate two random passwords
function generatePassword() {
    let password1 = ""
    let selectedPassLen = parseInt(value.innerHTML)
    console.log(selectedPassLen)
    for (let i = 0; i < selectedPassLen; i++) {
        password1 += characters[Math.floor(Math.random() * characters.length)]
    }
    let password2 = ""
    for (let i = 0; i < selectedPassLen; i++) {
        password2 += characters[Math.floor(Math.random() * characters.length)]
    }
    passDisplay1.textContent = password1
    passDisplay2.textContent = password2
}

//copy password 1 to clipboard

const copyContent = async () => {
    try {
        await navigator.clipboard.writeText(passDisplay1.innerHTML);
        console.log('Content copied to clipboard');
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}

//copy password 2 to clipboard

const copyContent2 = async () => {
    try {
        await navigator.clipboard.writeText(passDisplay2.innerHTML);
        console.log('Content copied to clipboard');
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}


btn.addEventListener("click", generatePassword)
copy1.addEventListener("click", copyContent)
copy2.addEventListener("click", copyContent2)
