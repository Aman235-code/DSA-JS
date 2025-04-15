// console.log("hello");
// console.log("world")

// process.stdout.write("Hello ");
// process.stdout.write("World");

// let prompt = require("prompt-sync")();

// let a = prompt("nter a Number ");

// process.stdout.write(a);

let prompt = require("prompt-sync")();
let n = Number(prompt("Enter a Number "));
// for (let index = 0; index < n; index++) {
//   for (let j = 0; j <= index; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// for (let index = n; index >= 1; index--) {
//   for (let j = 1; j <= index; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// for (let index = n; index >= 1; index--) {
//   for (let j = 1; j <= index - 1; j++) {
//     process.stdout.write(" ");
//   }
//   for (let j = index; j <= n; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// for (let index = 1; index <= n; index++) {
//   for (let j = 1; j <= n; j++) {
//     if (index == j || index + j == n + 1) {
//       process.stdout.write("* ");
//     } else {
//       process.stdout.write("  ");
//     }
//   }

//   console.log();
// }

for (let index = 1; index <= n; index++) {
  for (let j = 1; j <= 2 * n - 1; j++) {
    if (index == j || index + j == 2 * n) {
      process.stdout.write("* ");
    } else {
      process.stdout.write("  ");
    }
  }

  console.log();
}
