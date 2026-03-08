function isNonTrivialRotation(s1, s2) {
  if (s1 === s2) return 0;
  const s1a = s1.split("");
  const s2a = s2.split("");

  for (let i = 0; i < s1a.length; i++) {
    console.log(s1a, " ", s2a);
    if (s1a.toString() === s2a.toString()) return 1;
    const last = s1a.pop();
    s1a.unshift(last);
  }
  return 0;
}

// const s1 = "abcde";
// const s2 = "cdeab";

const s1 = "a";
const s2 = "a";

const result = isNonTrivialRotation(s1, s2);
console.log(result);
