import capitalise from "./capitalise";
import reverseString from "./reverseString";
import calculator from "./calculator";
import ceasers from "./ceasers";
import analyzeArray from "./analyzeArray";

test("capitalise string", function () {
  expect(capitalise("hello")).toBe("Hello");
});

test("reverse string", function () {
  expect(reverseString("hello")).toBe("olleh");
});

test("sum", function () {
  expect(calculator.sum(10, 5)).toBe(15);
});

test("subtract", function () {
  expect(calculator.subtract(10, 5)).toBe(5);
});

test("multiply", function () {
  expect(calculator.multiply(10, 5)).toBe(50);
});

test("divide", function () {
  expect(calculator.divide(10, 5)).toBe(2);
});

test("ceasers with space", function () {
  expect(ceasers("hello world", 1)).toBe("IFMMP XPSME");
});

test("ceasers with wrapping", function () {
  expect(ceasers("hello worldz", 1)).toBe("IFMMP XPSMEA");
});

test("ceasers with punctuation", function () {
  expect(ceasers("hello world!", 1)).toBe("IFMMP XPSME!");
});

test("ceasers with shift", function () {
  expect(ceasers("hello world", 2)).toBe("JGNNQ YQTNF");
});

test("analyze array", function () {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
