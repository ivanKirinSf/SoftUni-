function pascalCaseSplitter(str){

    let word = "";   
    
    let arr = [];

   for(let i = 0; i < str.length; i++){

       let ch = str[i];

       let chCode = ch.charCodeAt();

       if(chCode >= 65 && chCode <= 90){

        word += ch;

        for(let k = i+1; k < str.length; k++){

            let chK = str[k];

            let chCodeK = chK.charCodeAt();

            if(chCodeK >= 97 && chCodeK <= 122){

                word += chK;                

            }

            if(chCodeK < 97 || chCodeK > 122){

                i = k-1;

                break;
            }
            
        }       

   }   

   if(word.length > 0){

    arr.push(word)

    word = "";

   }
   
}

console.log(arr.join(", "))

}

pascalCaseSplitter('ThisIsSoAnnoyingToDo')
