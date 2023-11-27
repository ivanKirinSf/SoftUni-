function schoolGrades(input){

let studentsInfo = [];

for(let el of input){
    let temp = el.split(" ");

    let name = temp.shift();
    let grades = temp.map(Number);

    if(studentsInfo.hasOwnProperty(name)){

        for(let el of grades){
            studentsInfo[name].push(el)
        }

    }else{
        studentsInfo[name] = grades;
    }
}

function average(input){
    let totalGrades = 0;
    let averageGrade = 0;
    for(let i of input){
        totalGrades += i;
        averageGrade = totalGrades/input.length;

    }

    studentsInfo[key] = averageGrade.toFixed(2);

}

for(key in studentsInfo){
    average(studentsInfo[key])
}

let sorted = Object.keys(studentsInfo).sort((a, b) => a.localeCompare(b));

//console.table(sorted)

for(let el of sorted){
    console.log(`${el}: ${studentsInfo[el]}`)
}

    }

schoolGrades([
'Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6'
])


