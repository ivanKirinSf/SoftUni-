function schoolGrades(input){

    let students = {};

    for(let el of input){

        let info = el.split(" ");

        let name = info.shift();

        let grades = info.join(" ");

        if(!students.hasOwnProperty(name)){

            students[name] = grades;

        }else {

            students[name] += ` ${grades}`

        }

        let keys = Object.keys(students)

        //students[name] = grades

        //console.log(students);

    }

    let keys = Object.keys(students).sort((a,b) => a.localeCompare(b));

    for(let el of keys){

        let gradesNum = students[el].split(" ");

        let average = 0;

        let counter = 0;

        for(let num of gradesNum){

            average += Number(num);

            counter += 1
        }

        average = average/counter;

        console.log(`${el}: ${average.toFixed(2)}`);

    }

    //console.log(keys)

}

schoolGrades([
'Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6'
])
