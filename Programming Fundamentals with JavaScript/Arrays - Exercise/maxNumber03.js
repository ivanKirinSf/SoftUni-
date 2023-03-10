function maxNumber(arr){

    let newArr = [];
    let max = 0;

    for(let i = 0; i<arr.length; i++){
        let temp = arr[i];

        if(i == arr.length-1){
            max = temp;
            newArr.push(max)
            break;
        }

        for(let k = i+1; k<arr.length; k++){
            let tempK = arr[k];

            if(temp > tempK){
                max = temp;
                
            }else{
                max = 0;
                break;
            }
        }

        if(max !== 0){
        newArr.push(max)
        }
    }

    console.log(newArr.join(" "))

}

maxNumber([1, 4, 3, 2])
