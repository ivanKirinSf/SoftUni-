function negativeOrPositiveNumbers(arr){
    let result = [];
    for(let i = 0; i<arr.length; i++){
        const element = Number(arr[i]);
        if(element<0){
            result.unshift(element);
        } else {
            result.push(element);
        }
    }

    return result.join('\n');
}

console.log(negativeOrPositiveNumbers(['7','-2','8','9']))
