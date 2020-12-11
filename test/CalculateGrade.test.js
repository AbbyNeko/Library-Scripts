const { test, expect } = require('@jest/globals');
const getGrade = require('../CalculateGrade');

test('score is 0 and grade should be F', () => {
    expect(getGrade(0)).toBe('F');
});

test('score is 1 and grade should be F', () => {
    expect(getGrade(1)).toBe('F');
});

test('score is 5 and grade should be F', () => {
    expect(getGrade(5)).toBe('F');
});

test('score is 8  and grade should be E', () => {
    expect(getGrade(8)).toBe('E');
});

test('score is 10 and grade should be E', () => {
    expect(getGrade(10)).toBe('E');
});

test('score is 12 and grade should be D', () => {
    expect(getGrade(12)).toBe('D');
});

test('score is 15 and grade should be D', () => {
    expect(getGrade(15)).toBe('D');
});

test('score is 16 and grade should be C', () => {
    expect(getGrade(16)).toBe('C');
});

test('score is 21 and grade should be B', () => {
    expect(getGrade(21)).toBe('B');
});

test('score is 25 and grade should be B', () => {
    expect(getGrade(25)).toBe('B');
});

test('score is 30 and grade should be A', () => {
    expect(getGrade(30)).toBe('A');
});
