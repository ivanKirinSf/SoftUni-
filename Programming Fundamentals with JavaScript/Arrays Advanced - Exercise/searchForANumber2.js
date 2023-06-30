function searchForNumbers(arr1, arr2){

    let numToTake = arr2[0];
    let numToDel = arr2[1];
    let numToFind = arr2[2];
    let count = 0;

    let sliced = arr1.slice(0,numToTake);
    let deleted = sliced.splice(0, numToDel);

    index = 0;
    while(index < arr1.length){
        let temp = sliced[index];
                
        if(numToFind === temp){

            count += 1;                       

        }
        index++;
    }

    //console.log(sliced)

    console.log(`Number ${numToFind} occurs ${count} times.`)

    //console.log(sliced)

}

searchForNumbers([7, 1, 5, 8, 2, 7],
    [3, 1, 5]    
    )
