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
  });
});
