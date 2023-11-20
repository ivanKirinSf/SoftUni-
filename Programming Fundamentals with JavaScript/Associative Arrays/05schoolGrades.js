function schoolGrades(input){

   let socArr = new Map();
   let gradesArr = [];
   
   for(let el of input){
     let temp = el.split(" ");
     let name = temp.shift();
     let grades = temp;
     let totalGrade = 0;
     let averageGrade = 0; 
     let totalAverage = 0;   

    if(socArr.has(name)){


        if(gradesArr.length === 0){

        let oldGrade = socArr.get(name);
        gradesArr.push(oldGrade);

        }
        
         
        grades.map(Number);
        
        for(let el of grades){
            totalGrade += Number(el);
        }

        averageGrade = totalGrade/grades.length;
        
        gradesArr.push(averageGrade);

        for(let el of gradesArr){
            totalAverage += el;            
        }

        socArr.set(name, totalAverage/gradesArr.length);
            
        //socArr.set(name, (averageGrade + oldGrade)/2);

    }else{
        for(let el of grades.map(Number)){
            totalGrade += Number(el);
        }

        averageGrade = totalGrade/grades.length;
        socArr.set(name, averageGrade)        
    }
    
   }

   socArr = new Map([...socArr.entries()].sort());

   for(let [name, grades] of socArr){
    console.log(`${name}: ${grades.toFixed(2)}`)
   }

}

schoolGrades(
    ['Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3']

)
