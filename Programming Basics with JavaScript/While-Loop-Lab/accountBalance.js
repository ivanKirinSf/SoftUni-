function accountBalance(input){
    let index = 0;
    let deposit = input[index]
    let total = 0;

    while(deposit !== "NoMoreMoney"){
        let amount = Number(deposit);

        if (amount < 0){
            console.log("Invalid operation!");
            break;
        }

        console.log(`Increase: ${amount.toFixed(2)}`);
        total += amount;
        index++;
        deposit = input[index];

    }

    console.log(`Total: ${total.toFixed(2)}`)
       

}

accountBalance(["5.51", 
"69.42",
"100",
"NoMoreMoney"])
