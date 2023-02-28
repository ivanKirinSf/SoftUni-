function equalSums(arr) {

    let sumLeft = 0;
    let sumRight = 0;
    let equal = false;
    let index = 0;

    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i];

        if (i === 0) {
            sumLeft = 0;
        }

        if (i === 1) {
            sumLeft += arr[0];
        }

        if (i == arr.length - 1) {
            sumRight = 0;
        }

        if (i == arr.length - 2) {
            sumRight = arr[arr.length - 1]
        }
        
        if(i < arr.length-2){
            sumRight = 0;
        for (let r = i + 1; r < arr.length; r++) {
            let tempR = arr[r];
            sumRight += tempR;
        }
    }

        if (i > 1) {
            sumLeft = 0;
            for (let l = i - 1; l >= 0; l--) {
                let tempL = arr[l];
                sumLeft += tempL

            }
        }


        if(sumLeft == sumRight){
            equal = true;
            index = i;
        } 


    }

    if(equal == true){
        console.log(index)
    } else {
        console.log("no")
    }

   





}

equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])
