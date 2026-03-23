const Calculator = require('../calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('Addition', () => {
    test('should add two positive numbers: 2 + 3 = 5', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('should add negative numbers: -5 + 3 = -2', () => {
      expect(calculator.add(-5, 3)).toBe(-2);
    });

    test('should add zero: 0 + 5 = 5', () => {
      expect(calculator.add(0, 5)).toBe(5);
    });

    test('should add two negative numbers: -10 + -5 = -15', () => {
      expect(calculator.add(-10, -5)).toBe(-15);
    });

    test('should add decimal numbers: 2.5 + 1.5 = 4', () => {
      expect(calculator.add(2.5, 1.5)).toBe(4);
    });

    test('should add large numbers: 1000000 + 2000000 = 3000000', () => {
      expect(calculator.add(1000000, 2000000)).toBe(3000000);
    });
  });

  describe('Subtraction', () => {
    test('should subtract two positive numbers: 10 - 4 = 6', () => {
      expect(calculator.subtract(10, 4)).toBe(6);
    });

    test('should subtract resulting in negative: 5 - 10 = -5', () => {
      expect(calculator.subtract(5, 10)).toBe(-5);
    });

    test('should subtract zero: 10 - 0 = 10', () => {
      expect(calculator.subtract(10, 0)).toBe(10);
    });

    test('should subtract two negative numbers: -5 - (-3) = -2', () => {
      expect(calculator.subtract(-5, -3)).toBe(-2);
    });

    test('should subtract decimal numbers: 10.5 - 3.2 = 7.3', () => {
      expect(calculator.subtract(10.5, 3.2)).toBeCloseTo(7.3);
    });

    test('should subtract from zero: 0 - 5 = -5', () => {
      expect(calculator.subtract(0, 5)).toBe(-5);
    });
  });

  describe('Multiplication', () => {
    test('should multiply two positive numbers: 45 * 2 = 90', () => {
      expect(calculator.multiply(45, 2)).toBe(90);
    });

    test('should multiply by zero: 5 * 0 = 0', () => {
      expect(calculator.multiply(5, 0)).toBe(0);
    });

    test('should multiply negative numbers: -5 * 3 = -15', () => {
      expect(calculator.multiply(-5, 3)).toBe(-15);
    });

    test('should multiply two negative numbers: -5 * -3 = 15', () => {
      expect(calculator.multiply(-5, -3)).toBe(15);
    });

    test('should multiply decimal numbers: 2.5 * 4 = 10', () => {
      expect(calculator.multiply(2.5, 4)).toBe(10);
    });

    test('should multiply by one: 100 * 1 = 100', () => {
      expect(calculator.multiply(100, 1)).toBe(100);
    });

    test('should multiply large numbers: 1000 * 1000 = 1000000', () => {
      expect(calculator.multiply(1000, 1000)).toBe(1000000);
    });
  });

  describe('Division', () => {
    test('should divide two positive numbers: 20 / 5 = 4', () => {
      expect(calculator.divide(20, 5)).toBe(4);
    });

    test('should divide resulting in decimal: 10 / 4 = 2.5', () => {
      expect(calculator.divide(10, 4)).toBe(2.5);
    });

    test('should divide negative numbers: -10 / 2 = -5', () => {
      expect(calculator.divide(-10, 2)).toBe(-5);
    });

    test('should divide two negative numbers: -10 / -2 = 5', () => {
      expect(calculator.divide(-10, -2)).toBe(5);
    });

    test('should divide zero by a number: 0 / 5 = 0', () => {
      expect(calculator.divide(0, 5)).toBe(0);
    });

    test('should throw error when dividing by zero: 20 / 0', () => {
      expect(() => calculator.divide(20, 0)).toThrow('Cannot divide by zero');
    });

    test('should throw error for any division by zero: 0 / 0', () => {
      expect(() => calculator.divide(0, 0)).toThrow('Cannot divide by zero');
    });

    test('should throw error for negative number divided by zero: -5 / 0', () => {
      expect(() => calculator.divide(-5, 0)).toThrow('Cannot divide by zero');
    });

    test('should divide decimal numbers: 7.5 / 2.5 = 3', () => {
      expect(calculator.divide(7.5, 2.5)).toBe(3);
    });

    test('should divide by one: 42 / 1 = 42', () => {
      expect(calculator.divide(42, 1)).toBe(42);
    });
  });

  describe('Modulo', () => {
    test('should calculate modulo with positive numbers: 5 % 2 = 1', () => {
      expect(calculator.modulo(5, 2)).toBe(1);
    });

    test('should calculate modulo from the image example: 5 % 2 = 1', () => {
      expect(calculator.modulo(5, 2)).toBe(1);
    });

    test('should calculate modulo with larger dividend: 10 % 3 = 1', () => {
      expect(calculator.modulo(10, 3)).toBe(1);
    });

    test('should calculate modulo with result zero: 10 % 5 = 0', () => {
      expect(calculator.modulo(10, 5)).toBe(0);
    });

    test('should calculate modulo with negative dividend: -10 % 3 = -1', () => {
      expect(calculator.modulo(-10, 3)).toBe(-1);
    });

    test('should calculate modulo with negative divisor: 10 % -3 = 1', () => {
      expect(calculator.modulo(10, -3)).toBe(1);
    });

    test('should calculate modulo with two negative numbers: -10 % -3 = -1', () => {
      expect(calculator.modulo(-10, -3)).toBe(-1);
    });

    test('should throw error when performing modulo by zero', () => {
      expect(() => calculator.modulo(10, 0)).toThrow('Cannot perform modulo by zero');
    });

    test('should throw error for modulo by zero with negative number: -5 % 0', () => {
      expect(() => calculator.modulo(-5, 0)).toThrow('Cannot perform modulo by zero');
    });

    test('should calculate modulo with decimal numbers: 10.5 % 3 ≈ 1.5', () => {
      expect(calculator.modulo(10.5, 3)).toBeCloseTo(1.5);
    });
  });

  describe('Power (Exponentiation)', () => {
    test('should calculate power with positive numbers: 2 ^ 3 = 8', () => {
      expect(calculator.power(2, 3)).toBe(8);
    });

    test('should calculate power from the image example: 2 ^ 3 = 8', () => {
      expect(calculator.power(2, 3)).toBe(8);
    });

    test('should calculate power with exponent 0: 5 ^ 0 = 1', () => {
      expect(calculator.power(5, 0)).toBe(1);
    });

    test('should calculate power with base 0: 0 ^ 3 = 0', () => {
      expect(calculator.power(0, 3)).toBe(0);
    });

    test('should calculate power with exponent 1: 7 ^ 1 = 7', () => {
      expect(calculator.power(7, 1)).toBe(7);
    });

    test('should calculate power with negative exponent: 2 ^ -2 = 0.25', () => {
      expect(calculator.power(2, -2)).toBe(0.25);
    });

    test('should calculate power with negative base: (-2) ^ 3 = -8', () => {
      expect(calculator.power(-2, 3)).toBe(-8);
    });

    test('should calculate power with negative base and even exponent: (-2) ^ 2 = 4', () => {
      expect(calculator.power(-2, 2)).toBe(4);
    });

    test('should calculate power with decimal base: 2.5 ^ 2 = 6.25', () => {
      expect(calculator.power(2.5, 2)).toBe(6.25);
    });

    test('should calculate power with decimal exponent: 4 ^ 0.5 = 2', () => {
      expect(calculator.power(4, 0.5)).toBe(2);
    });

    test('should calculate large power: 10 ^ 3 = 1000', () => {
      expect(calculator.power(10, 3)).toBe(1000);
    });
  });

  describe('Square Root', () => {
    test('should calculate square root with positive number: √16 = 4', () => {
      expect(calculator.squareRoot(16)).toBe(4);
    });

    test('should calculate square root from the image example: √16 = 4', () => {
      expect(calculator.squareRoot(16)).toBe(4);
    });

    test('should calculate square root of zero: √0 = 0', () => {
      expect(calculator.squareRoot(0)).toBe(0);
    });

    test('should calculate square root of one: √1 = 1', () => {
      expect(calculator.squareRoot(1)).toBe(1);
    });

    test('should calculate square root of perfect square: √25 = 5', () => {
      expect(calculator.squareRoot(25)).toBe(5);
    });

    test('should calculate square root of perfect square: √100 = 10', () => {
      expect(calculator.squareRoot(100)).toBe(10);
    });

    test('should calculate square root of decimal: √2.25 = 1.5', () => {
      expect(calculator.squareRoot(2.25)).toBe(1.5);
    });

    test('should calculate square root of non-perfect square: √2 ≈ 1.414', () => {
      expect(calculator.squareRoot(2)).toBeCloseTo(1.414, 3);
    });

    test('should calculate square root of large number: √10000 = 100', () => {
      expect(calculator.squareRoot(10000)).toBe(100);
    });

    test('should throw error for negative number: √(-1)', () => {
      expect(() => calculator.squareRoot(-1)).toThrow('Cannot calculate square root of a negative number');
    });

    test('should throw error for negative number: √(-16)', () => {
      expect(() => calculator.squareRoot(-16)).toThrow('Cannot calculate square root of a negative number');
    });

    test('should throw error for very small negative number: √(-0.0001)', () => {
      expect(() => calculator.squareRoot(-0.0001)).toThrow('Cannot calculate square root of a negative number');
    });
  });

  describe('Edge Cases and Special Scenarios', () => {
    test('should handle very small decimal numbers in addition', () => {
      expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
    });

    test('should handle very small decimal numbers in division', () => {
      expect(calculator.divide(0.1, 0.1)).toBeCloseTo(1);
    });

    test('should handle large number calculations', () => {
      expect(calculator.multiply(999999, 999999)).toBe(999998000001);
    });

    test('should maintain precision with repeated operations', () => {
      let result = 10;
      result = calculator.divide(result, 2);
      result = calculator.multiply(result, 2);
      expect(result).toBe(10);
    });

    test('should chain operations: (2 ^ 3) * 3 = 24', () => {
      let result = calculator.power(2, 3);
      result = calculator.multiply(result, 3);
      expect(result).toBe(24);
    });

    test('should chain operations: √(16) + 9 = 13', () => {
      let result = calculator.squareRoot(16);
      result = calculator.add(result, 9);
      expect(result).toBe(13);
    });

    test('should chain operations: (10 % 3) + 5 = 6', () => {
      let result = calculator.modulo(10, 3);
      result = calculator.add(result, 5);
      expect(result).toBe(6);
    });
  });
});
