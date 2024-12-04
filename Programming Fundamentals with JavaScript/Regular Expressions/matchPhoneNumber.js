function matchPhoneNumber(input){

   let pattern = /(?<!\d)[+]359([ -])2\1\d{3}\1\d{4}\b/g;

   let validNames = [];

   let number = null;

   while((number = pattern.exec(input)) !== null){

    validNames.push(number[0]);  

   }

   console.log(validNames.join(", "))
}

matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])
