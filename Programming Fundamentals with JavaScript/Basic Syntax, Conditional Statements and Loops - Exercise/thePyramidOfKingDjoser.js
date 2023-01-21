function thePyramidOfKingDjoser(base, increment){
    


    let firstStoneBase = base-2;
    let currentStoneBase = 0;
    let stoneSteps=0;
    let totalSteps = 0;
    let stone = 0;
    let firstMarbleBase = base;
    let currentMarbleBase = 0;
    let currentMarbleSteps = 0;
    let currentMarble = 0;
    
    let totalMarble = 0;
    
   

    for(let i = firstStoneBase; i >= 1; i-=2 ){
        stoneSteps++;
        totalSteps = Math.ceil(stoneSteps/2);
        currentStoneBase = i;
        stone += Math.pow(currentStoneBase, 2)*increment;
    }
    
    
    for(let i = firstMarbleBase; i >= 0; i-=2){
        currentMarbleSteps++;
        
        currentMarbleBase = i;
        currentMarble = (currentMarbleBase-1)*4;
        

        if(currentMarbleSteps % 5 === 0){
            currentMarble -= (currentMarbleBase-1)*4
        
        }
        totalMarble += currentMarble;

        

        
        
        
        

        
        
        
    }




    console.log("-----")
    console.log(stoneSteps)
    console.log(`Stone required: ${stone}`)
    console.log("-----")
    console.log(totalMarble)
    
    

}

thePyramidOfKingDjoser(11,1)
