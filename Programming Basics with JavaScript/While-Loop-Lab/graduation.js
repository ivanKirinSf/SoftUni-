function graduation(input){

    let name = input[0];
    let rate = input[1];
    let average = 0;
    let sumRates = 0;
    let grade = 0;
    let excluded = 0;
  
    index =2;
  
    while(grade !== 12){
      
  
      let current = Number(rate);
      grade++;
      sumRates += current;
      average = sumRates/grade;
      
  
      if(rate <4){
        excluded++;
        if(excluded = 2){
          console.log (`${name} has been excluded at ${grade} grade`);
          
        };
  
        break;
      
  
      
        
  
      }
  
      rate = input[index];
      index++
  
  
  
  
  
    }
  
  
    if(excluded < 2){
    console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
    }
        
  
    
  
  
  
  }
  
  graduation(["Gosho", 
  "5",
  "5.5",
  "6",
  "5.43",
  "5.5",
  "6",
  "5.55",
  "5",
  "6",
  "6",
  "5.43",
  "5"])
  
  graduation(["Mimi", 
  "5",
  "6",
  "5",
  "6",
  "5",
  "6",
  "6",
  "2",
  "3"])
