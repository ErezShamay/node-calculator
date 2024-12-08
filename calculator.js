const readline = require('readline');

// Create a readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Perform the calculation
const calculate = (num1, num2, operator) => {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
        default:
            return 'Error: Invalid operator';
    }
};

// Ask for user input
const askQuestion = () => {
    rl.question('Enter the first number: ', (input1) => {
        const num1 = parseFloat(input1);

        rl.question('Enter the operator (+, -, *, /): ', (operator) => {
            rl.question('Enter the second number: ', (input2) => {
                const num2 = parseFloat(input2);

                const result = calculate(num1, num2, operator);
                console.log(`Result: ${result}`);

                rl.question('Do you want to perform another calculation? (yes/no): ', (answer) => {
                    if (answer.toLowerCase() === 'yes') {
                        askQuestion();
                    } else {
                        console.log('Goodbye!');
                        rl.close();
                    }
                });
            });
        });
    });
};

// Start the calculator
askQuestion();