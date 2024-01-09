function processOddNumbers(arr){

    let arrNew = [];


    let doubleOdd = double(arr);

    let reversed = reverse(doubleOdd);

    console.log(reversed.join(" "))
    
    

    function double(input){

        for(let i = 0; i<input.length; i++){
            if(i % 2 !== 0){
                let temp = Number(input[i]);
                let res = temp*2;
                arrNew.push(res);
            }
        } 

        return arrNew

    }

    function reverse(input){
        
        let rev = input;

        let num = input.length;

        let result = [];

        for(let i = num-1; i >= 0; i--){
            let temp = rev[i];

            result.push(temp)

        }

        return result
    }
    
    



}

processOddNumbers([10, 15, 20, 25])
