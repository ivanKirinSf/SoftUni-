function convertToJSON(firstName, lastName, hairColor){

    let person  = {}

        person.name = firstName;
        person.lastName = lastName;
        person.hairColor = hairColor;
        
        //console.log(person);

        console.log(JSON.stringify(person))



}

convertToJSON('George', 'Jones', 'Brown')
