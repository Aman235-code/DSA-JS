// bubble sort
// let arr = [10, 5, 1, 12, 3];
// let n = arr.length;
// for (i = 0; i < n - 1; i++) {
//   for (j = 0; j < n - 1 - i; j++) {
//     if (arr[j] > arr[j + 1]) {
//       let tmp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = tmp;
//     }
//   }
// }

// console.log(arr);

// selection sort
// let arr = [10, 5, 1, 12, 3];
// let n = arr.length;
// for (i = 0; i < n - 1; i++) {
//   let minI = i;
//   for (j = i + 1; j < n; j++) {
//     if (arr[minI] > arr[j]) {
//       minI = j;
//     }
//   }
//   if (minI != i) {
//     let tmp = arr[minI];
//     arr[minI] = arr[i];
//     arr[i] = tmp;
//   }
// }

// console.log(arr);

// insertion sort
let arr = [10, 5, 1, 12, 3];
let n = arr.length;
for (i = 1; i < n; i++) {
  let key = arr[i];
  let j = i - 1;
  while (j >= 0 && arr[j] > key) {
    arr[j + 1] = arr[j];
    j--;
  }
  arr[j + 1] = key;
}

console.log(arr);
