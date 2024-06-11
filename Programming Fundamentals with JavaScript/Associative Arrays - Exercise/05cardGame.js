function cardGame(input){

   let players = new Map();

   for(let el of input){

    let temp = el.split(": ");

    let name = temp.shift();

    let cards = temp[0];

    if(!players.has(name)){

        players.set(name, new Set())
    }
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
