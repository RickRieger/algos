const sameFunctions = require('./same');

// same

test('First array has its corresponding squared values in the second array and the frequency is the same', () => {
  expect(sameFunctions.same([1, 2, 3, 2], [9, 1, 4, 4])).toBe(true);
});

test('First array has its corresponding squared values in the second array and the frequency is the same', () => {
  expect(sameFunctions.same2([3, 5, 6, 2], [4, 25, 9, 36])).toBe(true);
});

test('First array has its corresponding squared values in the second array and the frequency is the same', () => {
  expect(sameFunctions.same([1, 2, 1], [4, 4, 1])).toBe(false);
});

test('First array has its corresponding squared values in the second array and the frequency is the same', () => {
  expect(sameFunctions.same([1, 2, 4, 3], [9, 4, 1])).toBe(false);
});

// same2

test('First array has its corresponding squared values in the second array and the frequency is the same', () => {
  expect(sameFunctions.same2([1, 2, 3, 2], [9, 1, 4, 4])).toBe(true);
});

test('First array has its corresponding squared values in the second array and the frequency is the same', () => {
  expect(sameFunctions.same2([3, 5, 6, 2], [4, 25, 9, 36])).toBe(true);
});

test('First array has its corresponding squared values in the second array and the frequency is the same', () => {
  expect(sameFunctions.same2([1, 1, 1, 1, 1, 1], [9, 0, 4, 4, 9, 25])).toBe(
    false
  );
});

test('First array has its corresponding squared values in the second array and the frequency is the same', () => {
  expect(sameFunctions.same2([1, 2, 1], [4, 4, 1])).toBe(false);
});

test('First array has its corresponding squared values in the second array and the frequency is the same', () => {
  expect(sameFunctions.same2([1, 2, 4, 3], [9, 4, 1])).toBe(false);
});
