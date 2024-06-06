function cardGame(input) {

    //let list = input.split(", ");

    let players = {};

    for (let temp of input) {

        let data = temp.split(": ");

        let person = data.shift();

        let cardsList = data.shift().split(", ");

        let value = 0;

        for (let card of cardsList) {

            card = card.split("");

            let type = card.pop();

            let length = card.length;

            let power = "";

            let powerCode = ""

            if (length === 1) {

                power = card.shift();

                powerCode = power.charCodeAt(0);

            } else if (length === 2) {

                power = 10;

            }



            if (powerCode === 74) {

                let tempValue = 11;

                value += tempValue;

            } else if (powerCode === 81) {

                let tempValue = 12;

                value += tempValue;

            } else if (powerCode === 75) {

                let tempValue = 13;

                value += tempValue;

            } else if (powerCode === 65) {

                let tempValue = 14;

                value += tempValue;
            } else {

                value += power;

            }



        }
        //console.log(cardsList)
    }
}

cardGame(
    ['Peter: 10C, 4H, 9H, AS, QS',
        //'Tomas: 3H, 10S, JC, KD, 5S, 10S',
        //'Andrea: QH, QC, QS, QD',
        //'Tomas: 6H, 7S, KC, KD, 5S, 10C',
        //'Andrea: QH, QC, JS, JD, JC',
        //'Peter: JD, JD, JD, JD, JD, JD'
    ]
)
