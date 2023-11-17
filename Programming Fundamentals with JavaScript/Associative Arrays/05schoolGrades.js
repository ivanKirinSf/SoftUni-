function schoolGrades(input){

   let socArr = new Map();
   
   for(let el of input){
     let temp = el.split(" ");
     let name = temp.shift();
     let grades = temp;
     let totalGrade = 0;
     let averageGrade = 0;

     for(let el of grades){
        totalGrade += Number(el);
    }

    averageGrade = totalGrade/grades.length;

    if(socArr.has(name)){
        let oldGrade = socArr.get(name);
        socArr.set(name, averageGrade + oldGrade);
    }else{
        socArr.set(name, averageGrade)        
    }
    
   }

   socArr = new Map([...socArr.entries()].sort());

   for(let [name, grades] of socArr){
    console.log(`${name}: ${grades.toFixed(2)}`)
   }

}

schoolGrades(['Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3']
)
