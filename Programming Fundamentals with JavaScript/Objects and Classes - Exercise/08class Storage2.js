class Storage{

    constructor(capacity){

        this.products = [];
        this.capacity = capacity;
        

    }

    addProduct(product){

        this.products.push(product);
        this.capacity = this.capacity - this.products.quantity;
        this.totalCost += this.products.price * this.products.quantity;

    }

    getProducts(){

        for(let el of this.products){
            let text = JSON.stringify(el);

            console.log(text)
        }

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
