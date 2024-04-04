function phoneBook(input){

    let phoneBook = {};

    for(let el of input){

        let [name, phoneNumber] = el.split(" ");

        //console.log(name);

        phoneBook[name] = phoneNumber;

    }

    for(let name in phoneBook){

        console.log(`${name} -> ${phoneBook[name]}`);

    }    

}
