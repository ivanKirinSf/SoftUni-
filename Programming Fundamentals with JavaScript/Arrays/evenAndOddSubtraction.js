function evenAndOddSubtraction(arr){
    for(let i = 0; i<arr.length; i++){
        arr[i]= Number(arr[i]);

    }

    let sumEven = 0;
    let sumOdd = 0;

    for(let num of arr){
        if(num %2 == 0){
            sumEven += num;
        } else {
            sumOdd += num;
        }
    }

    let diffrence = sumEven-sumOdd;
    
    console.log(diffrence)

}


evenAndOddSubtraction([1,2,3,4,5,6])
evenAndOddSubtraction([3,5,7,9])
evenAndOddSubtraction([2,4,6,8,10])
