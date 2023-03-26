function signCheck(num1, num2, num3){

let sign = 'Positive';
let isNum1Negative = num1<0;
sign = check(sign, isNum1Negative);

let isNum2Negative = num2<0;
sign = check(sign, isNum2Negative);

let isNum3Negative = num3<0;
sign = check(sign, isNum3Negative);
console.log(sign);


function check(sign, value){
   if(value === false && sign === "Positive"){
      sign = "Positive";
   }else if(value === true && sign === "Positive"){
      sign = "Negative";
   }else if(value === true && sign === "Negative"){
      sign = "Positive";
   }else if(value === false && sign === "Negative"){
      sign = "Negative";
   }
      

   return sign;
}

}
