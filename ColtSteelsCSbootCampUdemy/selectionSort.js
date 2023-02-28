// select the smallest value and put it at the beginning

// store first item as the smallest value
// compare each value and compare to find the smallest (by index)
// repeat process starting with next item

let myArr = [3, 2, -1, 10, 11, 13, 7, 22];

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let smallestNumIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallestNumIndex]) {
        smallestNumIndex = j;
      }
    }
    if (i !== smallestNumIndex) {
      [arr[i], arr[smallestNumIndex]] = [arr[smallestNumIndex], arr[i]];
    }
    return arr;
  }
};

console.log(selectionSort(myArr));
