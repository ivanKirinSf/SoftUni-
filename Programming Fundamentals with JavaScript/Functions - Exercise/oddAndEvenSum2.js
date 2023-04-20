function oddAndEvenSum(n){

    let text = toString(n);
    let even = evenNumbers(text);
    let odd = oddNumbers(text);
    let evenSum = sumEven(even);
    let oddSum = sumOdd(odd);
    let res = print(oddSum, evenSum);
    
    return res


    function toString(a){

        let num = Number(a);

        let text = num.toString() 

        //console.log(text)
        return text
        
    }


    function evenNumbers(a){

        let sumEven = [];
         

        for(let i = 0; i< a.length; i++){
            let temp = Number(a[i]);

            if(temp % 2 === 0){

                sumEven.push(temp);

                

            }

            

        }

        
            return sumEven

    }

    function oddNumbers(a){

        let sumOdd = [];
         

        for(let i = 0; i< a.length; i++){
            let temp = Number(a[i]);

            if(temp % 2 != 0){

                sumOdd.push(temp);

                

            }

            

        }
//console.log(sumOdd)
        return sumOdd;

    }

    function sumEven(a){

        let sum = 0;

        for(let i = 0; i<a.length; i++){
            let temp = a[i];

            sum += temp;

        }


        
        return sum

    }


    function sumOdd(a){

        let sum = 0;

        for(let i = 0; i<a.length; i++){
            let temp = a[i];

            sum += temp;

        }


        //console.log(sum)
        return sum

    }

    function print(a,b){
        console.log(`Odd sum = ${a}, Even sum = ${b} `)        
    }

    

}

oddAndEvenSum(1000435)
