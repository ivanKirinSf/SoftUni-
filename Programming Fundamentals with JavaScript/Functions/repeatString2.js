function repeatString(string, n){
   
   
 let newString = copyRepeatString(string, n);
 return newString;
  
 function copyRepeatString(string, n){
   
   let text = ""
   index = 0;
   while(index < n){

      text += string;

      

      index++
   }

   return text

 }

  

   



}

repeatString("abc", 3)
