function schoolGrades(input){

    let studentsGrades = {};
    //let arrGrades = [];

    for(let el of input){
        let temp = el.split(" ");
        let name = temp.shift();
        let grades = temp.map(Number);
        if(studentsGrades.hasOwnProperty(name)){

            for(let i of grades){
                studentsGrades[name].push(i)
            }

        }else {

            studentsGrades[name] = grades;

        }
        //console.log(grades)
    }

    function average(input){
        let sum = 0;
        let average = 0;
        for(let el of input){
            let temp = Number(el);
            sum += temp;
        }

        average = sum / input.length;
        console.log(average)
    }

    for(let key of studentsGrades){
        average(studentsGrades[key])
    }

    //console.log(studentsGrades)
}

schoolGrades([
'Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6'
])


