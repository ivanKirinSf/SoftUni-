function fancyBarcode(input){

    let n = input.shift();

    let group = "";

    let isValid = [];

    let pattern = /[@#]+[A-Z][A-Za-z0-9+]{4,}[@#]+/gm;

    for(let i =0; i <= input.length; i++){

        let str = input[i];

        if((isValid = pattern.exec(str)) !== null){

               let codePatttern = /[0-9]/g;            

               let matches = str.match(codePatttern);

               if(matches){

                group = matches.join("");

                console.log(`Product group: ${group}`)

               }else if(matches === null){

               group = "00";

               console.log(`Product group: ${group}`)

               }  

               
        }else if((isValid = pattern.exec(str)) === null){

            console.log("Invalid barcode");

        }       

    }
}

fancyBarcode([
"3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"
])
