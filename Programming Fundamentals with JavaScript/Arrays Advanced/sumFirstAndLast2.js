function sumFirstAndLast(arr){

    let firstElement = Number(arr[0]);
    let lastElement = Number(arr[arr.length-1]);
    let sum = firstElement + lastElement;

    return sum;

   
}

let arr = ['5','10']
//console.log(sumFirstAndLast(['20','30','40']));
console.log(sumFirstAndLast(arr));

console.log(arr)
