function softUniBarIncome(input){

    let patternName = /%(?<client>[A-Za-z])%<(?<product>[A-Z]+[a-z])>|(?<quantity>)|(?<price>)$/g;

    totalPrice = 0;

for(let line of input){

    let match = [];

    if(line === "end of shift"){
        break;
    }

    if(line.test(patternName)){

        match = line.exec(patternName);

        totalPrice += Number(match.groups.price) * Number(match.groups.count);
    }
}

}

softUniBarIncome([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
])
