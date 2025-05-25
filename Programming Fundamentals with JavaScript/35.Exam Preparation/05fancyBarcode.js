function fancyBarcode(input){

    let num = input.shift();

    let pattern = /@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+/;

    let digPat = /[0-9]/g;

    for(let i = 0; i < num; i++){

        let temp = input[i];

        if(pattern.test(temp)){

            let digits = temp.match(digPat);

            if(digits){

                let productGroup = digits.join("");

                console.log(`Product group: ${productGroup}`);

            }else{

                console.log(`Product group: 00`);
            }

            

        }else{

            console.log("Invalid barcode")
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
