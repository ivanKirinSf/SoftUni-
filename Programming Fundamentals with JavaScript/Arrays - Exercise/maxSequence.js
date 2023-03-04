function мaxSequence(arr){

    let newArr = [];
    let maxArr = [];

    for(let i = 0; i<arr.length; i++){
        let temp = arr[i];

        index = i+1
        while(index < arr.length){
            let tempI = arr[index];

            if(temp === tempI){
                newArr.push(temp);
                
                
                if(tempI === arr[i-1]){
                newArr.push(arr[i-1])
                }///else if(temp === arr[i-1]){
                   /// newArr.push(temp);
                ///}
                
            }else{
                //newArr = [];

                
                break;
            }

            if(newArr.length > maxArr.length){
                maxArr = newArr;
                newArr = [];
                
            }

            


            index++;
        }

        

        
    }

    console.log(maxArr)

    

}

мaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
