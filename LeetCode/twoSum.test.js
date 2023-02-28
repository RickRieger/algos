const twoSum = require('./twoSum');

// twoSum

test('find indices of two numbers that add up to target number', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});
