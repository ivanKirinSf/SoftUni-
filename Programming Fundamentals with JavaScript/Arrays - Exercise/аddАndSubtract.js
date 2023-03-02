function addAndSubtract (arr){
    let newArr = [];
    let sumArr = 0;
    let newArrSum = 0;

    for(let i = 0; i< arr.length; i++){
        let temp = arr[i];
        sumArr += temp;
        if(temp % 2 === 0){
            temp += i;
            newArr.push(temp);
            newArrSum += temp;
        }else {
            temp -= i;
            newArr.push(temp);
            newArrSum += temp;
        }
    }

    console.log(newArr);
    console.log(sumArr);
    console.log(newArrSum);

}

addAndSubtract([5, 15, 23, 56, 35])
