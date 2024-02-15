function softUniReception (input){

    let students = Number(input.pop());

    let studentsPerHour = input.map(Number)//split(", ")

    let totalPerHour = 0

    let res = 0;

    //console.log(studentsPerHour)

    for(let i = 0; i < input.length; i++){
        let temp = Number(input[i]);

        if(temp >=1 && temp <= 100){

        totalPerHour += temp 

        }else {
            break;
        }
        
    }


    if(students >= 0 && students <= 10000 && totalPerHour > 0){

    res = Math.ceil(students/totalPerHour)//.toFixed(2)))

    if(res >= 3){

        let index = Math.floor(res / 3);

        //console.log(index)
        res += index
    }

    //console.log(index)
    console.log(`Time needed: ${Math.ceil(res)}h.`)

    }     

}
