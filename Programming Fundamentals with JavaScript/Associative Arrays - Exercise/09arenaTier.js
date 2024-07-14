function arenaTier(input){

let gladiatorsPool = new Map();

let index = 0;

let command = input[index];

index ++;

while(command !== "Ave Cesar"){
    action = command.split(" -> ");
    let name = action.shift();
    let technique = action.shift();
    let skill = action.shift();

    if(action.length === 3){
        if(!gladiatorsPool.has(name)){
            gladiatorsPool.set(name, new Map)
        }
    }else {
        action = command.split(" vs "){
            let nameA = action.shift();
            let nameB = action.shift();
        }
    }    

    command = input[index];
    index++;
}

}

arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
    ])
