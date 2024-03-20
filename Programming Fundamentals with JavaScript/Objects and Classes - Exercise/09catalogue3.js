
function catalogue(input){

    let obj = {};

    for(let i = 0; i < input.length; i++){

        let temp = input[i].split(" : ");
        let name = temp.shift();
        let price = temp.shift();  

        obj[name] = price;

    }

    let sorted = Object.keys(obj).sort((a,b) => a.localeCompare(b));

    let firstChar = "";

    for(let key of sorted){

       
       if(firstChar !== key[0]){

        console.log(key[0]);
        firstChar = key[0];

       }        

        console.log(`  ${key}: ${obj[key]}`);

    }
}

catalogue ([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
])
