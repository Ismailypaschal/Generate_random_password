const passwordBox = document.getElementById("password");
const lenGth = 16;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~{}=-[]\|/";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (lenGth > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)]; 
    }
    passwordBox.value = password;

     passwordBox.style.backgroundColor = "white";
}

function copyPassword() {
    // passwordBox.select();
    // document.execCommand("copy")
     navigator.clipboard.writeText(passwordBox.value)
        .then(() => {
            console.log("Password copied to clipboard!");
            passwordBox.style.backgroundColor = "#3b3be2";
        })
        .catch(err => {
            console.error("Failed to copy password: ", err);
        });
}