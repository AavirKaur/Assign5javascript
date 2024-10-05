// 1. Function to accept text with two or three parameters and concatenate them
export function concatenateText(label1, text, label2 = '') {
    console.log(`${label1}: ${text} ${label2}`);
}

// 2. Function to convert a measurement unit (e.g., centimeters to inches)
export function convertCmToInches(cmValue) {
    const inches = cmValue / 2.54;
    return inches.toFixed(2); // returns value up to 2 decimal places
}

// 3. Function to apply a math operation (e.g., sum of values)
export function calculateSum(...values) {
    return values.reduce((acc, value) => acc + value, 0);
}

// 4. Advanced function of your choice (e.g., finding the factorial of a number)
export function calculateFactorial(number) {
    if (number < 0) return "Factorial of a negative number doesn't exist.";
    if (number === 0 || number === 1) return 1;
    return number * calculateFactorial(number - 1);
}
