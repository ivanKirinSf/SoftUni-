function fancyBarcode(input){

    let n = input.shift();

    let group = "";

    let isValid = [];

    let pattern = /[@#]+[A-Z][A-Za-z0-9+]{4,}[@#]+/gm;

    for(let i =0; i <= input.length; i++){

        let str = input[i];

        let wordss = str.match(pattern);

        //console.log(wordss)

        if(pattern.test(str) === true){

               let codePatttern = /[0-9]/g;            

               let matches = str.match(codePatttern);

               if(matches){

                group = matches.join("");

                console.log(`Product group: ${group}`)

               }else if(matches === null){

               group = "00";

               console.log(`Product group: ${group}`)

               }  

               
        }else{

            console.log("Invalid barcode");

        }       

    }
}

fancyBarcode([
"6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"
])
