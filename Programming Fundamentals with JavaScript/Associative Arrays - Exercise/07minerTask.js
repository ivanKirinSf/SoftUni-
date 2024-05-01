function minerTask(input){

    let list = {};

    for(let i = 0; i < input.length; i++){

        if(i % 2 === 0){

            let resource = input[i];

            let quantity = Number(input[i+1]);

            if(list.hasOwnProperty(resource)){

                list[resource] += quantity;

            }else{

                list[resource] = quantity;

            }

        }
        
    }

    let entries = Object.entries(list);

    for(let el of entries){

        console.log(`${el[0]} -> ${el[1]}`)
    }

    //console.table(`${entries[0]} -> ${entries[1]}`)
    //console.table(`${entries[0]} -> ${entries[1]}`)
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
