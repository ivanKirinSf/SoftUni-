function multiplicationTable(num){
    let currentNum = 0;
    let result = 0;

    for(let i = 1; i <= 10; i++){
        currentNum = i
        result = num*currentNum

        console.log(`${num} X ${i} = ${result}`)
    }

    
}

multiplicationTable(5)

multiplicationTable(2)
