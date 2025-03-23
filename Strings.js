let name = "Aman";
// console.log(name);

let s = "Aman";
// console.log(s[1]);

let arr = [10, 20, 30, 40];
arr.push(50);
arr[2] = 100;

// s[1] = "y";
s = s + " world";
// console.log(arr);
// console.log(s);
// console.log(s.length);
// console.log(s.slice(1, 6));
// console.log(s.slice(-1, -3));
// console.log(s.substring(2, 6));
// console.log(s.toUpperCase());
// console.log(s.concat(" great"));
// console.log("               Aman          ".trim());
// console.log(s.charAt(2));
// console.log(s.charCodeAt(2));

let nme = "madam";
// for (let index = 0; index < nme.length; index++) {
//   console.log(nme[index]);
// }

// for (let index = nme.length - 1; index >= 0; index--) {
//   console.log(nme[index]);
// }
let rev = "";

let i = 0,
  j = nme.length - 1,
  isPalindrome = true;

while (i < j) {
  if (nme.charAt(i) != nme.charAt(j)) {
    isPalindrome = false;
    break;
  }
  i++;
  j--;
}
// console.log(rev);
if (isPalindrome) {
  //   console.log("palindrome");
} else {
  //   console.log("not");
}

// toggle each character
let toggle = "AbCDeF";
let res = "";
for (let i = 0; i < toggle.length; i++) {
  //   let ch = toggle.charAt(index);
  if (toggle.charCodeAt(i) >= 65 && toggle.charCodeAt(i) <= 90) {
    res = res + String.fromCharCode(toggle.charCodeAt(i) + 32);
  } else if (toggle.charCodeAt(i) >= 97 && toggle.charCodeAt(i) <= 122) {
    res = res + String.fromCharCode(toggle.charCodeAt(i) - 32);
  }
}
// console.log(res);

// frequency of each character
let st = "abcba";
let ar = new Array(128).fill(0);

for (let i = 0; i < st.length; i++) {
  let index = st.charCodeAt(i);
  //   ar[index] = st[i];
  ar[index] = ar[index] + 1;
}

for (let index = 0; index < ar.length; index++) {
  if (ar[index] > 0) {
    console.log(String.fromCharCode(index) + ar[index]);
  }
}
