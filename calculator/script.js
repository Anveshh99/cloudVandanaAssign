let currentInput = '';
let currentOperator = '';
let resultDisplayed = false;

function appendToDisplay(value) {
    if (resultDisplayed) {
        document.getElementById('display').value = '';
        resultDisplayed = false;
    }
    document.getElementById('display').value += value;
    currentInput += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
    currentInput = '';
    currentOperator = '';
    resultDisplayed = false;
}

function calculateResult() {
    if (currentInput === '') return;
    try {
        const result = eval(currentInput);
        document.getElementById('display').value = result;
        currentInput = result.toString();
        resultDisplayed = true;
    } catch (error) {
        document.getElementById('display').value = 'Error';
        currentInput = '';
        resultDisplayed = true;
    }
}
