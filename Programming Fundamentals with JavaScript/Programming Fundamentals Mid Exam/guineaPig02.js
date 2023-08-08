function guineaPig(input){

    let food = Number(input.shift());
    let dailyFood = 0.3;
    let monthlyFood = 0;
    let hay = Number(input.shift());
    let hayPortion = 0;
    let monthlyHay = 0;
    let cover = Number(input.shift());
    let coverPortion = 0;
    let monthlyCover = 0;
    let weight = Number(input.shift());

    index = 1;
    while(index <= 30){

        monthlyFood += dailyFood;

        if(index %2 === 0){
            let restOfFood = food - monthlyFood;
            hayPortion = restOfFood*0.05;
            monthlyHay += hayPortion
            //console.log(hayPortion)

        }

        if(index % 3 === 0){
            coverPortion = weight/3;
            monthlyCover += coverPortion;
        }
        index++       
    }

    let excessFood = food - monthlyFood;

    let excessHay = hay - monthlyHay;

    let excessCover = cover - monthlyCover;

    if(excessFood <= 0 || excessHay <= 0 || excessCover <= 0){

             console.log("Merry must go to the pet store!")

    }else {

        console.log(`Everything is fine! Puppy is happy! Food: ${excessFood.toFixed(2)}, Hay: ${excessHay.toFixed(2)}, Cover: ${excessCover.toFixed(2)}.`)

    }

    
    //console.log(excessFood)
}
