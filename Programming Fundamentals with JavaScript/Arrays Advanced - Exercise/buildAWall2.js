function buildAWall(input){

    //find the lowest wall
    //count the days left to 30 feet
    //calculate the amount of concrete used per day
    //calculate the overall volume
    // calculate the price of the concrete

    let tempMin = 0;

    let min = Number(input[0]);

    for(let i = 0; i<input.length; i++){

        let temp = Number(input[i]);

        for(let k = i+1; k<input.length; k++){
            let tempK = Number(input[k]);

            if(temp < tempK){
                tempMin = temp
            }else {
                tempMin = tempK
            }

            if(tempMin < min){
                min = tempMin;
            }
        }
    }

    let daysLeft = 30 - min;

    let arr = input;

    for(let j = 1; j < daysLeft+1; j++){

        let concreteDaily = 0
        
        for(let a = 0; a<arr.length; a++){
            let tempA = Number(arr[a]);

            if(tempA < 30){

                let newHeight = tempA + 1;

                concreteDaily += 195;

                arr.splice(a, 1, newHeight)

            }

        }

        console.log(arr)

    }  

}

buildAWall([21, 25, 28])
