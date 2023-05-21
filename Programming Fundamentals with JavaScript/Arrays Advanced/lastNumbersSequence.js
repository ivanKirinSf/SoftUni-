function lastNumbersSequence(n, k){

    firstElement = 1;
    
    let arr = [];

    arr.push(firstElement)

    let sum = 0;

    index = 0;
    while(index <= n-1){
        let temp = Number(arr[index]);
       
        
        for(let i = index-k; i < index; i++ ){
            let tempI = Number(arr[i]);
            if(i >= 0){
                sum += tempI;
            }
            
        }
        
        if(sum <= 0){
            arr.push(temp)  
        }else if(sum > 0){
            sum+= temp;
            arr.push(sum)
        }
        

        index++;
        
    }

    console.log(arr)

}

lastNumbersSequence(6, 3)
