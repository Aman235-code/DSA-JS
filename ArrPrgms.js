// left rotation of array by 1 element
// let arr = [1, 2, 3, 4, 5];
// let cop = arr[0];
// for (var i = 0; i < arr.length - 1; i++) {
//   arr[i] = arr[i + 1];
// }
// var len = arr.length;
// arr[len - 1] = cop;
// console.log(arr);

// left rotation of array by k element
// let arr = [1, 2, 3, 4, 5];
// let k = 2;
// k = k % arr.length;

// for (let j = 0; j < k; j++) {
//   let cop = arr[0];
//   for (let i = 0; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr[arr.length - 1] = cop;
// }

// let temp = new Array(arr.length);
// for (let i = 0; i < arr.length; i++) {
//   temp[i] = arr[(i + k) % arr.length];
// }
// console.log(temp);

// 0+2%5 = 2
// 1+2%5 = 3
// 2+2%5 = 4
// 3+2%5 = 0
// 4+2%5 = 1

// function reverse(i, j) {
//   while (i < j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
//   }
// }

// reverse(0, k - 1);
// reverse(k, arr.length - 1);
// reverse(0, arr.length - 1);

// console.log(arr);

// dup from sorted array

// merge 2 sorted arr
// let arr1 = [2, 5, 6];
// let arr2 = [1, 3, 4, 8];
// let mrge = new Array(arr1.length + arr2.length);
// let i = (j = k = 0);

// while (i < arr1.length && j < arr2.length) {
//   if (arr1[i] < arr2[j]) {
//     mrge[k] = arr1[i];
//     i++;
//     k++;
//   } else {
//     mrge[k] = arr2[j];
//     j++;
//     k++;
//   }
// }

// while (j < arr2.length) {
//   mrge[k] = arr2[j];
//   j++;
//   k++;
// }

// while (i < arr1.length) {
//   mrge[k] = arr2[i];
//   i++;
//   k++;
// }
// console.log(mrge);

// let arr = [7, 1, 5, 3, 6, 4];
// let maxProfit = 0;

// let min = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }
//   let profit = arr[i] - min;
//   maxProfit = Math.max(maxProfit, profit);
// }

// console.log(maxProfit);

// let arr = [1,1,0,1,2,0,1,0,2,1,1]
// let i=j=0, k=arr.length-1;

// while(i<k){
//     if(arr[i] == 0){
//         let tmp = arr[i];
//         arr[j] = arr[i];
//         arr[i] = tmp;
//         i++;
//         j++;
//     }
//     else if(arr[i] == 2){
//         let tmp = arr[i];

//         arr[k] = tmp;
//     }
//     else{
//         i++;
//     }
// }

// 1,1,0,1,2,0,1,0,2,1,1
// i                   k
// j

// op ->
// 0,0,0,1,1,1,1,1,1,2,2

// 1,1,0,1,2,0,1,0,2,1,1
//     i               k
// j

// i==0 f continue i++
// else swap i with j and j++, i++

// 0,1,1,1,2,0,1,0,2,1,1
//         i           k
//   j

// i==2 swap k with i k--,i++

// 0,1,1,1,1,0,1,0,2,1,2
//           i       k
//   j

// 0,0,0,1,1,1,1,1,2,1,2
//                 i k
//       j

// let max = -Infinity;
// let sum = 0;
// for (let i = 0; i < nums.length; i++) {
//   sum += nums[i];
//   max = Math.max(sum, max);
//   if (sum < 0) {
//     sum = 0;
//   }
// }
// return max;

// moore's voting algo

// let ans = nums[0]
// let cou = 1;
// for(let i=1;i<nums.length;i++){
//     if(cou==0){
//         ans = nums[i];
//         cou=1
//     }
//     else if(ans == nums[i]){
//         cou+=1;
//     }
//     else{
//         count--;
//     }
// }
// return ans

// rain water
// let left = new Array(height.length);
// let right = new Array(height.length);
// let maxLeft = height[0];
// let maxRight = height[height.length - 1];
// left[0] = maxLeft;
// right[right.length - 1] = maxRight;
// for (let i = 1; i < height.length; i++) {
//   maxLeft = Math.max(height[i], maxLeft);
//   left[i] = maxLeft;
// }

// for (let i = height.length - 2; i >= 0; i--) {
//   maxRight = Math.max(height[i], maxRight);
//   right[i] = maxRight;
// }

// let ans = 0;
// for (let i = 0; i < height.length; i++) {
//   ans += Math.min(left[i] - right[i]) - height[i];
// }
// return ans;
