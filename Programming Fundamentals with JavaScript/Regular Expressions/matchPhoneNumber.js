function matchPhoneNumber(input){

    let patern = /(?<!\d)[+]359[ -]2\1\d{3}\d{4}/g;

    let phoneNumbers = [];

    let number = null;
    
    while((number = patern.exec(input)) !== null){

        phoneNumbers.push(number[0]);
    }

    console.log(phoneNumbers.join(" "));

}

matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])
