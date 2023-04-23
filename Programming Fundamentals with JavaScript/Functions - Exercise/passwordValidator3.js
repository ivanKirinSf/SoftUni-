function passwordValidator(string){

    let length = checkLength(string);
    let digitsAndLetters = checkDigLet(string);
    let digits = checkDigits(string);
    
    if(length == true && digitsAndLetters == true && digits == true){
        console.log("Password is valid")
        
    } 

   
    


    
    
    //4. check for valid pass

    function checkLength(text){
        let isValid = false;
        if(text.length >= 6 && text.length <= 10){
            isValid = true
            return isValid;
        }else{
            console.log("Password must be between 6 and 10 characters")
            
        }


    }

    function checkDigLet(text){
        let isValid = false;
        for(let i = 0; i<text.length; i++ ){
            let temp = text[i];
            let num = temp.charCodeAt(0);

            if(num >= 48 && num <= 57){
                isValid = true;
                
            }else if(num >= 65 && num <= 90){
                isValid = true;
                
            }else if(num >= 97 && num <= 122){
                isValid = true;
                
            }else{
                

                return console.log("Password must consist only of letters and digits")
                
            } 

        }

        ///if(isValid == true){
            return isValid;
        ///}
    }

    function checkDigits(text){
        let isValid = false;
        
        let digits = 0;
        
        index = 0;
        while(index < text.length){

            let temp = Number(text[index]);
            if(temp > Number.MIN_SAFE_INTEGER && temp < Number.MAX_SAFE_INTEGER){
                digits += 1
            }
            

            index++;


        }

        if(digits >= 2){
            isValid = true;
            return isValid;
        } else {

            console.log("Password must have at least 2 digits");
            
        }
    }



}

passwordValidator('logIn')
