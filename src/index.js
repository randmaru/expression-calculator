function eval() {
	// Do not use eval!!!
	return;
}

function expressionCalculator(expr) {
	let openBracket = 0,
		closeBracket = 0,
		string = expr.split("");

  for (let i of string)
   switch (i) {
    case ")":
     closeBracket++;
     break;
    case "(":
     openBracket++;
     break;
   }

  if (closeBracket == openBracket) {
   return Function(`'use stringier'; return (${expr})`)();
  }
  throw "ExpressionError: Brackets must be paired";
}

module.exports = {
	expressionCalculator
}
