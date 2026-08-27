// statistics.js
// This program asks the user to enter integers until q or Q is entered.
// It echoes the integers and checks whether any two multiply to another
// integer entered by the user.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// This array stores all of the integers entered by the user.
let numbers = [];

// This function repeatedly asks the user for another integer.
function askForNumber() {
    rl.question("Enter an integer (or q to quit): ", function(input) {

        // q or Q tells the program to stop accepting input.
        if (input.toLowerCase() === "q") {

            console.log("\nIntegers entered:");

            // Display all integers entered by the user.
            if (numbers.length === 0) {
                console.log("No integers were entered.");
            } else {
                console.log(numbers.join(", "));
            }

            // There must be at least three integers to have
            // two integers whose product equals a third integer.
            if (numbers.length < 3) {
                console.log("Condition was not met");
            } else {

                let conditionMet = false;

                // Check every possible pair of integers.
                for (let i = 0; i < numbers.length; i++) {
                    for (let j = i + 1; j < numbers.length; j++) {

                        // Check the product against every other integer.
                        for (let k = 0; k < numbers.length; k++) {

                            // Make sure the third integer is not one
                            // of the two integers being multiplied.
                            if (k !== i && k !== j) {

                                if (numbers[i] * numbers[j] === numbers[k]) {

                                    console.log(
                                        `Condition is met: ${numbers[i]} x ${numbers[j]} = ${numbers[k]}`
                                    );

                                    conditionMet = true;
                                }
                            }
                        }
                    }
                }

                // If no matching product was found, display this message.
                if (!conditionMet) {
                    console.log("Condition was not met");
                }
            }

            // Close the program.
            rl.close();
            return;
        }

        // Convert the user's input into a number.
        let number = Number(input);

        // Check whether the user entered a valid integer.
        if (input.trim() === "" || !Number.isInteger(number)) {
            console.log("Error: Please enter an integer or q to quit.");

            // Ask the user again instead of ending the program.
            askForNumber();
            return;
        }

        // Add the valid integer to the array.
        numbers.push(number);

        // Echo the integer back to the user.
        console.log(`You entered: ${number}`);

        // Ask for another integer.
        askForNumber();
    });
}

// Start the program.
console.log("Integer Product Checker");
askForNumber();