function ladyBug(input){

    let field = [];
    let size = Number(input[0]);
    for(let f = 0; f< size.length; f++){
        field[f] = 0;
    }

    let bugs = input[1].split(" ");
    for(let b = 0; b<bugs.length; b++){
        let bugsIndex = bugs[b];
        if( field[bugsIndex] !== undefined){
            field[bugsIndex] = 0;
        }
    }

    for(let i = 2; i<input.length; i++){
        let commands = input[i].split(" ");
        let start = Number(commands[0]);
        let direction = commands[1];
        let end = Number(commands[0]);
    }

    if( bugsIndex >= field.length; bugsIndex < 0; field[bugsIndex] = 0; ){
        continue;
    }

}

ladyBug([ 5, '3',
'3 left 2',
'1 left -2']
)
