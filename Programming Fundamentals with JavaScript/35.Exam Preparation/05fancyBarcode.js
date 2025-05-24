function fancyBarcode(input){

    let num = Number(input.shift());

    //console.log(num);

    let pattern = /@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+/;

   let digitsPat = /[0-9]/g;

   for(let i = 0; i < num; i++){

    let temp = input[i];

        if(pattern.test(temp)){

            let digits = temp.match(digitsPat);

            if(digits){

                let productGroup = digits.join("");

                console.log(`Product group: ${productGroup}`);

            }else{

                console.log(`Product group: 00`);

            }            
            
        }else {

            console.log("Invalid barcode")

        }
   }
    
}

fancyBarcode
([
"3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"
])
