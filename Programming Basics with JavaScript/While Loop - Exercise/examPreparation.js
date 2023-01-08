function examPreparation(input){
    let badRates = Number(input[0]);
    let taskName = input[1];
    let taskRate = input[2];
    let averageRate = 0;
    let taskNum = 0;
    let sumTasks = 0;
    let lastTask = "";
    let badRatesNum = 0;

    index = 3;
    while(badRates > badRatesNum){
        let currentTask = taskName;
        

        if(currentTask === "Enough"){
            averageRate = sumTasks/taskNum;
            lastTask = input[index-4];
            console.log(`Average score: ${averageRate.toFixed(2)}`)
            console.log(`Number of problems: ${taskNum}`)
            console.log(`Last problem: ${lastTask}`);
            break;
        
        }

        let currentRate = taskRate;
        sumTasks += Number(currentRate);
        taskNum ++;

        if(currentRate <=4){
            badRatesNum++;
        }

        taskName = input[index];
        taskRate = input[index+1];
        index+=2;


    }

    if(badRates <= badRatesNum){
        console.log(`You need a break, ${badRatesNum} poor grades.`)
    }
    

}
