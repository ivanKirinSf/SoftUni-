function catalogue(input){

    let obj = {};

    for(let line of input){
        let [name, price] = line.split(" : ");
        let key = name;
        obj[key] = Number(price);           
    }

    let sort = Object.keys(obj).sort((a,b)=> a.localeCompare(b));

    let firstChar = "";
    for(let key of sort){
        
        let name = key;  
        
        let firstChar = "";

        if(firstChar !== name[0]){
            firstChar = name[0];
            console.log(firstChar);
        }

        let price = obj[key]

        console.log(`  ${name} : ${price}`)

        

        //console.log(key)
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
