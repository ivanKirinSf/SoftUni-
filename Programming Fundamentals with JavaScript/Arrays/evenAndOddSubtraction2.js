function evenAndOddSubtraction(arr){

    let evenSum = 0;

    let oddSum = 0;

    let final = 0;

    for(let i = 0; i<arr.length; i++){
        
        let temp = arr[i];

        if( temp % 2 === 0 ){

            evenSum += temp;

        }else {

            oddSum += temp;

        }

    }

    final = evenSum - oddSum

    console.log(final)

}

evenAndOddSubtraction([2,4,6,8,10])
