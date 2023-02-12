function arrayRotation(arr, rotationCount){

    let buffArr = []; 

    for(let i = 0; i<rotationCount; i++){

        let currEl = arr[0];

        for(let k = 1; k<arr.length; k++){

            buffArr.push(arr[k]);


        }

        buffArr.push(currEl);
        arr = buffArr;
        buffArr = [];

    }

    console.log(arr.join(" "))

}

arrayRotation([51, 47, 32, 61, 21], 2)
