function phoneBook(input){

    let arr = input;

    let name = [];

    for(let i = 0; i<arr.length; i++){

        let temp = arr[i].split(" ");
        let obj = {};
        let key = temp.shift();
        let value = temp.shift();
        //console.log(value)
        obj.name = key;
        obj.num = value;

        if(name.indexOf(obj[name]) === -1){
        name.push(obj)
        //arr[key] = temp;
        }        

        
    }

    console.log(name)

    

}

phoneBook(['Tim 0834212554',
 'Tim 0877547887',
 //'Bill 0896543112',
 //'Tim 0876566344'
])
