function repeatString(string, n ){

let newString = copyRepeatString(string, n);
return newString

function copyRepeatString(string,n){

   let text = "";

   for(let i = 0; i< n; i++){

      text += string;



   }

   return text;
}



}
repeatString("abc", 3 )
