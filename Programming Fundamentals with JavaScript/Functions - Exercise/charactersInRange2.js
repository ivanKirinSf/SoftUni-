function charactersInRange(charA, charB) {

    let numFromCharA = convertFromCharToNumber(charA);
    let numFromCharB = convertFromCharToNumber(charB);

    let startIndex = smallestOfTwoNumbers(numFromCharA, numFromCharB)
    let endIndex = biggestOfTwoNumbers(numFromCharA, numFromCharB); 
    buff = ""; 

   for(let i = startIndex +1; i < endIndex; i++){
    

    buff = concatenationString(buff, convertFromNumberToChar(i));
   }


   console.log(buff);

   function concatenationString(buff, string){
    buff += string + " "
    return buff 
  }
  
  
  
  function convertFromNumberToChar(num){
  
      return String.fromCharCode(num)
  
  }
  
  function convertFromCharToNumber(char){
      return char.charCodeAt(0);
  
  }
  
  function smallestOfTwoNumbers(a, b) {
      return Math.min(a, b); 
  }
  
  function biggestOfTwoNumbers(a, b) {
      return Math.max(a, b); 
  }
}
