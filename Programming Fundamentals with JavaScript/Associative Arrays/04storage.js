function storage(input){

    let map = new map();

    for(let el of input){
        let tokens = el.split(" ");
        let product = tokens.shift();
        let quantity = Number(tokens.shift());

        if(map.has(product)){
            let cuurrentQuantity = map.get(product);
            map.set(product, cuurrentQuantity + quantity);
        }else{
            map.set(product, quantity)
        }
    }

    for(let kv of input){
        let [key, value] = kv;

        console.log(`${key} -> ${value}`)
    }


}
storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)
