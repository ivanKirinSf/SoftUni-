function guineaPig(input){

    let food = Number(input.shift());
    let foodMonthly = 0;
    let hay = Number(input.shift());
    let hayMonthly = 0;
    let cover = Number(input.shift());
    let coverMonthly = 0;
    let weight = Number(input.shift())

    index = 1;
    while(index <= 30){
        let foodDaily = 0.3;
        foodMonthly = 30*0.3;
        if(foodMonthly > food){
            return console.log("Merry must go to the pet store!");
            
        }

        if(index % 2 === 0){
            let hayPortion = (food - (foodDaily*index))*0.05;
            hayMonthly += hayPortion;
            if(hayMonthly > hay){
                return console.log("Merry must go to the pet store!");
                
            }
        }

        if(index %3 === 0){
            let coverPortion = weight/3;
            coverMonthly += coverPortion;
            if(coverMonthly > cover){
                return console.log("Merry must go to the pet store!");
                
            }
        } 

        
        index++;
    }

    let excessFood = food - foodMonthly;
    let excessHay = hay - hayMonthly;
    let excessCover = cover - coverMonthly;

    console.log(`Everything is fine! Puppy is happy! Food: ${excessFood.toFixed(2)}, Hay: ${excessHay.toFixed(2)}, Cover: ${excessCover.toFixed(2)}.`)

    //console.log(foodMonthly)

}
