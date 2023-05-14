function negativeOrPositiveNumbers(arr){

    let possitiveOrNegative = solve(arr);

    let result = possitiveOrNegative;

    return console.log(result)

    function solve(arr){

        let newArr = [];

        index = 0;
        while(index < arr.length){
            let temp = arr[index];

            if(temp < 0){
                newArr.unshift(temp);
            }else {
                newArr.push(temp)
            }

            

            index++

            
        }

        return newArr.join('\n');

        
        
        

        
    }
    
    


}

negativeOrPositiveNumbers(['3', '-2', '0', '-1'])
