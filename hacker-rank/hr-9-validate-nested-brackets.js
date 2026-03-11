const validBrackets = ["(", ")", "{", "}", "[", "]"];
function areBracketsProperlyMatched(code_snippet) {
  if (code_snippet.length === 0) return 1;

  const code = code_snippet.split("").filter((l) => validBrackets.includes(l));

  if (code.length === 0) return 1;

  let openCounter = 0;
  let closeCounter = 0;
  const stack = [];
  for (let c of code) {
    const item = stack[stack.length - 1];
    if (c === "(" || c === "{" || c === "[") {
      stack.push(c);
      openCounter++;
    } else {
      closeCounter++;
    }
    if (
      (c === ")" && item === "(") ||
      (c === "}" && item === "{") ||
      (c === "]" && item === "[")
    )
      stack.pop();
  }
  if (openCounter !== closeCounter) return 0;
  return stack.length === 0 ? 1 : 0;
}

// const code_snippet = "if (a[0] > b[1]) { doSomething(); }";
const code_snippet = "()()}())";
console.log(areBracketsProperlyMatched(code_snippet));
