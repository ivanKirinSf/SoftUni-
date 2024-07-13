function arenaTier(input){

let gladiatorsPool = new Map();

let index = 0;
let command = input[index];
while(command !== "Ave Cesar"){

    let [name, technique, skill] = command.split(" -> ");

    //console.log(name)

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
