function computerStore (input){
      
    
    let totalPriceNoTaxes = 0;
    let taxes = 0;
    let discount = 0;
    let type = input.pop();

    for(let i = 0; i<input.length; i++){
             
        let temp = Number(input[i]);
        if(temp > 0){

          totalPriceNoTaxes += temp;
        }else if(temp < 0){
            console.log("Invalid price!")
        }

        //console.log(temp)

    }

    taxes = totalPriceNoTaxes*0.2;

    if(type === "regular"){
        discount = 0;
    }else {
        discount = (totalPriceNoTaxes + taxes)*0.1;        
    }

    let finalPrice = totalPriceNoTaxes + taxes - discount;

    if(finalPrice > 0){
        console.log(`Congratulations you've just bought a new computer!`+`\n`+
`Price without taxes: ${totalPriceNoTaxes.toFixed(2)}$`+`\n`+
`Taxes: ${taxes.toFixed(2)}$`+`\n`+
`-----------`+`\n`+
`Total price: ${finalPrice.toFixed(2)}$`)
    }else {
        console.log("Invalid order!")
    }   

}
