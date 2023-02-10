function mergeArrays(arr1,arr2){

    let result = [];
    for(let i = 0; i<arr1.length; i++){
        let tempA = arr1[i];
        let tempB = arr2[i];
        if(i % 2 === 0){
            tempA = Number(tempA);
            tempB = Number(tempB);

        }

        let curRes = tempA+tempB;
        result.push(curRes);


    }

    let buff = "";
    for(let el of result){
        buff += el +"-";
    }

    console.log(result.join(" - "))

}

mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11'])

mergeArrays(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44']
