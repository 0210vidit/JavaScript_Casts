const defaultresult = 0;
let currentResult = defaultresult;
currentResult = ((currentResult + 10) * 3) / 2 - 1;
let calculationDescription = '(0+10) * 3/2-1';
let calculationDescriptionLiteral = `(${defaultresult}+10) * 3/2-1`;

outputResult(currentResult, calculationDescription);
