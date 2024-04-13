let screen = document.querySelector('.display');//change 1
let buttons = document.querySelectorAll('input[type="button"]');

let screenValue = "";
let result = "";
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let buttonText = button.value;
        if (buttonText == '=') {
            let expression = screenValue.replace(/×/g, '*').replace(/÷/g, '/');
            result = eval(expression);
            screen.value = result;
            screenValue = result.toString();
        }
        else if (buttonText == 'AC') {
            screenValue = "";
            result = "";
            screen.value = screenValue;
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
})