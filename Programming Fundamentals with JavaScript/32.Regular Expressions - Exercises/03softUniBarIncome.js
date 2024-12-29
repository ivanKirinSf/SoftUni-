function softUniBarIncome(input){

    let patternName = /%(?<client>[A-Za-z])%<(?<product>[A-Z]+[a-z])>|(?<quantity>)|(?<price>)$/g;

    for(let line of input){
        if(line === "end of shift"){
            break;
        }


    }



}

softUniBarIncome([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
])
