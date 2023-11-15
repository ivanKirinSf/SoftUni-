function schoolGrades(input){

    let map = new Map();
    
    for(let el of input){
        let temp = el.split(" ");
        let name = temp.shift();
        let grade = temp
        let totalGrade = 0;
        let averageGrade = 0;

        for(let i =0; i < grade.length; i++){
            totalGrade += Number(grade[i]);                  

        }
        
        
        

        if(map.has(name)){
            averageGrade = totalGrade/grade.length;
            averageGrade = map.get(name)            
            map.set(name, averageGrade)
        }else{
            averageGrade = totalGrade/grade.length;
            let curentGrade = averageGrade;
            averageGrade = map.get(name);
            map.set(name, averageGrade + curentGrade)
        }
    }

    console.log(map)

    

}
