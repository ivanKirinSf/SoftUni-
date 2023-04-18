function oddAndEvenSum(n){

    let num = n
    let str = n.toString();
    let res = sum(str);

    console.log(res)
    
    function sum(element){
    let sumEven = 0;
    let sumOdd = 0;
    for(let i = 0; i<str.length; i++){
        let temp = Number(str.charAt(i));

        if(temp % 2 === 0){
            sumEven += temp;
        }else {
            sumOdd += temp;
        }

        
    }

    return (`Odd sum = ${sumOdd}, Even sum = ${sumEven}`)
}
}

oddAndEvenSum(1000435)
oddAndEvenSum(3495892137259234)
