function sumFirstAndLast(input){

    let sum = 0;

    for(let i = 0; i < input.length; i++){

        if ( i === 0){
            sum += Number(input[i])
        }else if( i === input.length-1){
            sum += Number(input[i])
        }

    }

    console.log(sum)

}

sumFirstAndLast([11, 58, 69])
