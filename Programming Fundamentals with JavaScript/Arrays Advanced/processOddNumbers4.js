function processOddNumbers(arr){

    // check for odd index
    // double them
    // print reversed

    let num = arr.length

    let oddIndex = odd(arr);
    let doubleNum = double(oddIndex, num);
    let reversedNum = reverse(doubleNum);

    return reversedNum
    

    function odd(input){
        
        for(let i = 0; i<input.length-1; i++){
            let temp = Number(input[i]);
            
            index = i
            while(index % 2 !== 0){

                input.push(temp)

                index++;

            }
        }

        return input
    }

    function double(input, n){
        input.splice(0, n)

        index = 0;
        while(index < input.length/2){
            let temp = Number(arr[index]);

            let doubleTemp = temp*2;

            input.push(doubleTemp);





            index++;
        }

        return input
    }

    function reverse(input){

        
        input.splice(0, input.length/2);

        
        


        index = input.length-1
        while(index >= 0){

            let temp = Number(input[index]);

            input.push(temp);
            




            index --;

       }

       input.splice(0, arr.length/2);

       return input.join(" ")

       
    }

}

processOddNumbers([10, 15, 20, 25])
