const defaultresult = 0;
let currentResult = defaultresult;

function add(num1, num2) {
  const result = num1 + num2;
  return result;
}
currentResult = add(3, 4);
// currentResult = ((currentResult + 10) * 3) / 2 - 1;
let calculationDescription = '(0+10) * 3/2-1';
// let calculationDescriptionLiteral = `(${defaultresult}+10) * 3/2-1`;
// let errroMessage = ' An Error Occured';

outputResult(currentResult, calculationDescription);
