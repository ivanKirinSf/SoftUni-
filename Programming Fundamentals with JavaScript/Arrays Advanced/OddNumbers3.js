function processOddNumbers(arr){

let reversedArr = reverse(arr);
let doubledArr = double(reversedArr);

return doubledArr

    function reverse(arr){

        let reversed = []

        index = arr.length-1
        while(index >= 0){

            let temp = Number(arr[index])

            if(index % 2 !== 0){
                reversed.push(temp) 
            }    
    
    
            index --;    
        }
        return reversed       
    }

    function double(arr){

        let doubleArr = []

        index = 0;
        while(index < arr.length){

            let temp = arr[index];
            let doubleNum = temp*2;

            doubleArr.push(doubleNum) 

            index++;

        }
        return doubleArr.join(" ")
    }    
}

processOddNumbers([10, 15, 20, 25])
