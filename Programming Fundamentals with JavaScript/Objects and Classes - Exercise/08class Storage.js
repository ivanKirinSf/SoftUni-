
let storageObj = {}

class Storage{
    constructor(capacity){
        this.capacity = capacity;
    }

    

    addProduct(product){        

        if(this.capacity > 0){

        this.capacity -= product.quantity;

        if(this.capacity > 0){

        this.name = product.name;
        this.price = product.price;
        this.quantity = product.quantity;
        this.totalCost += product.price*product.quantity;        

        }        

        }       

    }

    getProducts(){

        let text = JSON.stringify(storage);

        console.log(text)

    }
}

let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
let productThree = {name: 'Bread', price: 1.10, quantity: 8};
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
console.log(storage.getProducts());
console.log(storage.capacity);
console.log(storage.totalCost);
