function employees(input){
    
    let person = {};

    for(let i = 0; i < input.length; i++){

        let name = input[i];
        let num = name.length;      
        
        person.name = name,
        person.num = num

        let entries = Object.entries(person)
        
        console.log(`Name: ${person['name']} -- Personal Number: ${person[`num`]}`)        
                      
           
        
    }

}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])
