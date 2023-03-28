function addAndSubtract(a, b, c){

  let sumTwoNumbers = (a,b) => a + b;
  let subtractTwoNumber = (a, b) => a - b;

  let sum = sumTwoNumbers(a,b);
  let subtract = subtractTwoNumber(sum, c);

  return subtract;



}

console.log(addAndSubtract(1, 17, 30))
