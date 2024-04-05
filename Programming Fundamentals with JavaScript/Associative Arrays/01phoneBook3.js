function phoneBook(input) {

    let phoneBook = {};

    for(let el of input){

        let temp = el.split(" ");

        let name = temp.shift();

        let phoneNum = temp.shift();

        phoneBook[name]= phoneNum;

       // phoneBook[phoneBook] = phoneNum;

        //console.log(phoneBook)
    }

    for(let name in phoneBook){

        console.log(`${name} -> ${phoneBook[name]}`)

    }

    //console.log(phoneBook)

}

phoneBook([
'George 0552554',
'Peter 087587',
'George 0453112',
'Bill 0845344'
])
