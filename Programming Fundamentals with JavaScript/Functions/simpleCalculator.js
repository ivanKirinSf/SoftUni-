function simpleCalculator(numOne, numTwo, operator){

    let sum = 0;

    switch(operator){
        case "multiply" : sum =  numOne*numTwo;
        break;        
        case "divide": sum =  numOne/numTwo;
        break;
        case "add": sum =  numOne + numTwo;
        break;
        case "subtract": sum =  numOne - numTwo;
        break;

        
    }

    return sum;

    

}
