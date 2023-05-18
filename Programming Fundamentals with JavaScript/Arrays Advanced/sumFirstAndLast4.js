function sumFirstAndLast(input){

    // find the first and last el
    // calculate el
    // print el

let firstNum = first(input);
let lastNum = last(input);
let calcNums = sum(firstNum, lastNum);
let res = print(calcNums);

return res


function first(arr){
    let num = arr.shift();

    return num
}

function last(arr){
    let num = arr.pop();

    return num
}

function sum(n1, n2){
    let sum = Number(n1) + Number(n2);

    return sum
}

function print(num){

    console.log(num)
}



}

sumFirstAndLast(['20', '30', '40'])
