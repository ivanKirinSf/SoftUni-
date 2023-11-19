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

            socArr.set(name, totalAverage);
        }
            
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

schoolGrades([
//'Lilly 4 6 6 5',
'Tim 5 6',
//'Tammy 2 4 3',
'Tim 6 6',
'Tim 3 4 5'
]
)
