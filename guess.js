let rendom = Math.floor(Math.random() * 100) + 1;
let guess = -1;
while (guess !== rendom) {
  guess = prompt("Enter a number: ");
  if (guess === null) {
    console.log("quit");
    break;
  } else {
    guess = Number(guess);
    console.log(guess);
    if (isNaN(guess) || guess < 1 || guess > 100) {
      console.log("try again");
      continue;
    } else {
      if (guess > rendom) {
        console.log("too high");
      } else if (guess < rendom) {
        console.log("too low");
      } else {
        console.log("correct ", guess);
      }
    }
  }
}
