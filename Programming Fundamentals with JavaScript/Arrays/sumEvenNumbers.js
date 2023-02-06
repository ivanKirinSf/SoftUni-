function sumEvenNumbers(arr){
    let currNum = 0;
    let sum = 0;
    for(let i = 0; i<= arr.length; i++){
        let curNum = Number(arr[i]);

        if(curNum %2 ===0){
            sum += curNum
        }
    }

    console.log(sum)
    

}


sumEvenNumbers(['1','2','3','4','5','6'])
sumEvenNumbers(['3','5','7','9'])
sumEvenNumbers(['2','4','6','8','10'])
