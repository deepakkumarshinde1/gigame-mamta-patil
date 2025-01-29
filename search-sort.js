// search
// linear search
// def: search for a value in a list by checking each element in the list from start to end.
// time complexity: O(n)
function linear(arr, search) {
  let found = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === search) {
      found = true;
      console.log("Found");
      break;
    }
  }
  if (!found) {
    console.log("Not Found");
  }
}
linear([10, 8, 9, 4, 6, 3, 2, 6, 1, 5], 9);

// binary search
// def: search for a value in a list by dividing the list into two parts and checking the middle element.
// time complexity: O(log n)
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let search = 2;
function binary(arr, search) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2); // 4.5 => 4
    console.log(left, right, mid);
    if (arr[mid] === search) {
      return 1;
    } else if (arr[mid] < search) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
console.log(binary(array, search));
// sort
function bubbule() {
  // bubble sort
  // def: sort a list by comparing adjacent elements and swapping them if they are in the wrong order.
  let arr = [10, 8, 9, 4, 6, 3, 2, 6, 1, 5];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      // j = 0
      // after 1st loop array will be => [8,  9,  4, 6, 3, 2, 6, 1, 5, 10]

      // j= 1 , i = 1
      // after 2nd loop array will be => [8, 4, 6, 3, 2, 6, 1, 5, 9, 10]

      // j = 2, i = 2
      // after 3rd loop array will be => [4, 6, 3, 2, 6, 1, 5, 8, 9, 10]

      // j = 3, i = 3
      // after 4th loop array will be => [4, 3, 2, 6, 1, 5, 6, 8, 9, 10]

      // j = 4, i = 4
      // after 5th loop array will be => [3, 2, 4, 1, 5, 6, 6, 8, 9, 10]

      // j = 5, i = 5
      // after 6th loop array will be => [2, 3, 1, 4, 5, 6, 6, 8, 9, 10]
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

// insertion sort
// def: sort a list by moving elements one by one to their correct position.
let arr1 = [10, 8, 9, 4, 6, 3, 2, 6, 1, 5];
let n = arr1.length;
for (let i = 1; i < n; i++) {
  let key = arr1[i]; // if i = 2 => 9
  let j = i - 1; // if i = 2 => 1
  while (j >= 0 && arr1[j] > key) {
    arr1[j + 1] = arr1[j];
    j = j - 1;
  }
  arr1[j + 1] = key;
  // 1st loop => [8, 10, 9, 4, 6, 3, 2, 6, 1, 5]
  // 2nd loop => [8, 9, 10, 4, 6, 3, 2, 6, 1, 5]
  // 3rd loop => [4, 8, 9, 10, 6, 3, 2, 6, 1, 5]
}

// selection sort
// merge sort
