function listOfProducts (input){

    let sorted = input.sort();

    //console.log(sorted)

    for(let i = 0; i<sorted.length; i++){
        let temp = sorted[i];

        console.log(`${i + 1}.${temp}`)
    }

}

listOfProducts (['Potatoes', 'Tomatoes', 'Onions', 'Apples'])
