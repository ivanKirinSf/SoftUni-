function bombNumbers(arr1, arr2){

    let bombNum = arr2[0];
    let powerNum = arr2[1];
    let sum = 0;
    

    for(let i = 0; i< arr1.length; i++){
       let temp = arr1[i];

       if(bombNum === temp){
       let index = Number(arr1.indexOf(bombNum));
       let start = index - powerNum;
       let end = 0;
       if( start < 0 ){

        end = index+1; 
        start = 0;
        arr1.splice(start, end)

       } else {
        end = powerNum + 1; 
        arr1.splice(start, end)
       }
       //console.log(arr1)
       let start2 = index-powerNum;
       if(start2 < 0){
        start2 = 0;
       }
       let end2 = powerNum;
       if(end2 > arr1.length){
        end2 = arr1.length-1 - index;
        arr1.splice(start2, end2)
       }else{
        arr1.splice(start2, end2)
       }

       i--

    }        

       
    }

    //console.log(arr1)    
    

       for(let i = 0; i< arr1.length; i++){
           let temp = arr1[i];
           sum += temp;           

       }    

    console.log(sum)

}

bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1])
