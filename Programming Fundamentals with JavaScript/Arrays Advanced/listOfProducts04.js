function listOfProducts(arr){

    let sorted = arr.sort();

    let listed = list(sorted);

    let printProducts = print(listed);


    function list(input){

        let products = [];

        for(let i = 0; i<input.length; i++){

            let product = input[i];

            let num = i+1;

            let text = `${num}.${product}`

            products.push(text)
            
        }

        return products        

    }

    
    function print(input){

        for(let i = 0; i<input.length; i++){

            let temp = input[i];
            console.log(temp)
            
        }
    }

}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])
