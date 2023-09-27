function storeProvision(stocks, orders){

    let shop = {};

    for(let i = 0; i<stocks.length; i+=2){
        let name = stocks[i];
        
        let num = stocks[i+1];

        shop[name] = Number(num);
    }

    for(let i = 0; i<orders.length; i+=2){
        let name = orders[i];
        let num = orders[i+1];

        if(shop.hasOwnProperty(name)){
            shop[name] += Number(num);
        }else{
            shop[name] = Number(num);
        }
    
    }

    for(let product of Object.keys(shop)){
        console.log(`${product} -> ${shop[product]}`)
    }

    //console.table(shop)

}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])
