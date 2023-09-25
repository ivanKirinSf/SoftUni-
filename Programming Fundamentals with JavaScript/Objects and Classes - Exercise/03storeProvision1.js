function storeProvision(arr1, arr2){

    
    let stock = 0;
    let stockNum = 0;
    let order = 0;
    let orderNum = 0;
    
    let obj = [];


    

    for(let i = 0; i<arr1.length; i+=2){

        stock = arr1[i];

        let index = arr2.indexOf(stock);               

        if(index !== -1){

            stockNum = Number(arr1[i+1]);  
            
            orderNum = Number(arr2[index+1]);

            let sum = stockNum + orderNum;

            arr1.splice(i+1,1,sum);

            arr2.splice(index, 2)

        }else {

        order = arr2.shift();
        orderNum = Number(arr2.shift()); 
            arr1.push(order);
            arr1.push(orderNum);
        }

        if(arr2.length === 0){
            break;
        }        
     
        }

        for(let k = 0; k < arr1.length; k+=2){

           let product = arr1[k];
            let productNum = Number(arr1[k+1]);

            obj.push(new Object(product, productNum))

            for(let [value,key] of obj){
                console.log(`${key} -> ${value}`)
            }

            //products.product = product;
           // products.productNum = productNum; 
            
            //for(let key of Object.keys(products)){
                //console.log(`${key} -> ${products[key]}`)
            }
        }

       


        

        


storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]       
    )
