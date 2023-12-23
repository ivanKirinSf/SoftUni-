function echoType(input){

    let typeOfInput = typeof input;

    switch(typeOfInput){
        case "string":
            case "number":

                console.log(typeOfInput);
                console.log(input);      
                
            break;
            default :

                console.log(typeOfInput)
                console.log('Parameter is not suitable for printing')            

    }    
 
}

echoType(null)
