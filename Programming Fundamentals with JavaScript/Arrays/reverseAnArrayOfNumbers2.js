function reverseAnArray(num, arr){

    let text = "";

    for(let i = 0; i< num; i++){
        let temp = arr[i];

        arr.push(temp)


    }

    for(let k = arr.length-1; k > ((arr.length-1) - num); k--){
        let tempK = arr[k];

        text += tempK + " "
    }

    console.log(text)

}

reverseAnArray(2, [66, 43, 75, 89, 47])
