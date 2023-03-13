function magicSum(arr, n){

    let sum = 0;
    let newArr = [];

    for(let i = 0; i<arr.length; i++){
        let temp = arr[i];
        
        index = i+1;
        while(index < arr.length){
            let temp2 = arr[index];

            sum = temp2+temp;

            if(sum === n){
               console.log(`${temp} ${temp2}`)

            }



            index++;

        }

        

    }

    

    

    

}

magicSum([1, 2, 3, 4, 5, 6],
    6)
