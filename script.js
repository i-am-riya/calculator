const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.getAttribute('data-value');
        if (buttonText === 'C') {
            clearScreen();
        } else if (buttonText === '=') {
            calculate();
        } else {
            appendToScreen(buttonText);
        }
    });
});

function appendToScreen(value) {
    screen.value += value;
}

function clearScreen() {
    screen.value = "";
}

function calculate() {
    try {
        screen.value = eval(screen.value);
    } catch (error) {
        screen.value = "Error";
    }
}


