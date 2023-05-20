//1.take first and last element from a array
//2. sum the both numbers
//3. print the result

function sumFirstAndLast(arr){

    let popped = Number(arr.pop());
    let shifted = Number(arr.shift());
    let sum = popped + shifted

    return sum

    


}

sumFirstAndLast(['20', '30', '40'])
