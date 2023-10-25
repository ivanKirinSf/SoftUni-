
function catalogue(input){

    let obj = {};

    for(let line of input){
        let [name, price] = line.split(" : ");
        obj[name] = Number(price);
    }

    //console.table(obj)

    let sortObj = Object.keys(obj).sort((a,b)=> a.localeCompare(b));

    let firstChar = "";
    for(let key of sortObj){

        if(firstChar !== key[0]){
            firstChar = key[0];
            console.log(firstChar)
        }

        let price = obj[key];

        console.log(`  ${key}: ${price}`)

    }
}


catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ])
