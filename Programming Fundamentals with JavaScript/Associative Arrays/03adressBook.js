function adressBook(input){

    let dict = {};

    for(let str of input){
        let temp = str.split(":");
        let name = temp[0];
        let number = temp[1];
        dict[name] = number;
    }

    let entries = Object.entries(dict).sort(([aKey], [bKey]) => [aKey].localeCompare([bKey]));

    console.log(entries)
    
}

adressBook(
    ['Tim:Doe Crossing',
 'Bill:Nelson Place',
 'Peter:Carlyle Ave',
 'Bill:Ornery Rd'])
