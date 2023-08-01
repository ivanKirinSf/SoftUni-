function manOWar(input) {

    let piratShip = input[0].split(">");
    let warship = input[1].split(">");
    let maxHealth = Number(input[2]);

    input.splice(0, 3)

    let commands = input;

    for (let i = 0; i < commands.length; i++) {
        let temp = commands[i].split(" ");
        let command = temp[0];

        if (command === "Fire") {
            let index = Number(temp[1]);
            let damage = Number(temp[2]);
            if (index <= warship.length) {
                let sectionHealth = Number(warship[index]);
                let res = sectionHealth - damage;
                if (res <= 0) {
                    return console.log(`You won! The enemy ship has sunken.`)
                } else {
                    let num = Number(res);
                    warship.splice(index, 1, num);

                }

            } else {
                continue;
            }
            //console.log(warship.length)
        } else if (command === "Defend") {
            let start = Number(temp[1]);
            let end = Number(temp[2]);
            let damage = Number(temp[3]);
            if (start < piratShip.length && end < piratShip.length) {
                for (let i = start; i <= end; i++) {
                    let sectionHealth = piratShip[i];
                    let res = sectionHealth - damage;
                    if (res <= 0) {
                        return console.log(`You lost! The pirate ship has sunken.`);
                    } else {
                        let num = Number(res);
                        piratShip.splice(i, 1, Number(num));
                    }
                    //console.log(sectionHealth)
                }

            } else {
                continue;
            }
            //console.log(damage)
        }else if (command === "Repair"){
            let index = 
        }


        //console.log(command)
    } 

    console.log(piratShip)

}

manOWar((["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    //"Fire 2 5",
    //"Fire 8 100",
    "Defend 2 3 2",
    //"Defend 0 3 5",
    //"Repair 1 33",
    //"Status",
    //"Retire"
])
)
