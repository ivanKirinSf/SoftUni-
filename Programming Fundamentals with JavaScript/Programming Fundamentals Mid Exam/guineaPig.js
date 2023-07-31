function guineaPig(input){

    let food = Number(input[0]);
    let foodDaily = 0.3;
    let excessFood = 0;
    let hay = Number(input[1]);
    let hayPortion = 0;
    let excessHay = 0;
    let cover = Number(input[2]);
    let coverPortion = 0;
    let excessCover = 0;
    let days = 30;
    let weight = Number(input[3]);
    

    for(let i = 1; i<=days; i++){
        let day = i;

        excessFood = food - foodDaily.toFixed(2);        
        food = excessFood.toFixed(2);

        if(day % 2 === 0){
            hayPortion = excessFood.toFixed(2)*0.05;
            excessHay = hay.toFixed(2) - hayPortion.toFixed(2);
            hay = excessHay;            
        }

        if(day % 3 === 0){
            coverPortion = weight/3;  
            excessCover = cover - coverPortion;
            cover = excessCover         
            
        }



    }

    if(excessFood > 0 && excessHay > 0 && excessCover > 0){
        console.log(`Everything is fine! Puppy is happy! Food: ${excessFood.toFixed(2)}, Hay: ${excessHay.toFixed(2)}, Cover: ${excessCover.toFixed(2)}.`)
    } else {

        console.log("Merry must go to the pet store!")

    }

    //console.log(excessFood.toFixed(2))
    //console.log(excessHay.toFixed(2))
    //console.log(excessPortion.toFixed(2))

    

}

guineaPig((["9",
"5",
"5.2",
"1"])
)
