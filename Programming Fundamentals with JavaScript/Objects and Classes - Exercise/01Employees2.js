function employees(input){

    let obj = {};

    for(let i = 0 ; i < input.length; i++){
        let temp = input[i];

        let name = temp;
        let num = temp.length;

        obj.name = name;
        obj.num = num;

        //console.log(obj)

        //let keys = Object.keys(obj);

        //console.log(entries)

        
        console.log(`Name: ${obj.name} -- Personal Number: ${obj.num}`)
        
    }

    
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])
