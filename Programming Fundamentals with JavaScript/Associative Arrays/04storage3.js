function storage(input){

    let map = new Map();

    for(let el of input){

       let info = el.split(" ");

       let product = info.shift();

       let quantity = Number(info.shift());

       if(!map.has(product)){

        map.set(product, +quantity);

       }else{

        let currentQuantity = Number(map.get(product));

        let finishedQuantity = quantity += currentQuantity;

        map.set(product, finishedQuantity)

       }       
       
    }

    for(let data of map){

        console.log(`${data[0]} -> ${data[1]}`);

       }
       
}

storage([
'apple 50',
'apple 61',
'coffee 115',
'coffee 40'
])
