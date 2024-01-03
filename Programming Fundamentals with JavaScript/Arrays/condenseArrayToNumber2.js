function condenseArrayToNumber(arr){

    let nums = [];

   while(arr.length > 1){
    for(let i = 0; i< arr.length-1; i++){
        let first = arr[i];
        let second = arr[i+1];
        let sum = first + second;
        nums.push(sum);
    }

    arr = nums;
    nums = [];
   }

   console.log(arr)



}
