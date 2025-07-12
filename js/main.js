// ====================Typewritter Effect=====================

//Step1
const nameElement = document.getElementById("typewritter-name");
const textToType = "Filip Bogoșel";

let charIndex = 0;
let typingSpeed = 100;//    milliseconds/char
//Step2
function type() {
    if (charIndex < textToType.length){
        nameElement.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    }
    else{
        //Remove the cursor after typing is done
        nameElement.classList.add("no-cursor");
    }
}

//Step3

document.addEventListener("DOMContentLoaded", ()=>{
    nameElement.textContent = "";
    type();
});

