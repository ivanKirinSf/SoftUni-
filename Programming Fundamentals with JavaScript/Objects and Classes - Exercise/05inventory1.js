function inventory(input){

    let res = [];

    for (let line of input){
        let [name, level, items] = line.split(" / ");
        let heroes = {
            name: name,
            level: Number(level),
            item: items
        }
        res.push(heroes)
        //console.log(heroes)

        
    }

    res.sort((heroesA, heroesB) => heroesA.level - heroesB.level);
    //console.log(res)

    for(let heroes of res){
        console.log(`Hero: ${heroes.name}`);
        console.log(`level => ${heroes.level}`);
        console.log(`items => ${heroes.item}`);
    }

}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    
    
    )
