function мagicSum(arr, n){

   for(let i = 0; i<arr.length; i++){
    let temp = arr[i];

    for(let k = i+1; k<arr.length; k++){
        let tempK = arr[k];

        let sum = tempK + temp;

        if(sum == n){

            console.log(`${temp} ${tempK}`)


        }
    }
   }

}
