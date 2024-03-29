function computerStore(input){

    let sum = 0;
    let command = input.shift();

    while(command !== "special"){
        if(command === "regular"){
            break;
        }

        let price = Number(command);
        if(price < 0){
            console.log("Invalid price!");
            command = input.shift();
            continue;
        }
        sum += price;
        command = input.shift();
    }

    if(sum <= 0){
       return console.log("Invalid order!");
    }
    let taxes = sum*0.2;
    let totalPrice = sum*1.2;
    if(command === "special"){
        totalPrice = totalPrice*0.9;
    }

    console.log("Congratulations you've just bought a new computer!\n" +
    `Price without taxes: ${sum.toFixed(2)}$\n`+
    `Taxes: ${taxes.toFixed(2)}$\n`+
    "-----------\n"+
    `Total price: ${totalPrice.toFixed(2)}$\n`
    )

}

computerStore([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
    ])
