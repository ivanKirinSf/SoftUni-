function bombNumbers(arr1, arr2){

    let arr = arr1;

    let bomb = arr2
    
    let bombNum = bomb[0];
    
    let bombPower = bomb[1];

    let sum = 0;

     
    let index = 0;
    while(index < arr.length){
        let temp = arr[index];
        

        if(temp === bombNum){
            let indexEl = arr.indexOf(bombNum);
            let num = 0;
            num = indexEl-bombPower;
            if(num < 0){
                let numbers = bombPower*2+num+1
                num = 0;
                arr.splice(num,numbers)
            }else{
                arr.splice(num,1+bombPower*2);
            }
            
            index = indexEl-bombPower-1;
        }

        

        index++;

    }
    
    //console.log(arr)

    index = 0;
    while(index < arr.length){

        let temp = arr[index];

        sum += temp;

        index++;

    }

    console.log(sum)

}

bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]
                                
    )
