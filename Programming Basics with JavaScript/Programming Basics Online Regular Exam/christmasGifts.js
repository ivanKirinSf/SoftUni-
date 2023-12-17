function christmasGifts(input){

    let numOfKids = 0;
    let numOfAdults = 0; 
    let moneyForToys = 0;
    let moneyForSweaters = 0;

    for(let i = 0; i < input.length; i++){
        
        let temp = input[i];

        if(temp === "Christmas"){
            break;
        }else{
            temp = Number(input[i])
        }

        if(temp <= 16){
            numOfKids += 1;
        }else if(temp > 16){
            numOfAdults += 1;
        }
    }

    
    moneyForToys = numOfKids*5;
    moneyForSweaters = numOfAdults*15;
    


    console.log(`Number of adults: ${numOfAdults}`);
    console.log(`Number of kids: ${numOfKids}`);
    console.log(`Money for toys: ${moneyForToys}`);
    console.log(`Money for sweaters: ${moneyForSweaters}`);



}

christmasGifts([
"16",
"16",
"16",
"16",
"16",
"Christmas"
])
