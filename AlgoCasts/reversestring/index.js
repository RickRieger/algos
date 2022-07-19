// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let reverseString = '';
  str = str.split('');
  const len = str.length() - 1;
  for (let i = len; i <= 0; i--) {
    reverseString = reverseString + str[i];
  }
  return reverseString;
}

module.exports = reverse;
