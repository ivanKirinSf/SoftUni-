function processOddNumbers(arr){
    //1. find the odd indexes
    //2. double the amount
    //3. print them reversed

    let oddNums = odd(arr);
    let doubleAmount = double(oddNums);
    let result = reverse(doubleAmount);

    return result

    function odd(array){

        let oddArr = []

        for(let i = 0; i<array.length; i++){
            let temp = array[i];

            if(i % 2 !== 0){
                let oddN = temp;
                oddArr.push(temp);
            }
        }

        return oddArr

    }

    function double(input){

        let doubledArr = [];

        for(let i = 0; i < input.length; i++){
            let temp = Number(input[i]);
            let amount = temp*2;

            doubledArr.push(amount);


        }

       return doubledArr
    }

    function reverse(arr){

        let reversedArr = [];

        for(let i = 0; i< arr.length; i++){

            let temp = arr[i];

            reversedArr.unshift(temp)
        }

        return reversedArr.join(" ")
    }



    



}

processOddNumbers([3, 0, 10, 4, 7, 3])
