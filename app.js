let a = 12;
let b = "13";

console.log(typeof (a + b)); // string
let c = 20;
console.log("sum is " + a + c); // 1220
console.log("sum is " + (a + c)); // 32

// type coercion
// console.log("1" + 1); // 11
// console.log("1" - 1); // 0
// console.log("1" * 1); // 1
// console.log("1" / 1); // 1

// type casting
// let age = Number(prompt("What is your age?"));
// console.log(typeof age);

// swapping
let d = 10;
let e = 20;
// console.log(d, e);

// one
let f;
f = d;
d = e;
e = f;
// console.log(d, e);

// second
d = d + e; // d = 30
e = d - e; // e = 10
d = d - e; // d = 20
// console.log(d, e);

// third
[d, e] = [e, d];
// console.log(d, e);

let i = 112;
let g = 22;
// console.log(Math.floor(i / g));
// console.log(i % g);

let h = 4568;
// console.log(h % 10);
// console.log(Math.floor(h / 10));

// console.log(10 > 5);
// console.log(10 < 5);
// console.log(10 >= 10);
// console.log(10 !== 10);
// //  = -> assignment operator
// console.log(10 == 10); // comparision
// console.log(10 == "10"); // true
// console.log(10 === 10); // true
// console.log(10 === "10"); // false

// unary operator -> ++ , --

console.log(Math.round(10.5)); // 11, <0.5 -> floor, >= 0.5 --> ceil
console.log(Math.ceil(10.1));
console.log(Math.floor(10.9));
console.log(Math.trunc(18.98)); // removes after point
console.log(Math.pow(2, 3));
console.log(Math.sqrt(16));
console.log(Math.abs(-70));
console.log(Math.max(45, 78, 566));
console.log(Math.min(45, 78, 566));
console.log(Math.random() * 9000 + 1000); // 0 - 1
let j = 67.90877;
console.log(j.toFixed(2));
