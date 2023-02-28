const removeElement = require('./removeElement');

// removeElement

test('remove elements in array that match target val, and return length of numbers in the array', () => {
  expect(removeElement([3, 2, 2, 3], 3)).toBe(2);
});
