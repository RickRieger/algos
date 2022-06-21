const removeDuplicates = require('./removeDuplicatesFromSortedArray');
const twoSum = require('./twoSum');
const twoSum2 = require('./twoSum');
const twoSum3 = require('./twoSum');
const twoSum3alt = require('./twoSum');
const isValid = require('./validParentheses');

// removeDuplicates

test('remove duplicates in array and return length of unique numbers in the array', () => {
  expect(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 6, 8, 8, 9])).toEqual(8);
});

// twoSum

test('return indices of two numbers that add up to target number', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});
test('return indices of two numbers that add up to target number', () => {
  expect(twoSum2([2, 7, 11, 15], 9)).toEqual([0, 1]);
});
test('return indices of two numbers that add up to target number', () => {
  expect(twoSum3([2, 7, 11, 15], 9)).toEqual([0, 1]);
});
test('return indices of two numbers that add up to target number', () => {
  expect(twoSum3alt([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

// validParentheses

test("Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid", () => {
  expect(isValid('{{}[][[[]]]}')).toEqual(true);
});
