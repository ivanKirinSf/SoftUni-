function storage(input){

    let map = new Map();

    for(let el of input){
        let tokens = el.split(" ");
        let product = tokens.shift();
        let quantity = Number(tokens.shift());

        if(map.has(product)){
            let cuurrentQuantity = map.get(product);
            map.set(product, quantity + cuurrentQuantity)
        }else{
            map.set(product, quantity)
        }
    }
    
    for(let kv of map){

        let [key, value] = kv;

        console.log(`${key} -> ${value}`)
        
    }

}

storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']

)
