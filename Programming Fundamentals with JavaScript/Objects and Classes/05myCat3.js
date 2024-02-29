function cats(input){    

    class Cat{

        constructor(name, age){
            this.name = name;
            this.age = age;
        }

        meow(){
            console.log(`${this.name}, age ${this.age} says Meow `)
        }
    }

    for(let i = 0 ; i < input.length; i++){
        let temp = input[i].split(" ");

        let name = temp.shift();
        let age = Number(temp.shift());

        let catInfo = new Cat(name, age);
        catInfo.meow()        
    }   

}

cats(['Mellow 2', 'Tom 5'])
