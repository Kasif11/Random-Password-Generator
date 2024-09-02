// const value = document.querySelector("#value");
// const input = document.querySelector("#length");
// value.textContent = input.value;
// input.addEventListener("input",(event) =>{
//     value.textContent = event.target.value;
// })


document.getElementById("length").addEventListener("input", function () {
    document.getElementById("value").textContent = this.value;
});

function generatePassword() {
    const length = document.getElementById("length").value;
    const includeUpperCase = document.getElementById("upr").checked;
    const includeLowerCase = document.getElementById("lwr").checked;
    const includeNumbers = document.getElementById("num").checked;
    const includeSymbols = document.getElementById("symbols").checked;

    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerCase = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let symbols = "@#$%^&*()_+[]{}|;:,.<>?";

    let characters = "";
    if (includeUpperCase) characters += upperCase;
    if (includeLowerCase) characters += lowerCase;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    let password = "";
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    document.getElementById("password").value = password;
}

document.getElementById("btn").addEventListener("click", generatePassword);

function copyPassword() {
    const passwordField = document.getElementById("password");
    passwordField.select();
    passwordField.setSelectionRange(0, 99999); // For mobile devices

    navigator.clipboard.writeText(passwordField.value).then(() => {
        alert("Password copied to clipboard!");
    }, () => {
        alert("Failed to copy the password.");
    });
}

document.getElementById("password").addEventListener("click", copyPassword);