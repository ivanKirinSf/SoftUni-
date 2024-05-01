function minerTask(input){

    let new Map = {};

    //let resource = "";

    for( let i = 0; i < input.length; i++ ){

        if(i % 2 === 0){

        let resource = "";

        let quantity = 0; 
        
        let finalQuantity = 0;

           resource = input[i];

           if(map.has(resource)){

            let currentQuantity = resources.get(resource);

            quantity = Number(input[i+1]);

            resources[resource] = currentQuantity + quantity;

           }else {

           quantity = Number(input[i+1]);

           resources[resource] = finalQuantity + quantity;

           }                   
           
        }
        
    }

    for(let key in resources){

        console.log(`${key} -> ${resources[key]}`)
    }

    //console.table(resources)

}

minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ])
