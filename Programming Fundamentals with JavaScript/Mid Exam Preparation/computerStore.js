function computerStore(input){

    let type = "";
    let prices = 0;

    
    for(let i = 0; i < input.length; i++){

      let temp = input[i];

      if(temp === "special"){

        type = "special";
        break;

      }else if(temp === "regular"){

        type = "regular";
        break;

      }else {
        temp = Number(input[i])

        prices += temp
      }

      //console.log(temp)

    }

    console.log(prices)
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
