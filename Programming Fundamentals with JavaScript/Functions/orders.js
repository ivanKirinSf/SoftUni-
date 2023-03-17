function orders(product, quantity) {

    let result = shop(product, quantity);
    
    console.log(result);

    function shop(product, quantity){
        let coffeePrice = 1.50;
        let waterPrice = 1.00;
        let cokePrice = 1.40;
        let snacksPrice = 2.00;
        let totalPrice = 0;

        if(product === "coffee"){
            totalPrice = coffeePrice * quantity;
        }else if(product === "water"){
            totalPrice = waterPrice * quantity;
        }else if(product === "coke"){
            totalPrice = cokePrice * quantity;
        }else if(product === "snacks"){
            totalPrice = snacksPrice * quantity;
        }else if(product === "snacks"){
            totalPrice = totalPrice * quantity;
        }

        return totalPrice.toFixed(2)

    }
}
