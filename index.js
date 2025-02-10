const generateBtn = document.getElementById("generate-btn")
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const passwordOption = [document.getElementById("password1-option"), document.getElementById("password2-option")]
const passwordLen = document.getElementById("pass-len")
const sliderVal = document.getElementById("slider-val")
const copyButtons = document.querySelectorAll(".copy-btn");

function updateTextInput(val) {
    sliderVal.textContent=`Password length: ${val}`; 
  }

generateBtn.addEventListener("click", function() {
    for (let btn=0; btn<passwordOption.length; btn++) {
        let password = ""
        for (let i=0; i<passwordLen.value; i++) {
            password += characters[Math.floor(Math.random()*characters.length)]
        }
        passwordOption[btn].textContent=password
    }
})

copyButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
        const password = passwordOption[index].textContent;
        if (password) {
            navigator.clipboard.writeText(password)
                .then(() => alert("Password copied to clipboard: " + password))
                .catch((err) => console.error("Failed to copy password:", err));
        }
    });
});





