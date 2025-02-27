function softUniBarIncome(input){

    let patternName = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>[0-9]+\.?\d*)\$/g;

    totalPrice = 0;

   for(line of input){
           
      let match = [];

      if(line === "end of shift"){

        break;

      }

      if(patternName.test(line)){

        let totalPrice = Number(patternName.groups.count) * Number(patternName.groups.price);

        console.log(totalPrice)

      }

   }
}

softUniBarIncome([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
])
