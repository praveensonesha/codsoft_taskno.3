// Get elements
const result = document.getElementById("result");
const buttons = document.querySelectorAll("button");

let equation = ""; // Store the complete equation
let currentInput = ""; // Store the current input

// Event listener for button clicks
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonText = button.textContent;

        // Handle digits, decimal point, and operators
        if (!isNaN(buttonText) || buttonText === "." || ["+", "-", "*", "/"].includes(buttonText)) {
            currentInput += buttonText;
            equation += buttonText; // Update the equation
            updateDisplay();
        }

        // Handle equals
        if (buttonText === "=") {
            calculate();
        }

        // Handle clear
        if (buttonText === "C") {
            clear();
        }
    });
});

// Update the display with the current equation or result
function updateDisplay() {
    result.value = equation || currentInput; // Show equation or current input
}

// Perform the calculation and update the display
function calculate() {
    try {
        // Use JavaScript's eval function to calculate the result
        const answer = eval(equation);
        equation = answer.toString(); // Store the result in the equation
        currentInput = "";
        updateDisplay();
    } catch (error) {
        // Handle errors (e.g., division by zero)
        equation = "Error";
        currentInput = "";
        updateDisplay();
    }
}

// Clear the input
function clear() {
    currentInput = "";
    equation = "";
    updateDisplay();
}
