// part 4
let arr = [];
arr.push(100);
arr.push(40);
arr.push(30);
arr.push(20);
arr.push(false);
arr.push("aman");
// console.log(arr[1]);
// console.log(arr);
arr.pop();
// console.log(arr);

arr[0] = 10;
arr[1] = 20;
arr[2] = 30;
arr[7] = 40;
// console.log(arr);

let arrs = new Array(3);
arrs[0] = 10;
arrs[1] = 20;
arrs[2] = 30;
arrs[3] = 40;
arrs[10] = 150;

// console.log(arrs);

let arr2 = new Array(3);
arr2.push(100);
// console.log(arr2);

// let arrLoop = new Array(5);
// for (let index = 0; index < arrLoop.length; index++) {
//   arrLoop[index] = Number(prompt("Enter a value: "));
// }
// console.log(arrLoop);

// let arrSum = [10, 20, 30, 40, 50];
// let sum = 0;
// for (let i = 0; i < arrSum.length; i++) {
//   sum += arrSum[i];
// }
// console.log(sum);

// let arrMax = [2, 56, 43, 120, 98, 65, 45, 78, 90, 100];
// let max = arrMax[0];
// for (let i = 1; i < arrMax.length; i++) {
//   if (max < arrMax[i]) {
//     max = arrMax[i];
//   }
// }
// console.log(max);

// second max
let arrSec = [10, 30, 56, 43, 2, 64, 49, 60];

let max = Math.max(arrSec[0], arrSec[1]);
let smax = Math.min(arrSec[0], arrSec[1]);
for (let i = 2; i < arrSec.length; i++) {
  if (arrSec[i] > max) {
    smax = max;
    max = arrSec[i];
  } else if (arrSec[i] > smax && max != arrSec[i]) {
    smax = arrSec[i];
  }
}

// console.log(smax);

// reverse
// let rev1 = [10, 20, 30, 40, 50];
// let temp = new Array(rev1.length);

// let j = 0;
// for (let i = rev1.length - 1; i >= 0; i--) {
//   temp[j] = rev1[i];
//   j++;
// }
// console.log(temp);

// let rev2 = [10, 20, 30, 40, 50, 60];
// let i = 0;
// let k = rev2.length - 1;
// while (i < k) {
//   rev2[i] = rev2[i] + rev2[k];
//   rev2[k] = rev2[i] - rev2[k];
//   rev2[i] = rev2[i] - rev2[k];
//   i++;
//   k--;
// }
// console.log(rev2);

let arrZ = [1, 1, 0, 1, 0, 1, 1, 0];
let i = 0;
let j = 0;
while (i < arrZ.length) {
  //   if (arrZ[i] === 1) {
  //     i++;
  //   } else {
  //     let temp = arrZ[i];
  //     arrZ[i] = arrZ[j];
  //     arrZ[j] = temp;
  //     j++;
  //   }

  if (arrZ[i] === 0) {
    let temp = arrZ[i];
    arrZ[i] = arrZ[j];
    arrZ[j] = temp;
    j++;
  } else {
    i++;
  }
}

console.log(arrZ);
