function storage(input){

    let map = new Map();

    for(let el of input){

        let info = el.split(" ");

        let product = info.shift();

        let quantity = info.shift();

        if(!map.has(product)){

            map.get(product, +quantity);
    
        }else{
    
            let currentQuantity = Number(map.get(product));
    
            let finalQuantity = currentQuantity += quantity;
    
            map.get(product, quantity)
    
        }

    }    

}

storage([
'tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40'
])
