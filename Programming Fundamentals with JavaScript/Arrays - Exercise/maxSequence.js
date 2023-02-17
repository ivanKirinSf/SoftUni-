function maxSequence(arr) {

    let newArr = [];
    let maxArr = [];
    let leftArr = [];
    let length = 0;
    let maxLength = 1;

    for (let i = 0; i < arr.length; i++) {

        let tempI = arr[i];


        for (let k = i + 1; k < arr.length; k++) {
            let tempK = arr[k]

            if (tempI == tempK) {
                if (maxArr.length < arr.length) {
                    newArr.push(tempK);
                    if(newArr.length > leftArr.length){
                        leftArr.push(tempK);
                        leftArr.push(tempI);
                        }
                    //if(tempK != arr[k+1]){
                    //    break;
                    //}
                }
                if (maxArr.length >= arr.Length) {
                    break;
                }
                length = newArr.length;
                if (length > maxLength) {   //(length > maxLength) 
                    maxArr = newArr;
                    if (length < arr.length){ //&& tempK == arr[k+1] ) {
                       maxArr.push(tempI)
                    } else {
                        maxLength = length;
                        break;
                    }

                }



                
                
                




            } else {
                newArr = [];
                break;
            }




            maxLength = length;

        }








    }

    if(leftArr.length > maxArr.length){
        console.log(leftArr.join(" "))
    } else {
    console.log(maxArr.join(" "))
    }



}

maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
