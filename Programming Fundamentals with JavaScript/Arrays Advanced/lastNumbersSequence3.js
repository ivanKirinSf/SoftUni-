function lastNumbersSequence(n, k){

   let arr = [];

    arr.push(1);

    index = 0;
    while(index < n-1){
        let temp = Number(arr[index]);
        let sum = 0;        

        let sumNum = sumN(arr, k, temp)
        let arrSum = arrS(arr, sumNum);        

        function sumN(arr, num1, num2){
            let sum = 0;
            indexK = index-(k-1);

            while(indexK <= index){
                tempK = arr[indexK];
                if(indexK < 0){

                    sum += 0;

                }else {
                    sum += tempK;
                }                

                indexK++
            }

            return sum            
        

        }          
        

        index++;     

            
        }

        function arrS(arr, num){
            arr.push(num);   

      

    }
    console.log(arr.join(" "));
     

}

lastNumbersSequence(8, 2)
