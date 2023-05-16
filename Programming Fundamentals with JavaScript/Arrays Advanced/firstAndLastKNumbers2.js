function firstAndLastKNumbers(arr){

    //find the first K numbers
    // find the last K numbers
    // print

    let k = arr.shift();
    

    let first = firstNum(arr);
    let last = lastNum(arr);
    let printArr = print(first, last)

    function firstNum(arr){
        let res = arr.slice(0,k)

        return res;
    }

    function lastNum(arr){
        let res = arr.slice(arr.length-k);

        return res
    }

    function print(a,b){
        return console.log(`${a.join(" ")}` + '\n'+ `${b.join(" ")}`)
    }

}

firstAndLastKNumbers([2,7, 8, 9])
