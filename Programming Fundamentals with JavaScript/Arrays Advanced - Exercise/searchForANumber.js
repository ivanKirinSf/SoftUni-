function searchForANumber(arr1, arr2) {

    //number of elements you have to take 
    //elements you have to delete
    //number we search in our collection  

    let takeNum = Number(arr2[0]);
    let deleteNum = Number(arr2[1]);
    let searchNum = Number(arr2[2]);
    let newArr = [];

    newArr = arr1.slice(0, takeNum);

    //let start = (arr1.length - 1) - deleteNum;

    //newArr.splice(deleteNum, arr1.length-1);
    newArr.splice(0, deleteNum);

    //console.log(arr1)

    let count = 0;
    let number = searchNum;

    for (let i = 0; i < newArr.length; i++) {
        let temp = Number(newArr[i]);

        if (temp === searchNum) {

            count += 1;
            number = temp;
        }
    }
    if (count > 0) {
        console.log(`Number ${number} occurs ${count} times.`)
    }else{

        console.log(`Number ${number} occurs ${count} times.`)

    }
}

searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3])
