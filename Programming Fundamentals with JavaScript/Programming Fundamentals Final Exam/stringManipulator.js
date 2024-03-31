function stringManipulator(input) {

    let str = input.shift();

    let arr = str.split("");

    //console.log(str)



    for (let i = 0; i < input.length; i++) {
        let commands = input[i].split(" ");

        let command = commands.shift()

        if (command === "Translate") {

            let char = commands.shift();

            let replacement = commands.shift();

            let index = arr.indexOf(char);

            while (index !== -1) {

                arr.splice(index, 1, replacement);

                index = arr.indexOf(char);

                

            }

            str = arr.join("");

                console.log(str)

            //arr.splice(index, 1, replacement)

            //console.log(arr)

        } else if (command === "Includes") {

            let substring = commands.shift();

            let num = substring.length;

            let text1 = "";

            let match = false

            for (let a = 0; a < arr.length; a++) {

                let temp = arr.slice(a, (a + num));

                text1 = temp.join("");

                if (text1 === substring) {
                    match = true;
                    break;

                    //console.log("True")
                } else {

                    match = false

                }

                //console.log(text1)



            }

            if (match === false) {

                console.log("False")
            } else if (match === true) {

                console.log("True")
            }

            //console.log(num)
        } else if (command === "Start") {

            let substring = commands.shift();

            let length = substring.length;

            let start = arr.slice(0, length).join("");

            if (substring === start) {
                console.log("True")
            } else if (substring !== start) {
                console.log("False")
            }

        }else if(command === "Lowercase"){

            str = arr.join("").toLowerCase();

            console.log(str)

            arr = str.split("")

            //console.log(arr)

        }else if(command === "FindIndex"){

            let char = commands.shift();

            let str = arr;    
            
            let finalIndex = 0;

            for(let c = 0; c<str.length; c++){
                let temp = str[c];

                if(char === temp){
                    finalIndex = c
                }

                //console.log(temp)
            }

            if(finalIndex > 0){

                console.log(finalIndex);
            }
            //console.log(finalIndex)

            // sssssss
            
        }else if(command === "Remove"){

            let startIndex = Number(commands.shift());

            let count = Number(commands.shift());

            //let num = startIndex+count

            let spliced = arr.splice(startIndex, count)

            //arr = str2.split("")

            str = arr.join('')

            

            console.log(str)

        }else if(command === "End"){

            //str = arr.join("");

            //console.log(str)
            break;
        }

        //console.log(commands)
    }

    

    //console.log(commands)

}

stringManipulator([
"*S0ftUni is the B3St Plac3**",
"Translate 2 o",
"Includes best",
"Start the",
"Lowercase",
"FindIndex p",
"Remove 2 7",
"End"
])
