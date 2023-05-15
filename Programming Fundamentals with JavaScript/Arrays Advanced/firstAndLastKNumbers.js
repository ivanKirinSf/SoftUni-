function firstAndLastKNumbers(arr){

    let k = Number(arr[0]);
    arr.shift(0)
    
    let endFirst = k+1;
    let endLast = (arr.length-k)+k;
    
    

    let firstK = arr.slice(0,k);
    console.log(firstK.join(' '));

    let lastK = arr.slice(arr.length-k,arr.length)
    console.log(lastK.join(' '));
    
    

    
    
    

}

firstAndLastKNumbers([3,
    6, 7, 8, 9])
