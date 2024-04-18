function addressBook(input){

    let persons = {};

    for(let person of input){

        let personInfo = person.split(":");

        let name = personInfo.shift();

        let adress = personInfo.shift();

        if(!person.hasOwnProperty(name)){

            persons[name] = adress

        }else {

            persons[name] = adress

        }

        //console.log(adress)
    }

    let sorted = Object.keys(persons).sort((a,b) => a.localeCompare(b));

    for(let info of sorted){

        console.log(`${info} -> ${persons[info]}`);

    }

}

addressBook([
    'Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd'
    
])
