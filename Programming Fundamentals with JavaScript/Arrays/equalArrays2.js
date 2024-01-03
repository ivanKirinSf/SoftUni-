function equalArrays(arr1, arr2){    

    let maxLength = arr1.length;
    let isEqual = true;
    let sum = 0;
    let index = 0;

    if(arr1.length < arr2.length){

        maxLength = arr2.length

    }

    for(let i = 0; i<maxLength; i++){
        let temp1 = Number(arr1[i]);
        let temp2 = Number(arr2[i]);

        if(temp1 !== temp2){
            isEqual = false;
            index = i;
            break;
        }else {
            sum += temp1;
        }
    }

    if(isEqual === true){

        console.log(`Arrays are identical. Sum: ${sum}`)

    }else{

        console.log(`Arrays are not identical. Found difference at ${index} index`)
        
    } 

}

equalArrays(

    ['10','20','30','40'], ['10','20','30']

)
