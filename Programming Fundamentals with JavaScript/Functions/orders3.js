function orders(product, n){

   let res = cost(product, n)
   console.log(res);

   function cost(product, n){
     
      let sum = 0;

      if(product === "coffee" ){
         sum = 1.5*n;
      }else if(product === "water" ){
         sum = 1*n;
      }else if(product === "coke" ){
         sum = 1.40*n;
      }else if(product === "snacks" ){
         sum = 2*n;
      }

      return sum.toFixed(2);
   }
}
