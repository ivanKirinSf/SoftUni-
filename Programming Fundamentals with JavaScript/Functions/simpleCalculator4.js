function simpleCalculator(num1, num2, parameter){


   if(parameter === "multiply"){
      let res = multiply(num1, num2);
      console.log(res) ;
   }else if(parameter === "divide"){
      let res = divide(num1, num2);
      console.log(res) ;
   }else if(parameter === "add"){
      let res = add(num1, num2);
      console.log(res) ;
   }else if(parameter === "subtract"){
      let res = subtract(num1, num2);
      console.log(res) ;
   }

   function multiply(num1, num2){
      let sum = (num1, num2) => num1*num2;
      return (sum(num1, num2))
   }

   function divide(num1, num2){
      let sum = (num1, num2) => num1/num2;
      return (sum(num1, num2))
   }

   function add(num1, num2){
      let sum = (num1, num2) => num1+num2;
      return (sum(num1, num2))
   }

   function subtract(num1, num2){
      let sum = (num1, num2) => num1-num2;
      return (sum(num1, num2))
   }



}
