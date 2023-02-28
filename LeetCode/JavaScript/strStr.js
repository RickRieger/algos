// var strStr = function (haystack, needle) {
//   let lenNeedle = needle.length;
//   let lenHayStack = haystack.length;
//   if (lenNeedle === 0) {
//     return -1;
//   }
//   let subString = '';
//   let p2 = 0;
//   for (let p1 = 0; p1 < lenHayStack; p1++) {
//     if (haystack[p1] === needle[p2]) {
//       subString += haystack[p1];
//       if (subString === needle) {
//         console.log(subString);
//         return p1 - lenNeedle + 1;
//       }
//       p2++;
//     } else {
//       p2 = 0;
//       subString = '';
//     }
//   }
//   return -1;
// };

// console.log(strStr('mississippi', 'issip'));

function buildPrefixTable(s) {
  const table = [0];
  let i = 1; // location in s
  let j = 0; // length of repeating prefix and suffix
  while (i < s.length) {
    // If characters match, then the repeating prefix-suffix pair
    // gets longer by 1 character
    if (s[i] === s[j]) {
      j += 1;
      table[i] = j;
      i += 1;
    } else if (j > 0) {
      // If the characters do no match, and we have repetition
      // in suffix and prefix, we still need to check
      // the character after the prefix
      j = table[j - 1];
    } else {
      // When the characters don't match and no repeating
      // suffix-prefix pair, then we can move on
      table[i] = 0;
      i += 1;
    }
  }
  return table;
}

console.log('======>', buildPrefixTable('bicky'));
