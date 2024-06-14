function cardGame(input){


    let players = new Map();

    for(let el of input){

        let temp = el.split(": ");

        let name = temp.shift();

        let cards = temp[0];

        let cardsArr = cards.split(", ")

        //console.log(cardsArr);

        if(!players.has(name)){

            players.set(name, new Set());

        }

        for(let card of cardsArr){

            players.set(name).get(card)

        }

    }

    console.table(players)

    //if(!players.has(name))

}
