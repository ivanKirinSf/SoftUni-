function numbers(input){

    let numbers = input.split(" ").map(Number);

    let greaterNums = [];

    let sum = 0;

    let res = "";

    for(let i = 0; i < numbers.length; i++){
        let temp = numbers[i];

        sum += temp
    }

    let averageNum = sum / numbers.length

    for(let i = 0; i < numbers.length; i++){
        let temp = Number(numbers[i]);

        if(temp > averageNum){
            greaterNums.push(temp)
        }
    }

    //console.log(greaterNums)

    greaterNums.sort((a, b) => b-a);

    if(greaterNums.length > 0){

        for(let i = 0; i < 5; i++){
            let temp = Number(greaterNums[i]);

            if(temp){

                res += temp + " "

            }    
            
        }

        console.log(res)

    }else {

        console.log("No")

    }    

    //console.log(greaterNums)

}

numbers('10 20 30 40 50')
