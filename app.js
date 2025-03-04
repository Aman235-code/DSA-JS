// // part 1
// let a = 12;
// let b = "13";

// console.log(typeof (a + b)); // string
// let c = 20;
// console.log("sum is " + a + c); // 1220
// console.log("sum is " + (a + c)); // 32

// // type coercion
// // console.log("1" + 1); // 11
// // console.log("1" - 1); // 0
// // console.log("1" * 1); // 1
// // console.log("1" / 1); // 1

// // type casting
// // let age = Number(prompt("What is your age?"));
// // console.log(typeof age);

// // swapping
// let d = 10;
// let e = 20;
// // console.log(d, e);

// // one
// let f;
// f = d;
// d = e;
// e = f;
// // console.log(d, e);

// // second
// d = d + e; // d = 30
// e = d - e; // e = 10
// d = d - e; // d = 20
// // console.log(d, e);

// // third
// [d, e] = [e, d];
// // console.log(d, e);

// let i = 112;
// let g = 22;
// // console.log(Math.floor(i / g));
// // console.log(i % g);

// let h = 4568;
// // console.log(h % 10);
// // console.log(Math.floor(h / 10));

// // console.log(10 > 5);
// // console.log(10 < 5);
// // console.log(10 >= 10);
// // console.log(10 !== 10);
// // //  = -> assignment operator
// // console.log(10 == 10); // comparision
// // console.log(10 == "10"); // true
// // console.log(10 === 10); // true
// // console.log(10 === "10"); // false

// // unary operator -> ++ , --

// console.log(Math.round(10.5)); // 11, <0.5 -> floor, >= 0.5 --> ceil
// console.log(Math.ceil(10.1));
// console.log(Math.floor(10.9));
// console.log(Math.trunc(18.98)); // removes after point
// console.log(Math.pow(2, 3));
// console.log(Math.sqrt(16));
// console.log(Math.abs(-70));
// console.log(Math.max(45, 78, 566));
// console.log(Math.min(45, 78, 566));
// console.log(Math.random() * 9000 + 1000); // 0 - 1
// let j = 67.90877;
// console.log(j.toFixed(2));

// part 2
// let ans = Number(prompt("What is your age?"));
// if (isNaN(NaN)) {
//   console.log("INVALID INPUT");
// } else if (ans >= 18) {
//   console.log("You can vote");
// } else {
//   console.log("You cannot vote");
// }

// let amount = Number(prompt("What is the final amount?"));
// if (amount > 0 && amount <= 5000) {
//   console.log(amount);
// } else if (amount > 5000 && amount <= 7000) {
//   console.log(amount - Math.floor((5 * amount) / 100));
// } else if (amount > 7000 && amount <= 9000) {
//   console.log(amount - Math.floor((10 * amount) / 100));
// } else if (amount > 9000) {
//   console.log(amount - Math.floor((20 * amount) / 100));
// }

// let unit = Number(prompt("Enter electricity unit"));
// let amount = 0;
// if (unit > 400) {
//   amount = (unit - 400) * 13;
//   unit = 400;
// }
// if (unit > 200 && unit <= 400) {
//   amount += (unit - 200) * 8;
//   unit = 200;
// }
// if (unit > 100 && unit <= 200) {
//   amount += (unit - 100) * 6;
//   unit = 100;
// }
// amount += unit * 4;
// console.log(amount);

// let amount = 5001;
// if (amount >= 500) {
//   console.log("500 notes: " + Math.floor(amount / 500));
//   amount = amount % 500;
// }
// if (amount >= 200) {
//   console.log("200 notes: " + Math.floor(amount / 200));
//   amount = amount % 200;
// }
// if (amount >= 100) {
//   console.log("100 notes: " + Math.floor(amount / 100));
//   amount = amount % 100;
// }
// if (amount >= 50) {
//   console.log("50 notes: " + Math.floor(amount / 50));
//   amount = amount % 50;
// }
// if (amount >= 20) {
//   console.log("20 notes: " + Math.floor(amount / 20));
//   amount = amount % 20;
// }
// if (amount >= 10) {
//   console.log("10 notes: " + Math.floor(amount / 10));
//   amount = amount % 10;
// }
// if (amount >= 5) {
//   console.log("5 notes: " + Math.floor(amount / 5));
//   amount = amount % 5;
// }
// if (amount >= 2) {
//   console.log("2 notes: " + Math.floor(amount / 2));
//   amount = amount % 2;
// }
// if (amount === 1) {
//   console.log("1 notes: " + amount);
// }

let day = 2;
switch (day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  default:
    console.log("invalid");
    break;
}
