function factorialDivision(n1, n2){

    let fact1 = factorial(n1);
    let fact2 = factorial(n2);
    let num = divide(fact1, fact2);
    let res = print(num);

    return res;


    function factorial(n){

        let sum = n;

        index = n-1;
        while(index > 0){

            let temp = index;

            sum *= temp

        index --      
        
    }

        
        return sum;
    }


    function divide(a,b){
        let sum = a / b;

        return sum;
    }

    function print(n){

        return console.log(n.toFixed(2))
    }

    //1. factorial n1
    //2. factorial n2
    //3. divide
    //4. print result

}

factorialDivision(6,2)
