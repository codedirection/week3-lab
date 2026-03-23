#!/usr/bin/env node

/**
 * Node.js CLI Calculator App
 * 
 * Supported Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (×)
 * - Division (÷)
 */

class Calculator {
  /**
   * Addition operation
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Sum of a and b
   */
  add(a, b) {
    return a + b;
  }

  /**
   * Subtraction operation
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Difference of a and b
   */
  subtract(a, b) {
    return a - b;
  }

  /**
   * Multiplication operation
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Product of a and b
   */
  multiply(a, b) {
    return a * b;
  }

  /**
   * Division operation
   * @param {number} a - Dividend (numerator)
   * @param {number} b - Divisor (denominator)
   * @returns {number} Quotient of a divided by b
   * @throws {Error} If attempting to divide by zero
   */
  divide(a, b) {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  }
}

// CLI Interface
function main() {
  const calculator = new Calculator();
  const args = process.argv.slice(2);

  if (args.length < 3) {
    console.log('Usage: calculator.js <number1> <operation> <number2>');
    console.log('Operations: add, subtract, multiply, divide');
    console.log('Examples:');
    console.log('  node calculator.js 10 add 5');
    console.log('  node calculator.js 10 subtract 3');
    console.log('  node calculator.js 10 multiply 2');
    console.log('  node calculator.js 10 divide 2');
    process.exit(1);
  }

  const num1 = parseFloat(args[0]);
  const operation = args[1].toLowerCase();
  const num2 = parseFloat(args[2]);

  if (isNaN(num1) || isNaN(num2)) {
    console.error('Error: Both arguments must be valid numbers');
    process.exit(1);
  }

  try {
    let result;

    switch (operation) {
      case 'add':
      case '+':
        result = calculator.add(num1, num2);
        break;
      case 'subtract':
      case '-':
        result = calculator.subtract(num1, num2);
        break;
      case 'multiply':
      case '*':
      case 'x':
      case '×':
        result = calculator.multiply(num1, num2);
        break;
      case 'divide':
      case '/':
      case '÷':
        result = calculator.divide(num1, num2);
        break;
      default:
        console.error(`Error: Unknown operation '${operation}'`);
        console.log('Supported operations: add, subtract, multiply, divide');
        process.exit(1);
    }

    console.log(`${num1} ${operation} ${num2} = ${result}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

// Export calculator class for use as a module
module.exports = Calculator;

// Run CLI if this file is executed directly
if (require.main === module) {
  main();
}
