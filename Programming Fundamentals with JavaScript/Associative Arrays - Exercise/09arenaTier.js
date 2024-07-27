function arenaTier(input){

let gladiatorsPool = new Map();

let index = 0;

let command = input[index];

index++

while(command !== "Ave Cesar"){

    let action = command.split(" -> "){

        if(action.length === 3){

            let [name, technique, skill] = action;

            if(!gladiatorsPool.has(name)){
                gladiatorsPool.set(name, new Map())
            }

            if(!gladiatorsPool.get(name).has(technique) ||
                gladiatorsPool.get(name).has(technique) && 
                gladiatorsPool.get(name).get(technique)){
                    gladiatorsPool.get(name).set(technique, Number(skill))
                }
        }
    }else{

        action = command.split(" vs ")
    }


    command = input[index]
    index++
}

console.table(gladiatorsPool)

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
