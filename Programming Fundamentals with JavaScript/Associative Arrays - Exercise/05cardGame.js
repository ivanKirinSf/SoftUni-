function cardGame(input){

 let players = new Map();

 let cardsTypeList = {      
    "S" : 4,
    "H" : 3,
    "D" : 2,
    "C" : 1,
 }

 let cardsPowerList = {

    "2" : 2,
    "3" : 3,
    "4" : 4,
    "5" : 5,
    "6" : 6,
    "7" : 7,
    "8" : 8,
    "9" : 9,
    "10" : 10,
    "J" : 11,
    "Q" : 12,
    "K" : 13,
    "A" : 14,

 } 

 for(let el of input){
     let temp = el.split(": ");

     let name = temp.shift();

     let cards = temp[0];

     let cardsArr = cards.split(", ");

     if(!players.has(name)){

        players.set(name, new Set())
     }

     for(let card of cardsArr){

          players.get(name).add(card)       

     }  

 }

 for(let [key, value] of players){

    let sum = 0;

    for(let line of value){

        let current = line.split("");

        let type = current.pop();

        let power = current.join("");

        let powerNum = cardsPowerList[power];

        let typeNum = cardsTypeList[type];

        sum += powerNum*typeNum;

        //console.log(`${key}:${sum}`);

    }

    console.log(`${key}: ${sum}`);

    //console.log(current)
 }
 //console.table(players)

}

cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
    ])
