function maxSequence(arr){

    let newArr = [];
    let maxArr = [];

    for(let i = 0; i<arr.length; i++){
        let temp1 = arr[i];
        
        index = i;
        while(temp1 === arr[index]){
            let temp2 = arr[index]

            if(temp1 === temp2){
                newArr.push(temp1);

                
            }

            if(newArr.length > maxArr.length){
                maxArr = newArr;
            }

            index ++;


        }

        newArr = [];







    }

    console.log(maxArr.join(" "))

 
}

maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3])
