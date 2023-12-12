function worldDeveloping(input){

    let str = "";
    //let arr = [];

    for(let i = 0; i<input.length; i++){
        let temp = input[i].split(" ");
        let command = temp.shift();
        //console.log(command)

        switch(command){

            case "Add": {
                let substring = temp.shift();
                //arr.push(substring)
                //str = arr.join(" ")
                str += substring;
            } break;
            case "Upgrade": {
                let char = temp.shift();
                let code = Number(char.charCodeAt(0));
                let replaceChar = String.fromCharCode(code+1)
                //console.log(replaceChar)
                while(str.includes(char)){

                    str = str.replace(char, replaceChar);
                }

            } break;
            case "Print": {
                console.log(str)
            } break;
            case "Index": {
                let char = temp.shift();
                let indexes = "";

                if(str.includes(char)){

                    for(let i = 0; i <str.length; i++){
                        let temp = str[i];
                        if(char === temp){
                            indexes += i+" ";
                        }
                    }
                }else {
                    console.log("None")
                }
                
                //while(str.includes(char)){

                    //let index = str.indexOf(char);
                    //let indexArr = [];
                    //indexes += index + " ";
                    

                //}
                console.log(indexes)

            } break;
            case "Remove": {
                let substring = temp.shift();
                //console.log(substring)
                while(str.includes(substring)){
                    str = str.replace(substring, "")
                }

            }

        }

        if(command === "End"){
            break;
        }
        
    }

    //console.log(str)

}

worldDeveloping(["Add HelloWorld",
"Upgrade e ",
"Print",
"Index b",
"Remove rl",
"Print",
"End"
])
