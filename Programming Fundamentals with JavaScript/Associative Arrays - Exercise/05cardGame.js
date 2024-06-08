function cardGame(input) {

    //let list = input.split(", ");

    let players = {};

    let personValue = [];

    let value = 0;

    let person = "";

    for (let temp of input) {

        let data = temp.split(": ");

        person = data.shift();

        let cardsList = data.shift().split(", ");

        for (let card of cardsList) {

            card = card.split("");

            let type = card.pop();

            let length = card.length;

            let power = "";

            let typeCode = "";

            if(length === 2) {

                power = 10;

            }else{

                power = card.shift()

                if(power === "J"){

                   power = 11;

                }else if(power === "Q"){

                    power = 12;
 
                 }else if(power === "K"){

                    power = 13;
 
                 }else if(power === "A"){

                    power = 14;
 
                 }else{

                    power = Number(power);

                 }
            }  
            
            if(type === "S"){

               type = 4;

            }else if(type === "H"){

                type = 3;

            }else if(type === "D"){

                type = 2;
                
            }else if(type === "C"){

                type = 1;
                
            }

            let currentValue = type*power;

            personValue.push(currentValue);           

        }       

        //console.log(value)
        //console.log(cardsList)

        for(let num of personValue){

            value += num;
    
            players[person] = value;
    
        }
    }    

    console.table(players);

    //let entries = Object.entries(players);



}

cardGame(
    ['Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H',
    'Andrea: QH',
    'Tomas: 6H',
    'Andrea: QH',
    'Peter: JD'
    ]
)
