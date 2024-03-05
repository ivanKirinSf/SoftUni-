function storeProvision(arr1, arr2){

    let product = {};

    for(let i = 0 ; i < arr1.length; i+=2){
        let name = arr1[i];
        let num = Number(arr1[i+1]);
        product[name] = num;
    }

    for(let k = 0; k < arr2.length; k+=2){
        
        let name = arr2[k];
        let num = Number(arr2[k+1]);

        if(product.hasOwnProperty(name)){

            let res = num + product[name];
            product[name] = res;

        }else{

            product[name] = num;

        }
    }

    //console.table(product)

    for(let el of Object.keys(product)){

        console.log(`${el} -> ${product[el]}`)
    }

}
  

// push two arrays into third array(or modify the first one)
// create object and place properties
// push object into final arr
// print final arr

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]        
    )
