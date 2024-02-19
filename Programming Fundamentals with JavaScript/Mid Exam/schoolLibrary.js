function schoolLibrary(input){

    let shelf = input.shift().split("&")

    let commands = input

    for(let i = 0; i<commands.length; i++){
        let temp = commands[i].split(" | ");

        let command = temp.shift();

        if(command === "Add Book"){

            let name = temp.shift();

            let index = shelf.indexOf(name);

            if(index === -1){

                shelf.unshift(name)

            }           

            //console.log(name)

        }else if(command === "Take Book"){

            let name = temp.shift();

            let index = shelf.indexOf(name);

            if(index >= 0){

                shelf.splice(index, 1);

            }

            //console.log(index)

        }else if(command === "Swap Books"){

            let name1 = temp.shift();

            let name2 = temp.shift();

            let index1 = shelf.indexOf(name1);

            let index2 = shelf.indexOf(name2);

            if(index1 >= 0 && index2 >= 0){

                shelf.splice(index1, 1, name2);

                shelf.splice(index2, 1, name1);

            }

            //console.log(index2);

        }else if(command === "Insert Book"){

           let name = temp.shift();

           let index = shelf.indexOf(name);

           if(index < 0){

            shelf.push(name);

           }

           //console.log(index)

        }else if(command === "Check Book"){

        let index = Number(temp.shift());

        if(index >= 0 && index < shelf.length){

            console.log(shelf[index])

        }       

        }else if(command === "Done"){
            break;
        }
        //console.log(command)
    }

    console.log(shelf.join(", "))

}

schoolLibrary([
"War and Peace&Hamlet&Ulysses&Madame Bovary",
"Check Book | 2",
"Swap Books | Don Quixote | Ulysses",
"Done"
])
