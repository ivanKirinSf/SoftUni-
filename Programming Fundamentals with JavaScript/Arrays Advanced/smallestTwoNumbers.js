function smallestTwoNumbers(arr){

    let sortAscending = arr.sort((a,b) => {
        return a-b;
    });

    

    //console.log(arr)

    let sliced = arr.slice(0,2);
    console.log(sliced.join(" "))

}

smallestTwoNumbers([30, 15, 50, 5])
