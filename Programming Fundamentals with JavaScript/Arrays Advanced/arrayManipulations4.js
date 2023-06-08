function arrayManipulations (input){

   
    let arr = input.splice(0, 1).map(Number);
    //let arrNew = arr.join(" ");
    let parameters = arr;
    
    

    for(let i = 0; i<input.length; i++){

        let temp = input[i];
        let commands = temp.split(" ");
        let command = commands[0];
        let num = commands.slice(1).map(Number);
        arr = commandExecute(command, num, arr);      
        

    }

    console.log(arr) 

   }

arrayManipulations (['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3'])
