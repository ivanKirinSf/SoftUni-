function arenaTier(data){

    let gladiatorsPool = new Map();

    let index = 0;

    let command = data[index];

    index++;

    while(command !== "Ave Cesar"){

        let action = command.split(" -> ");
        if(action.length === 3){
            let [name, technique, skill] = action;
            if(!gladiatorsPool.has(name)){
                gladiatorsPool.set(name, new Map())
            }

            if(!gladiatorsPool.get(name).has(technique) || 
               gladiatorsPool.get(name).has(technique) &&
               gladiatorsPool.get(name).get(technique)< skill){
                gladiatorsPoll.get(name).set(technique, Number(skill));

               }

        }else{
            action = command.split(" vs ");

        }

        command = data[index];
        index ++;

    }

    let gladiatorsPoints = new Map();

    for( let [gladiatorsName, technique] of Array.from(gladiatorsPool)){
        let sum = 0;
        for(let [tech, skill] of Array.from(technique)){
            sum += skill;
        }

        gladiatorsPoints.set(gladiatorsName, sum);
    }

    let sortGladiatorsByPoints = Array.from(gladiatorName).sort((a,b) => {
        return b[1] - a[1] || a[0].localeCompare(b[0])
    })
    for(let [name, point] of sortGladiatorsByPoints){

        console.log(`${name}: ${point} skill`)

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
