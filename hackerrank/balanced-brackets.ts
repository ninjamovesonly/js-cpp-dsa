function balancedBrackets(input: string): string {
  const stack: string[] = [];
  const inputArr = input.split("");

  for (let item of inputArr) {
    if (item === "{" || item === "[" || item === "(") {
      stack.push(item);
    } else {
      const itemToCompare = stack.pop();
      if (item === "}") {
        if (itemToCompare !== "{") {
          return "NO";
        }
      } else if (item === "]") {
        if (itemToCompare !== "[") {
          return "NO";
        }
      } else if (item === ")") {
        if (itemToCompare !== "(") {
          return "NO";
        }
      }
    }
  }

  return "YES";
}

console.log(balancedBrackets("{[()]}"));
console.log(balancedBrackets("{[(])}"));
console.log(balancedBrackets("{{[[(())]]}}"));
