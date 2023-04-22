function passwordValidator(pass){


    let text = characters(pass);
    let symbols = lettersAndDigits(pass);
    let digits = twoDigits(pass);
    

    if(text == true && symbols == true && digits == true){
        console.log("Password is valid");
    }
    if(text != true){
        console.log(text);
    }
    if(symbols != true){
        console.log(symbols);

    }
    if(digits != true){
        console.log(digits);

    }


    function characters(a){
    if(a.length >= 6 && a.length <= 10){
        return true
    }else {
        return("Password must be between 6 and 10 characters");
    }
}

    function lettersAndDigits(a){

        isValid = false

        for(let i = 0; i< a.length; i++){

            let temp = a[i];
            let num = temp.charCodeAt(0);

            if(num >= 65 && num <= 90){
                isValid = true;
            }else if(num >= 97 && num <= 122){
                isValid = true;
            } else if(num >= 48 && num <= 57) {

                isValid = true;

            } 

            else {
                ///console.log("Password must consist only of letters and digits")
                return ("Password must consist only of letters and digits");
            }

            

        }

        if(isValid = true){
            return true
        }
    }

    function twoDigits(text){

        let digits = 0;

        for(let i = 0; i< text.length; i++){
            let temp = text[i];
            let symbol = temp.charCodeAt(0);


            if(symbol >= 48 && symbol <= 57  ){
                digits += 1;
            }

            
        }

        if(digits >= 2){
            return true;
        } else {
            return ("Password must have at least 2 digits")
        }

    }

    



}

passwordValidator('Pa$s$s')
