function furniture(input){

   let pattern = />>(?<name>[A-Za-z]+)<<(?<price>[0-9.]+)!(?<quantity>\d+)/

   let totalPrice = 0;

   console.log("Bought furniture:");

   for(let line of input){

      if(line === "Purchase"){
         break;
      }

      if(pattern.test(line)){

         let product = pattern.exec(line);

         let productPrice = Number(product.groups.price)*Number(product.groups.quantity);

         totalPrice += productPrice;

         console.log(product.groups.name);

      }
   }

console.log(`Total money spend: ${totalPrice.toFixed(2)}`);

}

furniture(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase'])
