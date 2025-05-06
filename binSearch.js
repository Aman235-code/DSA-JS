let arr = [2, 5, 8, 9, 12, 18, 20, 25, 67, 101, 125];

function binarySearch(arr, first, last, target) {
  while (first <= last) {
    let mid = Math.floor((first + last) / 2);
    if (arr[mid] == target) return mid;
    else if (arr[mid] > target) last = mid - 1;
    else first = mid + 1;
  }
  return -1;
}

let index = binarySearch(arr, 0, arr.length - 1, 69);
if (index == -1) console.log("Not found");
else console.log("Found at ", index);
