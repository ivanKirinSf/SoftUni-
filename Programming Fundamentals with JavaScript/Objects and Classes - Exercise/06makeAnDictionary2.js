function makeADictionary(info){

    let dictionary = {}

    for(let i = 0; i < info.length; i++){
        
        let tempObj = JSON.parse(info[i]);
        let keys = Object.keys(tempObj);
        let key = keys.shift();
        dictionary[key] = tempObj[key];
        //console.log(tempObj[key]);
    }

    let sort = dictionary.sort((a,b) => a[key].localeCompare(b[key]));

    console.log(sort)

}

makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ])
