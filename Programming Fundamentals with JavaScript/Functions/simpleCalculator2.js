function simpleCalculator(numOne, numTwo, operator){

   switch(operator){
      case "multiply": multiply(numOne, numTwo);
      break;
      case "divide": divide(numOne, numTwo);
      break;
      case "add": add(numOne, numTwo);
      break;
      case "subtract": subtract(numOne, numTwo);
   }

   function multiply(numOne, numTwo){
      let sum = (numOne, numTwo) => numOne * numTwo;
      console.log(sum(numOne, numTwo));
   }
   function divide(numOne, numTwo){
      let sum = (numOne, numTwo) => numOne / numTwo;
      console.log(sum(numOne, numTwo));
   }
   function add(numOne, numTwo){
      let sum = (numOne, numTwo) => numOne + numTwo;
      console.log(sum(numOne, numTwo));
   }
   function subtract(numOne, numTwo){
      let sum = (numOne, numTwo) => numOne - numTwo;
      console.log(sum(numOne, numTwo));
   }
   

   
}
