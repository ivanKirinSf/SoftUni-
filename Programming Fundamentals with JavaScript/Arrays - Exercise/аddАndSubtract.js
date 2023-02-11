function addAndSubtract(arr){

    let oldSum = 0;

    let newSum = 0;

    
    for(let i = 0; i<arr.length; i++){
        let curNum = arr[i];
        oldSum += curNum;

        if(curNum % 2 === 0 ){

            

            curNum += i;
            
            arr[i] = curNum;

        } else {

            

            
            curNum -= i;

            
            arr[i] = curNum;

        }

        newSum += curNum

       
   


}

console.log(arr)
console.log(oldSum);
console.log(newSum);

}

addAndSubtract([5, 15, 23, 56, 35])
