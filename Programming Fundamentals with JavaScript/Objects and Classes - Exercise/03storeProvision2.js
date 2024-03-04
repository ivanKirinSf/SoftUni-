function storeProvision(arr1, arr2){

    let num = arr1.length;

    let provision = [];


    for(let i = 0; i < num; i+=2){

        let product1 = arr1[i];
        let product2 = arr2[i];

        let index = arr1.indexOf(product2);

        if(index !== -1){
            let res = Number(arr2[i+1]) + Number(arr1[index+1]);

            res = "" + res

            arr1.splice((index+1), 1, res)

        }else if(index === -1){

            arr1.push(product2);
            arr1.push(arr2[i+1]);

        }

    }

    for(let k = 0; k < arr1.length; k+=2){

        let temp = arr1[k];

        provision.product = temp;
        provision.quantity = arr1[k+1];

        console.log(`${provision[`product`]} -> ${provision[`quantity`]}`)

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
