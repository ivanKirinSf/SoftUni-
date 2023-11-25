function schoolGrades(input){

let studentsInfo =[];

for(let el of input){
    let temp = el.split(" ");
    let name = temp.shift();
    let grades = temp.map(Number);

    console.log(grades);

    if(studentsInfo.hasOwnProperty(name)){

        for(let i of grades){
            studentsInfo[name].push(i);
        }
        
    }else{
        studentsInfo[name] = grades;
    }
}

function average(input){
    let totalGrades = 0;
    let averageGrade = 0;

    for(let el of input){
        totalGrades += el;
    }
    averageGrade = totalGrades/input.length;
        
        //console.log(averageGrade)
        studentsInfo[el] = averageGrade.toFixed(2);
}

for (el in studentsInfo){
    average(studentsInfo[el])
}

studentsInfo.sort((a,b) => a[0].localeCompare(b[0]));

let entries = Object.entries(studentsInfo);
for(key in entries){

    console.log(`${key}: ${entries[key]}`)

}


    }


schoolGrades([
//'Lilly 4 6 6 5',
'Tim 5 6',
//'Tammy 2 4 3',
//'Tim 6 6'
])


