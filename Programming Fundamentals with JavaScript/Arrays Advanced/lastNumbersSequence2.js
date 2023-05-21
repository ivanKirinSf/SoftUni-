function lastNumbersSequence(n, k){
    
    let arr = [];
    let firstElement = 1;

    arr.push(firstElement);

    let sum = 0;

    //console.log(arr)

    for(let i = 0; i < n-1; i++){
        let tempI = Number(arr[i]);

        for(let j = i-(k-1); j<=i; j++){
            let tempJ = Number(arr[j]);

            if(j >= 0){

            sum += tempJ;

            }
            
        }

        if(sum > 0){
            arr.push(sum); 
        }
        
        if(sum == 0){
            arr.push(tempI)
        }

        sum = 0;
        

    }

    return console.log(arr.join(" "))

}

lastNumbersSequence(6, 3)
