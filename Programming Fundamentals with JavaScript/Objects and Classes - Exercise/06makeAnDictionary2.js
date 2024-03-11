function makeADictionary(input){

    let parsed = {};

    let dictionary = [];

    for(let i = 0; i < input.length; i++){
       
        let temp = input[i];

        parsed = JSON.parse(temp);

        dictionary.push(parsed)

        for(let [key, value] of Object.entries(parsed)){

            let term = key;
            let def = value;

            let isExist = dictionary.findIndex(k => k.key === term){

                if(isExist !== -1){
                    dictionary[isExist][key] = def;
                }

            }

            //console.log(term);
            //console.log(value);

        }

        //console.log(parsed);

    }

    //console.log(dictionary[0]);

}

makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ])
