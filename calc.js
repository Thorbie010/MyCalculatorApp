let display = document.getElementById('display');
let currentInput = '';
let currentOperator = '';
let firstOperand = null;

function handleButtonClick(event) {
    const buttonValue = event.target.innerText;

    if (!isNaN(buttonValue) || buttonValue === '.') {
        // If the button clicked is a number or dot
        currentInput += buttonValue;
        display.innerText = currentInput
    } else if ('+-*/'.includes(buttonValue)) {
        // If the button clicked is an operator
        if (currentOperator !== '') {
            // If an operator already exists, perform the calculation
            firstOperand = calculate(firstOperand, parseFloat(currentInput), currentOperator);
            display.innerText = formatResult(firstOperand);
            currentInput = '';
        } else {
            firstOperand = parseFloat(currentInput);
            currentInput = '';
        }
        currentOperator = buttonValue;
    } else if (buttonValue === '=') {
        // If the button clicked is the equals sign
        if (currentOperator !== '') {
            firstOperand = calculate(firstOperand, parseFloat(currentInput), currentOperator);
            display.innerText = formatResult(firstOperand);
            currentInput = '';
            currentOperator = '';
        }
    } else if (buttonValue === 'C') {
        // If the button clicked is the clear button
        currentInput = '';
        currentOperator = '';
        firstOperand = null;
        display.innerText = '0'
    }

}

function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return b;
    }
}

function formatResult(result) {
    // Format the result to limit decimal places
    return result.toFixed(2);
}
