function equalSums(arr){

    let rightSum = 0;
    let leftSum = 0;
    let text = false;

    for(let i = 0; i<arr.length; i++){
        let temp = arr[i];

        if(i == 0){
            sumLeft = 0;

        }

        if(i == arr.length-1){
            sumRight = 0;
        }
        
        index = i+1;
        while(index < arr.length){
            let num = arr[index];

            rightSum += num;

            index ++;


        }
        
        l = i-1; 
        while(l >= 0){
            let numL = arr[l];

            leftSum += numL;

            l --;
        }

        if(leftSum == rightSum){

            text = true;

            console.log(i)

            sumLeft = 0;
            sumRight = 0;

        }else{
            
            leftSum = 0;
            rightSum = 0;
            continue;
        }

    }

    if(text == false){
        console.log("no")
    }



}
