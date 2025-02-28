function softUniBarIncome(input){

    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>[0-9]+\.?\d*)\$/g;

    totalPrice = 0;

   for(let line of input){

    let match = [];
       if(line === "end of shift"){

        break;

       }

       if(pattern.test(line)){

        match = line.match(pattern);

        //console.log(match.groups.product)

        let price = Number(match.groups.price) * Number(match.groups.count);
           
        totalPrice += price;

        console.log(`${match.groups.name}: ${match.groups.product} - ${price.toFixed(2)}`);

       }


   }

   console.log(totalPrice.toFixed(2))

 
}

softUniBarIncome([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
])
