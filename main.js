// dark mode
var icon = document.getElementById("icon");

icon.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")) {
        icon.src = "theme/sun.png";
    } else {
        icon.src = "theme/moon.png"
    }
}

let generateBtn = document.getElementById('generate-btn')
let passwordOne = document.getElementById('p1')
let passwordTwo = document.getElementById('p2')

// select symbols checkbox
let symbolsEl = document.querySelector('.symbols')
console.log(symbolsEl)





const uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

const generatePassword = (length, hasNumbers, hasSymbols, hasLowercase, hasUppercase) => {
    const availableCharacters = [
         ...(hasSymbols ? symbols : []),
         ...(hasNumbers ? numbers : []),
         ...(hasUppercase ? uppercase : []),
         ...(hasLowercase ? lowercase : [])

        
    ];

    let password = '';

    if (availableCharacters.length === 0) return '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * availableCharacters.length);
        password += availableCharacters[randomIndex];
    }

    return password;

}

console.log(generatePassword(10, true, true, true, true));

// if symbols checkbox is checked make symbolsEl true
symbolsEl.addEventListener('click', function() {
    if (symbolsEl.checked) {
        symbolsEl = true;
    } else {
        symbolsEl = false;
    }

    


    console.log(symbolsEl)
})



generateBtn.addEventListener("click", function() {
    
    
    

    const length = 15;
    const hasNumbers = true;
    const hasSymbols = symbolsEl;
    const hasLowercase = true;
    const hasUppercase = true;

    passwordOne.textContent = generatePassword(length, hasNumbers, hasSymbols, hasLowercase, hasUppercase);
    passwordTwo.textContent = generatePassword(length, hasNumbers, hasSymbols, hasLowercase, hasUppercase);
}

)




