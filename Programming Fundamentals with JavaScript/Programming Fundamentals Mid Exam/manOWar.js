function manOWar(input) {

    let piratShip = input.shift().split(">").map(x => Number(x));
    let warship = input.shift().split(">").map(x => Number(x));
    let maxHealth = Number(input.shift());



    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(" ");
        let command = tokens[0];
        let values = tokens.slice(1).map(Number);

        //switch (command) {

           // case "Fire":
            //case "Defend":
            //case "Repair":
            //case "Status":
            //case "Retair":

        //}

    }

    function Fire(warship, index, damage){
        if(index >= 0 && index < warship.length) {
            warship[index] -= damage;
        }
    }

    function Defend(piratShip, startIndex, endIndex, damage){
        if(startIndex >= 0 && startIndex < warship.length && endIndex >= 0 && endIndex < warship.length) {
            piratShip[index] -= damage;
        }
    }

    function repair(ship, index, heal){
        if(index >= 0 && index < ship.length) {
            warship[index] -= damage;
        }
    }


}

manOWar(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"])
