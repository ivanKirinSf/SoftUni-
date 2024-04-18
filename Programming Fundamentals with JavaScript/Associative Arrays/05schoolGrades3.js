function schoolGrades(input){

    let students = {};

    for(let info of input){

        let studentsInfo = info.split(" ");

        let name = studentsInfo.shift();

        let grades = studentsInfo.join(" ");

        if(!students.hasOwnProperty(name)){

            students[name] = grades;

        }else{

            students[name] += ` ${grades}`;

        }
        //console.log(grades)
    }

    let sorted = Object.keys(students).sort((a,b) => a.localeCompare(b));

    for(let person of sorted){

        let average = 0;

        let counter = 0;

        for( let grade of students[person].split(" ")){

            average += Number(grade);

            counter += 1;

        } 

        average = average/counter;

        console.log(`${person}: ${average.toFixed(2)}`);     

    }    

}

schoolGrades ([
'Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3'
])
