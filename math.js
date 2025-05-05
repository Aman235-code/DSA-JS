// gcd
// let a = 32,
//   b = 20;

// while (a != b) {
//   if (a > b) a = a - b;
//   else b = b - a;
// }
// console.log(a);

// let a = 32;
// let b = 20;

// function gcd(a, b) {
//   if (a == b) return a;
//   if (a > b) return gcd(a - b, b);
//   return gcd(a, b - a);
// }

// console.log(gcd(32, 20));

// function gcd(a, b) {
//   if (b == 0) return a;
//   return gcd(b, a % b);
// }
// console.log(gcd(16, 14));

// factors
// let n = 100;
// for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
//   if (n % i == 0) {
//     console.log(i);
//   }
// }
// for (let i = Math.floor(Math.sqrt(n)); i >= 1; i--) {
//   if (n % i == 0) {
//     if (n / i != i) {
//       console.log(n / i);
//     }
//   }
// }

// count of primes
// let n = 100;
// let arr = new Array(n + 1).fill(true);
// for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
//   if (arr[i]) {
//     for (let j = i * i; j <= n; j += i) {
//       arr[j] = false;
//     }
//   }
// }
// for (let i = 2; i < arr.length; i++) {
//   if (arr[i]) {
//     console.log(i);
//   }
// }

function tmp(x, n) {
  if (n == 0) return 1;
  let ans = tmp(x, parseInt(n / 2));
  if (n % 2 == 0) return ans * ans;
  return ans * ans * x;
}

function powe(x, n) {
  if (n == 0) return 1;
  let ans = tmp(x, n);
  return n < 0 ? 1 / ans : ans;
}

console.log(powe(2, 10));

// console.log(1 / 2);
