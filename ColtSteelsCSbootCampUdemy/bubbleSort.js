// compare 2 nodes ata time starting from the left or 0 index and 1.

// whichever is greater, is on the right swap if needed

// first loop starts from the end and moves backwards since the largest node gets shifted to the end of the array each time

// second loop starts from index 0 and increments to the end of the collection (-1 since we compare the node in front each time)

// compare which is greater and swap if needed.

// optimize code with a boolean to prevent unnecessary iterations

let myArr = [3, 2, -1, 22, 15];

const bubbleSort = (arr) => {
  let swapped;
  for (let i = arr.length; i >= 0; i--) {
    swapped = false;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return arr;
};

console.log('=====>', bubbleSort(myArr));
