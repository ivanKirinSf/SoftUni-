function addAndSubtract(num1, num2, num3){

    let res = sum(num1, num2);

    let result = subtract(res, num3);

    
    return result;

    function sum(a, b){
        let sum = 0;
        if(b === undefined ){
            a = 0;
        }

        sum = a + b;

        return sum
    }

    function subtract(c,d){
        let sub = 0;
        if(d === undefined ){
            d = 0;
        }

        sub = c - d;

        return sub

    }

}
