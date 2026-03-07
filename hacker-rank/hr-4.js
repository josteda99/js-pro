const acceptedParameters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
function isAlphabeticPalindrome(code) {
  const str = code
    .toLowerCase()
    .split("")
    .filter((x) => acceptedParameters.includes(x));

  if (str.length === 1) return 1;

  for (let i = 0; i < str.length / 2; i++) {
    const first = str.shift();
    const last = str.pop();

    if (first !== last) return 0;
  }

  return 1;
}

// const code = "A1b2B!a";
// const code = "Z";
const code = "abcxcba";

const result = isAlphabeticPalindrome(code);
console.log(result);
