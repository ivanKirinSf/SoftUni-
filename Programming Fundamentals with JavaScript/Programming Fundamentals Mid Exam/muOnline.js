function muOnline(string){

    let text = string.split("|");
    let health = 80;
    let bitcoins = 0;

    for(let i = 0; i < text.length; i++){
        let temp = text[i].split(" ");
        let command = temp[0];
        

        if(command === "potion"){
            let number = Number(temp[1]);
            if(health < 100){
                let sum = health + number;
                if(sum > 100){
                    let amount = 100 - health;
                    console.log(`You healed for ${amount} hp.`)
                    health = 100;
                } else {
                    health = sum;
                    console.log(`You healed for ${number} hp.`)
                }
            }
            
        }
    }

    
    console.log(health)

}

muOnline("potion 10")
//muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")
