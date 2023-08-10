function add(num1,num2) {
    return num1 + num2;
}

function subtract(num1,num2){
    return num1 - num2;
}

function multiply(num1,num2){
    return num1 * num2;
}
function divide(num1, num2){
    return num1 / num2;
}

window.addEventListener("load", function() {
    let form = document.querySelector("form");
    let calcResult = document.getElementById("calcResult")

    form.addEventListener("submit", function(event) {
        const operator = document.getElementById("operator").value;
        const number1 = parseInt(document.getElementById("number1Input").value);
        const number2 = parseInt(document.getElementById("number2Input").value);

        let result;
        if (operator === 'add') {
            result = add(number1, number2);
        } else if (operator === 'subtract') {
            result = subtract(number1, number2);
        } else if (operator === 'multiply') {
            result = multiply(number1, number2);
        } else if (operator === 'divide'){
            result = divide(number1, number2);
        }

        document.querySelector('p').innerText = result;
        calcResult.removeAttribute("class");
        event.preventDefault();
    });


});
