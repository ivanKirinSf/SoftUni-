function bonusScoringSystem(input){

    let studentsCount = Number(input.shift());

    let lectures = Number(input.shift());

    let aditionalBonus = Number(input.shift());

    let attendances = input;

    let totalBonus = 0;

    let studentAttendances = 0;

    for(let i = 0; i < attendances.length; i++){
        let temp = Number(attendances[i]);

        let finalBonus = (temp/lectures * (5 + aditionalBonus))//.toFixed(2);

        if(totalBonus < finalBonus){
            totalBonus = finalBonus;
            studentAttendances = temp
        }
        
        //console.log(finalBonus)


    }

    console.log(`Max Bonus: ${Math.ceil(totalBonus)}.`);
    console.log(`The student has attended ${studentAttendances} lectures.`)

}

bonusScoringSystem([
    `10`,
    `30`,
    `14`,
    `8`,
    `23`,
    `27`,
    `28`,
    `15`,
    `17`,
    `25`,
    `26`,
    `5`,
    `18`
]
)
