function firstAndLastKNumbers(arr){

    let kNum = Number(arr.shift());

    let firstKNum = arr.slice(0, kNum);

    let lastKNum = arr.slice(arr.length - kNum, arr.length);

    console.log(firstKNum.join(" "))
    console.log(lastKNum.join(" "))   

}

firstAndLastKNumbers([2, 
    7, 8, 9]
    )
