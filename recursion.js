// function temp(n) {
//   if (n == 0) return;
//   console.log("Hello World");
//   temp(--n);
// }

// temp(5);

// 10 to 1
// function temp(n) {
//   if (n == 0) return;
//   console.log(n);
//   temp(--n);
// }

// temp(10);

// 1 to 10
// function temp(n) {
//   if (n == 0) return;
//   temp(n - 1);
//   console.log(n);
// }

// temp(10);

// sum
// function sum(n) {
//   if (n == 1) return n;
//   return n + sum(n - 1);
// }
// console.log(sum(5));

// factorial
// function sum(n) {
//   if (n == 1) return n;
//   return n * sum(n - 1);
// }
// console.log(sum(5));

// fibonacci
// 0 1 1 2 3 5 8 13 21 34
// function fib(n, first, second) {
//   if (n == 0) return;
//   let third = first + second;
//   console.log(third);
// //   first = second;
// //   second = third;
//   fib(n - 1, second, third);
// }
// let n = 10;
// console.log(0);
// console.log(1);
// fib(n - 2, 0, 1);

// fib2
// function fib(n) {
//   if (n == 0 || n == 1) return n;

//   return fib(n - 1) + fib(n - 2);
// }

// console.log(fib(7));
