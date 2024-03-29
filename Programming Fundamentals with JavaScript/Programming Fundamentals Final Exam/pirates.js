function pirates(input) {

    let city = {};

    let arr = [];

    for(let i = 0; i < input.length; i++){

        let temp = input[i];

        if(temp === "Sail"){
            break;
        }

        let commands = temp.split("||");

        let name = commands.shift();

        let people = Number(commands.shift());

        let gold = Number(commands.shift());

        city.name = name;

        city.people = people;

        city.gold = gold;

        let res = arr.find(e => e.name === name);

        let index = arr.indexOf(res);

        if(index !== -1){

            arr[index].people += people;

            arr[index].gold += gold;

        }else{

            arr.push(city);

        }       

        city = {};  

       //console.log(name)
    } 

    for(let j = 0; j < input.length; j++){

        let temp = input[j];

        if(temp === "End"){
            
            if(arr.length > 0){

                console.log(`Ahoy, Captain! There are ${arr.length} wealthy settlements to go to:`)

                for(let el of arr){

                    console.log(`${el.name} -> Population: ${el.people} citizens, Gold: ${el.gold} kg`)

                }
            }else if(arr.length === 0){

                console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);

            }
        }

        let commands = temp.split("=>");

        let command = commands.shift();

        if(command === "Plunder"){

            let cityName = commands.shift();

            let killedPeople = Number(commands.shift());

            let takenGold = Number(commands.shift());

            //console.log(`${cityName} plundered! ${takenGold} gold stolen, ${killedPeople} citizens killed.`);
            
            let res = arr.find(a => a.name === cityName);

            let index = arr.indexOf(res);

            arr[index].people -= killedPeople;

            arr[index].gold -= takenGold;

            console.log(`${cityName} plundered! ${takenGold} gold stolen, ${killedPeople} citizens killed.`);

            if(arr[index].people <= 0 || arr[index].gold <= 0){

                arr.splice(index, 1);

                console.log(`${cityName} has been wiped off the map!`);
                continue; 
            }

        }else if(command === "Prosper"){

            let cityName = commands.shift();

            let cityGold = Number(commands.shift());

            let res = arr.find(e => e.name === cityName);

            let index = arr.indexOf(res);   
            
            if(cityGold < 0){
                console.log(`Gold added cannot be a negative number!`);
                continue;
            }else{

                arr[index].gold += cityGold;

                console.log(`${cityGold} gold added to the city treasury. ${cityName} now has ${arr[index].gold} gold.`);

            }        

                   

        }

        //console.log(commands)
    }

    //console.table(arr)

        }   


pirates([

"Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"

])

