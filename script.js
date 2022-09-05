function pyramid(string, iterations) {
  let newString = string;
  for (let i = 1; i <= iterations; i++) {
    console.log(newString);
    newString += string;
  }
  return;
}
