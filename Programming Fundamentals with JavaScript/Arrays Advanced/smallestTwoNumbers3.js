function smallestTwoNumbers(arr){ 

let sortedInAscending = arr.sort((a,b) => {
    return a - b;
})

let first = arr.slice(0,2);

console.log(first.join(" "))

}

smallestTwoNumbers([30, 15, 50, 5])
