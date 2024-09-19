let colourCode = document.getElementById("color-code");
let optionContainer = document.getElementById("option-container");
let randomColor = null;
let scoreContainer = document.getElementById("score");
let score = 0;

function generateRamdomNumber(min,max){
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

function incrementScore(){
    score += 1;
    scoreContainer.innerText = score;
}

function validateResult(el){

    const selectedColor = el.target.style.backgroundColor;
 if(selectedColor === randomColor){
    incrementScore();
    }else{
        score = 0;
    }
    window.localStorage.setItem("score",score);
 startGame();
}

function generateRandomColorRGB(){
    const red = generateRamdomNumber(0,255);
    const green = generateRamdomNumber(0,255);
    const blue = generateRamdomNumber(0,255);
    return `rgb(${red}, ${green}, ${blue})`;

}

function startGame(){
    score =Number(window.localStorage.getItem('score')) ?? 0;
    scoreContainer.innerText = score; 
    optionContainer.innerHTML = null;
    randomColor = generateRandomColorRGB();
    colourCode.innerText = randomColor;
    const ansIndex = generateRamdomNumber(0, 5);

   for(let i =0; i<6; i++){
    const div = document.createElement('div');
    div.addEventListener("click", validateResult)
    div.style.backgroundColor = i == ansIndex ? randomColor : generateRandomColorRGB();
    optionContainer.append(div);

   }
}
window.addEventListener("load", () => startGame());
