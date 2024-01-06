function negativeOrPositiveNumbers(arr){

let newArr = [];

for(let i = 0 ; i < arr.length; i++){
    let temp = Number(arr[i]);

    if(temp >= 0){
        newArr.push(temp);
    }else{
        newArr.unshift(temp);
    }
}


for(let el of newArr){
    console.log(el)
}

}

negativeOrPositiveNumbers (['3', '-2', '0', '-1'])
