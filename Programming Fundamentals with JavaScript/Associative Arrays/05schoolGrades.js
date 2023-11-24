function schoolGrades(input){

    let studentInfo = [];

    for(let el of input){
        let temp = el.split(" ");
        let name = temp.shift();
        let grades = temp.map(Number);
        //console.log(grades);

        if(studentInfo.hasOwnProperty(name)){
            for(let i of grades){
                studentInfo[name].push(i)
            }
        }else {
            studentInfo[name] = grades;
        }
    }

        function average(input){
            for(let el of input){
                let total = 0;
                total += el;

                let average = total/input.length;
                studentInfo[key] = average.toFixed(2);
            }
        }

        for(let key of studentInfo){

            average(studentInfo[key]);
        }      

        let entries = Object.entries(studentInfo);

            entries.sort((a, b) => a[0].localeCompare(b[0]));

            for(let key of entries){
                console.log(`${key}: ${entries[key]} `)
            }     


    }



