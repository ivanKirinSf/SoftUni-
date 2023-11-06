function phoneBook(input){

let dict = {};

for(let el of input){
    let temp = el.split(" ");
    let name = temp[0];
    let phone = temp[1];
    dict[name] = phone
    
}

for(let key in dict){
    console.log(`${key} -> ${dict[key]}`)
}

}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)
