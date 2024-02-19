function friendListMaintenance(input){

    let friends = input.shift().split(", ");

    let commands = input;

    let blacklisted = 0;

    let lostNames = 0;

    for(let i = 0; i<commands.length; i++){
        let temp = commands[i].split(" ");

        let command = temp.shift();

        if(command === "Blacklist"){

            let name = temp.shift();

            let index = Number(friends.indexOf(name));

             


    if(index >= 0 && index < friends.length){

        friends[index] = "Blacklisted";

        console.log(`${name} was blacklisted.`);

        blacklisted += 1;

    }else if(name !== "Blacklisted" && name !== "Lost"){

        console.log(`${name} was not found.`)

    }

           

            //console.log(index)

        }else if(command === "Error"){

            let index = Number(temp.shift());

            let name = friends[index];

            //console.log(name)

            if((index >= 0 && index < friends.length) && (name !== "Blacklisted" || name !== "Lost")){

                friends[index] = "Lost";

                console.log(`${name} was lost due to an error.`);

                lostNames +=1;

            }

            //console.log(index)

        }else if(command === "Change"){

            let index = Number(temp.shift());

            let newName = temp.shift();

            let name = friends[index]


            if(name !== newName){

                if(index >= 0 && index < friends.length){                 
    
                    

                        friends[index] = newName
    
                        console.log(`${name} changed his username to ${newName}.`)

                        //if(newName === "Blacklisted"){

                            //blacklisted += 1;

                        //}

                        //if(newName === "Lost"){

                            //lostNames += 1;

                        //}                                     
    
                }

            }                
    

                        

            //console.log(newName)
        }else if(command === "Report"){

            console.log(`Blacklisted names: ${blacklisted}`)
            console.log(`Lost names: ${lostNames}`)
            console.log(friends.join(" "));
            break;

        }

        //console.log(command)
    }
    
    //console.log(friends)

}

friendListMaintenance ([
"Boro, Goro, Joro, Zoro",
"Change 0 Lost",
"Change 1 Lost",
"Change 2 Lost",
"Change 3 Lost",
"Report"])
