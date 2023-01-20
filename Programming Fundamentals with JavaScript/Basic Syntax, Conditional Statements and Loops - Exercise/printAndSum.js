function printAndSum (start, end){
    let sum =0;
    let currentNum = "";
    for(let i = start; i <= end; i++){
        let num = i;
        sum += num;

        currentNum = currentNum + " " + i;
        

    }
    console.log(currentNum)

    console.log(`Sum: ${sum}`)
}

printAndSum(5, 10)
printAndSum(0, 26)
printAndSum(50, 60)
