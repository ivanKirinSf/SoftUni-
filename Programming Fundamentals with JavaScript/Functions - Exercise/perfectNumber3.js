function perfectNumber(n){

    //1. find divisors
    //2. sum the divisors
    //3. check if the sum is equal 

    let nums = divide(n);
    let sumNums = sum(nums);
    let res = check(sumNums, n);

    function divide(a){
        let div = [];

        for(let i = 0; i<a; i++){

            let temp = i;
            
            if(a % temp === 0){
                div.push(temp)
            }

        }

        //console.log(div)
        return div
    }

    function sum(a){

        let sum = 0;

        for(let i = 0; i < a.length; i++){
            let temp = Number(a[i]);

            sum += temp;

         

        }

        //console.log(sum)
        return sum
    }

    function check(a,b){

        if(a == b){
            return console.log("We have a perfect number!")
        } else {
            return console.log("It's not so perfect.")
        }
    }


}

perfectNumber(1236498)
