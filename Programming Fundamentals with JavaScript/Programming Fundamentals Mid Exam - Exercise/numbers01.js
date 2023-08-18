function numbers(input){

    let nums = input.split(" ");
    
    let sumNums = 0;
    let average = 0;
    let arr = [];

    for(let i = 0; i < nums.length; i++){
        let temp1 = Number(nums[i]);
        sumNums += temp1;            
    
    }

    average = sumNums/(nums.length);
    

    let index = 0;
    while(index < nums.length){
        let temp2 = Number(nums[index]);
        if(temp2 > average){
            arr.push(temp2)
        }        
        index++
    }
    
    //console.log(average.toFixed(2))
    //console.log(arr)

    arr.sort((a, b)=>a-b);
    arr.reverse();
    arr = arr.slice(0,5);
    
    let res = arr.join(" ")

    if(arr.length > 0){
        console.log(res)
    }else {
        console.log("No")
    }

}
