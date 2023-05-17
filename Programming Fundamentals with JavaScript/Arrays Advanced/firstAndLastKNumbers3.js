function lastKNumbersSequence(n, k){

    let arr = [];

    arr.push(1)

    let sumNums = solve(arr);

    return sumNums

    

    function solve(arr){

        let sum = 0;
        let nan = 0;

        for(let i = 0; i<n-1; i++){


            let temp = Number(arr[i]);

            

           

            sum += temp;

            for(let j = i-(k-1); j<i; j++){

                let tempJ = Number(arr[j]);

                              

                if(tempJ >= 0){
                    sum += tempJ
                }else{

                    sum += 0;

                }
            }

            
           

            if(sum >0){
                arr.push(sum)
            }
            

            
            sum = 0;

            

            
            
        }

        return arr.join(" ")
       

    }

}

lastKNumbersSequence(8, 2)
