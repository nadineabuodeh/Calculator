    let display = document.getElementById('display');
    let history = document.getElementById('history');
    let expression = '';

    function appendCharacter(char) {
    expression += char;
    display.value = expression;
    }

    function clearDisplay() {
    expression = '';
    display.value = '';
    }

    function calculateResult() {
    try {
        let result = eval(expression);
        display.value = result;
        saveToHistory(expression + ' = ' + result);
        expression = '';
    } catch (error) {
        display.value = 'Error';
    }
    }

    function saveToHistory(entry) {
    let historyEntry = document.createElement('div');
    historyEntry.textContent = entry;
    history.appendChild(historyEntry);
    }
    function resetCalculator() {
        clearDisplay();
        history.innerHTML = '';
    }
