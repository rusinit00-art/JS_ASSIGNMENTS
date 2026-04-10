const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        // eval() function එකෙන් string එකක් ගණිතමය කර්මයක් විදිහට හදලා දෙනවා
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}