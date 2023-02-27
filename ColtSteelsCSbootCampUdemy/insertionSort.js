// First, it helps to think of this one starting from the center or end of the Array.

//start first loop from index 1 to think about the left side already being sorted.

//store value in question in a variable

//second loop to compare starts to the left by one place and decrements, comparing if each value is larger then the stored value.  If so, move each value up by a place until you reach a value less than stored value.  Once that happens, store value (insert) ahead by one place in the array and move to the next value in the first loop.

let myArr = [3, 2, -1, 10, 11, 13, 7, 22];

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
};

console.log(insertionSort(myArr));
