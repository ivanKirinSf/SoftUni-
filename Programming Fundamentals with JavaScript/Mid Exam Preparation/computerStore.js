function computerStore(input){

    let type = "";
    let prices = 0;
    let taxes = 0;
    let sum = 0;
    let totalPrice = 0;

    
    for(let i = 0; i < input.length; i++){

      let temp = input[i];

      if(temp === "special"){

        type = "special";
        

      }else if(temp === "regular"){

        type = "regular";
        

      }else {
        temp = Number(input[i]);

        if(temp > 0){

          prices += temp;

        }else{

          console.log("Invalid price!");

        }
        
      }

      //console.log(temp)

    }

    if(prices === 0){

      console.log("Invalid order!");      

    }else {

    taxes = prices*0.2;

    sum = prices + taxes;

    if(type === "special"){

      totalPrice = sum*0.9;

    }else{
      totalPrice = sum
    }

    console.log("Congratulations you've just bought a new computer!"+ "\n" + `Price without taxes: ${prices.toFixed(2)}$` + "\n" + `Taxes: ${taxes.toFixed(2)}$` + "\n" + "-----------" + "\n" + `Total price: ${totalPrice.toFixed(2)}$`)

    }
    
}

computerStore([
  '1023', 
  '15', 
  '-20',
  '-5.50',
  '450', 
  '20', 
  '17.66', 
  '19.30', 'regular'
  ])
