
function arrayManipulations(input){




let arr = input[0].split(" ").map(Number);
let commands = input.slice(1);

for(let i = 0; i < commands.length; i++){
    let tokens = commands[i].split(" ");
    let command = tokens[0];
    let parameters = tokens.slice(1).map(Number);
    arr = commandExecute(command, parameters, arr)
}

return arr.join(" ")

function commandExecute (command, parameters, arr){
    if(command === "Add"){
        arr.push(parameters[0]);
        return arr;
    }else if(command === "Remove"){
        arr = arr.filter(x => x !== parameters[0]);
        return arr;
    }else if(command === "RemoveAt"){
        arr.splice(parameters[0], parameters.length);
        return arr;
    }else if(command === "Insert"){
        let num = parameters[0];
        let index = parameters[1];
        arr.splice(index, 0, num)
        return arr;
    }
}

}

arrayManipulations(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3'])
