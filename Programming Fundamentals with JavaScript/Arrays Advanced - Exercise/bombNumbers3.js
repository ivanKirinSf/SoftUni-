function bombNumbers(arr1, arr2){

    let arr= arr1;
    let bombNum = Number(arr2[0]);
    let power = Number(arr2[1]);
    let start = 0;
    let counter = 0;

    index = 0;
    while(index < arr.length){

        let temp = Number(arr[index]);

        if(temp === bombNum){

            let indexNum = Number(arr.indexOf(temp));
    
            if((indexNum - power) >= 0 ){
    
                start = indexNum - power;
                counter = power*2+1;
                
                index = start-1;
    
            }else{
                start = 0;
                counter = (indexNum-power) + (power*2+1);
                
                index = start
            }

            arr.splice(start,counter);
                     
    
            //console.log(index)
    
        }

        index++

    }

    let sum = 0;

    index = 0;
    while(index < arr.length){

        let num = arr.shift()

        sum += num;

        index -= 1;

        index++
    }
    
    console.log(sum)

}
