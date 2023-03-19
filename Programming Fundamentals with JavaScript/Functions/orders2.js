function orders(product, n){

let result = copyOrders(product, n);
console.log(result) 

function copyOrders(product, n){
    
    let sum = 0;

    switch(product){
        case "coffee": sum = 1.50*n;
        break;
        case "water": sum = 1.00*n;
        break;
        case "coke": sum = 1.40*n;
        break;
        case "snacks": sum = 2.00*n;
        break;
    }

    return sum.toFixed(2)


}


}
