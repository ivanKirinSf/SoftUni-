function negativeOrPositiveNumbers(arr){

    let newArr = [];

    let negNum = negative(arr);
    let posNum = positive(arr);
    let printArr = print(newArr);

    return printArr

    function negative(input){
        for(let i = 0; i<input.length; i++){
            let temp = input[i];

            if(temp < 0){

                newArr.unshift(temp)

            }
            
        }
        
    }

    function positive(input){
        for(let i = 0; i<input.length; i++){
            let temp = input[i];
            if(temp >= 0){

              newArr.push(temp);

            }
        }

        return newArr

    }

    function print(arr){

        console.log(newArr.join("\n"))

    }





}
