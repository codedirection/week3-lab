#!/usr/bin/env node

/**
 * Node.js CLI Calculator App
 * 
 * Supported Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (×)
 * - Division (÷)
 * - Modulo (%)
 * - Exponentiation (^)
 * - Square Root (sqrt)
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

  /**
   * Modulo operation
   * @param {number} a - Dividend (numerator)
   * @param {number} b - Divisor (denominator)
   * @returns {number} Remainder of a divided by b
   * @throws {Error} If attempting modulo by zero
   */
  modulo(a, b) {
    if (b === 0) {
      throw new Error('Cannot perform modulo by zero');
    }
    return a % b;
  }

  /**
   * Exponentiation operation (power)
   * @param {number} base - The base number
   * @param {number} exponent - The exponent
   * @returns {number} Base raised to the exponent
   */
  power(base, exponent) {
    return Math.pow(base, exponent);
  }

  /**
   * Square root operation
   * @param {number} n - The number to find the square root of
   * @returns {number} The square root of n
   * @throws {Error} If attempting to find square root of negative number
   */
  squareRoot(n) {
    if (n < 0) {
      throw new Error('Cannot calculate square root of a negative number');
    }
    return Math.sqrt(n);
  }
}

// CLI Interface
function main() {
  const calculator = new Calculator();
  const args = process.argv.slice(2);

  if (args.length < 2) {
    console.log('Usage: calculator.js <number1> <operation> [number2]');
    console.log('Operations: add, subtract, multiply, divide, modulo, power, sqrt');
    console.log('Examples:');
    console.log('  node calculator.js 10 add 5');
    console.log('  node calculator.js 10 subtract 3');
    console.log('  node calculator.js 10 multiply 2');
    console.log('  node calculator.js 10 divide 2');
    console.log('  node calculator.js 10 modulo 3');
    console.log('  node calculator.js 2 power 3');
    console.log('  node calculator.js 16 sqrt');
    process.exit(1);
  }

  const num1 = parseFloat(args[0]);
  const operation = args[1].toLowerCase();
  let num2 = args[2] ? parseFloat(args[2]) : null;

  if (isNaN(num1)) {
    console.error('Error: First argument must be a valid number');
    process.exit(1);
  }

  // For operations that need two arguments
  if (['add', '+', 'subtract', '-', 'multiply', '*', 'x', '×', 'divide', '/', '÷', 'modulo', '%', 'power', '^'].includes(operation)) {
    if (args.length < 3) {
      console.error(`Error: Operation '${operation}' requires two numbers`);
      process.exit(1);
    }
    if (isNaN(num2)) {
      console.error('Error: Second argument must be a valid number');
      process.exit(1);
    }
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
      case 'modulo':
      case '%':
        result = calculator.modulo(num1, num2);
        break;
      case 'power':
      case '^':
        result = calculator.power(num1, num2);
        break;
      case 'sqrt':
      case '√':
        result = calculator.squareRoot(num1);
        break;
      default:
        console.error(`Error: Unknown operation '${operation}'`);
        console.log('Supported operations: add, subtract, multiply, divide, modulo, power, sqrt');
        process.exit(1);
    }

    console.log(`${num1} ${operation} ${num2 !== null ? num2 : ''} = ${result}`);
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
