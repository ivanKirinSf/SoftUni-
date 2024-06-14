function cardGame(input){

let players = new Map();

let cardsType = {

    "S": 4,
    "H": 3,
    "D": 2,
    "C": 1,

}

let cardsPower = {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    "J": 11,
    "Q": 12,
    "K": 13,
    "A": 14,
}

for(let el of input){

    let temp = el.split(": ");

    let name = temp.shift();

    let cards = temp[0];

    let cardsArr = cards.split(", ");

    if(!players.has(name)){

       players.set(name, new Set());

    }

    for(let card of cardsArr){

        players.get(name).add(card)

    }

    //console.table(players)

}
    //if(!players.has(name))

    for(let [key, value] of players){

         let sum = 0;

         for( let tempCard of value ){

            let current = tempCard.split("");

            let type = current.pop();

            let power = current.join("");

            let cardsTypeNum = cardsType[type];

            let cardsPowerNum = cardsPower[power];
            
            sum += cardsPowerNum*cardsTypeNum; 
            
            //console.log(sum)

         }

         console.log(`${key}: ${sum}`)



    }

}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ])
