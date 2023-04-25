function perfectNumber(n){
    
    let perfectNum = check(n);
    let res = isEqual(n, perfectNum)

    function check(a){
        let sum = 0;
        index = 1;
        while(index < a){
            let temp = Number(index);

            if(a % temp === 0){

                sum += temp;

            }
            
            
            index ++
        }

        return sum
    }


    function isEqual(a, b){

        if(a === b){
            console.log("We have a perfect number!")
        } else {
            console.log("It's not so perfect.")
        }

    }

}

perfectNumber(1236498)
