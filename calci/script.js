const input = document.getElementById("number-input");
const result = document.getElementById("result");

function handleClickButton(el){
// console.log(el.innerText);
const exp = `${input.value}${el.innerText}`;
input.value = exp;
}

function evaluateExpression() {
    try {
        result.value = eval(input.value); // Evaluate the expression in the input field
    } catch (e) {
        result.value = "Error"; // Handle any errors (e.g., invalid expressions)
    }
}



function reset(){
    input.value = '';
    result.value = '';
}