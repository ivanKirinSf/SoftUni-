function storage(input){

 let map = new Map(); 
 
 for(let el of input){

    let info = el.split(" ");

    let product = info.shift();

    let quantity = Number(info.shift());

    //console.log(quantity);

    if(map.hasOwnProperty(product)){

        map.set(product, +quantity);
   
    }else{
   
       let currentQuantity = Number(map.get(product));
   
       let finalQuantity = currentQuantity += quantity;
   
       map.set(product, finalQuantity);
   
    }
   
    //console.table(map)
    
 }

}

storage([
//'tomatoes 10',
'coffee 5',
//'olives 100',
'coffee 40'
])
