function softUniReception(input){

    let students = Number(input.pop());

    let studentsPerHour = input.map(Number);

    let totalStudentsPerHour = 0;

    let helpedStudentsCount = 0;

    let hours = 0;

    let counter = 0;

    //console.log(totalStudentsPerHour)

    for(let i = 0; i < studentsPerHour.length; i++){

        let temp = Number(studentsPerHour[i]);

        totalStudentsPerHour += temp;

    }

    //console.log(totalStudentsPerHour)

    while(helpedStudentsCount < students){

        helpedStudentsCount += totalStudentsPerHour;
        hours += 1;
        counter += 1;

        if(counter === 3 && helpedStudentsCount < students){
            hours +=1;
            counter = 0;
        }

    }

    console.log(`Time needed: ${hours}h.`)

}

softUniReception(['6','6','6','45'])
