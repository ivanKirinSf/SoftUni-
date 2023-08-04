function manOWar(input) {

    let piratShip = input.shift().split(">").map(x => Number(x));
    let warship = input.shift().split(">").map(x => Number(x));
    let maxHealth = Number(input.shift());



    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(" ");
        let command = tokens[0];
        let values = tokens.slice(1).map(Number);

        switch (command){
            case "Fire": fire(warship, values[0], values[1]); break;
            case "Defend": defend(piratShip, values[0], values[1], values[2]); break;
            case "Repair": repair(piratShip, values[0], values[1], maxHealth); break;
            case "Status": status(piratShip, maxHealth); break;
            case "Retair": {
                console.log(`Pirate ship status: ${piratShip.reduce((a,c)=> a + c, 0)}`);
                console.log(`Warship status: ${warship.reduce((a,c) => a + c, 0)}`);
                break;
            }

        }

    }

    function isShipDead(ship){
        ship.
    }

    function fire(warship, index, damage){
        if(index >= 0 && index < warship.length) {
            warship[index] -= damage;
        }
    }

    function defend(piratShip, startIndex, endIndex, damage){
        if(startIndex >= 0 && startIndex < warship.length && endIndex >= 0 && endIndex < warship.length) {
            piratShip[index] -= damage;
        }
    }

    function repair(ship, index, heal, maxHealth){
        if(index >= 0 && index < ship.length) {

            let missingHealth = maxHealth - ship[index];
            ship[index] += Math.min(missingHealth, heal);
        }
    }

    function status(ship, maxHealth){
        let damegedSections = ship.filter(x => x<maxHealth*0.2);

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
