function pirates(input){

    let city = {};

    let arr = [];

    for(let i = 0; i < input.length; i++){

        let temp = input[i];

        if(temp !== "Sail" && temp != "End"){

            let commands = temp.split("||");

            let command = commands.shift();

            if(command !== "Plunder" && command !== "Prosper"){

                let town = command;

                let population = Number(commands.shift());

                let gold = Number(commands.shift())

                city.town = town;

                city.population = population;

                city.gold = gold;

                arr.push(city);

                let index = arr.indexOf(city[town]);

                if(index !== -1){

                    console.log("monkey")
                    
                }

                city = {};

                //console.log(population)

            }

            //console.log(commands)
        }

    }

}

pirates([
"Tortuga||345000||1250",
"Santo Domingo||240000||630",
"Havana||410000||1100",
"Sail",
"Plunder=>Tortuga=>75000=>380",
"Prosper=>Santo Domingo=>180",
"End"
])
