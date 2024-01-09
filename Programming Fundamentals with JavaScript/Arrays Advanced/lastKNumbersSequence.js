function lastKNumbersSequence(n, k){

    let arr = [1];

    for(let i = 0; i< n-1; i++){
        let temp = Number(arr[i]);
        let sum = 0;

        for(let j = i; j> i-k; j--){
            let tempJ = Number(arr[j]);
            if(j < 0){
                tempJ = 0;
            }
            sum  += tempJ;  
        }

        arr.push(sum)
    }

    console.log(arr.join(" "));

}

lastKNumbersSequence(8, 2)
