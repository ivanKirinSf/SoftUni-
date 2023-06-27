function houseParty(input){

    let list = [];

//add the person if he/she is not in the list 
//If he/she is in the list print: "{name} is already in the list!"
//the second type of input, you have to remove the person if he/she is in the list 
//if not print: "{name} is not in the list!"
//print all the guests each on a separate line

for(let i = 0; i<input.length; i++){
    let temp = input[i].split(" ");
    let name = temp[0];
    let command = temp.slice(1, temp.length).join(" ");
    let text = `${command}`

    switch( text ){

        case "is going!": 
        if(list.indexOf(name) === -1){

            list.push(name);

        }else if(list.indexOf(name) !== -1){

            console.log(`${name} is already in the list!`)

        }break;
        case "is not going!":
            if( list.indexOf(name) !== -1 ){
                let index = list.indexOf(name);

                list.splice(index,1)

            }else if( list.indexOf(name) === -1 ){

                console.log(`${name} is not in the list!`)

            }
        
    } 
    
}

console.log(list.join("\n"))

}

houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!'
])
