function pirates(input){

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

            arr[index].gold += gold;
            arr[index].people += people;

        }else{
            arr.push(city)

            city = {};
        }
        //console.log(arr)
    }

    for(let j = 0; j < input.length; j++){

        let temp = input[j].split("=>");

        let command = temp.shift();

        if(command === "Plunder"){

            let cityName = temp.shift();

            let killedPeople = Number(temp.shift());

            let stolenGold = Number(temp.shift());

            let res = arr.find(a => a.name === cityName)

            let indexRes = arr.indexOf(res);   
            
            arr[indexRes].people -= killedPeople;

            arr[indexRes].gold -= stolenGold;

            console.log(`${cityName} plundered! ${stolenGold} gold stolen, ${killedPeople} citizens killed.`)

            if(arr[indexRes].people <= 0 || arr[indexRes].gold <= 0){

                arr.splice(indexRes, 1);

                console.log(`${cityName} has been wiped off the map!`);

            }
            

        }else if(command === "Prosper"){

            let townName = temp.shift();

            let townGold = Number(temp.shift());

            let res = arr.find(b => b.name === townName);

            let indexRes = arr.indexOf(res);

            if(indexRes !== -1){

                if(townGold < 0){

                    console.log(`Gold added cannot be a negative number!`);

                }else if(townGold >= 0){

                    arr[indexRes].gold += townGold;

                    console.log(`${townGold} gold added to the city treasury. ${townName} now has ${arr[indexRes].gold} gold.`)

                }                

            }

        }else if(command === "End"){

            if(arr.length > 0){
                console.log(`Ahoy, Captain! There are ${arr.length} wealthy settlements to go to:`);

                for(let el of arr){

                console.log(`${el.name} -> Population: ${el.people} citizens, Gold: ${el.gold} kg`)

                }
            }else if(arr.length <= 0){

               console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`) 
            }

        }

        //console.log(command);


        

    }

    //console.table(arr)



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
