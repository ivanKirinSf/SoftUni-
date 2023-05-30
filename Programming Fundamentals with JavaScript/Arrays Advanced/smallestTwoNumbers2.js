function smallestTwoNumbers(arr){

    let sortArr = sorting(arr);
    let smallestNum = smallest(sortArr);

    return smallestNum


    function sorting(input){

    let sortNum = input.sort((a,b)=> a-b);

    return sortNum
}

function smallest(input){

    let sliced = input.slice(0,2);

    return sliced.join(" ")

}

    





}

smallestTwoNumbers([30, 15, 50, 5])
