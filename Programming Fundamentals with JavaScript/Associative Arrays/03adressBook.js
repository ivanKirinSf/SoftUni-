function addressBook(input){

    let obj = {};

    for(let el of input){
        let temp = el.split(":");
        let name = temp.shift();
        let adress = temp.shift();
        obj[name] = adress;        
    }

    //console.log(obj);
    let entries = Object.entries(obj).sort((a,b)=> a[0].localeCompare(b[0]));
    for(let  str of entries){
        let temp = str;
        let key = temp[0];
        let value = temp[1];

        console.log(`${key} -> ${value}`)
    }
}

addressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']
)
